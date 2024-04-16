import { dbConnect } from "@/lib/db/connect";
import { Game } from "@/lib/models/games";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      isTournament,
      players,
      comments,
      bestMove,
      date,
      firstKilled,
      gameNum,
      judge,
      phases,
      protest,
      tableNum,
      winnerTeam,
    } = await request.json();
    dbConnect();
    const games = await Game.create({
      isTournament,
      players,
      comments,
      bestMove,
      date,
      firstKilled,
      gameNum,
      judge,
      phases,
      protest,
      tableNum,
      winnerTeam,
    });
    return NextResponse.json({ games }, { status: 201 });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch games");
  }
}

export async function GET(request: NextRequest) {
  try {
    dbConnect();
    const urlParams = request.nextUrl.searchParams;
    const date = urlParams.get("date");
    const tableNum = urlParams.get("tableNum");
    const gameNum = urlParams.get("gameNum");

    const games = await Game.find({ date, tableNum, gameNum });
    return NextResponse.json(games);
  } catch (error) {
    throw new Error("Failed to fetch the game");
  }
}
