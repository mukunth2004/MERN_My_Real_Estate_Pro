export interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  price: string;
  image: string;
  type: 'House' | 'Apartment' | 'Villa';
  status: 'For Sale' | 'For Rent';
  beds: number;
  baths: number;
  sqft: number;
  features: string[];
  agent: {
    name: string;
    image: string;
    phone: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    description: 'Stunning modern villa featuring an infinity pool, smart home technology, and panoramic city views.',
    location: 'Beverly Hills, CA',
    price: '$2,500,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
    type: 'Villa',
    status: 'For Sale',
    beds: 5,
    baths: 4,
    sqft: 4200,
    features: ['Pool', 'Smart Home', 'Garden', 'Garage', 'Security System'],
    agent: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      phone: '(310) 555-0123'
    }
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    description: 'Exclusive penthouse with private terrace, floor-to-ceiling windows, and premium finishes throughout.',
    location: 'Manhattan, NY',
    price: '$3,200,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    type: 'Apartment',
    status: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3800,
    features: ['Terrace', 'City View', 'Concierge', 'Gym', 'Wine Cellar'],
    agent: {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      phone: '(212) 555-0456'
    }
  },
  {
    id: 3,
    title: 'Waterfront Estate',
    description: 'Magnificent waterfront property with private dock, guest house, and resort-style amenities.',
    location: 'Miami Beach, FL',
    price: '$4,800,000',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80',
    type: 'House',
    status: 'For Sale',
    beds: 6,
    baths: 5,
    sqft: 5500,
    features: ['Waterfront', 'Guest House', 'Pool', 'Dock', 'Beach Access'],
    agent: {
      name: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      phone: '(305) 555-0789'
    }
  },
  {
    id: 4,
    title: 'Mountain View Chalet',
    description: 'Cozy mountain retreat with breathtaking views, stone fireplace, and premium wooden finishes.',
    location: 'Aspen, CO',
    price: '$2,900,000',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    type: 'House',
    status: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3200,
    features: ['Mountain View', 'Fireplace', 'Ski Storage', 'Hot Tub', 'Heated Floors'],
    agent: {
      name: 'Robert Pine',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      phone: '(970) 555-0234'
    }
  },
  {
    id: 5,
    title: 'Downtown Loft',
    description: 'Industrial-chic loft with exposed brick walls, high ceilings, and modern amenities in prime location.',
    location: 'Chicago, IL',
    price: '$850,000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
    type: 'Apartment',
    status: 'For Sale',
    beds: 2,
    baths: 2,
    sqft: 1800,
    features: ['High Ceilings', 'Exposed Brick', 'Open Plan', 'City Views', 'Rooftop Access'],
    agent: {
      name: 'Lisa Wong',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
      phone: '(312) 555-0567'
    }
  },
  {
    id: 6,
    title: 'Mediterranean Villa',
    description: 'Elegant Mediterranean-style villa with courtyard, fountain, and mature landscaping.',
    location: 'Santa Barbara, CA',
    price: '$3,750,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    type: 'Villa',
    status: 'For Sale',
    beds: 5,
    baths: 4,
    sqft: 4500,
    features: ['Courtyard', 'Wine Cellar', 'Pool', 'Outdoor Kitchen', 'Ocean View'],
    agent: {
      name: 'David Martinez',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      phone: '(805) 555-0890'
    }
  },
  {
    id: 7,
    title: 'Urban Studio',
    description: 'Modern studio apartment with smart space utilization and premium appliances.',
    location: 'Seattle, WA',
    price: '$2,200/month',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80',
    type: 'Apartment',
    status: 'For Rent',
    beds: 1,
    baths: 1,
    sqft: 600,
    features: ['Smart Home', 'Built-in Storage', 'City View', 'Fitness Center', 'Pet Friendly'],
    agent: {
      name: 'Amanda Lee',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
      phone: '(206) 555-0123'
    }
  },
  {
    id: 8,
    title: 'Desert Oasis',
    description: 'Contemporary desert home with infinity pool and seamless indoor-outdoor living.',
    location: 'Scottsdale, AZ',
    price: '$1,950,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
    type: 'House',
    status: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3600,
    features: ['Desert Views', 'Infinity Pool', 'Solar Powered', 'Smart Home', 'Covered Patio'],
    agent: {
      name: 'James Wilson',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
      phone: '(480) 555-0456'
    }
  },
  {
    id: 9,
    title: 'Historic Brownstone',
    description: 'Beautifully restored brownstone with original details and modern updates.',
    location: 'Boston, MA',
    price: '$2,800,000',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80',
    type: 'House',
    status: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3200,
    features: ['Period Details', 'Garden', 'Wine Cellar', 'Fireplaces', 'High Ceilings'],
    agent: {
      name: 'Catherine Murphy',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80',
      phone: '(617) 555-0789'
    }
  },
  {
    id: 10,
    title: 'Beachfront Condo',
    description: 'Luxurious beachfront condo with panoramic ocean views and resort amenities.',
    location: 'San Diego, CA',
    price: '$1,800,000',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80',
    type: 'Apartment',
    status: 'For Sale',
    beds: 3,
    baths: 2,
    sqft: 2100,
    features: ['Ocean View', 'Beach Access', 'Pool', 'Gym', 'Concierge'],
    agent: {
      name: 'Thomas Brown',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      phone: '(619) 555-0123'
    }
  },
  {
    id: 11,
    title: 'Lake House Retreat',
    description: 'Serene lake house with private dock, wraparound deck, and stunning water views.',
    location: 'Lake Tahoe, NV',
    price: '$2,400,000',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
    type: 'House',
    status: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3800,
    features: ['Lake View', 'Private Dock', 'Deck', 'Boat Slip', 'Game Room'],
    agent: {
      name: 'Rachel Green',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
      phone: '(775) 555-0456'
    }
  },
  {
    id: 12,
    title: 'Smart City Apartment',
    description: 'Ultra-modern apartment with cutting-edge smart home features and skyline views.',
    location: 'Austin, TX',
    price: '$3,500/month',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    type: 'Apartment',
    status: 'For Rent',
    beds: 2,
    baths: 2,
    sqft: 1500,
    features: ['Smart Home', 'City View', 'EV Charging', 'Coworking Space', 'Rooftop Lounge'],
    agent: {
      name: 'Kevin Park',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      phone: '(512) 555-0789'
    }
  },
  {
    id: 13,
    title: 'Wine Country Estate',
    description: 'Spectacular vineyard estate with wine cellar, tasting room, and guest house.',
    location: 'Napa Valley, CA',
    price: '$5,900,000',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80',
    type: 'Villa',
    status: 'For Sale',
    beds: 6,
    baths: 5,
    sqft: 6200,
    features: ['Vineyard', 'Wine Cellar', 'Guest House', 'Pool', 'Mountain Views'],
    agent: {
      name: 'Isabella Romano',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
      phone: '(707) 555-0123'
    }
  },
  {
    id: 14,
    title: 'Golf Course Villa',
    description: 'Elegant villa overlooking championship golf course with private putting green.',
    location: 'Palm Springs, CA',
    price: '$2,100,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    type: 'Villa',
    status: 'For Sale',
    beds: 4,
    baths: 4,
    sqft: 3900,
    features: ['Golf View', 'Private Putting Green', 'Pool', 'Outdoor Kitchen', 'Club Access'],
    agent: {
      name: 'George Palmer',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
      phone: '(760) 555-0456'
    }
  },
  {
    id: 15,
    title: 'Eco-Friendly Treehouse',
    description: 'Sustainable modern treehouse with solar power and organic garden.',
    location: 'Portland, OR',
    price: '$1,200,000',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    type: 'House',
    status: 'For Sale',
    beds: 3,
    baths: 2,
    sqft: 2200,
    features: ['Solar Power', 'Organic Garden', 'Rainwater Harvesting', 'Forest View', 'Sustainable Materials'],
    agent: {
      name: 'Luna Forest',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80',
      phone: '(503) 555-0789'
    }
  }
];

export const propertyTypes = ['House', 'Apartment', 'Villa'];
export const priceRanges = [
  '< $500,000',
  '$500,000 - $1,000,000',
  '$1,000,000 - $2,000,000',
  '$2,000,000 - $5,000,000',
  '$5,000,000+'
];