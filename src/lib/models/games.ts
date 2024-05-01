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
    },
    bestMove: {
      type: Array,
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
    },
    winnerTeam: {
      type: String,
    },
    judge: {
      type: String,
    },
    phases: {
      type: Array,
    },
  },
  { versionKey: false }
);

export const Game =
  mongoose.models?.Game || mongoose.model("Game", gamesSchema);
