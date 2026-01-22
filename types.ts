export interface Chapter {
  id: number;
  title: string;
  synopsis: string;
  thumbnail: string;
  thumbnailPage?: number;
  images: string[]; // List of URLs for the manga pages
  pageCount: number;
  dateReleased: string;
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
