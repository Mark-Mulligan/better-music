/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import styles from './id.module.css';
import { getArtistInfo, getArtistPathParams } from '../../data';

const ArtistPage = (props) => {
  const { name, youTubeId, bio, backgroundSrc, backgroundAlt } = props;

  if (!bio) {
    return <div>Not found</div>;
  }

  return (
    <main className={styles.page}>
      <Image
        className={styles.backgroundImage}
        src={backgroundSrc}
        alt={backgroundAlt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.backArrow}>
              <Image src="/icons/white-left-arrow.svg" alt="Back to home page" height={38} width={38} />
            </a>
          </Link>

          <h1>{name}</h1>

          {bio.map((paragraph, index) => (
            <p key={`p-${index}`}>{paragraph}</p>
          ))}

          <div className={styles.videoWrapper}>
            <YoutubeEmbed embedId={youTubeId} />
          </div>
          <ul className={styles.linksContainer}>
            <li>
              <a href="https://www.apple.com/apple-music/" target="_blank" rel="noreferrer">
                <Image src="/icons/appleMusic.svg" alt="apple music link" height={75} width={75} />
              </a>
            </li>

            <li>
              <a href="https://www.spotify.com/us/" target="_blank" rel="noreferrer">
                <Image src="/icons/spotify.svg" alt="spotify link" height={60} width={60} />
              </a>
            </li>

            <li>
              <a href="https://play.google.com/store?hl=en_US&gl=US" target="_blank" rel="noreferrer">
                <Image src="/icons/googlePlay.svg" alt="google play link" height={60} width={60} />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <Image src="/icons/youtube.svg" alt="youtube link" height={70} width={75} />
              </a>
            </li>

            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Image src="/icons/instagram.svg" alt="instagram logo" height={58} width={58} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps(context) {
  const artist = context.params.id;
  const artistData = getArtistInfo(artist);

  if (!artistData) {
    return {
      notFound: true,
    };
  }

  const { name, youTubeId, bio, backgroundSrc, backgroundAlt } = artistData;

  return {
    props: {
      name,
      youTubeId,
      bio,
      backgroundSrc,
      backgroundAlt,
    },
    revalidate: 60000,
  };
}

export async function getStaticPaths() {
  const paths = getArtistPathParams();

  return {
    paths: paths,
    fallback: false,
  };
}

export default ArtistPage;
