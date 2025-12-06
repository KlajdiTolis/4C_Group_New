
export interface Room {
  name: string;
  image: string;
  gallery?: string[];
  size: string;
  capacity: string;
  price: number;
  features: string[];
}

export interface Amenity {
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  location: string;
}

export interface SpecialOffer {
  title: string;
  description: string;
  value: string; // e.g., "15% OFF"
  code?: string;
  validUntil?: string;
}

export interface Activity {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  shortDesc: string;
  image: string;
  features: string[]; // General features for the card
  priceStart: number;
  // Detail page specific data
  rooms: Room[];
  amenitiesList: Amenity[]; // For "What awaits you"
  gallery: string[];
  reviews: Review[];
  mapLocation: { lat: number; lng: number; address: string };
  specialOffer?: SpecialOffer;
  activities?: Activity[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}