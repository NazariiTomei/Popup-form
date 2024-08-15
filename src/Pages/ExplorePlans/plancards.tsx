import React from "react";
import PlanCard from "../../Components/plancard.tsx";
const PlanCards = ({ cardData, selected, handleClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 w-full max-w-7xl mx-auto">
      {/* Flex container with wrapping and spacing */}
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex-1 max-w-[70%] sm:max-w-[45%] md:max-w-[30%] lg:max-w-[23%]"
        >
          {/* Adjust max-width for responsiveness */}
          <PlanCard
            id={card.id}
            planName={card.title}
            headline={card.description}
            highlights={card.subText}
            color={card.color}
            subTitle={card.subTitle}
            isActive={selected === card.id ? true : false}
            handleClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};

export default PlanCards;
