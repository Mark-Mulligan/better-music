import Head from 'next/head';
import { Fragment, useState, useEffect, useCallback } from 'react';
import ArtistCard from '../components/ArtistCard';
import CustomInput from '../components/ui/CustomInput';
import Select from '../components/ui/Select';
import { getArtistInfoForHome } from '../data';
import { sortArtistAlphabetically, filterArtistList, filterByGenres, genreSelectOptions } from '../util/utils';
import styles from './Home.module.css';

export default function Home({ artistList }) {
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
        <meta name="description" content="A great source for finding amazing selection of music." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.heroSection}>
          <h1>Better Music</h1>
        </section>

        <section className={styles.artistSection}>
          <h2>Artists</h2>

          <div className={styles.searchContainer}>
            <div className="relative">
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
                  Artist A-Z
                </button>
                <button
                  onClick={handleArtistOrderClick}
                  className={`btn ${styles.rightBtn} right-btn ${artistNameOrder === 'asc' && 'btn-outline'}`}
                >
                  Artist Z-A
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
                  <ArtistCard
                    name={artist.name}
                    id={artist.id}
                    genre={artist.genre}
                    src={artist.profileSrc}
                    alt={artist.profileAlt}
                  />
                </li>
              );
            })}
          </ul>
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
