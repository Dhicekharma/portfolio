import React, { useState, useEffect } from 'react';
import ServiceCard from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';

interface ServiceData {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
}

const ServicesSection: React.FC = () => {
  const [servicesData] = useState<ServiceData[]>([
    {
      title: "Frontend Development",
      description: "We provide modern and interactive frontend development services.",
      imageUrl: "Icons/design.png",
      id: 0,
    },
    {
      title: "Networking",
      description: "Network security building and troubleshooting",
      imageUrl: "Icons/developing.png",
      id: 1,
    },
    {
      title: "Cybersecurity Specialist",
      description: "Application and network security analysis and penetration testing.",
      imageUrl: "Icons/web-development.png",
      id: 2,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [servicesToShow, setServicesToShow] = useState<ServiceData[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setServicesToShow(servicesData.slice(0, itemsPerPage));
  }, []);

  const loadMoreServices = () => {
    setTimeout(() => {
      const nextServices = servicesData.slice(
        servicesToShow.length,
        servicesToShow.length + itemsPerPage
      );
      if (nextServices.length === 0) {
        setHasMore(false);
      } else {
        setServicesToShow([...servicesToShow, ...nextServices]);
        setCurrentPage(currentPage + 1);
      }
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col items-center px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Services</h1>
      
      {/* Infinite Scroll Container */}
      <InfiniteScroll
        dataLength={servicesToShow.length}
        next={loadMoreServices}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {servicesToShow.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ServicesSection;
