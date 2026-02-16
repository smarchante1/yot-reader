export interface Chapter {
  id: number;
  title: string;
  synopsis: string;
  thumbnail: string;
  thumbnailPage?: number;
  images: string[]; // List of URLs for the manga pages
  pageCount: number;
  dateReleased: string;
  heroImagePage?: number; // Which page to use for homepage hero (0-indexed)
  heroImagePosition?: string; // CSS background-position for hero image (e.g., "center top")
}

export interface Episode {
  id: number;
  title: string;
  thumbnail: string;
  duration?: string;
  comingSoon: boolean;
  description: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  bio: string;
  personality: string;
  imageUrls: string[];
}

export interface Fanart {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  artistUrl?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
