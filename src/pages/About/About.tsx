import React from "react";

function About() {
  const skillsData = [
    { skillName: "React", skillLevel: 80 },
    { skillName: "Express.js", skillLevel: 60 },
    { skillName: "Node.js", skillLevel: 90 },
    { skillName: "jQuery", skillLevel: 80 },
    { skillName: "HTML", skillLevel: 95 },
    { skillName: "CSS", skillLevel: 90 },
    { skillName: "JavaScript", skillLevel: 85 },
    { skillName: "MongoDB", skillLevel: 70 },
    { skillName: "MySQL", skillLevel: 65 },
    { skillName: "Networking", skillLevel: 75 },
    { skillName: "Linux (Parrot OS)", skillLevel: 80 },
    { skillName: "Cybersecurity", skillLevel: 70 },
    { skillName: "Pentesting", skillLevel: 65 },
    { skillName: "Git & GitHub", skillLevel: 85 },
    { skillName: "Wireshark", skillLevel: 70 },
    { skillName: "John the Ripper", skillLevel: 60 },
    { skillName: "Excel", skillLevel: 90 },
    { skillName: "Power BI", skillLevel: 75 },
  ];

  const endorsements = [
    {
      name: "Afi Mensah",
      role: "Software Engineer, Ghana",
      comment:
        "Ati is a brilliant and hardworking individual. His attention to detail and curiosity in cybersecurity and development always inspire those around him.",
    },
    {
      name: "Kofi Nyarko",
      role: "Network Admin",
      comment:
        "Working with Ati on a network audit project showed his dedication to security and his knack for solving complex problems.",
    },
    {
      name: "Mary Owusu",
      role: "Tech Blogger",
      comment:
        "He’s not just a coder — he’s a thinker. His approach to learning and growing is something to admire.",
    },
  ];

  const timeline = [
    {
      year: "2019 - 2023",
      title: "BSc in Computer Engineering",
      description:
        "Developed strong fundamentals in programming, networking, and systems administration.",
    },
    {
      year: "2021",
      title: "Self-Learning Full-Stack Development",
      description:
        "Built multiple web applications with React, Node.js, MongoDB. Learned REST APIs and Git workflows.",
    },
    {
      year: "2023 - 2024",
      title: "IT Support & Network Technician",
      description:
        "Gained hands-on experience troubleshooting systems, managing networks, and assisting end users.",
    },
   
    {
      year: "2024 - Present",
      title: "Diving Deep into Cybersecurity",
      description:
        "Studying penetration testing, ethical hacking, and threat analysis. Practicing with tools like Wireshark and John the Ripper.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>

      <p className="text-lg leading-loose text-justify mb-8 ">
        Hey there 👋, I'm <strong>Ati Matthew Awenbonime</strong>, a dedicated IT
        professional passionate about web development, ethical hacking, and
        everything in between. With a strong background in IT support and
        infrastructure, I transitioned into full-stack development and
        cybersecurity to challenge myself and build secure, scalable solutions.
        <br />
        I enjoy creating sleek frontends with <strong>React</strong> and powerful backends with
        <strong> Node.js</strong> and <strong>Express</strong>. I'm also deepening my expertise in tools
        like <strong>Wireshark</strong>, <strong>John the Ripper</strong>, <strong>Power BI</strong>, and <strong>Excel</strong> to expand my
        analytical and security arsenal.
        <br />
        Whether I'm building a portfolio site, securing a network, or breaking down a
        CVE on TryHackMe, I bring curiosity, discipline, and a love for continuous
        improvement.
      </p>

      {/* CV Download Button */}
      <div className="flex justify-center mb-10">
        <a
          href="/CV/Ati-Matthew-CV.pdf"
          download
          className="bg-background  hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full transition duration-300"
        >
          📄 Download My CV
        </a>
      </div>

      {/* Timeline Section */}
      <h2 className="text-2xl font-semibold mb-4 text-center  ">My Journey</h2>
      <div className="mb-12 space-y-6 border-l-4 border-blue-400 pl-6">
        {timeline.map((event, index) => (
          <div key={index} className="relative">
            <div className="absolute left-[-1.25rem] top-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></div>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <span className="text-sm text-gray-500">{event.year}</span>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Skills & Tools</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {skillsData.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
              <img
  src={`/Icons/${skill.skillName.toLowerCase().replace(/\s/g, "")}.png`}
  alt={skill.skillName}
  className="h-5 w-5"
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  }}
/>

                <span className="font-medium">{skill.skillName}</span>
              </div>
              <span className="text-sm">{skill.skillLevel}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${skill.skillLevel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Endorsements */}
      <h2 className="text-2xl font-semibold mb-4 text-center">People’s View</h2>
      <div className="space-y-6">
        {endorsements.map((endorse, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow p-4 transition hover:scale-[1.01]"
          >
            <p className="italic text-gray-700">"{endorse.comment}"</p>
            <div className="mt-2 text-sm font-semibold text-gray-800">
              — {endorse.name}, <span className="text-gray-600">{endorse.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
