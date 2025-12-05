export interface VideoObject {
  "@type": "VideoObject";
  "@id"?: string;
  name: string;
  description: string;
  thumbnailUrl?: string; // New field from raw data
  embedUrl: string;
  contentUrl?: string;
  uploadDate?: string;
  keywords: string; // We will keep this as a string to match your raw data format
}