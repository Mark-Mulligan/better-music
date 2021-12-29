import { ArtistInfo } from '../data';

export interface SelectOption {
  value: string;
  label: string;
}

export const genreSelectOptions: SelectOption[] = [
  {
    value: 'jazz',
    label: 'Jazz',
  },
  { value: 'r&b/soul', label: 'R&B/Soul' },
  { value: 'pop', label: 'Pop' },
  { value: 'rock', label: 'Rock' },
  { value: 'dance/electronic', label: 'Dance/Electronic' },
  { value: 'hip-hop', label: 'Hip Hop' },
];

export const sortArtistAlphabetically = (artistList: Partial<ArtistInfo>[], order: 'asc' | 'desc') => {
  // sort does not return a new array.  There were problems updating the state because the inputArr was being assigned.
  // I need to make a copy of the input array (slice) to get it the work properly
  if (order === 'asc') {
    return artistList.slice(0).sort((a, b) => {
      if (a.name && b.name && a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name && b.name && a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
  }

  return artistList
    .slice(0)
    .sort((a, b) => {
      if (a.name && b.name && a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name && b.name && a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    })
    .reverse();
};

export const filterArtistList = (artistList: Partial<ArtistInfo>[], searchVal: string) => {
  let search = searchVal.toLowerCase();
  let result: Partial<ArtistInfo>[] = [];

  if (!searchVal) {
    return artistList;
  }

  artistList.forEach((artist) => {
    let artistName = artist.name ? artist.name.toLowerCase() : '';
    let artistGenre = artist.genre ? artist.genre.toLowerCase() : '';

    if (artistName.includes(search) || artistGenre.includes(search)) {
      result.push(artist);
    }
  });

  return result;
};

export const filterByGenres = (artistList: Partial<ArtistInfo>[], genreArr: string[]) => {
  let result: Partial<ArtistInfo>[] = [];

  if (genreArr.length === 0) {
    return artistList;
  }

  artistList.forEach((artist) => {
    if (!artist.genreIds) {
      return;
    }

    for (let i = 0; i < artist.genreIds.length; i++) {
      if (genreArr.includes(artist.genreIds[i])) {
        result.push(artist);
        break;
      }
    }
  });

  return result;
};
