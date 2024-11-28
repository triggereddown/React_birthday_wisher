import React, { useState } from 'react'
import Bday_card1 from './Bday_card1';
import Bday_card2 from './Bday_card2';
import Bday_card3 from './Bday_card3';

const Assignment7 = () => {

    const [field,setField]=useState({name:"", age:""});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setField((prevField) => ({
          ...prevField,
          [name]: value,  // Dynamically update the field based on the input's name attribute
        }));
      };

    const handleSubmit = () => {
        if (!field.name || !field.age) {
          alert('Please enter both name and age.');
          return;
        }
        setSubmitted(true);
      };



  return (
    <div className=" bg-custom-dark container">
       <div className="flex flex-col justify-center py-7 heading">
          <h1 className="text-custom-white font-semibold text-4xl text-center">Birthday Cards</h1>
          <p className="text-custom-white py-2 text-xl text-center">Let me show you some cool birthday cards</p>
      </div>
        <div className="bottom flex justify-center py-7">
            <div className="inputs">
                <input className="p-2 bg-slate-400 rounded-md" 
                type="text"
                name="name" 
                value={field.name}
                placeholder='Enter Full Name' 
                onChange={handleChange}
                />
                
                <input className="mx-2 p-2 bg-slate-400 rounded-md"
                type="text"
                name="age"
                value={field.age}
                placeholder='Enter Age'
                onChange={handleChange}
                 />
            </div>
            <div className="mx-2 p-2 bg-custom-orange text-white rounded-md  max-w-16 px-2 button">
                <button onClick={handleSubmit}>Sumbit</button>
                
            </div>
        </div>
        <div className=" flex justify-center py-6 cards">
        {submitted && (
          <>
            <Bday_card1 name={field.name} age={field.age} />
            <Bday_card2 name={field.name} age={field.age} />
            <Bday_card3 name={field.name} age={field.age} />
          </>
        )}
        </div>
    </div>
  )
}

export default Assignment7