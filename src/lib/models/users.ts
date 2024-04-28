import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false }
);

export const User =
  mongoose.models?.User || mongoose.model("User", usersSchema);
