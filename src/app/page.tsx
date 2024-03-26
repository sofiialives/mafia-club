import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import GameTable from "@/components/Table/GameTable";
import GameTableBody from "@/components/Table/GameTableBody";
import GameTableHeaders from "@/components/Table/GameTableHeaders";

export default function Home() {
  const body = [
    { num: 1, text: "Texte", space: "s" },
    { num: 1, text: "Texte", space: "s" },
    { num: 1, text: "Texte", space: "d" },
    { num: 1, text: "Texte", space: "av" },
    { num: 1, text: "Texte", space: "va" },
    { num: 1, text: "Texte", space: "a" },
  ];
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-yellow-300 text-4xl font-bold">Hello World</h1>
      </div>
      <GameTable
        headers={
          <>
            <tr>
              <GameTableHeaders colSpan={14} action>
                Игровые дейстия
              </GameTableHeaders>
            </tr>
            <tr>
              <GameTableHeaders colSpan={14} action active>
                Игрок
              </GameTableHeaders>
            </tr>
          </>
        }
      >
        {body.map((b, index) => (
          <tr key={index}>
            <GameTableBody action>{b.num}</GameTableBody>
            <GameTableBody>{b.text}</GameTableBody>
            <GameTableBody>{b.space}</GameTableBody>
            <GameTableBody>{b.space}</GameTableBody>
            <GameTableBody>{b.space}</GameTableBody>
            <GameTableBody>{b.space}</GameTableBody>
            <GameTableBody>{b.space}</GameTableBody>
            <GameTableBody>{b.space}</GameTableBody>
          </tr>
        ))}
      </GameTable>
    </MaxWidthWrapper>
  );
}
