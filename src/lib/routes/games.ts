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
  gameNum,
  tableNum,
  page,
}: {
  date?: Date;
  gameNum?: number;
  tableNum?: number;
  page?: number;
} = {}) => {
  try {
    let url = `http://localhost:3000/api/games?page=${page}`;

    if (date || gameNum || tableNum) {
      url += `&`;
      if (date) url += `date=${date}&`;
      if (gameNum) url += `gameNum=${gameNum}&`;
      if (tableNum) url += `tableNum=${tableNum}&`;
    }
    console.log(date);
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const games = await res.json();
    return games;
  } catch (err) {
    console.log(err);
  }
};

export const getGameById = async ({ _id }: { _id?: string }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/games/${_id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
