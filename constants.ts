import { Hotel } from './types';

export const HOTELS: Hotel[] = [
  {
    id: 'green-coast',
    name: 'Green Coast Resort',
    location: 'Palasa, Albania',
    description: 'Nestled on the pristine shores of the Albanian Riviera, Green Coast offers an unparalleled blend of modern luxury and natural beauty. Experience private villas, crystal clear waters, and world-class hospitality.',
    shortDesc: 'The Jewel of the Riviera',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop',
    features: ['Private Beach', 'Luxury Villas', 'Helipad'],
    priceStart: 350,
    mapLocation: { lat: 40.15, lng: 19.6, address: "Palasë, Vlorë County, Albania" },
    rooms: [
        {
            name: "Sea View Villa",
            image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
            size: "120 m²",
            capacity: "4 Guests",
            price: 450,
            features: ["Private Pool", "Ocean View", "Kitchenette"]
        },
        {
            name: "Promenade Suite",
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
            size: "65 m²",
            capacity: "2 Guests",
            price: 350,
            features: ["Balcony", "King Bed", "Rain Shower"]
        }
    ],
    amenitiesList: [
        { title: "Private Beach Access", description: "Direct access to the pristine white sands of Palasa.", icon: "Waves" },
        { title: "Gourmet Dining", description: "3 exclusive restaurants serving Mediterranean cuisine.", icon: "Utensils" },
        { title: "Wellness Center", description: "Full-service spa, sauna, and infinity pools.", icon: "Sparkles" },
        { title: "Concierge Service", description: "24/7 personalized service for all your needs.", icon: "Bell" },
        { title: "Valet Parking", description: "Secure underground parking with charging stations.", icon: "Car" },
        { title: "Connectivity", description: "High-speed fiber optic Wi-Fi throughout the resort.", icon: "Wifi" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-6e53ce41e887?q=80&w=2070&auto=format&fit=crop"
    ],
    reviews: [
        { id: 1, name: "Elena K.", text: "Absolutely stunning. The villa was perfect.", rating: 5, location: "London, UK" },
        { id: 2, name: "James B.", text: "Best beach in Europe. Service was top notch.", rating: 5, location: "Berlin, DE" }
    ]
  },
  {
    id: 'valamar',
    name: 'Valamar Durrës',
    location: 'Durrës, Albania',
    description: 'Located in the historic coastal city of Durrës, Valamar is a sanctuary of relaxation. Perfect for families and couples alike, offering golden sand beaches and easy access to the ancient amphitheater.',
    shortDesc: 'Coastal Serenity',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop',
    features: ['Family Suites', 'Infinity Pool', 'Conference Center'],
    priceStart: 180,
    mapLocation: { lat: 41.32, lng: 19.45, address: "Rruga Plazhit, Durrës, Albania" },
    rooms: [
        {
            name: "Family Suite",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
            size: "80 m²",
            capacity: "2 Adults, 2 Children",
            price: 250,
            features: ["Two Bedrooms", "Living Area", "Sea View"]
        },
        {
            name: "Deluxe Room",
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
            size: "40 m²",
            capacity: "2 Guests",
            price: 180,
            features: ["Balcony", "Minibar", "Work Desk"]
        }
    ],
    amenitiesList: [
        { title: "Family Activities", description: "Kids club, shallow pools, and animation teams.", icon: "Sparkles" },
        { title: "Conference Halls", description: "3 large halls for events up to 500 people.", icon: "Building" },
        { title: "Seaside Bar", description: "Enjoy sunsets with our signature cocktails.", icon: "Utensils" },
        { title: "Fitness Gym", description: "Modern equipment for your workout routine.", icon: "Dumbbell" },
        { title: "Secure Parking", description: "Ample parking space for guests.", icon: "Car" },
        { title: "Beach Service", description: "Dedicated umbrellas and loungers for every room.", icon: "Waves" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    ],
    reviews: [
        { id: 1, name: "Marco R.", text: "Great for the kids, very safe and clean.", rating: 5, location: "Rome, IT" },
        { id: 2, name: "Ana S.", text: "Beautiful sunset views from the balcony.", rating: 4, location: "Tirana, AL" }
    ]
  },
  {
    id: 'museum',
    name: 'The Museum Hotel',
    location: 'Tirana City Center',
    description: 'Immerse yourself in history and culture in the heart of the capital. The Museum Hotel combines architectural elegance with contemporary comfort, steps away from Skanderbeg Square.',
    shortDesc: 'Urban Elegance',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    features: ['Rooftop Bar', 'City Views', 'Business Lounge'],
    priceStart: 220,
    mapLocation: { lat: 41.3275, lng: 19.818, address: "Sheshi Skënderbej, Tirana, Albania" },
    rooms: [
        {
            name: "Executive Suite",
            image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070&auto=format&fit=crop",
            size: "55 m²",
            capacity: "2 Guests",
            price: 320,
            features: ["City View", "Lounge Access", "Bathtub"]
        },
        {
            name: "Classic Room",
            image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop",
            size: "35 m²",
            capacity: "2 Guests",
            price: 220,
            features: ["Smart TV", "Rain Shower", "Espresso Machine"]
        }
    ],
    amenitiesList: [
        { title: "Rooftop Lounge", description: "Panoramic views of Skanderbeg Square.", icon: "Utensils" },
        { title: "Business Center", description: "High-tech meeting rooms and co-working spaces.", icon: "Building" },
        { title: "Spa", description: "Indoor heated pool and massage therapy.", icon: "Sparkles" },
        { title: "Concierge", description: "Expert local guides and ticket booking.", icon: "Bell" },
        { title: "Airport Shuttle", description: "Private transfers to Rinas Airport.", icon: "Car" },
        { title: "High Speed Wifi", description: "1GBps connection for business needs.", icon: "Wifi" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
    ],
    reviews: [
        { id: 1, name: "Sarah J.", text: "Perfect location for business trips.", rating: 5, location: "NY, USA" },
        { id: 2, name: "David L.", text: "The design details are incredible.", rating: 5, location: "Paris, FR" }
    ]
  }
];

export const NAV_LINKS = [
  { name: 'Hotels', href: '#hotels' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Dining', href: '#dining' },
  { name: 'Reviews', href: '#reviews' },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Elena K.",
    text: "The Green Coast Resort was absolutely stunning. The villa was perfect and the service was impeccable.",
    rating: 5,
    location: "London, UK"
  },
  {
    id: 2,
    name: "Marco Rossi",
    text: "Valamar in Durrës offered the perfect family getaway. The kids loved the pool and the beach was right there.",
    rating: 5,
    location: "Rome, Italy"
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    text: "A true gem in Tirana. The Museum Hotel is sophisticated and perfectly located for exploring the city.",
    rating: 5,
    location: "New York, USA"
  }
];

export const FACILITIES = [
  { name: "Private Beach", icon: "Waves" },
  { name: "Fine Dining", icon: "Utensils" },
  { name: "Spa & Wellness", icon: "Sparkles" },
  { name: "Concierge", icon: "Bell" },
  { name: "High-Speed Wifi", icon: "Wifi" },
  { name: "Luxury Transport", icon: "Car" },
];

export const EXPLORE_ITEMS = [
  {
    title: "Dine and Shop",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    description: "Exquisite culinary experiences and boutique shopping."
  },
  {
    title: "Events and Activities",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    description: "Curated events designed to entertain and inspire."
  },
  {
    title: "Sights of Albania",
    image: "https://images.unsplash.com/photo-1598322625292-66b962054fb0?q=80&w=2070&auto=format&fit=crop",
    description: "Explore the ancient history and natural wonders."
  }
];

export const SLIDER_IMAGES = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
];