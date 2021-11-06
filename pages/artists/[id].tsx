/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import styles from '../../styles/Id.module.scss';
import { getArtistInfo, getArtistPathParams } from '../../data';
import { GetStaticProps } from 'next';

interface ArtistPageProps {
  id: string;
  name: string;
  youTubeId: string;
  bio: string[];
  backgroundSrc: string;
  backgroundAlt: string;
  appleMusic: string;
  spotify: string;
  youtube: string;
  instagram: string;
}

const ArtistPage = (props: ArtistPageProps) => {
  const { id, name, youTubeId, bio, backgroundSrc, backgroundAlt, appleMusic, spotify, youtube, instagram } = props;

  if (!bio) {
    return <div>Not found</div>;
  }

  return (
    <>
      <Head>
        <title>Better Music - {name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`${name} bio and music links`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`fade-in ${styles.page}`}>
        <Image
          className={styles.backgroundImage}
          blurDataURL={backgroundSrc}
          placeholder="blur"
          priority={true}
          src={backgroundSrc}
          alt={backgroundAlt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Link href={`/#${id}`}>
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
                <a href={appleMusic} target="_blank" rel="noreferrer">
                  <Image src="/icons/appleMusic.svg" alt="apple music link" height={75} width={75} />
                </a>
              </li>
              <li>
                <a href={spotify} target="_blank" rel="noreferrer">
                  <Image src="/icons/spotify.svg" alt="spotify link" height={60} width={60} />
                </a>
              </li>
              <li>
                <a href={youtube} target="_blank" rel="noreferrer">
                  <Image src="/icons/youtube.svg" alt="youtube link" height={70} width={75} />
                </a>
              </li>
              <li>
                <a href={instagram} target="_blank" rel="noreferrer">
                  <Image src="/icons/instagram.svg" alt="instagram logo" height={58} width={58} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let artist, artistData;

  if (context.params) {
    artist = context.params.id;

    if (artist && !Array.isArray(artist)) {
      artistData = getArtistInfo(artist);
    }
  }

  if (!artistData) {
    return {
      notFound: true,
    };
  }

  const { id, name, youTubeId, bio, backgroundSrc, backgroundAlt, appleMusic, spotify, youtube, instagram } =
    artistData;

  return {
    props: {
      id,
      name,
      youTubeId,
      bio,
      backgroundSrc,
      backgroundAlt,
      appleMusic,
      spotify,
      youtube,
      instagram,
    },
    revalidate: 60000,
  };
};

export async function getStaticPaths() {
  const paths = getArtistPathParams();

  return {
    paths: paths,
    fallback: false,
  };
}

export default ArtistPage;
