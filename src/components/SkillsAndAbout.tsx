import React from "react";
import { Link } from "react-router-dom";

function SkillsAndAbout() {
  const skillsData = [
    {
      skillName: "React",
      skillLevel: "80",
      id: 0,
    },
    {
      skillName: "Express.js",
      skillLevel: "60",
      id: 1,
    },
    {
      skillName: "Node.js",
      skillLevel: "90",
      id: 2,
    },
    {
      skillName: "jQuery",
      skillLevel: "80",
      id: 3,
    },
  ];

  return (
    <div>
      <div className=" md:flex h-fit justify-between  w-3/4 content-center mx-auto mt-5 mb-10">
        {/* About */}
        <div className=" md:w-35 w-full py-5 ">
          <h1 className=" font-bold text-lg text-center ">About Me</h1>
          <p className=" text-center leading-loose  md:text-justify">
            "I am a passionate IT professional with a focus on web development,
            cybersecurity, and networking. Driven by a commitment to continual
            learning and improvement, I enjoy diving into complex technical
            challenges and expanding my skill set in full-stack development and
            penetration testing. In my free time, I love reading, listening to
            music, watching anime, and coding, which all fuel my creativity and
            curiosity. With a strong foundation in IT support and hands-on
            experience, I bring a detail-oriented approach to problem-solving
            and a dedication to delivering secure, effective solutions."
          </p>
       
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
    </div>
  );
}
export default SkillsAndAbout;
