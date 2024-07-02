import React, { useState } from 'react';

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know the clinic I am searching is verified?",
      answer: ""
    },
    {
      question: "I can't travel alone so can some family member or friend of mine accompany me?",
      answer: ""
    },
    {
      question: "Can I see my doctor before I decide and what about my post recovery?",
      answer: "Yes, pre and post treatment consultation can be done. You can speak to the doctor at the most appropriate time (before you decide to travel) to boost your confidence. The team at Medicuratress will also help you with arranging the OPD's after the surgeries."
    },
    {
      question: "How do I share my reports and medical cases with the clinic of my choice?",
      answer: ""
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Treatment FAQs.</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex gap-8 items-center w-full text-left"
              onClick={() => toggleFaq(index)}
            >
               <span className="text-blue-600 text-2xl">{openFaq === index ? '-' : '+'}</span>
              <span className="text-gray-600 font-medium">{faq.question}</span>
             
            </button>
            {openFaq === index && (
              <p className="mt-2 text-gray-600">{faq.answer || "Answer not provided."}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;