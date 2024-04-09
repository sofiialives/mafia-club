import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Logo from "@/components/Logo/Logo";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import DayCard from "@/components/DayCard/DayCard";

const daysCards = [
  {
    id: "day1",
    img: "/images/day1.png",
    day: "Wednesday",
    desc: "Mafia game in English",
  },
  {
    id: "day2",
    img: "/images/day2.png",
    day: "Friday",
    desc: "Mafia game in Russian",
  },
  {
    id: "day3",
    img: "/images/day3.png",
    day: "Sunday",
    desc: "Mafia game in Russian",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <HomeSlider />
      </section>
      <MaxWidthWrapper>
        <section className="flex flex-row flex-wrap justify-center gap-[40px] mt-7 pb-[68px] ">
          <h1 className="flex gap-4 items-center text-[32px] text-[#FDD901]">
            About club <Logo className=" w-12 h-12 " />
          </h1>
          <div className="flex flex-column flex-wrap gap-8">
            <p className="leading-7  text-[22px]">
              In the world of offline entertainment, Budapest is known for its
              cozy cafes, wine bars, and unique atmosphere that captures the
              attention of both locals and tourists. Among the narrow streets,
              tangled alleyways, and historical buildings, there is one place
              that has become a true cult center for fans of one specific game -
              Mafia. This is Club{"  "}
              <span className="mx-2">
                <Logo className=" inline-block w-7 h-7" />
              </span>
            </p>
            <p className="leading-7 text-[22px]">
              Club
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              began its history as a simple meeting place for friends who wanted
              to play a game of Mafia after work or on weekends. Located in the
              historic district of the city, the club was small but cozy, with
              an atmosphere reminiscent of an old European tavern.
            </p>
            <p className="leading-7 text-[22px]">
              Over time, the popularity of Club
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              began to grow rapidly. People came from all corners of Budapest to
              be a part of this unique atmosphere and play a couple of rounds of
              Mafia. After several months of continuous growth, the club gained
              regular visitors who became a kind of "family" for this cozy
              establishment.
            </p>
            <p id="about" className="leading-7 text-[22px]">
              Club
              <span className="mx-2">
                <Logo className=" inline-block w-7 h7" />
              </span>
              didn't just offer a game of Mafia - it created real stories.
              Friendships were formed here, deals were made, intrigues
              developed. People kept coming back here again and again because
              they felt that here they were real, that here they could be
              themselves.
            </p>
            <p className="leading-7 text-[22px]">
              Over time, Club
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              became not only a place to play Mafia, but also a venue for
              various events. From themed parties to Mafia tournaments open to
              all comers. People came here to immerse themselves in the unique
              atmosphere of the club, meet friends, and relax after a hard day's
              work.
            </p>
            <p className="leading-7 text-[22px]">
              Today, Club
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              continues to delight its visitors with its coziness, atmosphere,
              and the opportunity to immerse themselves in the captivating world
              of the Mafia. For many, this is not just a gaming establishment,
              but a real corner where they can forget themselves for a few hours
              and immerse themselves in the atmosphere of unpredictable
              intrigues and exciting stories.
            </p>
          </div>
        </section>
      </MaxWidthWrapper>
      <section className="bg-[#202020] border-t-2 border-b-2 border-gradient">
        <MaxWidthWrapper className="flex flex-wrap  gap-[48px]  pt-[44px] pb-[68px] justify-center">
          <h2 className="text-[32px]  text-[#FDD901] font-normal leading-10">
            Game schedule
          </h2>
          <ul className="flex gap-10 ">
            {daysCards.map((card) => (
              <DayCard key={card.id} card={card} />
            ))}
          </ul>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
