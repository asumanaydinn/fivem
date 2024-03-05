type StatusStyle4ItemProps = {
  percentage: number;
  Icon: () => JSX.Element;
  color: string;
  activeColor: string;
};

const StatusStyle5Item = (props: StatusStyle4ItemProps) => {
  const { Icon, activeColor, color } = props;

  // Constant value for the percentage of the square to be colored purple
  const purplePercentage = props.percentage; // Example: 50%
  const pinkPercentage = 100 - purplePercentage; // Calculate the rest for pink

  // Inline styles for the square
  const squareStyle = {
    width: "2rem", // Adjust the size as needed
    height: "2rem", // Adjust the size as needed
    transform: "rotate(45deg)", // Rotate the square
    backgroundImage: `linear-gradient(to bottom right, ${activeColor} ${purplePercentage}%,  ${color} ${pinkPercentage}%)`,
    outlineColor: color + "40",
  };

  return (
    <div className="relative w-12 h-12 items-center justify-center">
      <div
        style={squareStyle}
        className="absolute left-2 top-2 outline outline-4"
      ></div>
      <div className="absolute z-10 left-[17px] top-4">
        <Icon />
      </div>
    </div>
  );
};
export default StatusStyle5Item;
