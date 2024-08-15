import React from "react";
import { faqs } from "../../Data/Data.tsx";
const FAQSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-8  border border-gray-200 rounded-lg bg-white mt-6">
      <h2 className="font-manrope text-[22px] font-bold text-darkGray mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row gap-8 text-left">
        <div className="flex-1">
          {faqs.slice(0, 4).map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
        <div className="flex-1">
          {faqs.slice(4).map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }) => (
  <div className="mb-8">
    <h3 className="text-[16px] font-bold font-manrope leading-[22px] text-darkGray mb-2">
      {faq.question}
    </h3>
    <p className="text-gray-700 ">
      {faq.answer}
      {faq.linkText && (
        <a
          href={faq.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          {faq.linkText}
        </a>
      )}
    </p>
  </div>
);

export default FAQSection;
