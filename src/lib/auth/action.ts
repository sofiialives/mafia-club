"use server";
import { dbConnect } from "../db/connect";
import { User } from "../models/users";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

interface FormDataProps {
  name?: string;
  email: string;
  password: string;
  repeat_password?: string;
}

export const handleLogout = async () => {
  await signOut();
};

export const registerUser = async (formData: FormDataProps) => {
  const { name, email, password, repeat_password } = formData;

  if (password != repeat_password) {
    return { error: "Passwords do not match" };
  }

  try {
    await dbConnect();
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

    await signIn("credentials", { email, password });
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const loginUser = async (formData: FormDataProps) => {
  const { email, password } = formData;

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
