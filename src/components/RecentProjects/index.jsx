import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { recentProjects } from "../../constants";

const RecentProjects = () => {
  const renderCard = (proj) => (
    <div
      key={proj.id}
      className="border border-white bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-transform duration-300 hover:-translate-y-2"
    >
      <img
        src={proj.image}
        alt={proj.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl text-white font-bold">{proj.title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{proj.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {proj.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-[#251f38] text-xs text-purple-500 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-purple-800 text-white px-4 py-1 rounded-lg text-sm font-semibold transition-colors duration-300"
            >
              Code
            </a>
          )}
          {proj.webapp && (
            <a
              href={proj.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-1 rounded-lg text-sm font-semibold transition-colors duration-300"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-[10vw]" id="recent-projects">
      <h2 className="text-4xl font-bold text-white text-center">
        My Recent Projects that I Shipped
      </h2>
      <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 mb-10"></div>

      {recentProjects.length <= 1 ? (
        // If one or none, just show normally
        <div className="flex justify-center">
          {recentProjects.length === 1 && renderCard(recentProjects[0])}
          {recentProjects.length === 0 && (
            <p className="text-gray-400">No recent projects added yet.</p>
          )}
        </div>
      ) : (
        // If more than one, show Swiper
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Always one project at a time
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
          {recentProjects.map((proj) => (
            <SwiperSlide key={proj.id}>{renderCard(proj)}</SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default RecentProjects;
