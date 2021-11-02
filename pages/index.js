import Head from 'next/head';
import { Fragment, useState, useEffect, useCallback } from 'react';
import ArtistCard from '../components/ArtistCard';
import CustomInput from '../components/ui/CustomInput';
import Select from '../components/ui/Select';
import { getArtistInfoForHome } from '../data';
import { sortArtistAlphabetically, filterArtistList } from '../util/utils';
import styles from './Home.module.css';

const selectOptions = [
  {
    value: 'jazz',
    label: 'Jazz',
  },
  { value: 'r&b/soul', label: 'R&B/Soul' },
  { value: 'pop', label: 'Pop' },
];

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
    if (!searchInput) {
      const sortedResult = sortArtistAlphabetically(artistList, artistNameOrder);
      setFilteredArtists(sortedResult);
      return;
    }

    const filteredResult = filterArtistList(artistList, searchInput);
    const sortedResult = sortArtistAlphabetically(filteredResult, artistNameOrder);
    setFilteredArtists(sortedResult);
  }, [searchInput, artistList, artistNameOrder]);

  useEffect(() => {
    filterAndSortArtists();
  }, [searchInput, artistList, filterAndSortArtists, artistNameOrder]);

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
              <Select options={selectOptions} selectedOptions={genreList} setSelectOptions={setGenreList} />
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
