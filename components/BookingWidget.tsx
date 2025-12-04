import React from 'react';
import { Calendar, Users, ChevronDown } from 'lucide-react';

const BookingWidget: React.FC = () => {
  return (
    <div className="hidden md:flex w-full max-w-5xl bg-white shadow-2xl rounded-sm absolute -bottom-12 left-1/2 transform -translate-x-1/2 p-6 z-40 justify-between items-center text-brand-dark">
      <div className="flex-1 border-r border-gray-200 px-6 cursor-pointer group">
        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 group-hover:text-brand-gold">Hotel</label>
        <div className="flex items-center justify-between font-serif text-lg font-medium">
          <span>Choose Property</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
      
      <div className="flex-1 border-r border-gray-200 px-6 cursor-pointer group">
         <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 group-hover:text-brand-gold">Check In - Check Out</label>
         <div className="flex items-center justify-between font-serif text-lg font-medium">
          <span>Add Dates</span>
          <Calendar size={16} className="text-gray-400" />
        </div>
      </div>

      <div className="flex-1 px-6 cursor-pointer group">
         <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 group-hover:text-brand-gold">Guests</label>
         <div className="flex items-center justify-between font-serif text-lg font-medium">
          <span>2 Adults</span>
          <Users size={16} className="text-gray-400" />
        </div>
      </div>

      <div className="px-6">
        <button className="bg-brand-gold text-white px-8 py-4 uppercase tracking-widest hover:bg-brand-dark transition-colors duration-300 font-semibold">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;