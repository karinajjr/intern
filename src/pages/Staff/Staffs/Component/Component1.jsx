import React from 'react';

const staffData = [
  {
    name: 'Zerda Jursinova',
    position: 'Front-End Developer',
    contact: '+998 93 123 45 67',
    email: 'zerdajursinova@gmail.com',
    workingDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    type: 'PART-TIME',
    role: 'Coder',
    icon: '<i class="bi bi-person-circle"></i>',
  },
  {
    name: 'Subhiddin Nuriddinov',
    position: 'iOS Developer',
    contact: '+998 93 123 45 67',
    email: 'zerdajursinova@gmail.com',
    workingDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    type: 'PART-TIME',
    role: 'Designer',
    icon: '<i class="bi bi-person-circle"></i>',
  },
  {
    name: 'Shahboz Shirinboyev',
    position: 'UI/UX Designer',
    contact: '+998 93 123 45 67',
    email: 'zerdajursinova@gmail.com',
    workingDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    type: 'PART-TIME',
    role: 'Manager',
    icon: '<i class="bi bi-person-circle"></i>',
  },
  {
    name: 'Ok/tamjon Dilbarov',
    position: 'Back-End Developer',
    contact: '+998 93 123 45 67',
    email: 'zerdajursinova@gmail.com',
    workingDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    type: 'PART-TIME',
    role: 'Coder',
    icon: '<i class="bi bi-person-circle"></i>',
  },
  {
    name: 'Subhiddin Ergashov',
    position: 'Designer',
    contact: '+998 93 123 45 67',
    email: 'zerdajursinova@gmail.com',
    workingDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    type: 'PART-TIME',
    role: 'Coder',
    icon: '<i class="bi bi-person-circle"></i>',
  }
];



function Component1() {

  return (
    <div className="">

      <div className="flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <i className="bi bi-people text-[20px] mx-[2px] bg-gray-200 rounded-md p-[5px] w-[30px] h-[30px] flex justify-center items-center"></i>
          <div className="text-2xl text-gray-700 font-medium">25</div>
          <div className="text-xl text-gray-500">Staff</div>
        </div>
      </div>


      <div className="">

        <div className="rounded-lg grid grid-cols-5 bg-gray-100 p-2 text-gray-600 mt-2 md:text-lef ">
          <div className="justify-self-start" >Full Name</div>
          <div className="text-center hidden md:block">Contact</div>
          <div className="text-right hidden md:block">Working Days</div>
          <div className="text-right hidden md:block">Position</div>
          <div className="text-center">Type</div>
        </div>

        {staffData.map((staff, index) => (
          <div key={index} className="place-items grid md:grid-cols-[0.3fr_repeat(4,_1fr)] grid-cols-3  items-center p-4 border-b ">

            <div className="flex items-center space-x-4">
              <div
                className="items-center text-4xl md:text-2xl"
                dangerouslySetInnerHTML={{ __html: staff.icon }}
              />

            </div>
            <div >
              <div className="text-lg font-medium text-gray-800">{staff.name}</div>
              <div className="text-sm text-gray-500">{staff.position}</div>
            </div>

            <div className='hidden md:block'>
              <div className="text-gray-800 hidden md:block">{staff.contact}</div>
              <div className="text-gray-500 text-sm">{staff.email}</div>
            </div>


            <div className="flex space-x-2 hidden md:block">
              {staff.workingDays.map((day, idx) => (
                <span
                  key={idx}
                  className={`text-white px-2 py-1 rounded-full ${day === 'S' ? 'bg-gray-200 text-gray-400' : 'bg-green-600'
                    }`}
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-gray-800 hidden md:block">{staff.role}</div>
              <div className="text-gray-500 bg-gray-200 px-3 py-1 rounded-full text-sm">{staff.type}</div>
            </div>
          </div>
        ))}
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">

        <thead >
          <tr className='rounded-lg grid-cols-5 bg-gray-100 p-3 text-gray-600 mt-2 md:text-left text-lg'>
            <th className='p-2 rounded-l-lg ' scope='col'>Full</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Year</th>
            <th className=' rounded-r-lg'>Yeautijfiodskptgr</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff, index) => (
            <tr key={index}>
             
              <td> <span dangerouslySetInnerHTML={{ __html: staff.icon }}/> {staff.name}</td>
              <td>{staff.contact}</td>

              <td> {staff.workingDays.map((day, idx) => (
                <span
                  key={idx}
                  className={`text-white p-2 rounded-full ${day === 'S' ? 'bg-gray-200 text-gray-400' : 'bg-green-600'
                    }`} >
                  {day}
                </span>
              ))}</td>

              <td>{staff.role}</td>
              <td>{staff.type}</td>

            </tr>
          ))}


        </tbody>

      </table>

    </div>
  );
};



export default Component1








