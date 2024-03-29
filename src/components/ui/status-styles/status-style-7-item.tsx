type StatusStyle4ItemProps = {
  percentage: number;
  Icon: () => JSX.Element;
  color: string;
  activeColor: string;
};

const StatusStyle7Item = (props: StatusStyle4ItemProps) => {
  const { Icon, activeColor, color } = props;

  const purplePercentage = props.percentage;

  const squareStyle = {
    width: "2rem",
    height: "2rem",
    transform: "rotate(45deg)",
    backgroundImage: `linear-gradient(to top left, ${activeColor} ${purplePercentage}%,  ${color} ${0}%)`,
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

export default StatusStyle7Item;
