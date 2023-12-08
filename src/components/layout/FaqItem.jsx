import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center justify-between bg-blue-200 p-3 rounded transition duration-3000 ease-in-out">
          <div className="text-left">{question}</div>
          <div
            className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-500 ease-in-out`}
          >
            &#9660;
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-100 p-3 rounded mt-2 transition duration-500 ease-in-out">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
