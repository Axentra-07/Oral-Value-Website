export type PageView = 'HOME' | 'ABOUT' | 'TEAM' | 'SERVICES' | 'FAQ' | 'CONTACT' | 'RESOURCES';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  role?: string;
}

export interface Doctor {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface VideoResource {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
}