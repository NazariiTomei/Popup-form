import React from "react";

const PlanCard = ({
  id,
  planName,
  subTitle,
  headline,
  highlights,
  isActive,
  color,
  handleClick,
}) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className="relative bg-white shadow-lg rounded-lg text-left overflow-hidden min-h-[400px] min-w-[150px] flex flex-col"
    >
      <div className="flex-1 flex flex-col">
        <div
          className={`h-2 rounded-t-full ${!isActive ? "bg-white" : ""}`}
          style={{
            backgroundColor: isActive ? color : undefined,
          }}
        ></div>
        <div className="p-6 flex-1">
          <div
            className={`mb-6 ${isActive ? `text-[${color}]` : "text-gray-500"}`}
          >
            <h2 className="font-bold text-[22px] leading-[30.05px] mb-4">
              {planName}
            </h2>
            <h3 className="font-normal text-[#313234] text-[16px] leading-[21.86px]">
              {headline}
            </h3>
          </div>
          <hr className="my-4 border-gray-200 mt-6" />
          <ul className="space-y-3 text-gray-600 text-sm">
            {subTitle ? (
              <p className="font-semibold text-[#313234] text-[15px] leading-[20.49px]">
                {subTitle}
              </p>
            ) : null}
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#404040] w-[5px] mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6">
        {isActive ? (
          <button
            aria-label={`Learn more about ${planName}`}
            className="w-full flex justify-center items-center rounded-[18px] border border-[#45359C] p-[5px_10px] gap-[18px] bg-white hover:bg-gray-100"
          >
            <span className="font-manrope font-bold text-[16px] text-[#45359C] leading-[24px]">
              Learn more
            </span>
            <img src="./star.svg" alt="star" />
          </button>
        ) : (
          <button
            aria-label={`Learn more about ${planName}`}
            className="w-full flex justify-center items-center rounded-[18px] border border-gray-500 p-[5px_10px] gap-[18px] bg-white hover:bg-gray-100"
          >
            <span className="font-manrope font-bold text-[16px] text-gray-500 leading-[24px]">
              Learn more
            </span>
            <img src="./grey-star.svg" alt="star" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
