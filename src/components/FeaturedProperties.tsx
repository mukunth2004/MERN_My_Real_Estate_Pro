import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const FeaturedProperties = () => {
  const navigate = useNavigate();
  const properties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
      beds: 5,
      baths: 4,
      sqft: 4200
    },
    {
      id: 2,
      title: 'Luxury Penthouse',
      location: 'Manhattan, NY',
      price: '$3,200,000',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
      beds: 4,
      baths: 3,
      sqft: 3800
    },
    {
      id: 3,
      title: 'Waterfront Estate',
      location: 'Miami Beach, FL',
      price: '$4,800,000',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80',
      beds: 6,
      baths: 5,
      sqft: 5500
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div 
            key={property.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => navigate(`/properties`)}
          >
            <div className="relative h-64">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                {property.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
              <div className="flex justify-between text-gray-600">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  {property.beds} Beds
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  {property.baths} Baths
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  {property.sqft} sqft
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;