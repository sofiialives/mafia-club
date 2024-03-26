import Button from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import GameTable from "@/components/Table/GameTable";
import GameTableBody from "@/components/Table/GameTableBody";
import GameTableHeaders from "@/components/Table/GameTableHeaders";

export default function Home() {
  const header = ["Игрок", "Роли", "Фольі", "Бальі", "Д.Б"];
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
        headers={header.map((h) => (
          <GameTableHeaders action key={h}>
            {h}
          </GameTableHeaders>
        ))}
      >
        {body.map((b, index) => (
          <tr key={index}>
            <GameTableBody>{b.num}</GameTableBody>
            <GameTableBody>{b.text}</GameTableBody>
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
