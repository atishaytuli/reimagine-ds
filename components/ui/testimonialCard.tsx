import React from "react";

const TestimonialCard = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 space-y-6 rounded-2xl">
      <div className="flex items-center space-x-3">
        <div className=" rounded-full p-3 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="orange">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 16V6H12.5V16C12.5 21.5142 8.01417 26 2.5 26V22.6667C6.17833 22.6667 9.16667 19.675 9.16667 16H2.5ZM19.168 16V6H29.168V16C29.168 21.5142 24.6821 26 19.168 26V22.6667C22.8463 22.6667 25.8346 19.675 25.8346 16H19.168Z" fill="#F97316" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#131426]">Why Choose Us?</h3>
      </div>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start space-x-2">
          <span className=" font-semibold">✓</span>
          <span>Custom-built solutions designed for your unique business needs.</span>
        </li>
        <li className="flex items-start space-x-2">
          <span className=" font-semibold">✓</span>
          <span>End-to-end expertise from concept to implementation.</span>
        </li>
        <li className="flex items-start space-x-2">
          <span className=" font-semibold">✓</span>
          <span>Fast, reliable support to keep your business running smoothly.</span>
        </li>
        <li className="flex items-start space-x-2">
          <span className=" font-semibold">✓</span>
          <span>Future-ready strategies that ensure long-term success.</span>
        </li>
      </ul>
      <div className=" p-4 rounded-xl text-gray-700 font-medium"> Let’s turn your ideas into reality. Get in touch today!
      </div>
    </div>

  );
};

export default TestimonialCard;
