export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  imagePosition?: string;
  highlights: string[];
  focusAreas: string[];
}

export interface CoreValue {
  name: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface LearningMethod {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  badge: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'tahfidz' | 'pembelajaran' | 'coding' | 'kepemimpinan' | 'pesantren';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface WaveSchedule {
  wave: string;
  period: string;
  status: 'active' | 'upcoming';
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  needsAdminReview?: boolean;
  category: string;
}
