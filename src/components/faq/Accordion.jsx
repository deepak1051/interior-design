import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div
        className="w-full p-1.5 cursor-pointer"
        onClick={() => handleClick(index)}
      >
        <div className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200">
          <div className="flex flex-wrap items-center justify-between -m-2">
            <div className="w-auto p-2">
              <h3 className="font-semibold text-base tracking-tight">
                {item.title}
              </h3>
            </div>
            <div className="w-auto p-2">{icon}</div>
          </div>
          {isExpanded && (
            <p className=" mt-6 tracking-tight text-xs">{item.body}</p>
          )}
        </div>
      </div>
    );
  });

  return <div className="flex flex-wrap -m-1.5">{renderedItems}</div>;
};

export default Accordion;
