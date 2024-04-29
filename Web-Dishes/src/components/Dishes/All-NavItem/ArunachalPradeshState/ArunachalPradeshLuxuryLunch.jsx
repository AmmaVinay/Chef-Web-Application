import React, {useState} from 'react';
import { ArunachalPradeshLunch } from '../../../../Data/IndianStates/ArunachalPradesh/ArunachalPradeshLunch';
 import SeeMoreDishes from '../../SeeMoreDishes';
import SeeMoreDescription from '../../SeeMoreDescription';
 
const ArunachalPradeshLuxuryLunch = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const sliderDishes = ArunachalPradeshLunch;

  const filteredDish = ArunachalPradeshLunch.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f7f3cd]">
       <SeeMoreDescription slideDishes={sliderDishes} />
      <div>
        <h1 className='py-12 text-xl sm:text-3xl md:text-5xl text-center font-bold '>Arunachal Pradesh Lunch Dishes</h1>
      </div>
 
      <SeeMoreDishes searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredDish={filteredDish} />
    </div>
  );
};

export default ArunachalPradeshLuxuryLunch;
;
