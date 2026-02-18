import { Chapter, Character, Fanart, Episode } from './types';
export const MANGA_TITLE = 'Ye Olde Treehouse';

/**
 * PRODUCTION R2 URL
 * This is your public Cloudflare R2 bucket endpoint.
 */
const R2_BASE_URL =
  ((import.meta as any).env.VITE_R2_BASE_URL as string) ||
  'https://assets.yeoldetreehouse.com';
export const COLORS = {
  white: '#FFFFFF',
  lightBlue: '#E1F6FA',
  darkBlue: '#016F93',
  teal: '#1192A3',
};
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/fifimangaka',
  instagram: 'https://instagram.com/fifimangaka',
  youtube: 'https://youtube.com/@fifimangaka',
  youtubeSubscribe: 'https://www.youtube.com/@fifimangaka?sub_confirmation=1',
  patreon: 'https://patreon.com/fifimangaka',
  readManga: '/#/chapters',
};

/**
 * DRY URL GENERATOR
 * Robustly handles slashes and constructs paths for R2 assets.
 */
export const generateMangaUrl = (
  prefix: string,
  folder: string,
  pageNum: number,
): string => {
  const p3 = String(pageNum).padStart(3, '0');
  // This will now work perfectly because R2_BASE_URL is guaranteed to be a string
  const base = R2_BASE_URL.endsWith('/') ? R2_BASE_URL : `${R2_BASE_URL}/`;
  const folderPart = folder
    ? folder.endsWith('/')
      ? folder
      : `${folder}/`
    : '';

  return `${base}${folderPart}${prefix}_${p3}.png`;
};

export const EPISODES: Episode[] = [
  {
    id: 1,
    title: 'The Hunt Begins!',
    thumbnail: `${R2_BASE_URL}/YOT-CHAP1_001.png`,
    comingSoon: true,
    description:
      'Experience the start of the saga with full voice acting, soundtrack and motion! Rou and Fig begin their hunt for the elusive Drendith Nosferi at the famous Nosferi Circus Compound in New Alta Dercha.',
    duration: '12:45',
  },
];

/**
 * CHAPTER METADATA
 * spreads: [6] means page 6 and 7 are a single file named prefix_006_007.png
 * skips: [2] means page 2 does not exist and should be skipped
 */
interface ChapterMetadata {
  id: number;
  title: string;
  prefix: string;
  folder: string;
  synopsis: string;
  pageCount: number;
  spreads: number[];
  skips: number[];
  dateReleased: string;
  thumbnailPage: number;
  hasCover?: boolean;
  coverFilename?: string;
  heroImagePage?: number;
  heroImagePosition?: string;
}

const CHAPTER_METADATA: ChapterMetadata[] = [
  {
    id: 1,
    title: 'Chapter 1: The Hunt Begins!',
    prefix: 'YOT-CHAP1',
    folder: '',
    synopsis:
      'Captain Rou and Agent Fig are on a mission to hunt down the dangerous Circus Ringmaster, Drendith Nosferi. Nothing goes as they plan though, as their wild hunt kicks off an even wilder journey!',
    pageCount: 51,
    spreads: [6],
    skips: [2],
    dateReleased: '1/1/2023',
    thumbnailPage: 1,
  },
  {
    id: 2,
    title: 'Chapter 2: The Royal Rogue',
    prefix: 'YOT-CH2',
    folder: 'chapter2',
    synopsis:
      'Kenzi Akimoto, the self-described "Vigilante" of Glory Peak, confronts Drendith Nosferi\'s troupe as they attempt to obliterate the circus compound. Commander Ender ordered Rou and Fig to rendezvous with Kenzi, their new teammate.',
    pageCount: 17,
    spreads: [],
    skips: [2],
    dateReleased: '1/8/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CH2-COVER.png',
  },
  {
    id: 3,
    title: "Chapter 3: Glory's Proving Grounds",
    prefix: 'YOT-CHAP3',
    folder: 'chapter3',
    synopsis:
      "Rou and Fig's duo becomes a trio as Kenzi Akimoto joins the Regulation. With permission to use the full extent of their Augur powers, Commander Ender sends them on a crucial mission: enlist the help of ally Solomon Vex.",
    pageCount: 19,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CH3-COVER.png',
  },
  {
    id: 4,
    title: 'Chapter 4: Solomon Vex',
    prefix: 'YOT',
    folder: 'chapter4',
    synopsis:
      "🌳 With the might of Viveform's finest sword-arm on their side, beating Nosferi finally seems possible. But in her usual unorthodox fashion, Rou decides to put that notion to the test!",
    pageCount: 18,
    spreads: [],
    skips: [2],
    dateReleased: '1/22/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER4.png',
  },
  {
    id: 5,
    title: 'Chapter 5: Of Fire and Mind',
    prefix: 'YOT-CHAP5',
    folder: 'chapter5',
    synopsis:
      "An electrifying duel ignites as Rou puts Tier 4 swordsman Solomon Vex to the test. But something's off - Rou's mind-reading augur power can't see anything in Vex's head!",
    pageCount: 23,
    spreads: [4, 14, 20],
    skips: [2, 3],
    dateReleased: '1/29/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER5.png',
  },
  {
    id: 6,
    title: "Chapter 6: You're Cordially Invited",
    prefix: 'YOT-CHAP6',
    folder: 'chapter6',
    synopsis:
      'Drendith Nosferi has infiltrated New Colony Prima! As the notorious ringmaster toys with the Regulation agents, he extends a cryptic invitation to the "Resurrection Macabre."',
    pageCount: 19,
    spreads: [17],
    skips: [2],
    dateReleased: '2/5/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER6.png',
  },
  {
    id: 7,
    title: 'Chapter 7: Big Drop',
    prefix: 'YOT-CH7',
    folder: 'chapter7',
    synopsis: `The crew departs for the gateway of Vex's homeland, "Big Drop" where a grumpy tower watcher with a 10 year grudge guards the way. Here, the team faces their first test.`,
    pageCount: 23,
    spreads: [],
    skips: [2],
    dateReleased: '2/12/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER7.png',
  },
  {
    id: 8,
    title: 'Chapter 8: City of Spores',
    prefix: 'YOT-CH8',
    folder: 'chapter8',
    synopsis: `A wild Pterosaur ride drops the Regulation into Sporenia, where Vex reunites with an old friend from his past. But a chance for rest turns strange when a charismatic hotelier invites them in.`,
    pageCount: 21,
    spreads: [],
    skips: [2],
    dateReleased: '2/19/2023',
    thumbnailPage: 1,
  },
  {
    id: 9,
    title: 'Chapter 9: When Sirens Blow',
    prefix: 'YOT-CH9',
    folder: 'chapter9',
    synopsis: `While the gang wait in Josho town square, two crises explode simultaneously: Vex confronts a mysterious banging, and the ladies are stunned by a sudden swarm of strange creatures.`,
    pageCount: 19,
    spreads: [],
    skips: [2],
    dateReleased: '2/26/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER9.png',
  },
  {
    id: 10,
    title: 'Chapter 10: Bold Moves',
    prefix: 'YOT-CH10',
    folder: 'chapter10',
    synopsis: `The Regulation's chaotic day in Sporenia escalates as they're escorted to the Central Hall. Vex, carrying a strange boy, faces a tense reunion with the Valor Guard.`,
    pageCount: 20,
    spreads: [],
    skips: [2],
    dateReleased: '3/5/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER10.png',
  },
  {
    id: 11,
    title: 'Chapter 11: Hard Choices',
    prefix: 'YOT-CH11',
    folder: 'chapter11',
    synopsis: `Zennis reveals a land in chaos: giant wasp humans and mind-controlled Calonae. Sitarist Saul uncovers a shocking connection between Drendith and the chaos.`,
    pageCount: 22,
    spreads: [],
    skips: [2],
    dateReleased: '3/12/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER11.png',
  },
  {
    id: 12,
    title: 'Chapter 12: The Wood Lives',
    prefix: 'CHAP-12',
    folder: 'chapter12',
    synopsis: `The group splits up to begin stopping Drendith's corruption of Laetowood. Rou and Vex awaken in a dark, surreal dream world—a twisted replica of the Nosferi Circus.`,
    pageCount: 19,
    spreads: [],
    skips: [2],
    dateReleased: '3/19/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER12.png',
  },
  {
    id: 13,
    title: 'Chapter 13: Inside Your Head',
    prefix: 'CHAP-13',
    folder: 'chapter13',
    synopsis: `Rou and Vex are trapped in the "Nosfun House"; a surreal game where their darkest memories and secrets will be exposed by the ghostly enforcer, Gammi.`,
    pageCount: 19,
    spreads: [7],
    skips: [2, 3],
    dateReleased: '3/26/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER13.png',
  },
  {
    id: 14,
    title: 'Chapter 14: Zhomei',
    prefix: 'CHAP-14',
    folder: 'chapter14',
    synopsis: `Rou and Vex are forced to witness Vex's own past unfold—a harrowing memory of his younger self, scorched by his sword Zhomei. The truth behind his Augur becomes terrifyingly clear.`,
    pageCount: 21,
    spreads: [],
    skips: [],
    dateReleased: '4/2/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER14.png',
  },
  {
    id: 15,
    title: 'Chapter 15: The Last Agent',
    prefix: 'CHAP-15',
    folder: 'chapter15',
    synopsis: `Fig's past as a treasure hunter catches up to her when a Sky Pirate ambushes the group. As tensions flare and Koshi reveals his true identity, Drendith isn't the only threat anymore.`,
    pageCount: 20,
    spreads: [],
    skips: [2],
    dateReleased: '4/9/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER15.png',
  },
  {
    id: 16,
    title: 'Chapter 16: The Kingmaker',
    prefix: 'YOTCH-16',
    folder: 'chapter16',
    synopsis: `Kaz Greenfield confronts Ender about choosing Rou as Captain, then notices shadows coiling from the Commander's scar. Something dark and ancient possesses Ender.`,
    pageCount: 20,
    spreads: [],
    skips: [2],
    dateReleased: '4/16/2023',
    thumbnailPage: 1,
  },
  {
    id: 17,
    title: 'Chapter 17: On Those Who Plead',
    prefix: 'YOTCH-17',
    folder: 'chapter17',
    synopsis: `Ender struggles to contain the dark force as he prepares for the "Pleading Council". He finds devastating evidence that his team were subjects in Viveform's deadliest experiment.`,
    pageCount: 19,
    spreads: [3],
    skips: [],
    dateReleased: '4/23/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER17.png',
  },
  {
    id: 18,
    title: 'Chapter 18: Drafting Season',
    prefix: 'YOT-CH18',
    folder: 'chapter18',
    synopsis: `Rou and Vex witness the moment Vex first faced Commander Ender Valen. But Drendith isn't finished; he drags them into the next act of his twisted dream state.`,
    pageCount: 19,
    spreads: [13],
    skips: [1],
    dateReleased: '4/30/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER18.png',
  },
  {
    id: 19,
    title: "Chapter 19: Meet the Nosferi's",
    prefix: 'YOT-CH19',
    folder: 'chapter19',
    synopsis: `The inner sanctum of the Nosferi family is revealed. Drendith's performance reaches a fever pitch as the lines between illusion and reality completely dissolve.`,
    pageCount: 19,
    spreads: [],
    skips: [],
    dateReleased: '5/7/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER19.png',
  },
  {
    id: 20,
    title: 'Chapter 20: Rou VS Drendith',
    prefix: 'YOT-CH20',
    folder: 'chapter20',
    synopsis: `Rou and Vex are cornered against Drendith's colossal illusion. Their only weapon? A single melody tied to Drendith's past. Will Rou pass her biggest test as Captain?`,
    pageCount: 20,
    spreads: [],
    skips: [],
    dateReleased: '5/14/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER20.png',
  },
  {
    id: 21,
    title: 'Chapter 21: Ye Olde Treehouse',
    prefix: 'YOT-CH21',
    folder: 'chapter21',
    synopsis: `Rou and Vex are thrown into the source of the Nosferi Port Oak's power: Ye Olde Treehouse. What happens next changes the course of this tale forever.`,
    pageCount: 15,
    spreads: [9],
    skips: [1],
    dateReleased: '5/21/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER21.png',
  },
  {
    id: 22,
    title: 'Chapter 22: An Eye For A Stone',
    prefix: 'YOT-CH22FINAL',
    folder: 'chapter22',
    synopsis: `Fig and Koshi rehash bad blood as the High Guard reveals a damning secret. It's nowhere near as explosive as the secret Fig has been carrying...`,
    pageCount: 17,
    spreads: [],
    skips: [],
    dateReleased: '5/28/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER22.png',
  },
  {
    id: 23,
    title: 'Chapter 23: The Regulation',
    prefix: 'YOT-CH23',
    folder: 'chapter23',
    synopsis: `Fig and Koshi fend off the troupe while Rou and Vex head back to Sporenia. With Drendith on the ropes, the whole Regulation assembles at last!`,
    pageCount: 18,
    spreads: [],
    skips: [],
    dateReleased: '6/4/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER23.png',
  },
  {
    id: 24,
    title: 'Chapter 24: Villains Lie',
    prefix: 'YOT-CH24',
    folder: 'chapter24',
    synopsis: `Drendith Nosferi assembles his troupe for their final assault on Viveform. His goal? Dominate Glory Peak from the skies.`,
    pageCount: 18,
    spreads: [],
    skips: [],
    dateReleased: '6/11/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'Cover.JPG',
  },
  {
    id: 25,
    title: "Chapter 25: Three's Company",
    prefix: 'CHAP-25',
    folder: 'chapter25',
    synopsis: `Viveform's been hiding something in plain sight within the Glory Oak Tree. It connects to the magic that destroyed Altamerian.`,
    pageCount: 19,
    spreads: [3],
    skips: [],
    dateReleased: '6/18/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER25.png',
  },
  {
    id: 26,
    title: 'Chapter 26: Augurs and Armistice',
    prefix: 'YOT-CH26',
    folder: 'chapter26',
    synopsis: `Laetowood celebrates freedom, but behind the smiles lies a group of agents on the edge of imploding. Kaz is done following orders.`,
    pageCount: 18,
    spreads: [],
    skips: [],
    dateReleased: '6/25/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER26.png',
  },
  {
    id: 27,
    title: 'Chapter 27: Furioso Di Saul',
    prefix: 'YOT-CH27FINAL',
    folder: 'chapter27',
    synopsis: `Kaz is done standing in Rou's shadow. Today he'll show her what a real Captain looks like. Or so he thinks. Saul has other plans.`,
    pageCount: 18,
    spreads: [],
    skips: [],
    dateReleased: '7/2/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER27.png',
  },
  {
    id: 28,
    title: 'Chapter 28: The Resurrection Macabre',
    prefix: 'CHAP-28FINALl',
    folder: 'chapter28',
    synopsis: `Rou and Koshi travel through the portal vines and arrive in the ruins of Altamerian. The stage for the final showdown is set!`,
    pageCount: 19,
    spreads: [],
    skips: [],
    dateReleased: '7/9/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER28.png',
    heroImagePage: 5,
    heroImagePosition: 'center top',
  },
];

/**
 * FINAL CHAPTERS EXPORT
 * Generates the full list of chapters using metadata or smart defaults.
 */
export const CHAPTERS: Chapter[] = Array.from({ length: 28 }, (_, i) => {
  const id = i + 1;
  const meta = CHAPTER_METADATA.find((m) => m.id === id);

  const title = meta?.title || `Chapter ${id}: Upcoming Adventure`;
  const synopsis = meta?.synopsis || `The saga continues in Chapter ${id}.`;
  const pageCount = meta?.pageCount || 20;
  const dateReleased = meta?.dateReleased || 'TBA';
  const prefix = meta?.prefix || `YOT-CHAP${id}`;
  const folder = meta !== undefined ? meta.folder : `chapter${id}`;
  const spreads = meta?.spreads || [];
  const skips = meta?.skips || [];
  const thumbnailPage = meta?.thumbnailPage ?? 1;
  const hasCover = meta?.hasCover || false;

  const images: string[] = [];
  const base = R2_BASE_URL.endsWith('/') ? R2_BASE_URL : `${R2_BASE_URL}/`;
  const folderPart = folder
    ? folder.endsWith('/')
      ? folder
      : `${folder}/`
    : '';

  const isVolumeStart = [1, 8, 16, 24].includes(id);

  // If chapter has a cover and is a volume start, add it first
  if (hasCover && isVolumeStart) {
    const coverFilename = meta?.coverFilename || 'Cover.jpg';
    images.push(`${base}${folderPart}${coverFilename}`);
  }

  // Generate pages starting from 1
  for (let p = 1; p <= pageCount; p++) {
    if (skips.includes(p)) continue;

    if (spreads.includes(p)) {
      const p1 = String(p).padStart(3, '0');
      const p2 = String(p + 1).padStart(3, '0');
      images.push(`${base}${folderPart}${prefix}_${p1}_${p2}.png`);
      p++;
    } else {
      images.push(generateMangaUrl(prefix, folder, p));
    }
  }

  // Determine thumbnail
  let thumbnail = images[0] || '';
  if (thumbnailPage === 0 && hasCover) {
    const coverFilename = meta?.coverFilename || 'Cover.jpg';
    thumbnail = `${base}${folderPart}${coverFilename}`;
  } else if (thumbnailPage > 0) {
    const offset = isVolumeStart && hasCover ? 1 : 0;
    thumbnail = images[offset + thumbnailPage - 1] || images[0] || '';
  }

  return {
    id,
    title,
    synopsis,
    pageCount,
    dateReleased,
    images,
    thumbnail,
    thumbnailPage,
  };
});

export const LATEST_CHAPTER_ID =
  CHAPTER_METADATA[CHAPTER_METADATA.length - 1]?.id || 1;

export const CHARACTERS: Character[] = [
  {
    id: 'rou',
    name: 'Rou Akei',
    role: 'The Unlikely Captain',
    bio: 'Rou is the Captain of Viveform’s top protection squad. She’s unorthodox, charging ahead with passion and loyalty. She met Commander Ender Valen, who promoted her to Captain despite widespread doubt.',
    personality:
      'Impulsive but heartfelt, acts on instinct. Rou can see into the future with her Augur, Teleregnum.',
    imageUrls: [
      'assets/RouPort.png',
      'assets/RouPage1.png',
      'assets/RouPage2.png',
      'assets/RouPage3.png',
    ],
  },
  {
    id: 'fig',
    name: 'Fig Noston',
    role: 'The Genius Geologist',
    bio: 'Second-in-command of the squad. Calm, thoughtful, and brilliant. Her stability is tested when a Sky Pirate demands payment for an old debt.',
    personality:
      'Practical and focused under pressure. Fig can turn to diamond with her Augur, Admavis.',
    imageUrls: [
      'assets/FigPort.png',
      'assets/FigPage1.png',
      'assets/FigPage2.png',
      'assets/FigPage3.png',
    ],
  },
  {
    id: 'drendith',
    name: 'Drendith Nosferi',
    role: 'The Dark Showman',
    bio: "Scion of the legendary Nosferi circus dynasty. Suspected of using outlawed magic, he seeks revenge against Viveform for his family's downfall.",
    personality:
      'Flamboyant exterior hiding deep darkness. Drendith creates illusions with his Augur, Perfissio.',
    imageUrls: [
      'assets/DrendithPort.png',
      'assets/DrenPage1.png',
      'assets/DrenPage2.png',
      'assets/DrenPage3.png',
    ],
  },
  {
    id: 'ender',
    name: 'Ender Valen',
    role: 'The Kingmaker',
    bio: 'Leader of Viveform’s military branch. Stoic and sharp, he carries secrets behind a scar that defines his presence.',
    personality:
      'Calm and gentle with friends, but possessed by a dark deity that makes him ruthless.',
    imageUrls: [
      'assets/EnderPort.png',
      'assets/EnderPage1.png',
      'assets/EnderPage2.png',
      'assets/EnderPage3.png',
    ],
  },
  {
    id: 'kenzi',
    name: 'Kenzi Akimoto',
    role: 'The Royal Rogue',
    bio: 'Daughter of an Pleading Council member, Kenzi fights to earn her place through skill rather than bloodline.',
    personality: 'Energetic, bossy, and confident with a fiery attitude.',
    imageUrls: [
      'assets/KenziPort.png',
      'assets/KenziPage1.png',
      'assets/KenziPage2.png',
      'assets/KenziPage3.png',
    ],
  },
  {
    id: 'solomon',
    name: 'Solomon Vex',
    role: 'The Flame Spirit',
    bio: 'A Tier 4 swordsman who woke up with no memory of his past. He wields Spirignum, a flame spirit Augur.',
    personality:
      'Fiery and fiercely loyal, loves a good challenge and eats heartily.',
    imageUrls: [
      'assets/VexPort.png',
      'assets/VexPage1.png',
      'assets/VexPage2.png',
      'assets/VexPage3.png',
    ],
  },
  {
    id: 'boca',
    name: 'Boca',
    role: "Vex's Pal",
    bio: 'A red panda companion with a mischievous streak and a heart of gold.',
    personality: 'Innocent and curious, driven to explore the world.',
    imageUrls: [
      'assets/BocaPort.png',
      'assets/BocaPage1.png',
      'assets/BocaPage2.png',
      'assets/BocaPage3.png',
    ],
  },
  {
    id: 'kaz',
    name: 'Kaz Greenfield',
    role: 'The Gifted Soldier',
    bio: 'A rising star in Viveform with an unmatched reputation, struggling with rivalry after Rou’s promotion.',
    personality:
      'Disciplined and confident, occasionally cocky but well-meaning.',
    imageUrls: [
      'assets/KazPort.png',
      'assets/KazPage1.png',
      'assets/KazPage2.png',
      'assets/KazPage3.png',
    ],
  },
];

export const FANART: Fanart[] = [];
export const PATREON_URL = SOCIAL_LINKS.patreon;

export const saveToCMS = (_data?: any) => {};
export const resetCMS = () => {};
