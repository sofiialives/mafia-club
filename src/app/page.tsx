import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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
    </MaxWidthWrapper>
  );
}
