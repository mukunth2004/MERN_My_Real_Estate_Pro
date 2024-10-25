import React from 'react';
import { MapPin, Home as HomeIcon, Filter, Calendar } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

const PropertyCard = ({ property, onSelect }: PropertyCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => onSelect(property)}
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
        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full">
          {property.status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-1" />
            {property.type}
          </div>
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-1" />
            {property.sqft} sqft
          </div>
        </div>
        <button 
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(property);
          }}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;