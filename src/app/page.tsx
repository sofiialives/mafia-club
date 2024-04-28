import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Logo from "@/components/Logo/Logo";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import DayCard from "@/components/DayCard/DayCard";

const daysCards = [
  {
    id: "day1",
    img: "/images/day1.png",
    day: "Среда",
    desc: "Mafia game in English",
  },
  {
    id: "day2",
    img: "/images/day2.png",
    day: "Пятница",
    desc: "Мафия на русском",
  },
  {
    id: "day3",
    img: "/images/day3.png",
    day: "Суббота",
    desc: "Мафия на русском",
  },
];

export default function Home() {
  return (
    <>
      <section className="flex justify-center py-8 bg-[#202020]  border-b-2 border-gradient">
        <HomeSlider />
      </section>
      <MaxWidthWrapper>
        <section className="flex flex-row flex-wrap justify-center gap-[40px] mt-7 pb-[68px] ">
          <h1
            className="flex gap-4 items-center text-[32px] text-[#FDD901]"
            id="about"
          >
            О Клубе <Logo className=" w-12 h-12 " />
          </h1>
          <div className="flex flex-column flex-wrap gap-8">
            <p className="leading-7  text-[22px]">
              В мире офлайн-развлечений Будапешт известен своими уютными кафе,
              винными барами и неповторимой атмосферой, передающеей внимание как
              местных жителей, так и туристов. Среди узких улочек, запутанные
              переулки и исторические здания, есть одно место ставший настоящим
              культовым центром для фанатов одной конкретной игры - Мафия. Это
              Клуб{"  "}
              <span className="mx-2">
                <Logo className=" inline-block w-7 h-7" />
              </span>
            </p>
            <p className="leading-7 text-[22px]">
              Клуб
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              начал свою историю как простое место встречи друзей, которые
              хотели поиграть в Мафию после работы или на выходных. Расположен в
              историческом районе города, клуб был небольшой, но уютный.
            </p>
            <p className="leading-7 text-[22px]">
              Со временем популярность Клуба
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              начала быстро расти. Люди приежали со всех уголков Будапешта,
              чтобы стать частью этой уникальной атмосферы и сыграйте пару игр в
              Мафию. После нескольких месяцев непрерывного роста клуб приобрел
              постоянных игроков, ставших своеобразной «семьей» для этого
              уютного комьюнити.
            </p>
            <p className="leading-7 text-[22px]">
              Клуб
              <span className="mx-2">
                <Logo className=" inline-block w-7 h7" />
              </span>
              не просто предлагал игру «Мафия» — он создавал реальные истории.
              Здесь завязывались дружеские отношения,л юди возвращаються сюда
              снова и снова, потому что они чувствовуют, что здесь они
              настоящие, что здесь они могут быть сами себя.
            </p>
            <p className="leading-7 text-[22px]">
              Со временем, Клуб
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              стал не только местом для игры в Мафию, но и местом проведения
              различные мероприятия. От тематических вечеринок до турниров по
              мафии, открытых для все желающие. Сюда приезжают, чтобы окунуться
              в интригующую интелектуальную игру, встретиться с друзьями и
              отдохнуть после тяжелого дня работа.
            </p>
            <p className="leading-7 text-[22px]">
              Сегодня, Клуб
              <span className="mx-2">
                <Logo className="inline-block w-7 h7" />
              </span>
              продолжает радовать своих посетителей своим уютом, атмосферой, и
              возможностью погрузиться в увлекательный мир мафии. Для многих это
              не просто игра, а комьюнити, где можно забыться на несколько часов
              и погрузитесь в атмосферу непредсказуемих интриг и захватывающихъ
              историй.
            </p>
          </div>
        </section>
      </MaxWidthWrapper>
      <section className="bg-[#202020] border-t-2  border-gradient">
        <MaxWidthWrapper className="flex flex-wrap  gap-[48px]  pt-[44px] pb-[68px] justify-center">
          <h2 className="text-[32px]  text-[#FDD901] font-normal leading-10">
            График игр
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
