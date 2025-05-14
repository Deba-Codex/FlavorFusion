export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starters' | 'main' | 'desserts' | 'beverages';
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description?: string;
  category: 'wedding' | 'corporate' | 'private' | 'buffet';
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guests: number;
  date: string;
  message: string;
}