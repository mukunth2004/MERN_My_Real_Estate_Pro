import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import FeaturedProperties from './FeaturedProperties';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/properties');
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover the perfect property from our extensive collection
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
              <div className="flex-1">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="ml-2 w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex-1">
                <div className="flex items-center">
                  <Home className="h-5 w-5 text-gray-400" />
                  <select className="ml-2 w-full focus:outline-none">
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                  </select>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex-1">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <select className="ml-2 w-full focus:outline-none">
                    <option>Price Range</option>
                    <option>$100k - $200k</option>
                    <option>$200k - $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Properties', value: '2,500+' },
            { label: 'Happy Clients', value: '1,800+' },
            { label: 'Cities', value: '50+' },
            { label: 'Awards', value: '15+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Properties */}
      <FeaturedProperties />
    </div>
  );
};

export default HomePage;