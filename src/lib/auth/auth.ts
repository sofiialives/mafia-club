import { dbConnect } from "../db/connect";
import { User } from "../models/users";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authConfig from "./auth.config";

const login = async (credentials: { email: string; password: string }) => {
  try {
    dbConnect();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("Email doesn't exist!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
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
      async authorize(credentials: { email: string; password: string }) {
        try {
          const user = await login(credentials);
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
