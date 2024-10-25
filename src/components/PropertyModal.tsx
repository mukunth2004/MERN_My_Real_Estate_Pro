import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import { Property } from '../data/properties';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

const PropertyModal = ({ property, onClose }: PropertyModalProps) => {
  const [bookingDate, setBookingDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would make an API call to handle the booking
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Property Details</h3>
            <p className="text-gray-600 mb-4">{property.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Location: {property.location}</p>
                <p className="text-gray-600">Type: {property.type}</p>
                <p className="text-gray-600">Status: {property.status}</p>
              </div>
              <div>
                <p className="text-gray-600">Beds: {property.beds}</p>
                <p className="text-gray-600">Baths: {property.baths}</p>
                <p className="text-gray-600">Area: {property.sqft} sqft</p>
              </div>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Date
                </label>
                <div className="flex items-center border rounded-md p-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    required
                    className="ml-2 w-full focus:outline-none"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Book Property
              </button>
            </form>
          ) : (
            <div className="text-center text-green-600 py-4">
              <p className="text-lg font-semibold">Booking Confirmed!</p>
              <p>Thank you for booking {property.title}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;