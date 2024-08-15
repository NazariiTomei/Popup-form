import React from "react";

const PostHeader = () => {
  return (
    <div className="bg-white p-6 shadow-md">
      <div className="text-center mb-4">
        <h1 className="font-mori text-[22px] font-semibold leading-[23.1px] text-center text-gray-900">
          Join the STARSTRUCK members using Elite to get ahead
        </h1>
      </div>

      {/* Social Proof */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex -space-x-4">
          <img
            src="./avatar1.svg"
            alt=""
            className="w-8 h-8 rounded-full border-0.5 border-#9298A3"
          />
          <img
            src="./avatar2.svg"
            alt=""
            className="w-8 h-8 rounded-full border-0.5 border-#9298A3"
          />
          <img
            src="./avatar3.svg"
            alt=""
            className="w-8 h-8 rounded-full border-0.5 border-#9298A3"
          />
        </div>
        <h2 className="font-manrope text-[15px] font-medium leading-[20.49px] text-gray-800 text-left ml-4">
          93% of members use Elite
        </h2>
      </div>

      <div className="text-center mb-4">
        <h3 className="font-manrope text-[16px] font-semibold leading-[21.86px] text-gray-700 text-center">
          Start your free 1-month trial today. Cancel anytime. We’ll send you a
          reminder before your trial ends.
        </h3>
      </div>

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
  );
};

export default PostHeader;
