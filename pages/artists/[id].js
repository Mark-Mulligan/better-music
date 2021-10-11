/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import styles from './id.module.css';

const ArtistPage = () => {
  const router = useRouter();
  const id = router.query.id;

  console.log(id);

  return (
    <main className={styles.page}>
      <Image
        className={styles.backgroundImage}
        src="/jordan-rakei-background.jpg"
        alt="Picture of Jordan Rakei"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Jordan Rakei</h1>
          <p>
            A soul-rooted alternative R&B artist who sings, writes, and produces, London-based Jordan Rakei debuted in
            2013 with the EP Franklin's Room before issuing a slew of albums for Ninja Tune, including 2021's deeply
            personal What We Call Life.
          </p>
          <p>
            Born in Tokoroa, New Zealand and raised in Australia, Jordan Rakei grew up playing piano and guitar,
            eventually debuting in 2013 with the self-released EP Franklin's Room. A mix of reggae and classic soul
            ballads, Rakei followed the release a year later with the more R&B-focused -- and D'Angelo inspired --
            five-track Groove Curse EP. A move to London in 2015 saw him working with a host of artists, appearing on
            recordings by FKJ ("Learn to Fly"), Alfa Mist ("Hopeful") and most prominently, a contribution to
            Disclosure's Caracal ("Masterpiece"). Rakei released his debut album, Cloak, in 2016 on his own imprint,
            4101 Records, before inking a deal with Ninja Tune a year later. His sophomore album, Wallflower, his first
            for the label, appeared in 2017 and saw him taking a more eclectic approach to his own brand of alternative
            R&B. Rakei continued to collaborate, including with Loyle Carner and Nightmares on Wax, before issuing his
            third album, 2019's Origin. Following its release, he headed out on tour with dates in Europe, Australia,
            and the U.S. In 2021, Rakei put together a selection of tracks for the long-running compilation series Late
            Night Tales, while also supplying two covers -- Radiohead's "Codex" and Jeff Buckley's "Lover, You Should've
            Come Over" -- for the release. Rakei was also working on his fourth studio album, What We Call Life. The
            deeply personal release --which saw him using his own life as lyrical inspiration -- was issued in late
            2021, preceded by the track "Family."
          </p>
          <div className={styles.videoWrapper}>
            <YoutubeEmbed embedId={'JtBmUxz4GsM'} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtistPage;
