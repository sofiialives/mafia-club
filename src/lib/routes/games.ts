export const postGame = async (gameData: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getGame = async ({
  date,
  tableNum,
  gameNum,
}: {
  date: Date;
  tableNum: number;
  gameNum: number;
}) => {
  try {
    const res = await fetch(
      `https://mafia-16vh1s0sb-sofiialives-projects.vercel.app/api/games?date=${date}&tableNum=${tableNum}&gameNum=${gameNum}`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const games = await res.json();
    return games[0];
  } catch (err) {
    console.log(err);
  }
};
