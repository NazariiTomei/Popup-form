// PremiumFeaturesSection.js
import React from "react";
import { featureItems } from "../../Data/Data.tsx";

const PremiumFeaturesSection = ({ title = "", color = "bg-blue-500" }) => {
  return (
    <div className="w-full flex justify-center items-center gap-8 text-left mx-auto p-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-[70%] flex flex-col md:flex-row justify-center">
        <div className="flex-1 relative ">
          <div
            className="
        absolute 
        rounded-full 
        opacity-5
        bg-transparent
        sm:w-[1000px] sm:h-[1000px]
        md:w-[1200px] md:h-[1200px]
        lg:w-[1400px] lg:h-[1400px]
        sm:top-[-300px] sm:left-[-400px]
        md:top-[-400px] md:left-[-600px]
        lg:top-[-500px] lg:left-[-760px]
      "
            style={{ backgroundColor: color }}
          ></div>

          <div
            className={`text-manrope text-[28px] leading-[38.25px] font-medium`}
            style={{ color: color }}
          >
            {title}
          </div>
          <div
            className={`text-manrope text-[120px] leading-[163.92px] font-medium`}
            style={{ color: color }}
          >
            [pv2]
          </div>
          <div className="text-manrope text-[22px] font-medium leading-[30.05px] text-left text-[#313234] mb-6">
            [plan value 3]
          </div>
          <button
            role="link"
            className="px-6 py-2 text-white bg-[#BAFD32] rounded-full shadow-md font-semibold transition duration-300 ease-in-out mb-2"
          >
            <span className="text-[#45359C] text-[18px] leading-[24px] font-bold">
              Try now for USD0
            </span>
          </button>
          <div className="text-manrope text-[#404040] leading-[19.12px] text-[14px] font-bold">
            Price: USD[price] 1-month free trial
          </div>
          <p className="text-manrope text-[#404040] leading-[20px] text-[13px]">
            After your free 1-month, pay as little as USD[price] / month when
            subscribed annually. Cancel anytime. We’ll remind you before your
            trial ends.
          </p>
          <span className="inline-flex items-start">
            <button className="flex items-center mt-4 text-gray-600 bg-transparent focus:outline-none">
              <img src="./key.svg" alt="key" className="mr-2" />
              <span className="text-[14px] font-medium">Secure checkout</span>
            </button>
            <div id="secure-checkout-content" className="hidden"></div>
          </span>
        </div>
        <div className="flex-1">
          {featureItems.map((item, index) => (
            <FeatureItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ item }) => (
  <div className="flex items-center p-4 bg-white">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-8 h-8">
        <img src="/check.svg" alt="check" />
      </div>
    </div>

    <div className="flex-grow ml-4">
      <div className="text-manrope text-[16px] leading-[21.86px] font-medium text-[#404040]">
        {item.title}
      </div>
      <div className="text-manrope text-[14px] leading-[18px] font-normal text-[#666666]">
        {item.description}
      </div>
    </div>
  </div>
);

export default PremiumFeaturesSection;
