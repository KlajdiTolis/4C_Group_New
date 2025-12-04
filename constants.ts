import { Hotel, Review } from './types';

// Shared Data
export const SLIDER_IMAGES = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
];

const HOTELS_EN: Hotel[] = [
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
            gallery: [
                "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1512918760383-5658fa5124f3?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop"
            ],
            size: "120 m²",
            capacity: "4 Guests",
            price: 450,
            features: ["Private Pool", "Ocean View", "Kitchenette"]
        },
        {
            name: "Promenade Suite",
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
            ],
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
        { id: 1, name: "Elena K.", text: "Absolutely stunning. The villa was perfect and the views were breathtaking.", rating: 5, location: "London, UK" },
        { id: 2, name: "James B.", text: "Best beach in Europe. Service was top notch from arrival to departure.", rating: 5, location: "Berlin, DE" },
        { id: 3, name: "Sophie M.", text: "A paradise on earth. The private pool was the highlight of our trip.", rating: 5, location: "Paris, FR" }
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
            gallery: [
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1616486029423-aaa478965c96?q=80&w=2070&auto=format&fit=crop"
            ],
            size: "80 m²",
            capacity: "2 Adults, 2 Children",
            price: 250,
            features: ["Two Bedrooms", "Living Area", "Sea View"]
        },
        {
            name: "Deluxe Room",
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=2074&auto=format&fit=crop"
            ],
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
        { id: 2, name: "Ana S.", text: "Beautiful sunset views from the balcony. Staff was very helpful.", rating: 4, location: "Tirana, AL" },
        { id: 3, name: "John D.", text: "The conference facilities were excellent for our annual meeting.", rating: 5, location: "London, UK" }
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
            gallery: [
                "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop"
            ],
            size: "55 m²",
            capacity: "2 Guests",
            price: 320,
            features: ["City View", "Lounge Access", "Bathtub"]
        },
        {
            name: "Classic Room",
            image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
            ],
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
        { id: 1, name: "Sarah J.", text: "Perfect location for business trips. The wifi is incredibly fast.", rating: 5, location: "NY, USA" },
        { id: 2, name: "David L.", text: "The design details are incredible. A true museum experience.", rating: 5, location: "Paris, FR" },
        { id: 3, name: "Fatima K.", text: "The rooftop bar has the best view in Tirana.", rating: 5, location: "Dubai, UAE" }
    ]
  }
];

const HOTELS_AL: Hotel[] = [
  {
    id: 'green-coast',
    name: 'Green Coast Resort',
    location: 'Palasë, Shqipëri',
    description: 'E vendosur në brigjet e pacenuara të Rivierës Shqiptare, Green Coast ofron një ndërthurje të pashembullt të luksit modern dhe bukurisë natyrore. Përjetoni vila private, ujëra të kristalta dhe mikpritje të klasit botëror.',
    shortDesc: 'Diamanti i Rivierës',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop',
    features: ['Plazh Privat', 'Vila Luksoze', 'Helipad'],
    priceStart: 350,
    mapLocation: { lat: 40.15, lng: 19.6, address: "Palasë, Vlorë, Shqipëri" },
    rooms: [
        {
            name: "Vila me Pamje nga Deti",
            image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1512918760383-5658fa5124f3?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop"
            ],
            size: "120 m²",
            capacity: "4 Të ftuar",
            price: 450,
            features: ["Pishinë Private", "Pamje Oqeani", "Kuzhinë"]
        },
        {
            name: "Suitë Shëtitore",
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
            ],
            size: "65 m²",
            capacity: "2 Të ftuar",
            price: 350,
            features: ["Ballkon", "Krevat King", "Dush Shiu"]
        }
    ],
    amenitiesList: [
        { title: "Akses në Plazh Privat", description: "Akses direkt në rërat e bardha të Palasës.", icon: "Waves" },
        { title: "Ushqim Gurme", description: "3 restorante ekskluzive që shërbejnë kuzhinë mesdhetare.", icon: "Utensils" },
        { title: "Qendër Wellness", description: "Spa e plotë, sauna dhe pishina pa fund.", icon: "Sparkles" },
        { title: "Shërbim Konsierzh", description: "Shërbim i personalizuar 24/7 për të gjitha nevojat tuaja.", icon: "Bell" },
        { title: "Parkim me Valet", description: "Parkim i sigurt nëntokësor me stacione karikimi.", icon: "Car" },
        { title: "Lidhshmëria", description: "Wi-Fi me fibër optike me shpejtësi të lartë në të gjithë resortin.", icon: "Wifi" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-6e53ce41e887?q=80&w=2070&auto=format&fit=crop"
    ],
    reviews: [
        { id: 1, name: "Elena K.", text: "Absolutisht mahnitëse. Vila ishte e përsosur dhe pamjet ishin befasuese.", rating: 5, location: "Londër, MB" },
        { id: 2, name: "James B.", text: "Plazhi më i mirë në Evropë. Shërbimi ishte i nivelit të lartë nga mbërritja deri në nisje.", rating: 5, location: "Berlin, DE" },
        { id: 3, name: "Sophie M.", text: "Një parajsë në tokë. Pishina private ishte pika kulmore e udhëtimit tonë.", rating: 5, location: "Paris, FR" }
    ]
  },
  {
    id: 'valamar',
    name: 'Valamar Durrës',
    location: 'Durrës, Shqipëri',
    description: 'E vendosur në qytetin historik bregdetar të Durrësit, Valamar është një vendstrehim relaksi. E përkryer për familjet dhe çiftet, duke ofruar plazhe me rërë të artë dhe qasje të lehtë në amfiteatrin antik.',
    shortDesc: 'Qetësi Bregdetare',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop',
    features: ['Suita Familjare', 'Pishinë pa Fund', 'Qendër Konferencash'],
    priceStart: 180,
    mapLocation: { lat: 41.32, lng: 19.45, address: "Rruga Plazhit, Durrës, Shqipëri" },
    rooms: [
        {
            name: "Suitë Familjare",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1616486029423-aaa478965c96?q=80&w=2070&auto=format&fit=crop"
            ],
            size: "80 m²",
            capacity: "2 Të rritur, 2 Fëmijë",
            price: 250,
            features: ["Dy Dhoma Gjumi", "Zonë Ndenjeje", "Pamje nga Deti"]
        },
        {
            name: "Dhomë Deluxe",
            image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=2074&auto=format&fit=crop"
            ],
            size: "40 m²",
            capacity: "2 Të ftuar",
            price: 180,
            features: ["Ballkon", "Minibar", "Tavolinë Pune"]
        }
    ],
    amenitiesList: [
        { title: "Aktivitete Familjare", description: "Klub fëmijësh, pishina të cekëta dhe ekipe animacioni.", icon: "Sparkles" },
        { title: "Salla Konferencash", description: "3 salla të mëdha për evente deri në 500 persona.", icon: "Building" },
        { title: "Bar Bregdetar", description: "Shijoni perëndimet e diellit me koktejet tona.", icon: "Utensils" },
        { title: "Palestër Fitnesi", description: "Pajisje moderne për rutinën tuaj të stërvitjes.", icon: "Dumbbell" },
        { title: "Parkim i Sigurt", description: "Hapësirë e bollshme parkimi për mysafirët.", icon: "Car" },
        { title: "Shërbim Plazhi", description: "Çadra dhe shezlongë të dedikuar për çdo dhomë.", icon: "Waves" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560662105-57f8ad6ae2d1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    ],
    reviews: [
        { id: 1, name: "Marco R.", text: "E shkëlqyeshme për fëmijët, shumë e sigurt dhe e pastër.", rating: 5, location: "Romë, IT" },
        { id: 2, name: "Ana S.", text: "Pamje të bukura të perëndimit të diellit nga ballkoni. Stafi ishte shumë i ndihmues.", rating: 4, location: "Tiranë, AL" },
        { id: 3, name: "John D.", text: "Objektet e konferencës ishin të shkëlqyera për takimin tonë vjetor.", rating: 5, location: "Londër, MB" }
    ]
  },
  {
    id: 'museum',
    name: 'The Museum Hotel',
    location: 'Qendra e Tiranës',
    description: 'Zhytuni në histori dhe kulturë në zemër të kryeqytetit. Museum Hotel ndërthur elegancën arkitekturore me komoditetin bashkëkohor, hapa larg Sheshit Skënderbej.',
    shortDesc: 'Elegancë Urbane',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    features: ['Bar në Tarracë', 'Pamje nga Qyteti', 'Sallon Biznesi'],
    priceStart: 220,
    mapLocation: { lat: 41.3275, lng: 19.818, address: "Sheshi Skënderbej, Tiranë, Shqipëri" },
    rooms: [
        {
            name: "Suitë Ekzekutive",
            image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop"
            ],
            size: "55 m²",
            capacity: "2 Të ftuar",
            price: 320,
            features: ["Pamje nga Qyteti", "Akses në Sallon", "Vaskë"]
        },
        {
            name: "Dhomë Klasike",
            image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
            ],
            size: "35 m²",
            capacity: "2 Të ftuar",
            price: 220,
            features: ["TV Smart", "Dush Shiu", "Makinë Espreso"]
        }
    ],
    amenitiesList: [
        { title: "Sallon në Tarracë", description: "Pamje panoramike të Sheshit Skënderbej.", icon: "Utensils" },
        { title: "Qendër Biznesi", description: "Salla takimesh të teknologjisë së lartë dhe hapësira bashkë-punimi.", icon: "Building" },
        { title: "Spa", description: "Pishinë e brendshme me ngrohje dhe terapi masazhi.", icon: "Sparkles" },
        { title: "Konsierzh", description: "Udhërrëfyes lokalë ekspertë dhe rezervim biletash.", icon: "Bell" },
        { title: "Transport Aeroporti", description: "Transferime private në Aeroportin e Rinasit.", icon: "Car" },
        { title: "Wi-Fi i Shpejtë", description: "Lidhje 1GBps për nevojat e biznesit.", icon: "Wifi" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
    ],
    reviews: [
        { id: 1, name: "Sarah J.", text: "Vendndodhje e përsosur për udhëtime pune. Wi-fi është tepër i shpejtë.", rating: 5, location: "NY, SHBA" },
        { id: 2, name: "David L.", text: "Detajet e dizajnit janë të jashtëzakonshme. Një përvojë e vërtetë muzeore.", rating: 5, location: "Paris, FR" },
        { id: 3, name: "Fatima K.", text: "Bari në tarracë ka pamjen më të mirë në Tiranë.", rating: 5, location: "Dubai, EBA" }
    ]
  }
];

export const CONTENT = {
    en: {
        hotels: HOTELS_EN,
        navLinks: [
            { name: 'Hotels', href: '#hotels' },
            { name: 'Experiences', href: '#experiences' },
            { name: 'Dining', href: '#dining' },
            { name: 'Reviews', href: '#reviews' },
        ],
        facilities: [
            { name: "Private Beach", icon: "Waves" },
            { name: "Fine Dining", icon: "Utensils" },
            { name: "Spa & Wellness", icon: "Sparkles" },
            { name: "Concierge", icon: "Bell" },
            { name: "High-Speed Wifi", icon: "Wifi" },
            { name: "Luxury Transport", icon: "Car" },
        ],
        exploreItems: [
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
        ],
        reviews: [
            { id: 1, name: "Elena K.", text: "The Green Coast Resort was absolutely stunning. The villa was perfect and the service was impeccable.", rating: 5, location: "London, UK" },
            { id: 2, name: "Marco Rossi", text: "Valamar in Durrës offered the perfect family getaway. The kids loved the pool and the beach was right there.", rating: 5, location: "Rome, Italy" },
            { id: 3, name: "Sarah Jenkins", text: "A true gem in Tirana. The Museum Hotel is sophisticated and perfectly located for exploring the city.", rating: 5, location: "New York, USA" }
        ],
        labels: {
            bookNow: "Book Now",
            bookStay: "Book Your Stay",
            welcome: "Welcome to Albania",
            luxuryResorts: "Luxury Hotels & Resorts",
            scrollExplore: "Scroll to Explore",
            ourHotels: "Our Hotels",
            excellence: "Experience Excellence Across Albania",
            hospitality: "Hospitality",
            viewDetails: "View Details",
            startingFrom: "Starting from",
            night: "night",
            exploreHotel: "Explore Hotel",
            sanctuaryTitle: "A Sanctuary of",
            sanctuarySubtitle: "Mediterranean Luxury",
            sanctuaryText1: "The 4C Group collection is designed with first-class facilities and is subject to the highest standards of hospitality. Whether you seek the vibrant city life of Tirana or the serene waves of the Riviera, our properties offer a seamless blend of comfort and elegance.",
            sanctuaryText2: "With strategically located properties across Albania, we offer the perfect infrastructure for both leisure and business travelers. From the nearby Marina Village boutiques to the historic amphitheaters, every stay promises a new discovery.",
            readStory: "Read Our Story",
            facilitiesTitle: "Facilities & Services",
            facilitiesText: "With round-the-clock service and premium amenities, our dedicated team ensures your every need is met so you can enjoy your Albanian experience to the fullest.",
            exploreTitle: "Explore More",
            testimonials: "Testimonials",
            guestExperiences: "Guest Experiences",
            footerText: "Experience the finest hospitality in Albania. From the coast to the capital, we are your home away from home.",
            contactUs: "Contact Us",
            newsletter: "Newsletter",
            newsletterText: "Subscribe to receive exclusive offers and news.",
            subscribe: "Join",
            rightsReserved: "4C Group Albania. All rights reserved.",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            backToCollection: "Back to Collection",
            accommodations: "Accommodations",
            chooseComfort: "Choose Your Comfort",
            promise: "The 4C Group Promise",
            whatAwaits: "What awaits",
            whatAwaitsText: "Experience the exceptional amenities and services curated specifically for your stay at",
            visitUs: "Visit Us",
            locationContact: "Location & Contact",
            valetParking: "Valet parking available",
            getDirections: "Get Directions",
            guestsSay: "This is what our guests say",
            roomDetail: "Room Detail",
            roomFeatures: "Room Features",
            bookRoom: "Book This Room",
            conciergeTitle: "Auron Concierge",
            conciergeSubtitle: "Powered by Gemini AI",
            conciergeInput: "Ask about our hotels...",
            conciergeGreeting: "Mirëdita! I am Auron, your 4C Group Concierge. How may I assist you in planning your stay in Albania?"
        }
    },
    al: {
        hotels: HOTELS_AL,
        navLinks: [
            { name: 'Hotelet', href: '#hotels' },
            { name: 'Eksperienca', href: '#experiences' },
            { name: 'Ngrënie', href: '#dining' },
            { name: 'Vlerësimet', href: '#reviews' },
        ],
        facilities: [
            { name: "Plazh Privat", icon: "Waves" },
            { name: "Ushqim Elitar", icon: "Utensils" },
            { name: "Spa & Wellness", icon: "Sparkles" },
            { name: "Konsierzh", icon: "Bell" },
            { name: "Wi-Fi i Shpejtë", icon: "Wifi" },
            { name: "Transport Luksoz", icon: "Car" },
        ],
        exploreItems: [
            {
                title: "Ngrënie dhe Blerje",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
                description: "Eksperienca kulinarie të shkëlqyera dhe blerje në butikë."
            },
            {
                title: "Evente dhe Aktivitete",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
                description: "Evente të kuruara për të argëtuar dhe frymëzuar."
            },
            {
                title: "Pamjet e Shqipërisë",
                image: "https://images.unsplash.com/photo-1598322625292-66b962054fb0?q=80&w=2070&auto=format&fit=crop",
                description: "Eksploroni historinë e lashtë dhe mrekullitë natyrore."
            }
        ],
        reviews: [
            { id: 1, name: "Elena K.", text: "Green Coast Resort ishte absolutisht mahnitës. Vila ishte perfekte dhe shërbimi i paçmuar.", rating: 5, location: "Londër, MB" },
            { id: 2, name: "Marco Rossi", text: "Valamar në Durrës ofroi pushimin perfekt familjar. Fëmijët e adhuruan pishinën dhe plazhi ishte aty pranë.", rating: 5, location: "Romë, Itali" },
            { id: 3, name: "Sarah Jenkins", text: "Një perlë e vërtetë në Tiranë. Museum Hotel është i sofistikuar dhe ndodhet në vendin perfekt për të eksploruar qytetin.", rating: 5, location: "New York, SHBA" }
        ],
        labels: {
            bookNow: "Rezervo",
            bookStay: "Rezervoni Qëndrimin",
            welcome: "Mirësevini në Shqipëri",
            luxuryResorts: "Hotele & Resorte Luksoze",
            scrollExplore: "Shfleto për të Eksploruar",
            ourHotels: "Hotelet Tona",
            excellence: "Përjetoni Ekselencën në Shqipëri",
            hospitality: "Mikpritje",
            viewDetails: "Shiko Detajet",
            startingFrom: "Duke filluar nga",
            night: "nata",
            exploreHotel: "Eksploro Hotelin",
            sanctuaryTitle: "Një Shenjtërore e",
            sanctuarySubtitle: "Luksit Mesdhetar",
            sanctuaryText1: "Koleksioni i 4C Group është projektuar me lehtësira të klasit të parë dhe i nënshtrohet standardeve më të larta të mikpritjes. Nëse kërkoni jetën vibrante të qytetit të Tiranës ose valët e qeta të Rivierës, pronat tona ofrojnë një ndërthurje të përsosur të komoditetit dhe elegancës.",
            sanctuaryText2: "Me prona të vendosura strategjikisht në të gjithë Shqipërinë, ne ofrojmë infrastrukturën e përsosur si për udhëtarët e kohës së lirë ashtu edhe për ata të biznesit. Nga butiqet e afërta të fshatit turistik deri tek amfiteatrot historike, çdo qëndrim premton një zbulim të ri.",
            readStory: "Lexoni Historinë Tonë",
            facilitiesTitle: "Objektet dhe Shërbimet",
            facilitiesText: "Me shërbim gjatë gjithë orarit dhe komoditete premium, ekipi ynë i përkushtuar siguron që çdo nevojë e juaja të plotësohet në mënyrë që të shijoni përvojën tuaj shqiptare në maksimum.",
            exploreTitle: "Eksploro Më Shumë",
            testimonials: "Dëshmi",
            guestExperiences: "Eksperiencat e Mysafirëve",
            footerText: "Përjetoni mikpritjen më të mirë në Shqipëri. Nga bregdeti në kryeqytet, ne jemi shtëpia juaj larg shtëpisë.",
            contactUs: "Na Kontaktoni",
            newsletter: "Buletini",
            newsletterText: "Abonohuni për të marrë oferta dhe lajme ekskluzive.",
            subscribe: "Bashkohu",
            rightsReserved: "4C Group Albania. Të gjitha të drejtat e rezervuara.",
            privacyPolicy: "Politika e Privatësisë",
            termsOfService: "Kushtet e Shërbimit",
            backToCollection: "Kthehu te Koleksioni",
            accommodations: "Akomodimi",
            chooseComfort: "Zgjidhni Rehatinë Tuaj",
            promise: "Premtimi i 4C Group",
            whatAwaits: "Çfarë ju pret",
            whatAwaitsText: "Përjetoni lehtësirat dhe shërbimet e jashtëzakonshme të kuruara posaçërisht për qëndrimin tuaj në",
            visitUs: "Na Vizitoni",
            locationContact: "Vendndodhja dhe Kontakti",
            valetParking: "Parkim me valet i disponueshëm",
            getDirections: "Merr Udhëzime",
            guestsSay: "Kjo është ajo që thonë mysafirët tanë",
            roomDetail: "Detajet e Dhomës",
            roomFeatures: "Karakteristikat e Dhomës",
            bookRoom: "Rezervo Këtë Dhomë",
            conciergeTitle: "Auron Konsierzh",
            conciergeSubtitle: "Mundësuar nga Gemini AI",
            conciergeInput: "Pyesni rreth hoteleve tona...",
            conciergeGreeting: "Mirëdita! Unë jam Auron, Konsierzhi i 4C Group. Si mund t'ju ndihmoj në planifikimin e qëndrimit tuaj në Shqipëri?"
        }
    }
};

// Default export for backward compatibility if needed, though we will use Context
export const HOTELS = HOTELS_EN;
