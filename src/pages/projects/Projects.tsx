import React from 'react'
import { Link } from 'react-router-dom'
function projects() {
  return (
    <div className=' pt-10'>
   <div className="  items-center  space-y-11 pb-10 h-fit pt-5 mx-auto">
        <h1 className=" font-extrabold text-based  text-5xl tracking-widest text-center ">PROJECTS</h1>

        <div className=" grid  lg:grid-cols-5 gap-y-9 md:grid-cols-3 sm:grid-cols-2 h-fit w-fit py-5 gap-10  m-auto">
          <div className="flex items-center justify-center  shadow-background shadow-xl ">
            <Link to="https://www.figma.com/file/7i4RY2hzheBQJpDlx4OpTD/RESTATE?type=design">
              <img src="Icons/Wicom.png" alt="{}" className="  w-fit  h-64" />
            </Link>
          </div>

          <div className=" flex items-center justify-center shadow-background shadow-xl p-1 bg-slate-300  ">
            <Link to="https://www.figma.com/file/1dfW0YmZBFrMmjati57Cfe/Untitled?type=design&node-id=0-1&mode=design&t=DJXZLXf2jMW3lVYR-0">
              <img src="Icons/Untitled.png" alt="{}" className="  w-fit h-64" />
            </Link>
          </div>

          <div className=" flex items-center justify-center shadow-background shadow-xl p-1 bg-slate-300  ">
            <Link to="https://www.figma.com/file/7i4RY2hzheBQJpDlx4OpTD/RESTATE?type=design&node-id=0-1&mode=design&t=fRml7VhJmyVFlbbh-0">
              <img
                src="Icons/Rectangle.png"
                alt="{}"
                className=" w-fit  h-64"
              />
            </Link>
          </div>

          <div className=" flex items-center justify-center shadow-background shadow-xl p-1 bg-slate-300  ">
            <Link to="https://www.figma.com/file/7i4RY2hzheBQJpDlx4OpTD/RESTATE?type=design">
              <img
                src="Icons/Investment.png"
                alt="{}"
                className=" w-34  h-64"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center  shadow-background shadow-xl p-1 bg-slate-300  ">
            <Link to="https://github.com/Dhicekharma?tab=repositories">
              <img src="Icons/Github.png" alt="{}" className="  w-34  h-64" />
            </Link>
          </div>
          <Link
            className=" w-36 mt-11 relative  border-based border-2 rounded-lg inline-flex text-based font-bold tracking-wider justify-center items-center
               hover:bg-based transition-colors duration-1000  hover:text-background hover:border-based"
            to="Bookings"
          >
            Book Service
          </Link>
        </div>

        
        <div className=" bg-gray-300 grid  lg:grid-cols-4 gap-y-9 md:grid-cols-2 sm:grid-cols-1 h-fit py-5  ">
          <div className="flex justify-center items-center">
            <div>
              <img
                className=" w-[50px] items-center justify-center  "
                src="Icons/happy.png"
                alt=""
              />
            </div>
            <div className=" text-lg font-semibold">
              <p> 20 </p>
              <h1>Happy Clients</h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img
                className=" w-[50px] items-center justify-center  "
                src="Icons/coffee-cup.png"
                alt=""
              />
            </div>
            <div className=" text-lg font-semibold">
              <p> 2023 </p>
              <h1>Cups of Coffee</h1>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div>
              <img
                className=" w-[50px] items-center justify-center  "
                src="Icons/coding.png"
                alt=""
              />
            </div>
            <div className=" text-lg font-semibold">
              <p> 112,393 </p>
              <h1>Lines of Code</h1>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div>
              <img
                className=" w-[50px] items-center justify-center  "
                src="Icons/project-management.png"
                alt=""
              />
            </div>
            <div className=" text-lg font-semibold">
              <p> 12HomeBlogAboutContacts </p>
              <h1>Completed Projects</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
