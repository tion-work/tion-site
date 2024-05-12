import React from "react";

interface Props {
  insights: string[];
}

const InsightsRoll: React.FC<Props> = ({ insights }) => {
  return (
    <div className=" w-full bg-violet-500 text-white whitespace-nowrap overflow-hidden">
      <div className=" animate-roll w-full py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-base">
        {insights.map((text, index) => (
          <div key={index}>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsRoll;
