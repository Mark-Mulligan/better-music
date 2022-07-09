import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import React, { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import ArtistCard from '../components/ArtistCard';
import CustomInput from '../components/ui/CustomInput';
import Select from '../components/ui/Select';
import FadeIn from '../components/ui/FadeIn';
import { getArtistInfoForHome } from '../data';
import { sortArtistAlphabetically, filterArtistList, filterByGenres, genreSelectOptions } from '../util/util';
import { useRouter } from 'next/dist/client/router';
import { ArtistInfo } from '../data';
import { SelectOption } from '../util/util';

interface HomePageProps {
  artistList: Partial<ArtistInfo>[];
}

type NameOrder = 'asc' | 'desc';

const Home: NextPage<HomePageProps> = ({ artistList }) => {
  const router = useRouter();
  const [filteredArtists, setFilteredArtists] = useState(artistList);
  const [searchInput, setSearchInput] = useState('');
  const [artistNameOrder, setArtistNameOrder] = useState('asc' as NameOrder);
  const [genreList, setGenreList] = useState([] as Array<SelectOption>);
  const [fadeOnLoad, setFadeOnLoad] = useState(router.asPath.includes('#'));

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      setSearchInput(e.target.value);
      return;
    }

    setSearchInput('');
  };

  const handleArtistOrderClick = () => {
    if (artistNameOrder === 'asc') setArtistNameOrder('desc');
    else setArtistNameOrder('asc');
  };

  const filterAndSortArtists = useCallback(() => {
    const genreArr = genreList.map((genre) => genre.value);
    const filteredResult = filterByGenres(artistList, genreArr);
    const sortedResult = sortArtistAlphabetically(filteredResult, artistNameOrder);
    const finalResult = filterArtistList(sortedResult, searchInput);
    setFilteredArtists(finalResult);
  }, [searchInput, artistList, artistNameOrder, genreList]);

  useEffect(() => {
    filterAndSortArtists();
    setFadeOnLoad(false);
  }, [searchInput, artistList, filterAndSortArtists, artistNameOrder]);

  return (
    <Fragment>
      <Head>
        <title>Better Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A great source for finding amazing selection of music." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="fade-in">
        <section className={styles.heroSection}>
          <div className={styles.titleContainer}>
            <div>
              <h1>Better</h1>
              <h1>Music</h1>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <Image
              className={styles.heroImage}
              src="/images/hero-background-two.webp"
              alt="Beats headphones"
              priority={true}
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
            />
          </div>
        </section>

        <section className={styles.aboutSection}>
          <h2>About</h2>
          <p>
            In today&#39;s world, we have access to more music than ever before. Even so, it can be hard to find new and
            interesting music. The goal of this website is to give you a selection artists to help you on your quest for
            <span className="highlighted"> better music.</span>
          </p>
        </section>

        <section className={styles.artistSection}>
          <h2 id="artists">Artists</h2>

          <div className={styles.searchContainer}>
            <div className={styles.inputCol}>
              <div className={styles.customInputWrapper}>
                <CustomInput
                  id="artistSearch"
                  name="artistSearch"
                  label="Search Artists"
                  value={searchInput}
                  onSearchChange={onSearchChange}
                />
              </div>
            </div>

            <div className="relative">
              <div className={styles.artistOrderContainer}>
                <button
                  onClick={handleArtistOrderClick}
                  className={`btn ${styles.leftBtn} ${artistNameOrder === 'desc' && 'btn-outline'}`}
                >
                  A-Z
                </button>
                <button
                  onClick={handleArtistOrderClick}
                  className={`btn ${styles.rightBtn} right-btn ${artistNameOrder === 'asc' && 'btn-outline'}`}
                >
                  Z-A
                </button>
              </div>
            </div>
            <div>
              <Select options={genreSelectOptions} selectedOptions={genreList} setSelectOptions={setGenreList} />
            </div>
          </div>

          <ul className={styles.artistCardsContainer}>
            {filteredArtists.map((artist, index) => {
              return (
                <li key={`artist-${index}`}>
                  <FadeIn fadeOnLoad={fadeOnLoad}>
                    <ArtistCard
                      name={artist.name || ''}
                      id={artist.id || ''}
                      genre={artist.genre || ''}
                      src={artist.profileSrc || ''}
                      alt={artist.profileAlt || ''}
                    />
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </section>

        <footer className={styles.footer}>
          <div className={styles.creditContainer}>
            <p>
              Website created by{' '}
              <a href="https://markmulligan.dev" target="_black" rel="noreferrer">
                Mark Mulligan
              </a>
            </p>
          </div>
        </footer>
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const artistList = getArtistInfoForHome();

  if (!artistList) {
    return {
      notFound: true,
    };
  }

  return {
    props: { artistList },
    revalidate: 60000,
  };
}

// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing <code className={styles.code}>pages/index.tsx</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   );
// };

// export default Home;
