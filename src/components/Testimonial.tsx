import React from 'react'
import { Link } from 'react-router-dom'

function Testimonial() {
  return (
    <div className=" bg-background text-white p-5">
        <h1 className=" font-bold text-2xl text-center text-second">
          Testimonials
        </h1>
        <div className=" flex flex-col items-center justify-center py-5">
          <img
            className="w-[100px] rounded-full"
            src="Icons/40.jpg"
            alt="profile"
          />
          <div className=" text-xl text-based tracking-widest font-bold p-2">
            John Cana
          </div>
          <p className=" text-md text-center  w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            sapieBBB+B+++ ehenderit, inventore aperiam quia odit quis adipisci
            recusandae perspiciatis quam debitis ipsum, illo vero aliquid,
            libero
          </p> 
          <Link
            className="min-w-fit px-2  mt-11 relative  border-based border-2 rounded-lg inline-flex text-based font-bold tracking-wider justify-center items-center
               hover:bg-based transition-colors duration-1000  hover:text-background hover:border-based"
            to="Bookings"
          >
            Add Testimonal
          </Link>
        </div>
      </div>
  )
}

export default Testimonial