import { HashIcon } from 'lucide-react';
import { Chapter, Character, Fanart } from './types';

export const MANGA_TITLE = 'Ye Olde Treehouse';
export const R2_BASE_URL =
  'https://pub-c762db5339954ab98813a32e9aaa79ff.r2.dev';

export const COLORS = {
  white: '#FFFFFF',
  lightBlue: '#E1F6FA',
  darkBlue: '#016F93',
  teal: '#1192A3',
};

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
  patreon: 'https://patreon.com',
  readManga: '/#/chapters',
};

/**
 * DRY URL GENERATOR
 * Now accepts a prefix and folder to handle different naming conventions per chapter.
 */
export const generateMangaUrl = (
  prefix: string,
  folder: string,
  pageNum: number,
): string => {
  const p3 = String(pageNum).padStart(3, '0');
  const base = R2_BASE_URL.endsWith('/') ? R2_BASE_URL : `${R2_BASE_URL}/`;
  const folderPart = folder
    ? folder.endsWith('/')
      ? folder
      : `${folder}/`
    : '';

  return `${base}${folderPart}${prefix}_${p3}.png`;
};

/**
 * CHAPTER METADATA
 * spreads: [6] means page 6 and 7 are a single file named prefix_006_007.png
 * skips: [2, 3] means pages 2 and 3 do not exist and should be skipped entirely
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
    folder: '', // Root folder
    synopsis:
      'Captain Rou and Agent Fig are on a mission to hunt down the dangerous Circus Ringmaster, Drendith Nosferi. Nothing goes as they plan though, as their wild hunt kicks off an even wilder journey!',
    pageCount: 49,
    spreads: [6], // Page 6-7 is YOT-CHAP1_006_007.png
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
      'Kenzi Akimoto, the self-described "Vigilante" of Glory Peak, confronts Drendith Nosferi\'s troupe as they attempt to obliterate the circus compound. Commander Ender ordered Rou and Fig to rendezvous with Kenzi, their new teammate. But will she make it out of this clash alive?',
    pageCount: 17,
    spreads: [], // Page 4-5 and 12-13 are spreads
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
      "Rou and Fig's duo becomes a trio as Kenzi Akimoto joins the Regulation. With permission to use the full extent of their Augur powers, Commander Ender sends them on a crucial mission: enlist the help of ally Solomon Vex in New Colony Prima. But first, they must brave the lawless Outerlands.",
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
    dateReleased: '1/15/2023',
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
      "An electrifying duel ignites as Rou puts Tier 4 swordsman Solomon Vex to the test. But something's off -Rou's mind-reading augur power can't see anything in Vex's head! As Rou pushes herself to the limit, she realizes that there's a strangeness about their new ally. But just when the dust settles, something ominous appears, bearing the mark of the team's greatest foe. Has Drendith Nosferi been lurking in the shadows all along?",
    pageCount: 23,
    spreads: [4, 14, 20],
    skips: [2, 3], // Skipping pages 2 and 3 as requested
    dateReleased: '1/15/2023',
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
      'Rou and Solomon Vex\'s friendly spar takes a dark turn as mysterious orbs crash through the ceiling, bearing the dreaded Nosferi insignia. A chilling voice fills the training hall - Drendith Nosferi has infiltrated New Colony Prima! As the notorious ringmaster toys with the Regulation agents through his illusions, he extends a cryptic invitation to the "Resurrection Macabre." But when his phantom bombers attack, something awakens in Vex that leaves everyone stunned. With the security of their base compromised and new powers emerging, the question remains: what sinister show awaits at the ruins of Altamerian? And how much does Drendith Nosferi really know about the Regulation\'s plans to stop him?',
    pageCount: 19,
    spreads: [17],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER6.png',
  },
  {
    id: 7,
    title: 'Chapter 7: Big Drop',
    prefix: 'YOT-CH7',
    folder: 'chapter7',
    synopsis: `In the aftermath of Nosferi's surprise attack, the Regulation shares one final meal at New Colony Prima. But the mood shifts when Kaz delivers unexpected news - he's been ordered to stay behind and protect the Colony, his doubts about Rou's leadership left unspoken. The crew departs for the gateway of Vex's homeland, "Big Drop" where a grumpy tower watcher with a 10 year grudge guards the way. Here, the team faces their first test: trusting each other enough to leap into the unknown.`,
    pageCount: 23,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER7.png',
  },
  {
    id: 8,
    title: 'Chapter 8: City of Spores',
    prefix: 'YOT-CH8',
    folder: 'chapter8',
    synopsis: `A wild Pterosaur ride drops the Regulation into Sporenia, where Vex reunites with an old friend from his past. But a chance for rest turns strange when a charismatic hotelier invites them in—and an ominous banging begins to echo through the night. Will this unexpected detour derail their critical mission?`,
    pageCount: 21,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 1,
  },
  {
    id: 9,
    title: 'Chapter 9: When Sirens Blow',
    prefix: 'YOT-CH9',
    folder: 'chapter9',
    synopsis: `While Rou and the gang wait in Josho town square for Lemon, two crises explode simultaneously: Vex and Boca confront the source of the banging from the previous night, and the ladies are stunned by a sudden swarm of strange creatures. Fig's diamond-hard Admavis proves devastating against the creatures, but when both Kenzi and Rou fall to their power, hope seems lost. Help is coming – though Fig will soon wish it hadn't.`,
    pageCount: 19,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER9.png',
  },
  {
    id: 10,
    title: 'Chapter 10: Bold Moves',
    prefix: 'YOT-CH10',
    folder: 'chapter10',
    synopsis: `The Regulation's chaotic day in Sporenia escalates as they're escorted to the Central Hall after being saved by a Sky pirate. Vex, carrying a strange Calonae boy, faces a tense reunion with the Valor Guard—confronting a past he seemingly ran from five years ago.`,
    pageCount: 20,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER10.png',
  },
  {
    id: 11,
    title: 'Chapter 11: Hard Choices',
    prefix: 'YOT-CH11',
    folder: 'chapter11',
    synopsis: `The Regulation arrives in Laetowood, where Vex's old friend Zennis reveals a land in chaos: giant wasp humans, mind-controlled Calonae, and the resurgence of a legendary wood spirit. Zennis begs for their help, but Rou is torn—should they aid Laetowood or stay on mission to capture Drendith Nosferi? When the mysterious Sitarist Saul uncovers a shocking connection between Drendith and the chaos, Rou must make a bold decision that could alter their mission—and the fate of Laetowood.`,
    pageCount: 22,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER11.png',
  },
  {
    id: 12,
    title: 'Chapter 12: The Wood Lives',
    prefix: 'CHAP-12',
    folder: 'chapter12',
    synopsis: `The group splits up to begin the mission of stopping Drendith Nosferi's corruption of Laetowood.After being dragged into unconsciousness by giant sundews, Rou and Vex awaken in a dark, surreal dream world—a twisted replica of the Nosferi Circus.
And who other to greet them than the Nosferi Ringmaster himself?!`,
    pageCount: 19,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER12.png',
  },
  {
    id: 13,
    title: 'Chapter 13: Inside Your Head',
    prefix: 'CHAP-13',
    folder: 'chapter13',
    synopsis: `Rou and Vex are trapped in Drendith Nosferi's twisted illusion world, where the Ringmaster turns their minds into his personal stage. Bound by Gammi, his ghostly enforcer, they're forced to play by his rules in the "Nosfun House"; a surreal game where their darkest memories and secrets will be exposed.But when Drendith reveals they're inside one of their own minds, things get real. As Rou and Vex bicker and banter, Drendith taunts them with his ultimate plan: to make them stars of his show and force them to confront the painful truths of their pasts.`,
    pageCount: 19,
    spreads: [7],
    skips: [2, 3],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER13.png',
  },
  {
    id: 14,
    title: 'Chapter 14: Zhomei',
    prefix: 'CHAP-14',
    folder: 'chapter14',
    synopsis: `Rou and Vex are forced to witness Vex's own past unfold in Drendith's illusion—a harrowing memory of his younger self, scorched by his sword Zhomei and climbing the massive Big Drop survive. As they realize they're trapped in Vex's mind,  the truth behind his Augur's power becomes terrifyingly clear.`,
    pageCount: 21,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER14.png',
  },
  {
    id: 15,
    title: 'Chapter 15: The Last Agent',
    prefix: 'CHAP-15',
    folder: 'chapter15',
    synopsis: `Fig's past as a notorious treasure hunter catches up to her when the Sky Pirate that saved them in Josho town center ambushes the group, demanding repayment for a rare ore that she stole. But as tensions flare and Koshi reveals his true identity, the team realizes Drendith isn't the only threat in Laetowood.`,
    pageCount: 20,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER15.png',
  },
  {
    id: 16,
    title: 'Chapter 16: The Kingmaker',
    prefix: 'YOTCH-16',
    folder: 'chapter16',
    synopsis: `Viveform's star soldier Kaz Greenfield, confronts Ender about choosing Rou as Captain, then notices something terrifying:shadows coiling from the Commander's scar. When Libertas flies across the room by itself, the truth becomes clear: something dark possesses Ender...`,
    pageCount: 20,
    spreads: [],
    skips: [2],
    dateReleased: '1/15/2023',
    thumbnailPage: 1,
  },
  {
    id: 17,
    title: 'Chapter 17: On Those Who Plead',
    prefix: 'YOTCH-17',
    folder: 'chapter17',
    synopsis: `Ender struggles to contain the dark force plaguing his mind as he prepares for the great "Pleading Council".  But facing the Pleading Council reveals something worse; he's been stealing vital confidential intel. What he found was devastating: his team were test subjects in Viveform's deadliest experiment.`,
    pageCount: 19,
    spreads: [3],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER17.png',
  },
  {
    id: 18,
    title: 'Chapter 18: Drafting Season',
    prefix: 'YOT-CH18',
    folder: 'chapter18',
    synopsis: `Vex never told Rou how he got recruited into Viveform. Luckily for Drendith, that memory makes for the perfect performance. Within Drendith's distorted dreamscape, Rou and Vex witness the moment Vex first faced Commander Ender Valen and the tense battle that decided his future. But Drendith isn't finished yet. When the test concludes, Rou and Vex are dragged into the next act of Drendith's twisted dream state. Waiting for them is something neither expected… a show only a Nosferi could put on.`,
    pageCount: 19,
    spreads: [13],
    skips: [1],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER18.png',
  },
  {
    id: 19,
    title: "Chapter 19: Meet the Nosferi's",
    prefix: 'YOT-CH19',
    folder: 'chapter19',
    synopsis: `Vex never told Rou how he got recruited into Viveform. Luckily for Drendith, that memory makes for the perfect performance. Within Drendith's distorted dreamscape, Rou and Vex witness the moment Vex first faced Commander Ender Valen and the tense battle that decided his future. But Drendith isn't finished yet. When the test concludes, Rou and Vex are dragged into the next act of Drendith's twisted dream state. Waiting for them is something neither expected… a show only a Nosferi could put on.`,
    pageCount: 19,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER19.png',
  },
  {
    id: 20,
    title: 'Chapter 20: Rou VS Drendith',
    prefix: 'YOT-CH20',
    folder: 'chapter20',
    synopsis: `Rou and Vex are cornered against Drendith's crushing colossal illusion. Their only real weapon? A single melody tied to Drendith's past. Will Rou pass her biggest test yet as Captain?`,
    pageCount: 20,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER20.png',
  },
  {
    id: 21,
    title: 'Chapter 21: Ye Olde Treehouse',
    prefix: 'YOT-CH21',
    folder: 'chapter21',
    synopsis: `With Drendith's dream state gone rogue, Rou and Vex are thrown into the very source of the Nosferi Port Oak's power. Ye Olde Treehouse. What happens next changes the course of this tale.`,
    pageCount: 15,
    spreads: [9],
    skips: [1],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER21.png',
  },
  {
    id: 22,
    title: 'Chapter 22: An Eye For A Stone',
    prefix: 'YOT-CH22FINAL',
    folder: 'chapter22',
    synopsis: `Back at Colren Village, Fig and Koshi rehash bad blood as the towns' High Guard reveals a damning secret. But, it's nowhere near as explosive as the secret Fig has been carrying...`,
    pageCount: 17,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER22.png',
  },
  {
    id: 23,
    title: 'Chapter 23: The Regulation',
    prefix: 'YOT-CH23',
    folder: 'chapter23',
    synopsis: `Fig and Koshi fend off the Nosferi troupe as Rou and Vex head back to Sporenia. With Drendith on the ropes after his losing control of his Augur, the whole Regulation assembles at last!`,
    pageCount: 18,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER23.png',
  },
  {
    id: 24,
    title: 'Chapter 24: Villains Lie',
    prefix: 'YOT-CH24',
    folder: 'chapter24',
    synopsis: `Drendith Nosferi assembles his troupe to prepare their assault on Viveform. His goal? Dominate Glory Peak from the skies. His motivation is however...is much more complicated than it seems.`,
    pageCount: 19,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'Cover.JPG', // Add this line
  },
  {
    id: 25,
    title: "Chapter 25: Three's Company",
    prefix: 'CHAP-25',
    folder: 'chapter25',
    synopsis: `The Glory Oak Tree dwarfs Glory Peak for a reason. Viveform's been hiding something in plain sight, and it connects to the magic that destroyed Altamerian. Ender will get some answers he won't like.`,
    pageCount: 19,
    spreads: [3],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER25.png',
  },
  {
    id: 26,
    title: 'Chapter 26: Augurs and Armistice',
    prefix: 'YOT-CH26',
    folder: 'chapter26',
    synopsis: `Laetowood celebrates its freedom over Drendith's illusions, but behind the smiles and drink lies a group of agents on the edge of imploding. Kaz is done following orders. His target? Rou.`,
    pageCount: 18,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
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
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER27.png',
  },
  {
    id: 28,
    title: 'Chapter 28: The Resurrection Macabre',
    prefix: 'CHAP-28FINALl',
    folder: 'chapter28',
    synopsis: `Rou and Koshi travel through the portal vines and arrive in the dilapidated ruins of Altamerian. With the dark showman himself arriving, the stage for the final showdown is set!`,
    pageCount: 19,
    spreads: [],
    skips: [],
    dateReleased: '1/15/2023',
    thumbnailPage: 0,
    hasCover: true,
    coverFilename: 'CHCOVER28.png',
    heroImagePage: 5,
    heroImagePosition: 'center top',
  },
];

/**
 * FINAL CHAPTERS EXPORT
 * Generates the full list of 28 chapters using metadata or smart defaults.
 */
export const CHAPTERS: Chapter[] = Array.from({ length: 28 }, (_, i) => {
  const id = i + 1;
  const meta = CHAPTER_METADATA.find((m) => m.id === id);

  const title = meta?.title || `Chapter ${id}: Upcoming Adventure`;
  const synopsis =
    meta?.synopsis || `The Ye Olde Treehouse saga continues in Chapter ${id}.`;
  const pageCount = meta?.pageCount || 20;
  const dateReleased = meta?.dateReleased || 'TBA';
  const prefix = meta?.prefix || `YOT-CHAP${id}`;
  const folder =
    meta !== undefined ? meta.folder : id === 1 ? '' : `chapter${id}`;
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

  // Check if this is a volume start chapter (1, 8, 16, 24)
  const isVolumeStart = [1, 8, 16, 24].includes(id);

  // If chapter has a cover and is a volume start, add it first to images array
  if (hasCover && isVolumeStart) {
    const coverFilename = meta?.coverFilename || 'Cover.jpg';
    const coverUrl = `${base}${folderPart}${coverFilename}`;
    images.push(coverUrl);
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

  // Determine thumbnail: use cover if hasCover and thumbnailPage is 0, otherwise use specified page
  let thumbnail = images[0] || '';
  if (thumbnailPage === 0 && hasCover) {
    const coverFilename = meta?.coverFilename || 'Cover.jpg'; // Use custom filename or default
    thumbnail = `${base}${folderPart}${coverFilename}`;
  } else if (thumbnailPage > 0) {
    // If cover is in images array (volume start), need to offset by 1
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
    heroImagePage: meta?.heroImagePage || 0,
    heroImagePosition: meta?.heroImagePosition || 'center',
  };
});

/**
 * Helper to find the latest released chapter (the last one with metadata)
 */
export const LATEST_CHAPTER_ID =
  CHAPTER_METADATA[CHAPTER_METADATA.length - 1]?.id || 1;

export const CHARACTERS: Character[] = [
  {
    id: 'kael',
    name: 'Kaelen Swift',
    role: 'The Reluctant Hero',
    bio: 'Born in the outer wastes, Kaelen lived a life of survival until he stumbled upon the Treehouse.',
    personality: 'Pragmatic, observant, and deeply loyal.',
    imageUrls: ['https://picsum.photos/seed/kael_1/800/1200'],
  },
];

export const FANART: Fanart[] = [];
export const PATREON_URL = SOCIAL_LINKS.patreon;

// Placeholders for legacy compatibility
export const saveToCMS = (_data?: any) => {};
export const resetCMS = () => {};
