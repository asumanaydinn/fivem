import React from "react";

interface StatusStyle6ItemProps {
  fillPercentage: number; // The percentage of the circle to be filled
  Icon: () => JSX.Element;
  activeColor: string;
}

const StatusStyle6Item: React.FC<StatusStyle6ItemProps> = ({
  fillPercentage,
  Icon,
  activeColor,
}) => {
  const radius = 18; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Calculate the circumference of the circle
  const filledLength = (circumference * fillPercentage) / 100; // Calculate the length of the dash to represent the filled percentage

  return (
    <>
      <div
        className="relative flex items-center justify-center"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="w-9 h-9 z-10 absolute rounded-full bg-black top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="w-[41px] h-[41px] absolute rounded-full bg-black bg-opacity-10 top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="w-[43px] h-[43px] absolute rounded-full bg-black bg-opacity-30 top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="w-[36px] h-[36px] z-50 absolute flex items-center justify-center top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="17"
              fill="transparent"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="18"
              cy="18"
              r="17"
              fill="transparent"
              stroke={activeColor}
              strokeWidth="2"
              strokeDasharray={`${filledLength} ${circumference}`}
              transform="rotate(-90) translate(-36)"
            />
          </svg>
        </div>
        <div className="absolute z-20">
          <Icon />
        </div>
      </div>
    </>
  );
};

export default StatusStyle6Item;
