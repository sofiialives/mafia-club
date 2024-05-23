export const postGame = async (gameData: any) => {
  try {
    const res = await fetch("/api/games", {
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
    console.error("Post Game Error:", err);
    throw err;
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
    let url = `/api/games?page=${page || 1}`;
    if (date) url += `&date=${date.toISOString()}`;
    if (gameNum) url += `&gameNum=${gameNum}`;
    if (tableNum) url += `&tableNum=${tableNum}`;

    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  } catch (err) {
    console.error("Get Game Error:", err);
    throw err;
  }
};

export const getGameById = async ({ _id }: { _id?: string }) => {
  try {
    const res = await fetch(`/api/games/${_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  } catch (err) {
    console.error("Get Game By ID Error:", err);
    throw err;
  }
};
