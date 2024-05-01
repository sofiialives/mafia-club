import { dbConnect } from "../db/connect";
import { User } from "../models/users";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authConfig from "./auth.config";

interface ILogin {
  email: string;
  password: string;}


const login = async ({email, password}: ILogin ) => {
  try {
    

    dbConnect();
    const user = await User.findOne({ email });
    if (!user) throw new Error("Email doesn't exist!");

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Wrong password!");

    return user;
  } catch (error) {
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const {email, password} = credentials as { email: string, password: string}
        try {
          const user = await login({  email,  password});
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
  },
  secret: "UleyQxeSDF1GWUU8+oA3pxeGFNgIaBZW5c0Kr4ekYRg=",
});
