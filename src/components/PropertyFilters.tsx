import React from 'react';
import { Search, MapPin, Home as HomeIcon, DollarSign } from 'lucide-react';
import { propertyTypes, priceRanges } from '../data/properties';

interface Filters {
  type: string;
  priceRange: string;
  location: string;
}

interface PropertyFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onReset: () => void;
}

const PropertyFilters = ({ filters, onFilterChange, onReset }: PropertyFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="flex items-center border rounded-md p-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="ml-2 w-full focus:outline-none"
              value={filters.location}
              onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <div className="flex items-center border rounded-md p-2">
            <HomeIcon className="h-5 w-5 text-gray-400" />
            <select
              className="ml-2 w-full focus:outline-none"
              value={filters.type}
              onChange={(e) => onFilterChange({ ...filters, type: e.target.value })}
            >
              <option value="">All Types</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex items-center border rounded-md p-2">
            <DollarSign className="h-5 w-5 text-gray-400" />
            <select
              className="ml-2 w-full focus:outline-none"
              value={filters.priceRange}
              onChange={(e) => onFilterChange({ ...filters, priceRange: e.target.value })}
            >
              <option value="">All Prices</option>
              {priceRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-end">
          <button 
            onClick={onReset}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Reset Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;