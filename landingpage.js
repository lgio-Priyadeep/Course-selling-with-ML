import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800">
        <div className="text-lg font-bold">fasttrack.com</div>
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md text-black"
        />
        <div className="space-x-4">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Cart</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
        <button className="px-3 py-1 bg-orange-500 rounded-md">
          Login / Signup
        </button>
      </nav>

      {/* Sliding Courses */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Sliding Courses</h2>
        <Swiper spaceBetween={10} slidesPerView={3}>
          <SwiperSlide>
            <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">
              Course 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">
              Course 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">
              Course 3
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Recommended Section */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-40 h-40 bg-gray-700 rounded-lg flex items-center justify-center">
              Card {item}
            </div>
          ))}
        </div>
      </section>

      {/* Discover Section */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Discover</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">
              Discover {item}
            </div>
          ))}
        </div>
      </section>

      {/* Career Options */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">Career Options</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-40 h-40 bg-gray-700 rounded-lg flex items-center justify-center">
              Career {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
