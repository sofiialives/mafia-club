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
