import { dbConnect } from "../db/connect";
import { User } from "../models/users";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const handleLogout = async () => {
  await signOut();
};

export const register = async (
  previousState: any,
  formData: Iterable<readonly [PropertyKey, any]>
) => {
  const { name, email, password, repeatPassword } =
    Object.fromEntries(formData);

  if (password != repeatPassword) {
    return { error: "Passwords do not match" };
  }

  try {
    dbConnect();
    const user = await User.findOne({ email });
    if (user) return { error: "Email is already in use" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const login = async (
  previousState: any,
  formData: Iterable<readonly [PropertyKey, any]>
) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    dbConnect();
    const user = await User.findOne({ email });
    if (!user) return { error: "User does not exist" };

    await signIn("credentials", { email, password });
  } catch (error) {
    if (error instanceof Error && error.message.includes("CredentialsSignin")) {
      return { error: "Invalid email or password" };
    }
    throw error;
  }
};
