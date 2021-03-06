export interface ArtistInfo {
  id: string;
  name: string;
  genre: string;
  genreIds: string[];
  profileSrc: string;
  profileAlt: string;
  backgroundSrc: string;
  backgroundAlt: string;
  youTubeId: string;
  appleMusic: string;
  spotify: string;
  youtube: string;
  instagram: string;
  bio: string[];
}

export interface AllArtistData {
  [key: string]: ArtistInfo;
}

export const artistPageInfo: AllArtistData = {
  chon: {
    id: 'chon',
    name: 'Chon',
    genre: 'Rock',
    genreIds: ['rock'],
    profileSrc: '/images/chon-profile.jpeg',
    profileAlt: 'Picture of the 4 memebers of the band Chon.',
    backgroundSrc: '/images/chon-background.jpeg',
    backgroundAlt: 'Chon on stage',
    youTubeId: 'xdCbfdlj5CA',
    appleMusic: 'https://music.apple.com/us/artist/chon/6967071',
    spotify: 'https://open.spotify.com/artist/2JFljHPanIjYy2QqfNYvC0',
    youtube: 'https://www.youtube.com/watch?v=pxZuPLPERbk',
    instagram: 'https://www.instagram.com/chonofficial/?hl=en',
    bio: [
      `A technical post-hardcore band with heavy instrumental tendencies, Chon formed in San Diego in 2008. The band originally 
    comprised bassist/vocalist Esiah Camarena, drummer Nathan Camarena, and guitarists Erick Hansel and Mario Camarena. While playing shows on 
    the emo and post-hardcore scene, Chon's tunes were influenced from the start by jazz, prog rock, and even classical tendencies. Esiah was out 
    of the band by the time they released their debut EP, Newborn Sun, in 2013, replaced by bassist Drew Pelisek. They toured frequently, returning 
    the next year with another EP, Woohoo!, and in 2015 they released their first full-length album, Grow (Sumerian Records). Pelisek left Chon near 
    the end of the year, and the group toured with three different bassists after his departure, including Esiah, who officially re-joined the band in 2016. 
    Chon's sophomore set, Homey, arrived in 2017, adding hip-hop and R&B influences to the group's sound. They quickly followed with their third set, 
    a self-titled collection that included singles "Petal" and "Peace."`,
    ],
  },
  fkj: {
    id: 'fkj',
    name: 'FKJ',
    genre: 'Dance/Electronic',
    genreIds: ['dance/electronic'],
    profileSrc: '/images/fkj-profile.jpeg',
    profileAlt: 'FKJ playing guitar',
    backgroundSrc: '/images/fkj-background.jpeg',
    backgroundAlt: 'FKJ on stage',
    youTubeId: 'a7p1R3xKSNA',
    appleMusic: 'https://music.apple.com/us/artist/fkj/644688726',
    spotify: 'https://open.spotify.com/artist/2FwDTncULUnmANIh7qKa5z',
    youtube: 'https://www.youtube.com/channel/UCxqkOxQYocXRtSqlotgXh7w',
    instagram: 'https://www.instagram.com/frenchkiwijuice/',
    bio: [
      `Paris-based producer Vincent Fenton creates mellow, sample-based electronic sounds under the name French Kiwi Juice, or FKJ for short. 
    He started out working as a theater sound engineer while teaching himself the basics of music production at the same time. Finding a style within 
    electronic music that melded the pulse of house with smoother organic elements, he and other artists on the Roche Musique label worked toward the 
    development of an electronic subgenre of new French house near the start of the 2010s. A series of EPs arrived on the label, with The Twins showing up in 
    2012 and Time for a Change dropping the next year. A strong online profile served as the basis for much of FKJ's fame, and he developed a strong live set to 
    match his studio output on-stage. The Take Off EP followed in 2014, and FKJ spent much of the next two years working toward the recording of a proper 
    full-length, which arrived in March of 2017 as a self-titled long player on the Believe Direct Limited label. A single, "Is Magic Gone," arrived the following year.`,
    ],
  },
  'hiatus-kaiyote': {
    id: 'hiatus-kaiyote',
    name: 'Hiatus Kaiyote',
    genre: 'R&B/Soul',
    genreIds: ['r&b/soul'],
    profileSrc: '/images/hiatus-kaiyote-profile.jpg',
    profileAlt: 'Hiatus Kaiyote Profile Picture',
    backgroundSrc: '/images/hiatus-kaiyote-background.jpeg',
    backgroundAlt: 'All members of the band Hiatus Kaiyote',
    youTubeId: 'ghw26g3h6L0',
    appleMusic: 'https://music.apple.com/us/artist/hiatus-kaiyote/514090753',
    spotify: 'https://open.spotify.com/artist/43JlwunhXm1oqdKyOa2Z9Y',
    youtube: 'https://www.youtube.com/channel/UCmD8TDgJxofPfxA8GTpaCCQ',
    instagram: 'https://www.instagram.com/hiatuskaiyote/?hl=en',
    bio: [
      `Hiatus Kaiyote are a 4-piece independent future soul group based in Melbourne, performing on occasion with 3 additional backing singers. 
    Their sound is a fusion of future beats, hip-hop and soul with subtler influences of Latin, dubstep and opera`,
      `Hiatus Kaiyote came onto the scene with their debut album, Tawk Tomahawk, back in 2012 and created a groundswell of buzz among global music heads. 
    Since then, they've gone on to win varying international awards and were the first Australian group to get nominated in the R&B category at the 
    Grammys for best R&B performance in 2013. This uber-fun and exhilarating set will appease diehards and new fans alike.`,
    ],
  },
  'jacob-collier': {
    id: 'jacob-collier',
    name: 'Jacob Collier',
    genre: 'Jazz',
    genreIds: ['jazz'],
    profileSrc: '/images/jacob-collier-profile.jpeg',
    profileAlt: 'Jacob Collier',
    backgroundSrc: '/images/jacob-collier-background.png',
    backgroundAlt: 'Jacob collier',
    youTubeId: 'zua831utwMM',
    appleMusic: 'https://music.apple.com/us/artist/jacob-collier/730498854',
    spotify: 'https://open.spotify.com/artist/0QWrMNukfcVOmgEU0FEDyD',
    youtube: 'https://www.youtube.com/user/jacobcolliermusic',
    instagram: 'https://www.instagram.com/jacobcollier/?hl=en',
    bio: [
      `Jacob Collier (born 2 August 1994) is a British singer, arranger, composer, producer, and multi-instrumentalist based in London, England. In 2012, 
    his homemade split-screen video covers of popular songs, such as Stevie Wonder???s ???Don???t You Worry ???bout a Thing???, began to go viral on YouTube. 
    Since then, he has attracted a worldwide following, accumulating tens of millions of views across multiple social media platforms.`,
      `Collier???s style fuses elements of jazz, a cappella, groove, folk, electronic music, classical music, gospel, soul and improvisation, and often 
    features extreme use of reharmonisation. In 2014, Collier signed to Quincy Jones??? management company and began working on his one-man, audio-visual 
    live performance vehicle, designed and built at MIT in Boston.`,
      `On 1 July 2016, Collier released his debut album, In My Room, which was entirely 
    self-recorded, arranged, performed and produced in his home in London. In February 2017, Collier was awarded two Grammys for his arrangements 
    of ???Flintstones??? and ???You And I???, both from the album.`,
    ],
  },
  jakubi: {
    id: 'jakubi',
    name: 'Jakubi',
    genre: 'Pop',
    genreIds: ['pop'],
    profileSrc: '/images/jakubi-profile.jpeg',
    profileAlt: 'Jakubi',
    backgroundSrc: '/images/jakubi-background.jpeg',
    backgroundAlt: 'The band Jakubi',
    youTubeId: 'Nlu4pIyAtmw',
    appleMusic: 'https://music.apple.com/us/artist/jakubi/881453221',
    spotify: 'https://open.spotify.com/artist/71Mm7PHNOerxK5GkaT9ACY',
    youtube: 'https://www.youtube.com/channel/UC__CKaOOITigfjPWy3YKMiQ',
    instagram: 'https://www.instagram.com/jakubi/?hl=en',
    bio: [
      `Jakubi is an Aussie four-piece who write dance-heavy soul, reggae, and pop music. Half of the quartet are the brothers Farah who are deeply in sync; 
    defining the groove that makes Jakubi stand out. Jerome rules the mic, using a talk box to texture slick runs and bold choruses into futuristic glory. 
    The soul of the group is powered by walking bass lines and snappy backup vocals. They ventured off their island continent for the first time this year, 
    spreading the infectious reggaeton to begging listeners in the US. Stylish, super friendly and genuine, Jakubi has a clear relationship with performing the music they???ve written.`,
    ],
  },
  'jordan-rakei': {
    id: 'jordan-rakei',
    name: 'Jordan Rakei',
    genre: 'R&B/Soul',
    genreIds: ['r&b/soul'],
    profileSrc: '/images/jordan-rakei-profile.jpg',
    profileAlt: 'Jordan Rakei Profile Picture',
    backgroundSrc: '/images/jordan-rakei-background.jpg',
    backgroundAlt: 'Jordan Rakei on stage',
    youTubeId: 'JtBmUxz4GsM',
    appleMusic: 'https://music.apple.com/us/artist/jordan-rakei/705284964',
    spotify: 'https://open.spotify.com/artist/24icoQNJSEWNu3XvqKBR68',
    youtube: 'https://www.youtube.com/channel/UC4ZVH32PCUG_iL7UI2ulmLw',
    instagram: 'https://www.instagram.com/jrakz/?hl=en',
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
  lawerence: {
    id: 'lawerence',
    name: 'Lawerence',
    genre: 'Pop',
    genreIds: ['pop'],
    profileSrc: '/images/lawerence-profile.jpg',
    profileAlt: 'Clyde and Gracie Lawerence',
    backgroundSrc: '/images/lawerence-background.jpg',
    backgroundAlt: 'Lawerence on stage',
    youTubeId: 'C01nBm6vV5c',
    appleMusic: 'https://music.apple.com/us/artist/lawrence/1087075288',
    spotify: 'https://open.spotify.com/artist/5rwUYLyUq8gBsVaOUcUxpE',
    youtube: 'https://www.youtube.com/channel/UCr5v6l4EIKiImmJU-COJ0Sg',
    instagram: 'https://www.instagram.com/lawrencetheband/?hl=en',
    bio: [
      `As NPR writes, ???siblings Clyde and Gracie Lawrence are not your typical pair." Clyde Lawrence and Gracie Lawrence have been 
      writing songs and listening to countless Stevie Wonder, Randy Newman, and Aretha Franklin records in their family's New York 
      City apartment since they were little kids. After years of playing together, they officially created Lawrence, an eight-piece 
      soul-pop band comprised of musician friends from childhood and college. The band has since gained a devoted following for its high-energy, 
      keyboard-driven sound, which features tight, energetic horns, explosive lead vocals, and fully-live arrangements.`,
      `Lawrence first rose to prominence in 2016 when they released their debut LP Breakfast (2016), which received attention and 
      praise from a variety of sources ranging from NPR's All Things Considered to Stephen Curry's social media. Produced by Grammy 
      Award winner Eric Krasno (Lettuce/Tedeschi Trucks/Soulive), Breakfast includes guest performances by NYC soul/funk mainstays 
      Adam Deitch (Lettuce), Cory Henry (Cory Henry & the Funk Apostles, Snarky Puppy), and Maurice "Mobetta" Brown (Anderson . Paak, Tedeschi Trucks Band).`,
      `Lawrence has sold out headline shows across the country and appeared at festivals including Bonnaroo, Outside Lands, Firefly, 
      Okeechobee, Hangout, and many more. The band has also opened for notable acts such as Lake Street Dive, Vulfpeck, Jon Bellion, 
      Soulive, Jacob Collier, Blues Traveler, O.A.R, Bernhoft, and others.`,
      `In addition to the band, Clyde and Gracie have also amassed considerable resumes with other artistic pursuits. 
      Clyde has written songs and score for film and television, including Disney's Noelle (2019), Steven Spielberg's 
      Animaniacs (2020), Landline (2017), The Rewrite (2015), Music and Lyrics (2007), and even Miss Congeniality (2000), 
      for which he wrote the theme song at age five. Gracie is an accomplished actress, appearing as a series regular alongside 
      John Caroll Lynch, Leslie Odom Jr., and Sturgill Simpson in the CBS All-Access murder mystery One Dollar. Gracie has also 
      appeared on Broadway in Brighton Beach Memoirs (2009), in films such as The Sitter (2011) and Did You Hear About the Morgans? 
      (2009), and in tv shows including The Good Wife (2012), The Americans (2014), and Younger (2015).`,
    ],
  },
  moonchild: {
    id: 'moonchild',
    name: 'Moonchild',
    genre: 'R&B/Soul',
    genreIds: ['r&b/soul'],
    profileSrc: '/images/moonchild-profile.jpeg',
    profileAlt: '3 members of moonchild',
    backgroundSrc: '/images/moonchild-background.jpeg',
    backgroundAlt: '3 members of moonchild',
    youTubeId: 'B_ymY0xG0LI',
    appleMusic: 'https://music.apple.com/us/artist/moonchild/192736023',
    spotify: 'https://open.spotify.com/artist/1VgjAK52kjkQJQQRhTn02t',
    youtube: 'https://www.youtube.com/channel/UCCBSAJ-B8QNfds8zAkjn51A',
    instagram: 'https://www.instagram.com/thisismoonchild/?hl=en',
    bio: [
      `Moonchild is an American alternative R&B band based in Los Angeles, California. The band consists of Amber Navran, Max Bryk, and Andris Mattson. 
    All three are alumni of USC Thornton School of Music's Jazz Studies program. The band formed in the summer of 2011 after touring the west coast 
    with Navran's previous solo project. The trio bonded in the car over similar music tastes and spent the summer and subsequent fall writing the music for 
    what became their debut album Be Free, which would be released the following year.`,
      `The debut album was well received by critics, garnering praise from many musical greats including Jill Scott, DJ Jazzy Jeff, and Stevie Wonder. After 
    hearing the group's music in December 2012, Wonder invited the group to open for him at his annual House Full of Toys benefit concert.`,
      `Since the release of Be Free in 2012, the band has released three more albums through British record label Tru Thoughts and toured internationally. 
    They have also collaborated on tracks with Rapsody and Tall Black Guy. Moonchild performed an NPR Tiny Desk Concert in December 2019. 
    During the 2019 Little Ghost US Tour, the band used their platform to promote local charities in each city they played in.`,
    ],
  },
  'robert-glasper': {
    id: 'robert-glasper',
    name: 'Robert Glasper',
    genre: 'Jazz/Hip-hop/Neo-Soul',
    genreIds: ['jazz', 'r&b/soul', 'hip-hop'],
    profileSrc: '/images/robert-glasper-profile.jpg',
    profileAlt: 'Robert Glasper Profile Picture',
    backgroundSrc: '/images/robert-glasper-background.webp',
    backgroundAlt: 'Robert Glasper playing piano on stage.',
    youTubeId: 'oGTVoX7AaRc',
    appleMusic: 'https://music.apple.com/us/artist/robert-glasper/4643652',
    spotify: 'https://open.spotify.com/artist/5cM1PvItlR21WUyBnsdMcn',
    youtube: 'https://www.youtube.com/user/robertglasper',
    instagram: 'https://www.instagram.com/robertglasper/?hl=en',
    bio: [
      `Hailing from Houston, Texas, Robert Glasper is a jazz pianist with a knack for mellow, harmonically complex compositions that also reveal a subtle hip-hop influence. 
    Inspired to play piano by his mother, a gospel pianist and vocalist, Glasper attended Houston???s High School for the Performing Arts. After graduation, 
    he studied music at the New School University in Manhattan, where he found performance work with such luminaries as bassist Christian McBride, saxophonist Kenny Garrett, 
    and others. After graduating college, Glasper worked with a variety of artists, including trumpeter Roy Hargrove, vocalist Carly Simon, and rapper Mos Def. 
    The pianist released his debut album, Mood, on Fresh Sound New Talent in 2004. Canvas and In My Element followed in 2005 and 2007, respectively, on Blue Note Records.`,
      `In 2009, Glasper released the forward-thinking album Double Booked, which featured a mix of modal post-bop and funky, ???80s Herbie Hancock-inspired numbers with two separate bands. 
   The first of these was his trio with drummer Chris Dave and upright bassist Vicente Archer; they recorded five originals and a cover of Thelonious Monk???s ???Think of One.??? 
   These tracks were followed by five more originals by his electric band, dubbed the Robert Glasper Experiment, featuring Dave, electric bassist Derrick Hodge, 
   and Casey Benjamin on saxes and vocoder.`,
      `Three years later, the Robert Glasper Experiment (with a slew of guest vocalists) issued their first stand-alone album, 
   Black Radio, for Blue Note, which sought to blur the boundaries between jazz, hip-hop, R&B, and rock & roll. It entered the jazz chart at number one and went on to win a 
   Grammy Award for Best R&B Album. Later in the year, Glasper and Blue Note released Black Radio Recovered: The Remix EP. 9th Wonder, Georgia Anne Muldrow, 
   and Pete Rock were among those who participated. The following year, the Robert Glasper Experiment (then including Hodge and Benjamin with drummer Mark Colenburg) 
   returned with their equally star-studded sophomore album, Black Radio 2. It also won a Grammy, this time for Best Traditional R&B Performance for a cover of Stevie Wonder???s 
   ???Jesus Children of America.???`,
      `Glasper returned to his original acoustic piano trio format with bassist Archer and drummer Damion Reid. They cut 2015???s Covered 
   live at Capitol Studios in front of an invited audience. The album???s pre-release single was a reading of Radiohead???s ???Reckoner???; 
   it was released in April, followed by the album in June. Glasper also played on Kendrick Lamar???s celebrated To Pimp a Butterfly and Maxwell???s blackSUMMERS???night. 
   For Don Cheadle???s 2016 Miles Davis biopic, Miles Ahead, the pianist curated the soundtrack and wrote original music, which included contributions from Wayne Shorter, 
   Herbie Hancock, and Gary Clark, Jr. Glasper also recorded Everything???s Beautiful, a Davis tribute album in celebration of the trumpeter???s 90th birthday. 
   Glasper reimagined classic tracks with an all-star list of collaborators who included Wonder, Muldrow, Erykah Badu, Hiatus Kaiyote, and John Scofield. 
   Featuring the single ???Ghetto Walkin'??? fronted by Bilal, the album was issued that May. the Robert Glasper Experiment returned to the studio in early 2016 with a different m.o. 
   Instead of working on the pianist???s music or covers, the quartet members wrote and arranged together in the studio for the first time. The resulting Artscience was 
   issued in September after the pre-release singles ???Day to Day??? and ???Thinkin??? About You.??? ~ Matt Collar & Thom Jurek`,
    ],
  },
  'snarky-puppy': {
    id: 'snarky-puppy',
    name: 'Snarky Puppy',
    genre: 'Rock/Jazz/Funk',
    genreIds: ['rock', 'jazz', 'funk'],
    profileSrc: '/images/snarky-puppy-profile.jpg',
    profileAlt: 'Snarky Puppy Profile Picture',
    backgroundSrc: '/images/snarky-puppy-background.jpeg',
    backgroundAlt: 'Snarky Puppy',
    youTubeId: 'L_XJ_s5IsQc',
    appleMusic: 'https://music.apple.com/us/artist/snarky-puppy/152987454',
    spotify: 'https://open.spotify.com/artist/7ENzCHnmJUr20nUjoZ0zZ1',
    youtube: 'https://www.youtube.com/channel/UCPl2RYo0lLLqj8RaEADYclg',
    instagram: 'https://www.instagram.com/snarkypuppy/?hl=en',
    bio: [
      `After a decade of relentless touring and recording in all but complete obscurity, the Texas-bred/New York-based 
    quasi-collective suddenly found itself held up by the press and public as one of the major figures in the jazz world. 
    ???An exultant throwdown of smart danceability??? (Village Voice), Snarky Puppy isn???t exactly a jazz band. 
    It???s not a fusion band, and it???s definitely not a jam band. It???s probably best to take Nate Chinen of The New York Times??? 
    advice, as stated in an online discussion about the group, to ???take them for what they are, rather than judge them for what they???re not.???`,
      `The global collective which features a revolving cast of up to a dozen musicians makes what it likes to call ???music for your brain and booty.??? 
      Led by bassist and composer Michael League, the band's rotating lineup features musicians whose r??sum??s boast work with stars like Erykah Badu, 
      Marcus Miller, Justin Timberlake, Roy Hargrove, Snoop Dogg and John Mayer. Their 2017 release, Culcha Vulcha, won a GRAMMY for Best Contemporary 
      Instrumental Album, and 2019 saw the release of the studio session Immigrance. 2020???s double-disc release Live at the Royal Albert Hall, 
      recorded in London during the Immigrance tour, won the band a well-deserved Best Contemporary Instrumental Album nod at the 2021 GRAMMYs.`,
    ],
  },
  'tom-misch': {
    id: 'tom-misch',
    name: 'Tom Misch',
    genre: 'Pop',
    genreIds: ['pop'],
    profileSrc: '/images/tom-misch-profile.jpg',
    profileAlt: 'Tom Misch Profile Picture',
    backgroundSrc: '/images/tom-misch-background.jpeg',
    backgroundAlt: 'Tom Misch on stage',
    youTubeId: 'IUMTaAQ43lY',
    appleMusic: 'https://music.apple.com/us/artist/tom-misch/893237941',
    spotify: 'https://open.spotify.com/artist/1uiEZYehlNivdK3iQyAbye',
    youtube: 'https://www.youtube.com/channel/UCKXs11Oj1codrEy33D6XgkQ',
    instagram: 'https://www.instagram.com/tommisch/?hl=en',
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
  'victoria-canal': {
    id: 'victoria-canal',
    name: 'Victoria Canal',
    genre: 'Pop',
    genreIds: ['pop'],
    profileSrc: '/images/victoria-canal-profile.jpeg',
    profileAlt: 'Victoria Canal playing piano',
    backgroundSrc: '/images/victoria-canal-background.jpeg',
    backgroundAlt: 'Victoria Canal',
    youTubeId: 'h0HHf7jrTLI',
    appleMusic: 'https://music.apple.com/us/artist/victoria-canal/842683412',
    spotify: 'https://open.spotify.com/artist/2nE9x2JhbyjBVCaSnUGX3G',
    youtube: 'https://www.youtube.com/channel/UC2a1zJeKXc6cwqFU8xaQ2jQ',
    instagram: 'https://www.instagram.com/victoriacanal/?hl=en',
    bio: [
      `Since her emergence in 2015, the songstress has quietly impacted both culture and music. She would also be tapped by Michael Franti for a marathon of touring, 
    enlisted by Nike as a rep and model for the FlyEase Air Jordan 1 designed for adaptive athletes, and streamed more than 10 million times to date. `,
      `Canal was born 
    in Munich to Gwen Tinius, an architect and artist, and Francisco Canal, a businessman. She has since lived in Shanghai, Tokyo, Barcelona, Madrid, Dubai, and Amsterdam. 
    Her ethnicity is Cuban and American descent, but refers to herself as Spanish-American because Spain is where she was raised most of her life. At a very young age, 
    her grandmother, a piano teacher, introduced her to music. She started taking classical lessons at 6 years old for both piano and voice. When she turned 11, she 
    discovered songwriting after listening to writers like John Mayer and Gavin DeGraw and decided she wanted to be a singer-songwriter when she grew up. She participated 
    in local and school competitions wherever she could and started booking her own gigs. Her reputation at school was "that singer girl who spends all her time 
    practicing between classes", up to the point that when Victoria moved from Dubai to Barcelona in 2013 (she was about to start 10th grade), she decided to do online 
    school instead to be able to pursue music more professionally. Her inspiration comes from unfamiliar instruments that she doesn't play as well as she does piano, 
    like the bass, loop station, harmonica, etc.`,
    ],
  },
  vulpeck: {
    id: 'vulpeck',
    name: 'Vulpeck',
    genre: 'Pop',
    genreIds: ['pop'],
    profileSrc: '/images/vulpeck-profile.jpeg',
    profileAlt: 'The band Vulpeck',
    backgroundSrc: '/images/vulpeck-background.png',
    backgroundAlt: 'The band Vulpeck',
    youTubeId: 'TiiWR6436Eg',
    appleMusic: 'https://music.apple.com/us/artist/vulfpeck/449917675',
    spotify: 'https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6',
    youtube: 'https://www.youtube.com/c/Vulf',
    instagram: 'https://www.instagram.com/vulfpeck/?hl=en',
    bio: [
      `Vulfpeck is a primarily instrumental, Los Angeles-based band inspired by the classic R&B rhythms recorded by the Funk Brothers, the Meters, 
    and quite possibly Booker T. & the MG's.`,
      `The founding members -- bassist Joe Dart, keyboardist Woody Goss, former My Dear Disco guitarist Theo Katzman, and keyboardist/drummer Jack Stratton
       -- attended the University of Michigan School of Music in Ann Arbor and aligned in 2011. Vulfpeck released their debut EP, 
       the six-track Mit Peck, by the end of the year, and went on to issue several EPs of similar length through 2014. In March of that year, 
       they also conceived Sleepify, a shrewd and samey set that featured tracks like "Z," "Zzzzz," and the finale, "Zzzzzzzzzz." The royalties the 
       band earned from mostly nocturnal streams of the release -- ten half-minute tracks that consisted of nothing but silence -- funded a short, 
       admission-free U.S. tour that September before it was removed by the streaming site. "Christmas in L.A.," featuring session giant David T. Walker 
       on guitar, was out as a single three months later.`,
      `In 2015, Vulfpeck released their first album, Thrill of the Arts, which also featured guests including, most notably, Blake Mills. It hit the Top 20 of 
      the Billboard R&B Albums chart and led to a performance on The Late Show with Stephen Colbert. The Beautiful Game followed in 2016 and landed on a handful 
      of Billboard charts including R&B Albums, where it reached number six. Continuing their string of self-releases, the group issued Mr. Finish Line in 2017. 
      It included appearances by frequent collaborators such as Antwaun Stanley and Joey Dosik, as well as Walker, drummer James Gadson, and none other than 
      Bootsy Collins. Hill Climber, the band's eighth studio long-player, followed in December 2018. The vinyl collection Vulf Vault 001: Antwaun Stanley arrived in August 2020.`,
    ],
  },
  'yussef-dayes': {
    id: 'yussef-dayes',
    name: 'Yussef Dayes',
    genre: 'Jazz',
    genreIds: ['jazz'],
    profileSrc: '/images/yussef-dayes-profile.jpg',
    profileAlt: 'Yussef Dayes Profile Picture',
    backgroundSrc: '/images/yussef-dayes-background.jpeg',
    backgroundAlt: 'Yussef Dayes on stage',
    youTubeId: '1g826StJhLk',
    appleMusic: 'https://music.apple.com/us/artist/yussef-dayes/1147722309',
    spotify: 'https://open.spotify.com/artist/2rspptKP0lPBdlJJAJHqht',
    youtube: 'https://www.youtube.com/channel/UCKg5V9CoMPXC3NYtmDAUmrg',
    instagram: 'https://www.instagram.com/yussefdayes/?hl=en',
    bio: [
      `Yussef Dayes is one of the UK???s most exciting, innovative young drummers and producers. Though largely considered a 
      ???jazz??? drummer, his sound melds everything from 70s funk to Senegalese percussion to recent UK grime. The unifying factor is a fluid, vital energy.`,
      `Growing up in South East London, Yussef began his musician journey listening to his dad???s jazz records, and performing with his brothers from age 4. 
      He???s gone on to study with the legendary Billy Cobham, and began regular gigging with his brothers in afrobeat and rock-influenced jazz outfit United Vibrations. 
      He is also known for his collaboration with Kamaal Williams, creating the duet Yussef Kamaal in 2015. Following 2018???s ???Love Is The Message??? - 
      Yussef???s first solo release - 2019 is set to be his busiest year yet, with a debut solo album in the pipeline as well as collaborative projects across the board.`,
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

export const getArtistInfoForHome = (): Array<Partial<ArtistInfo>> => {
  let artistList = [];
  for (const artist in artistPageInfo) {
    const { id, name, genre, genreIds, profileSrc, profileAlt } = artistPageInfo[artist];
    artistList.push({ id, name, genre, genreIds, profileSrc, profileAlt });
  }
  return artistList;
};

export const getArtistInfo = (artistId: string) => {
  return artistPageInfo[artistId];
};
