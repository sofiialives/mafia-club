import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import GameTable from "@/components/Table/GameTable";
import GameTableBody from "@/components/Table/GameTableBody";
import GameTableHeaders from "@/components/Table/GameTableHeaders";
import mask from "../../public/images/mask.png"
import Image from "next/image";
import Logo from "@/components/Header/Logo";

export default function Home() {
 
  return (
    <MaxWidthWrapper>
      <section>
        <Image src={mask} alt="Mask" />
      </section>
      <section>
        <h1>
          About club <Logo />
        </h1>
        <p>
          In the world of offline entertainment, Budapest is known for its cozy
          cafes, wine bars, and unique atmosphere that captures the attention of
          both locals and tourists. Among the narrow streets, tangled alleyways,
          and historical buildings, there is one place that has become a true
          cult center for fans of one specific game - Mafia. This is Club Club "
          began its history as a simple meeting place for friends who wanted to
          play a game of Mafia after work or on weekends. Located in the
          historic district of the city, the club was small but cozy, with an
          atmosphere reminiscent of an old European tavern. Over time, the
          popularity of Club began to grow rapidly. People came from all corners
          of Budapest to be a part of this unique atmosphere and play a couple
          of rounds of Mafia. After several months of continuous growth, the
          club gained regular visitors who became a kind of "family" for this
          cozy establishment. Club didn't just offer a game of Mafia - it
          created real stories. Friendships were formed here, deals were made,
          intrigues developed. People kept coming back here again and again
          because they felt that here they were real, that here they could be
          themselves. Over time, Club became not only a place to play Mafia, but
          also a venue for various events. From themed parties to Mafia
          tournaments open to all comers. People came here to immerse themselves
          in the unique atmosphere of the club, meet friends, and relax after a
          hard day's work. Today, Club continues to delight its visitors with
          its coziness, atmosphere, and the opportunity to immerse themselves in
          the captivating world of the Mafia. For many, this is not just a
          gaming establishment, but a real corner where they can forget
          themselves for a few hours and immerse themselves in the atmosphere of
          unpredictable intrigues and exciting stories.
        </p>
      </section>
      <section>
        <h2>Game schedule</h2>
      </section>
    </MaxWidthWrapper>
  );
}
