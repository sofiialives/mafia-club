import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-yellow-300 text-4xl font-bold">Hello World</h1>
      </div>
    </MaxWidthWrapper>
  );
}
