import React from 'react'

const Bday_card2 = ({name,age}) => {
  return (
    <div className="flex justify-center p-4">
      <div className="bg-custom-orange text-white p-6 rounded-lg shadow-lg max-w-xs w-full">
        <h1 className="text-xl font-semibold text-center mb-4">
          Damn {name} you are {age} years old now! 🎆🎇🎈🎉
        </h1>
        <div className="flex justify-center">
          <button className="bg-white text-red-950 font-bold py-2 px-4 rounded-full shadow-md hover:bg-red-800 hover:text-white transition">
            Good Luck  {name} 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bday_card2