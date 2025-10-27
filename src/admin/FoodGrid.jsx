import React from 'react';
import { food_list } from '../assets/assets';

const FoodGrid = () => {
  // Get first 12 items from food_list for Most Searched Foods
  const foods = food_list.slice(0, 12);

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Most Searched Foods</h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-2" style={{ minWidth: 'max-content' }}>
          {foods.map((food) => (
            <div key={food._id} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0" style={{ width: '200px' }}>
              <div className="h-32 overflow-hidden">
                <img 
                  src={food.image} 
                  alt={food.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-2">
                <h3 className="font-semibold text-sm text-gray-800">{food.name}</h3>
                <p className="text-xs text-orange-600 font-medium">₦{food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;
