export const artistPageInfo = {
  'jordan-rakei': {
    id: 'jordan-rakei',
    name: 'Jordan Rakei',
    genre: 'R&B/Soul',
    profileSrc: '/images/jordan-rakei-profile.jpg',
    profileAlt: 'Jordan Rakei Profile Picture',
    backgroundSrc: '/images/jordan-rakei-background.jpg',
    backgroundAlt: 'Jordan Rakei on stage',
    youTubeId: 'JtBmUxz4GsM',
    bio: [
      `A soul-rooted alternative R&B artist who sings, writes, and produces, London-based Jordan Rakei 
      debuted in 2013 with the EP Franklin's Room before issuing a slew of albums for Ninja Tune, 
      including 2021's deeply personal What We Call Life.`,
      `Born in Tokoroa, New Zealand and raised in Australia, Jordan Rakei grew up playing piano and guitar,
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
      2021, preceded by the track "Family."`,
    ],
  },
  'tom-misch': {
    id: 'tom-misch',
    name: 'Tom Misch',
    genre: 'Pop',
    profileSrc: '/images/tom-misch-profile.jpg',
    profileAlt: 'Tom Misch Profile Picture',
    backgroundSrc: '/images/tom-misch-background.jpeg',
    backgroundAlt: 'Tom Misch on stage',
    youTubeId: 'IUMTaAQ43lY',
    bio: [
      `London-based producer/singer/songwriter Tom Misch blends hip-hop-inspired beats with smoothly soulful vocals and guitar.`,
      `The son of an artist and a psychiatrist, Misch grew up in a home that encouraged creativity, and learned to play violin at a 
      young age via the Suzuki method. While he was still a child, his family also discovered Misch could sing when he belted out Patrick Watson's 
      "Man Like You" one day after school. After listening to rock music for most of his childhood and teens, he discovered hip-hop during his sixth 
      form years thanks to one of his sister's boyfriends, and was particularly inspired by the work of J Dilla. Misch started making his own beats 
      and took classes in music technology, and began posting tracks online in 2012. Up-and-coming rappers sampled his beats in their own work, 
      and Misch also collaborated with local singer/songwriter Carmody, ultimately releasing the Out to Sea EP with her in 2014. That year, he also 
      issued Beat Tape 1, a collection of instrumental tracks that included "Dilla Love," an homage to his idol that earned approval from Dilla's mother, 
      Maureen Yancey. "Memory," Misch's debut single on his own Beyond the Groove label, arrived that July.`,
      `The following year, Beat Tape 2 arrived, this time featuring collaborations with vocalists including Carmody, Loyle Carner, and Zak Abel. 
      On his 2016 EP Reverie, Misch blended the different aspects of his music into laid-back, R&B-tinged pop, and took the lead vocal on several tracks. 
      He returned in 2017 with the single "South of the River" and the 5-Day Mischon EP, a set of five songs recorded in five days that featured contributions 
      from Carmody, Novelist, Will Heard, Kaidi Akinnibi, and Tobie Tripp. He also collaborated with Carner on his 2017 single "Damselfly." 
      The following year, Misch delivered his debut full-length album, Geography, featuring the singles "Movie" and "Lost in Paris." What Kinda Music, 
      a collaboration with Yussef Dayes, arrived in April 2020 and included the spotlight track "Kyiv."`,
    ],
  },
  'yussef-dayes': {
    id: 'yussef-dayes',
    name: 'Yussef Dayes',
    genre: 'Jazz',
    profileSrc: '/images/yussef-dayes-profile.jpg',
    profileAlt: 'Yussef Dayes Profile Picture',
    backgroundSrc: '/images/yussef-dayes-background.jpeg',
    backgroundAlt: 'Yussef Dayes on stage',
    youTubeId: '1g826StJhLk',
    bio: [
      `Yussef Dayes is one of the UK’s most exciting, innovative young drummers and producers. Though largely considered a 
      “jazz” drummer, his sound melds everything from 70s funk to Senegalese percussion to recent UK grime. The unifying factor is a fluid, vital energy.`,
      `Growing up in South East London, Yussef began his musician journey listening to his dad’s jazz records, and performing with his brothers from age 4. 
      He’s gone on to study with the legendary Billy Cobham, and began regular gigging with his brothers in afrobeat and rock-influenced jazz outfit United Vibrations. 
      He is also known for his collaboration with Kamaal Williams, creating the duet Yussef Kamaal in 2015. Following 2018’s ‘Love Is The Message’ - 
      Yussef’s first solo release - 2019 is set to be his busiest year yet, with a debut solo album in the pipeline as well as collaborative projects across the board.`,
    ],
  },
};

export const getArtistPathParams = () => {
  let paths = [];
  for (const artist in artistPageInfo) {
    paths.push({ params: { id: artist } });
  }
  return paths;
};

export const getArtistInfo = (artistId) => {
  return artistPageInfo[artistId];
};
