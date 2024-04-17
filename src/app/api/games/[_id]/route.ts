import { dbConnect } from "@/lib/db/connect";
import { Game } from "@/lib/models/games";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const { _id } = params;
  try {
    dbConnect();
    const games = await Game.findOne({ _id });
    return NextResponse.json(games);
  } catch (error) {
    throw new Error("Failed to fetch the game");
  }
}
