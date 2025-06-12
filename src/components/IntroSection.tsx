import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js';

function IntroSection() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i> a FEM full stack</i> Web Developer.'
        , '<i> a Networking  Support Engineer.</i>'
        ,     '<i> a Cyber Security practioner</i>'
      ],
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 100,
      loop: true,
      backDelay: 700,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [1]);

  return (

      <div className="  flex-col  pt-24 justify-center items-center    lg:flex-row flex items-center bg-background py-0 px-10 h-screen overflow-hidden ">
        <div className="  text-white leading-relaxed   ">
          <p className="text-based text-4xl lg:text-5xl font-bold  ">
            Welcome Aboard
          </p>
          <p className="text-xl px-13 pl-10 py-3">
            I'm
            <span className=" text-2xl font-bold text-cyan-100  ">
              Ati Matthew
            </span>
            <span ref={el}> </span>
          </p>
          <p className=" text-base   py-3 tracking-wider leading-relaxed ">
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
        <div className="w-[60%] left-auto">
          <img className=" opacity-10   " src="profile.png" alt="my pic" />
        </div>
      </div>
  )
}

export default IntroSection