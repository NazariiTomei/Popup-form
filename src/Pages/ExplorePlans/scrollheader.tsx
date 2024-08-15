import React, { useEffect, useState } from "react";

const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`z-[10] fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-center mb-2 w-full max-w-xl mx-auto">
          {/* Progress Bar Container */}
          <div className="relative w-full bg-gray-200 h-2 rounded-full mt-4">
            <div
              className="bg-customBlue h-2 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>

          {/* Progress Labels */}
          <div
            className="flex justify-between text-gray-600 text-[14px] font-normal leading-[19.12px] mt-1 w-full max-w-xl"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            <span>Choose plan</span>
            <span>90%</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="text-manrope text-[#404040] leading-[19.12px] text-[14px] font-bold p-4">
          Price: USD[price] 1-month free trial
        </div>
        <button
          role="link"
          className="px-6 py-2 text-white bg-[#BAFD32] rounded-[90px] shadow-md font-semibold transition duration-300 ease-in-out mb-2 mr-6"
        >
          <span className="text-[#45359C] text-[18px] leading-[24px] font-bold">
            Try now for USD0
          </span>
        </button>
      </div>
    </header>
  );
};

export default ScrollHeader;
