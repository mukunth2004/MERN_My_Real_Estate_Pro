import React, { useState, useEffect, useMemo } from 'react';
import { properties } from '../data/properties';
import PropertyFilters from './PropertyFilters';
import PropertyCard from './PropertyCard';
import PropertyModal from './PropertyModal';
import { Property } from '../data/properties';

const getPriceRangeLimits = (range: string): [number, number] => {
  switch (range) {
    case '< $500,000':
      return [0, 500000];
    case '$500,000 - $1,000,000':
      return [500000, 1000000];
    case '$1,000,000 - $2,000,000':
      return [1000000, 2000000];
    case '$2,000,000 - $5,000,000':
      return [2000000, 5000000];
    case '$5,000,000+':
      return [5000000, Infinity];
    default:
      return [0, Infinity];
  }
};

const matchesPriceRange = (propertyPrice: string, range: string): boolean => {
  if (!range) return true;
  const price = parseInt(propertyPrice.replace(/[^0-9]/g, ''));
  const [min, max] = getPriceRangeLimits(range);
  return price >= min && price <= max;
};

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    location: ''
  });
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesType = !filters.type || property.type === filters.type;
      const matchesLocation = !filters.location || 
        property.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesPriceRangeResult = matchesPriceRange(property.price, filters.priceRange);
      
      return matchesType && matchesLocation && matchesPriceRangeResult;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleFilterReset = () => {
    setFilters({ type: '', priceRange: '', location: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <PropertyFilters 
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleFilterReset}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No properties found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={setSelectedProperty}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default PropertiesPage;