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
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get("date"); 
    const tableNum = searchParams.get("tableNum");
    const gameNum = searchParams.get("gameNum");
    const page = searchParams.get("page");
    const limit = 10;

    const filter: Record<string, any> = {};
    if (date) filter.date = date;
    if (tableNum) filter.tableNum = tableNum;
    if (gameNum) filter.gameNum = gameNum;

    const skip = (Number(page) - 1) * limit;

    const games = await Game.find(filter, null, { skip, limit });
    return NextResponse.json(games);
  } catch (error) {
    throw new Error("Failed to fetch the game");
  }
}
