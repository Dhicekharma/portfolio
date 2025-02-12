import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageUrl,id }:{title:string,description:string,imageUrl:string,id:number}) => {
       

  return (
    <div className="flex flex-col items-center justify-items-center  w-64 h-96 rounded-md shadow-2xl shadow-black   bg-background p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 mt-0 mb-6 bg-based rounded-full object-contain"
      />
      <h3 className="text-xl font-bold text-based mb-6">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
      <Link
            className=" w-36 mt-11 relative  border-based border-2 rounded-lg inline-flex text-based font-bold tracking-wider justify-center items-center
               hover:bg-based transition-colors duration-1000  hover:text-background hover:border-based"
            to="Bookings"
          >
            Book Service
          </Link>
    </div>
  );
};

export default Card;
