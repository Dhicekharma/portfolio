import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import ServicesSection from "../components/ServicesSection";
import  Typed from 'typed.js'
function Home() {
  const servicesData = [
    {
      title: "Frontend Development",
      description:
        "We provide modern and interactive frontend development services.",
      imageUrl: "Icons/design.png",
      id: 0,
    },
    {
      title: "Frontend Development",
      description:
        "We provide modern and interactive frontend development services.",
      imageUrl: "Icons/design.png",
      id: 0,
    },
    {
      title: "Frontend Development",
      description:
        "We provide modern and interactive frontend development services.",
      imageUrl: "Icons/design.png",
      id: 0,
    },
    // Add more services here
  ];

  const skillsData = [
    { skillName: "React", skillLevel: "80", id: 0 },
    { skillName: "Express.js", skillLevel: "60", id: 1 },
    { skillName: "Node.js", skillLevel: "90", id: 2 },
    { skillName: "jQuery", skillLevel: "80", id: 3 },
  ];

  const [blogs, setBlogs] = useState([
    {
      src: "devs.jpeg",
      title: "devs in ghana are planning",
      posted_by: "Ama Mich",
      time: "july,2019",
      post: "lorem'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sapiente laborum sed distinctio exercitationem qui dolorem unde corporis nihil reiciendis! Soluta, dolore piditate? ",
      id: 0,
    },
    {
      src: "devs.jpeg",
      title: "devs in ghana are planning",
      posted_by: "Ama Mich",
      time: "july,2019",
      post: "lorem'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sapiente laborum sed distinctio exercitationem qui dolorem unde corporis nihil reiciendis! Soluta, dolore piditate? ",
      id: 0,
    },
    {
      src: "devs.jpeg",
      title: "devs in ghana are planning",
      posted_by: "Ama Mich",
      time: "july,2019",
      post: "lorem'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sapiente laborum sed distinctio exercitationem qui dolorem unde corporis nihil reiciendis! Soluta, dolore piditate? ",
      id: 0,
    },
  ]);
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [1]);

  return (
    <div className=" bg-gray-100">
      {/* header */}
      <div className="  bg-background  flex items-center py-0 px-10 h-screen ">
        <div className="  text-white leading-6  ">
          <p className="text-based text-2xl lg:text-5xl font-bold  ">
            Welcome Aboard
          </p>
          <p className="text-xl px-13 pl-10 py-3">
            I'm 
            <span className=" text-2xl font-bold text-cyan-100  ">
               Ati Matthew 
            </span>
            <span ref={el}> </span>
          </p>
          <p className="text-md py-3 tracking-wider leading-relax">
            Embark on a journey of tech innovation , where code meets creativity
            and possibilities are limitless.
          </p>

          <p className=" text-sm text-second">
            Web {"</>"} Developer ,Computer Networking , Ui/Ux Designer.
          </p>
          <div className=" mt-10 justify-between flex w-96">
            <Link
              className=" w-40 h-full relative bg-based border-based border-2 rounded-lg inline-flex text-background font-bold tracking-wider justify-center items-center
               hover:bg-transparent transition-colors duration-1000  hover:text-based"
              to="About"
            >
              About
            </Link>
            <Link
              className="  w-40 h-full relative bg-transparent  border-based border-2 rounded-lg inline-flex text-based font-bold tracking-wider justify-center items-center 
              hover:bg-based transition-colors duration-1000  hover:text-background"
              to=""
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="20 left-auto">
          <img className=" opacity-10   " src="profile.png" alt="my pic" />
        </div>
      </div>

      {/* About and Skill / Expertise */}
      <div className=" md:flex h-fit justify-between  w-3/4 content-center mx-auto mt-5 mb-10">
        {/* About */}
        <div className=" md:w-35 w-full py-5 ">
          <h1 className=" font-bold text-lg text-center ">About Us</h1>
          <p className=" text-center leading-loose  md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            itaque adipisci cum eaque, voluptatibus ipsa quia maxime esse
            obcaecati soluta suscipit minus nisi earum ab quo alias consequatur.
            Cum, lorem ipsum
          </p>
          <Link
            className=" w-36  relative bg-background border-background border-2 rounded-lg inline-flex text-white font-bold tracking-wider justify-center items-center
               hover:bg-transparent transition-colors duration-1000  hover:text-background mt-5"
            to="About"
          >
            More About
          </Link>
        </div>
        {/* beautifying middle image  */}
        <div className=" ">
          <img
            className=" w-80 align-middle   lg:w-full max-h-screen m-auto max-w-full lg:py-5 py-10  "
            src="about.jpg"
            alt=""
          />
        </div>

        {/* List and skill and expertise */}
        <div className=" w-full md:w-35 py-5 ">
          <h1 className="font-bold text-lg text-center pb-5">
            Skill and Expertise
          </h1>

          {/* mapping through list data and creating list */}

          <div>
            {skillsData.map((skill) => (
              <div key={skill.id} className="mb-5 items-center">
                <div className=" flex justify-between">
                  {/* logo of skill */}
                  <img
                    src={`/Icons/${skill.skillName.toLowerCase()}.png`}
                    alt={skill.skillName}
                    className="h-5 w-6"
                  />
                  {/* name of skill */}
                  <div className=" text-center   ">{skill.skillName}</div>
                </div>

                {/* bar representing level of skill */}
                <div className="w-full mx-5 border  bg-gray-300  mt-2">
                  <div
                    className="h-full1 bg-blue-500"
                    style={{ width: `${skill.skillLevel}%` }}
                  >
                    {" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Our Service  */}
      <div className="h-fit bg-second bg-opacity-5   pb-10  ">
        <h1 className=" font-bold text-2xl text-center mt-5 my-5">Services Offered</h1>
        {/* Card */}
        <div className=" grid grid-cols-3 gap-8 w-4/5 mx-auto ">
         
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="flex  justify-center items-center space-x-11"
              >
                <Card {...servicesData[service.id]} />
              
              </div>
            ))}
          
        </div>
      </div>

      {/* Call To Action */}

      <div className="container m-auto px-6 py-40">
    <div className="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8">
      <div className="w-8/12 text-2xl">
        <img alt="quote" className="float-left mr-1 w-[20px] " src="/Icons/quotation.png"/>
        <span className="flex">We are team of developers with houndreds hours spend on coding, we create professional apps, webs.</span>
      </div>
          <div className="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-based hover:bg-yellow-500 rounded text-lg text-center w-48">
            <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full  bg-based">
            </span>
            Call now
          </div>
    </div>
  </div>
      {/* sample works */}
      <div className="  items-center  space-y-11 pb-10 h-fit pt-5 mx-auto">
        <h1 className=" font-bold text-2xl text-center ">My Work</h1>

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
              <p> 12 </p>
              <h1>Completed Projects</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
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
        </div>
      </div>

      {/* blogs */}
      <div className=" w-4/5 mx-auto my-5 h-full pb-25  ">
        <h1 className="  font-bold text-2xl text-center text-based">
          Blog Latest Update
        </h1>

        <div className="  grid grid-cols-1 mt-5 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-10 h-fit   ">
          {blogs.map((blog) => (
            <div
              
              className=" flex flex-col justify-center p-0 space-y-3 bg-slate-100  shadow-black shadow-lg max-[w-[350px]] w-[276px] z-0 hover:bg-gray-500/50 sm:hover:bg-white hover:z-30   "
              key={blog.id}
            >
              {/* card */}
              <div className=" relative ">
                <img className="  " src={blog.src} alt="image" />

                <h1 className="absolute bottom-0 px-4 py-3 w-full bg-opacity-30   bg-gray-500/50  uppercase text-white font-semibold text-2xl hover:pt-fit  ">
                  {blog.title}
                </h1>
              </div>
              {/* Date and posted by */}
              <div>
                <p className=" text-xs tracking-wider     ">
                  {blog.posted_by} by {blog.time}
                </p>
              </div>
              <p className=" text-md  p-3">{blog.post}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
