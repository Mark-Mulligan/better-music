import Head from 'next/head';
import { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import ArtistCard from '../components/ArtistCard';
import CustomInput from '../components/ui/CustomInput';
import Select from '../components/ui/Select';
import FadeIn from '../components/ui/FadeIn';
import { getArtistInfoForHome } from '../data';
import { sortArtistAlphabetically, filterArtistList, filterByGenres, genreSelectOptions } from '../util/utils';
import styles from './Home.module.css';
import { useRouter } from 'next/dist/client/router';

export default function Home({ artistList }) {
  const router = useRouter();
  const [filteredArtists, setFilteredArtists] = useState(artistList);
  const [searchInput, setSearchInput] = useState('');
  const [artistNameOrder, setArtistNameOrder] = useState('asc');
  const [genreList, setGenreList] = useState([]);

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
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
                  <FadeIn fadeOnLoad={router.asPath.includes('#')}>
                    <ArtistCard
                      name={artist.name}
                      id={artist.id}
                      genre={artist.genre}
                      src={artist.profileSrc}
                      alt={artist.profileAlt}
                    />
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.footer}>
          <div className={styles.creditContainer}>
            <p>
              Website create by{' '}
              <a href="https://www.mulligandesigns.com" target="_black" rel="noreferrer">
                mulligandesigns.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

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
