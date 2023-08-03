import React, { useState, useEffect } from 'react';
import ServiceCard from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';

interface ServiceData {
  title: string;
  description: string;
  imageUrl: string;
  id:number;
}


const ServicesSection: React.FC = () => {
    
const [servicesData,setServicesData]  =useState([
    {
  title: "Frontend Development",
  description:
    "We provide modern and interactive frontend development services.",
  imageUrl: "Icons/design.png",
  id:0
},
{
  title: "Frontend Development",
  description:
    "We provide modern and interactive frontend development services.",
  imageUrl: "Icons/design.png",
  id:1
},
{
  title: "Frontend Development",
  description:
    "We provide modern and interactive frontend development services.",
  imageUrl: "Icons/design.png",
  id:2
},
{
    title: "Frontend Development",
    description:
      "We provide modern and interactive frontend development services.",
    imageUrl: "Icons/design.png",
    id:3
  },
  {
    title: "Frontend Development",
    description:
      "We provide modern and interactive frontend development services.",
    imageUrl: "Icons/design.png",
    id:4
  },
  {
    title: "Frontend Development",
    description:
      "We provide modern and interactive frontend development services.",
    imageUrl: "Icons/design.png",
    id:5
  },
// Add more services here
]);


const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 3;
  const [servicesToShow, setServicesToShow] = useState<ServiceData[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Display the first 3 cards initially
    const initialServices = servicesData.slice(0, 3);
    setServicesToShow(initialServices);
  }, []);

  const loadMoreServices = () => {
    // Simulating API call or data fetching from backend
    setTimeout(() => {
      const nextServices = servicesData.slice(
        servicesToShow.length,
        servicesToShow.length + 3
      );
      if (nextServices.length === 0) {
        setHasMore(false);
      } else {
        setServicesToShow([...servicesToShow, ...nextServices]);
        setCurrentPage(currentPage + 1); 
    }
    }, 1000); // Delay to simulate data fetching
  };
  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= Math.ceil(servicesData.length / itemsPerPage)) {
      const nextServices = servicesData.slice(
        nextPage * itemsPerPage,
        nextPage * itemsPerPage + itemsPerPage
      );
      setServicesToShow(nextServices);
      setCurrentPage(nextPage);
    }
  };

  const handlePrevious = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 1) {
      const previousServices = servicesData.slice(
        (previousPage - 1) * itemsPerPage,
        (previousPage - 1) * itemsPerPage + itemsPerPage
      );
      setServicesToShow(previousServices);
      setCurrentPage(previousPage);
    }
  };
  return (

    
    <div className="flex  items-center justify-center space-x-4 ">
        <img src='Icons/left-chevron.png'
        className="  w-9 bg-second rounded-full p-1 cursor-pointer"
        onClick={handlePrevious}
      />
      <InfiniteScroll
        dataLength={servicesToShow.length}
        next={loadMoreServices}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className="flex space-x-4 overflow-clip"
      >
        {servicesToShow.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </InfiniteScroll>
      <img src='Icons/right-chevron.png'
        className=" w-9 bg-second rounded-full p-1 cursor-pointer"
        onClick={handlePrevious}
      />
    </div>
  );
};

export default ServicesSection;
