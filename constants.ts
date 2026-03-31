import { Chapter, Character, Fanart, Episode, VoiceActor } from './types';
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

export const PLACEHOLDER_SERVICE = 'https://picsum.photos';
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

export const VOICE_ACTORS: VoiceActor[] = [
  {
    id: 'va1',
    name: 'Taylor Shaye',
    characterName: 'Rou Akei',
    vaImageUrl: `${R2_BASE_URL}/cast/Taylor.jpeg`,
    charImageUrl: `/assets/RouPort.png`,
    twitter: '@TaylorShayeVA',
    instagram: '@taylorshaye',
  },
  {
    id: 'va2',
    name: 'Brooke Johnson',
    characterName: 'Fig Noston',
    vaImageUrl: `${R2_BASE_URL}/cast/Brooke.jpg`,
    charImageUrl: `/assets/FigPort.png`,
    twitter: '@BrookJoshnsonVO',
    instagram: '',
  },
  {
    id: 'va3',
    name: 'Harry Dyer',
    characterName: 'Drendith Nosferi',
    vaImageUrl: `${R2_BASE_URL}/cast/Harry.jpg`,
    charImageUrl: `/assets/DrendithPort.png`,
    twitter: '@Hazer_D',
    instagram: '@HazerD87 ',
  },
  {
    id: 'va4',
    name: 'Josh Wichard',
    characterName: 'Ender Valen',
    vaImageUrl: `${R2_BASE_URL}/cast/Josh.jpeg`,
    charImageUrl: `/assets/EnderPort.png`,
    twitter: '',
    instagram: '@JoshWichard',
  },
  {
    id: 'va5',
    name: 'Ashlieh Calderon',
    characterName: 'Kenzi Akimoto',
    vaImageUrl: `${R2_BASE_URL}/cast/Ashlieh.png`,
    charImageUrl: `/assets/KenziPort.png`,
    twitter: '@Ashlieh_AJC',
    instagram: '@ashliehvo_ajc',
  },
  {
    id: 'va6',
    name: 'Jacob Abegglen',
    characterName: 'Solomon Vex',
    vaImageUrl: `${R2_BASE_URL}/cast/Jacob.png`,
    charImageUrl: `/assets/VexPort.png`,
    twitter: '@AbegglenJacob',
    instagram: '@Jacob.Abegglen',
  },
  {
    id: 'va7',
    name: 'Sara Rego',
    characterName: 'Boca',
    vaImageUrl: `${R2_BASE_URL}/cast/Sara.jpg`,
    charImageUrl: `/assets/BocaPort.png`,
    twitter: '@ymnatweet',
    instagram: '@ymna.jpg',
  },
  {
    id: 'va8',
    name: 'Griffin Puatu',
    characterName: 'Kaz Greenfield',
    vaImageUrl: `${R2_BASE_URL}/cast/Griffin.jpg`,
    charImageUrl: `/assets/KazPort.png`,
    twitter: '@GriffinPuatu',
    instagram: '@GriffinPuatu',
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
    dateReleased: '4/22/2024',
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
    dateReleased: '5/31/2024',
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
    dateReleased: '7/5/2024',
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
    dateReleased: '8/12/2024',
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
    dateReleased: '9/7/2024',
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
    dateReleased: '10/2/2024',
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
    dateReleased: '10/30/2024',
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
    dateReleased: '12/14/2024',
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
    dateReleased: '1/5/2025',
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
    dateReleased: '1/24/2025',
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
    dateReleased: '2/13/2025',
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
    dateReleased: '3/1/2025',
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
    dateReleased: '3/21/2025',
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
    dateReleased: '4/7/2025',
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
    dateReleased: '4/25/2025',
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
    dateReleased: '5/16/2025',
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
    dateReleased: '6/5/2025',
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
    dateReleased: '6/24/2025',
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
    pageCount: 18,
    spreads: [],
    skips: [],
    dateReleased: '7/15/2025',
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
    dateReleased: '8/1/2025',
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
    dateReleased: '8/18/2025',
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
    dateReleased: '9/11/2025',
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
    dateReleased: '10/2/2025',
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
    dateReleased: '11/3/2025',
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
    dateReleased: '11/21/2025',
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
    dateReleased: '12/13/2025',
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
    dateReleased: '12/29/2025',
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
    dateReleased: '1/16/2026',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER28.png',
    heroImagePage: 5,
    heroImagePosition: 'center top',
  },
  {
    id: 29,
    title: 'Chapter 29: Solomon vs Saul',
    prefix: 'YOT-CH29',
    folder: 'chapter29',
    synopsis: `A big clash begins between Solomon Vex and Drendith Nosferi's strongest ally, the Sitarist Saul. A match that might be too much for even Vex to handle, begins under glistening stage lights!`,
    pageCount: 14,
    spreads: [2, 3],
    skips: [],
    dateReleased: '3/8/2026',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CH29COVER.png',
    heroImagePage: 5,
    heroImagePosition: 'center top',
  },
];

/**
 * FINAL CHAPTERS EXPORT
 * Generates the full list of chapters using metadata or smart defaults.
 */
export const CHAPTERS: Chapter[] = Array.from({ length: 29 }, (_, i) => {
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
    bio: 'Rou is the Captain of Viveform’s top protection squad, based in New Alta Izera, Glory Peak. She’s a bit unorthodox, often charging ahead before fully thinking things through, but that same impulsiveness is driven by passion, loyalty, and an unshakable sense of justice. After joining Viveform she met Commander Ender Valen, the first real “friend” she ever had. He promoted her to Captain when nearly the entire organization doubted her. That trust means everything to Rou, even if she struggles to show it.',
    personality:
      'Impulsive but heartfelt, she acts on instinct and not much else. Rou can see into the future with her Augur, Teleregnum.',
    imageUrls: ['assets/RouPort.png'],
  },
  {
    id: 'fig',
    name: 'Fig Noston',
    role: 'The Genius Geologist',
    bio: 'Fig Noston is the second-in-command of Viveform’s top protection squad for New Alta Izera, Glory Peak. She’s calm, thoughtful, brilliant and always seems to know what to do when things go sideways. But that all comes crashing down when a mysterious Sky Pirate digs up old debts, demanding payment for something Fig took from him. Threatening to unravel the life she’s fought to build.',
    personality:
      'Practical and focused under pressure. Fig can turn to diamond with her Augur, Admavis.',
    imageUrls: ['assets/FigPort.png'],
  },
  {
    id: 'drendith',
    name: 'Drendith Nosferi',
    role: 'The Dark Showman',
    bio: "Drendith Nosferi comes from the legendary Nosferi family, a famed circus dynasty in Glory Peak. It's suspected he wields a dangerous and outlawed magic to perform his circus shows, and was placed under surveillance by Viveform. Under the glitz of performance, Drendith is motivated by a deep desire to restore his family’s honor and seek revenge against Viveform for their role in their catastrophic downfall.",
    personality:
      'Flamboyant exterior hiding deep darkness. Drendith creates illusions with his Augur, Perfissio.',
    imageUrls: ['assets/DrendithPort.png'],
  },
  {
    id: 'ender',
    name: 'Ender Valen',
    role: 'The Kingmaker',
    bio: 'Ender Valen leads Viveform’s military branch with unwavering discipline and a reputation for effectiveness that few dare question. Marked by the scar running down the left side of his face and body, Ender is as feared as he is respected, a figure known for his stoic presence and sharp command of any situation. He carries his own secrets, the largest of which remains hidden behind the scar that defines him.',
    personality:
      'Calm and gentle with friends, but possessed by a dark deity that makes him ruthless.',
    imageUrls: ['assets/EnderPort.png'],
  },
  {
    id: 'kenzi',
    name: 'Kenzi Akimoto',
    role: 'The Royal Rogue',
    bio: 'Kenzi was born into the prestigious race of "Ordained", the daughter of an Pleading Council member and heir to a life most people could only dream of. But Kenzi’s determined to earn her place not by bloodline, but by skill and to fight for a world where no one’s born better than anyone else.',
    personality: 'Energetic, bossy, and confident with a fiery attitude.',
    imageUrls: ['assets/KenziPort.png'],
  },
  {
    id: 'solomon',
    name: 'Solomon Vex',
    role: 'The Flame Spirit',
    bio: 'Vex is a Tier 4 swordsman in Viveform who wields Spirignum, the flame spirit Augur that lets him breathe and control fire during battle. Ten years ago, Vex woke up in the forests of Laetowood without any memory of who he was or where he came from. The only clues to his identity are a strange necklace he has always worn and a red panda cub named Boca. His sword, Zhomei, wrapped in bandages, is a trusted weapon whose origins are as mysterious as his own past.',
    personality:
      'Fiery and fiercely loyal, loves a good challenge and eats heartily.',
    imageUrls: ['assets/VexPort.png'],
  },
  {
    id: 'boca',
    name: 'Boca',
    role: "Vex's Pal",
    bio: "A red panda child who is Vex's closest companion. Despite his innocent look, Boca has a mischievous streak and a knack for getting into trouble, but his heart is always in the right place. He and Vex want to travel Viso to find out more about their past.",
    personality: 'Innocent and curious, driven to explore the world.',
    imageUrls: ['assets/BocaPort.png'],
  },
  {
    id: 'kaz',
    name: 'Kaz Greenfield',
    role: 'The Gifted Soldier',
    bio: 'Kaz has spent his entire life preparing to serve Viveform. Born into a decorated military family, his upbringing was built on discipline, sacrifice, and the belief that glory is earned through unwavering loyalty. Within Viveform’s ranks, Kaz’s reputation is unmatched, a rising star destined for leadership. But he lost his chance, when Rou was promoted to Captain over him. Now, Kaz must navigate the complex emotions of rivalry, respect, and the desire to prove himself worthy of command.',
    personality:
      'Disciplined and confident, occasionally cocky but well-meaning.',
    imageUrls: ['assets/KazPort.png'],
  },
];

export const FANART: Fanart[] = [];
export const PATREON_URL = SOCIAL_LINKS.patreon;

export const saveToCMS = (_data?: any) => {};
export const resetCMS = () => {};
