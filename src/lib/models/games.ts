import mongoose, { Schema } from "mongoose";

const gamesSchema = new Schema(
  {
    isTournament: {
      type: Boolean,
      default: false,
    },
    comments: {
      type: Array,
    },
    date: {
      type: Date,
      required: true,
    },
    firstKilled: {
      type: Number,
      required: true,
    },
    bestMove: {
      type: Array,
      required: true,
    },
    gameNum: {
      type: Number,
      required: true,
    },
    tableNum: {
      type: Number,
      required: true,
    },
    players: {
      type: Array,
      required: true,
    },
    winnerTeam: {
      type: String,
    },
    judge: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export const Game =
  mongoose.models?.Game || mongoose.model("Game", gamesSchema);
