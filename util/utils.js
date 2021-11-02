export const genreSelectOptions = [
  {
    value: 'jazz',
    label: 'Jazz',
  },
  { value: 'r&b/soul', label: 'R&B/Soul' },
  { value: 'pop', label: 'Pop' },
];

export const sortArtistAlphabetically = (inputArr, order) => {
  // sort does not return a new array.  There were problems updating the state because the inputArr was being assigned.
  // I need to make a copy of the input array (slice) to get it the work properly
  if (order === 'asc') {
    return inputArr.slice(0).sort((a, b) => a.name - b.name);
  }

  return inputArr
    .slice(0)
    .sort((a, b) => a.name - b.name)
    .reverse();
};

export const filterArtistList = (artistList, searchVal) => {
  let search = searchVal.toLowerCase();
  let result = [];

  if (!searchVal) {
    return artistList;
  }

  artistList.forEach((artist) => {
    let artistName = artist.name.toLowerCase();
    let artistGenre = artist.genre.toLowerCase();

    if (artistName.includes(search) || artistGenre.includes(search)) {
      result.push(artist);
    }
  });

  return result;
};

export const filterByGenres = (artistList, genreArr) => {
  let result = [];

  if (genreArr.length === 0) {
    return artistList;
  }

  artistList.forEach((artist) => {
    for (let i = 0; i < artist.genreIds.length; i++) {
      if (genreArr.includes(artist.genreIds[i])) {
        result.push(artist);
        break;
      }
    }
  });

  return result;
};
