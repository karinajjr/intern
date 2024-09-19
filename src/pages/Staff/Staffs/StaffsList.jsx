import React, { useState } from 'react';
import Component1 from './Component/Component1';
import Component2 from './Component/Component2';

const StaffsList = () => {
  const [selected, setSelected] = useState('Staff');

  const options = ['Staff', 'Master'];

  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="flex  w-full border-b-2 -mt-0">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              
              className={`px-2 py-0 text-sm font-medium border-b-2 transition-all duration-300  ${
                selected === option ? 'text-black border-black' : 'text-gray-500 border-transparent'
              }`}
            >
              {option}
            </button>
          ))}
            
        </div>
   
      
      </div>

     

      <div className="mt-2 p-2  rounded-lg text-gray-800">
        {selected === 'Staff' ? <Component1 /> : <Component2 />}
      </div>
    </div>
  );
};

export default StaffsList;
