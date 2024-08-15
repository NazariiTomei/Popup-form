import React, { useState } from "react";
import Header from "../../Components/header.tsx";
import ScrollHeader from "./scrollheader.tsx";
import PostHeader from "./postheader.tsx";
import PlanCards from "./plancards.tsx";
import PremiumFeaturesSection from "./feature.tsx";
import FAQSection from "./faqsection.tsx";
import { cardData } from "../../Data/Data.tsx";
const ExplorePlans = () => {
  const [selectcard, setselectCardId] = useState(1);

  const clickCard = (id) => {
    setselectCardId(id);
  };
  return (
    <div style={{ background: "#F6F6FA" }}>
      <Header />
      <ScrollHeader />
      <PostHeader />
      <PlanCards
        cardData={cardData}
        selected={selectcard}
        handleClick={clickCard}
      />
      <PremiumFeaturesSection
        title={cardData[selectcard - 1].title}
        color={cardData[selectcard - 1].color}
      />
      <FAQSection />
    </div>
  );
};

export default ExplorePlans;
