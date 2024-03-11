import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { useSettings } from "../../../contexts/SettingsContext";

interface SpeedFuelGaugeProps {
  speed: number; // Current speed passed from outside
  maxSpeed: number; // Maximum speed of the gauge
  fuel: number; // Current fuel level passed from outside
  maxFuel: number; // Maximum fuel level (for simplicity, you might set this to 100)
  gear: number;
}

const SpeedoMeter4: React.FC<SpeedFuelGaugeProps> = ({
  speed,
  maxSpeed,
  fuel,
  maxFuel,
  gear,
}) => {
  const { settings } = useSettings();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // State to manage animated speed value
  const [animatedSpeed, setAnimatedSpeed] = useState(speed);

  useEffect(() => {
    const animate = () => {
      // Calculate the difference between current speed and target speed
      const speedDiff = speed - animatedSpeed;
      // If the difference is negligible, directly set to target speed
      if (Math.abs(speedDiff) < 0.01) {
        setAnimatedSpeed(speed);
        return;
      }
      // Otherwise, incrementally update the animated speed towards the target speed
      setAnimatedSpeed((prevSpeed) => prevSpeed + speedDiff * 0.02); // Adjust the 0.02 factor to control the animation speed
      requestAnimationFrame(animate);
    };

    animate();
  }, [animatedSpeed, speed]); // Dependency array includes speed to react to its changes

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const centerX = canvas!.width / 2;
    const centerY = canvas!.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    const drawGauge = () => {
      if (context) {
        context.clearRect(0, 0, canvas!.width, canvas!.height); // Clear the canvas

        // Speed arc
        let speedAngleStart = Math.PI + 0.3; // Start from the left (middle of the circle)
        let speedAngleEnd =
          Math.PI + (animatedSpeed / maxSpeed) * Math.PI - 0.3; // End angle based on animated speed
        context.beginPath();
        context.arc(
          centerX,
          centerY,
          radius - 10,
          speedAngleStart,
          speedAngleEnd
        );
        context.lineWidth = 2; // Make the arc a bit thicker
        context.strokeStyle = "white"; // Different color for speed
        context.stroke();

        // Fuel arc
        let fuelAngleStart = 0 + 0.3; // Start from the right (middle of the circle)
        let fuelAngleEnd = (fuel / maxFuel) * Math.PI - 0.3; // End angle based on fuel
        context.beginPath();
        context.arc(
          centerX,
          centerY,
          radius - 10,
          fuelAngleStart,
          fuelAngleEnd
        );
        context.lineWidth = 2; // Same thickness for a consistent look
        context.strokeStyle = "white"; // Different color for fuel
        context.stroke();
      }
    };

    drawGauge();
  }, [animatedSpeed, maxSpeed, fuel, maxFuel]); // Update dependencies to include animatedSpeed

  return (
    <>
      <div className="w-[102.62px] shadow shadow-white relative flex items-center justify-center  h-[102.62px] bg-gradient-to-b from-neutral-900 via-neutral-800 to-zinc-950 rounded-full border border-white border-opacity-10">
        <canvas
          className="-rotate-90"
          ref={canvasRef}
          width="132"
          height="132"
        ></canvas>
        <svg
          className="absolute bottom-2 left-9"
          width="5"
          height="4"
          viewBox="0 0 5 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.98665 2.6259V3.13272C4.98665 3.22233 4.95105 3.30827 4.88768 3.37164C4.82432 3.435 4.73838 3.4706 4.64877 3.4706H2.36661C2.35103 3.47061 2.33575 3.46632 2.32246 3.45818C2.30917 3.45005 2.29838 3.4384 2.2913 3.42452C2.28422 3.41064 2.28112 3.39508 2.28233 3.37954C2.28355 3.36401 2.28904 3.34911 2.29819 3.33651L3.5986 1.54892C3.62555 1.51311 3.6376 1.46826 3.6322 1.42378C3.62681 1.37929 3.6044 1.33862 3.56967 1.31029C3.5518 1.29643 3.53133 1.28629 3.50947 1.28049C3.48762 1.27468 3.46482 1.27333 3.44242 1.2765C3.42003 1.27967 3.3985 1.2873 3.37912 1.29895C3.35973 1.31059 3.34288 1.32601 3.32956 1.34429L1.80911 3.43618C1.80114 3.44702 1.7907 3.4558 1.77865 3.46178C1.7666 3.46777 1.7533 3.47079 1.73985 3.4706H0.594226C0.504615 3.4706 0.418674 3.435 0.35531 3.37164C0.291945 3.30827 0.256348 3.22233 0.256348 3.13272V2.64977C0.256348 2.61197 0.256348 2.57438 0.259093 2.53721C0.260177 2.51555 0.269553 2.49513 0.285278 2.48019C0.301004 2.46526 0.321873 2.45694 0.343563 2.45697H0.932105C0.955264 2.45702 0.978187 2.4523 0.999449 2.44312C1.02071 2.43394 1.03986 2.42049 1.0557 2.4036C1.07154 2.3867 1.08374 2.36673 1.09154 2.34493C1.09934 2.32312 1.10258 2.29994 1.10104 2.27683C1.09731 2.23332 1.07721 2.19284 1.04479 2.16356C1.01238 2.13429 0.970073 2.11839 0.926403 2.11909H0.423597C0.410711 2.11908 0.397998 2.11612 0.386431 2.11044C0.374864 2.10476 0.364749 2.09651 0.356862 2.08632C0.348975 2.07613 0.343523 2.06427 0.340925 2.05165C0.338327 2.03903 0.338652 2.02598 0.341873 2.0135C0.595282 1.08771 1.39056 0.384714 2.35901 0.27596C2.37084 0.27468 2.38281 0.275915 2.39413 0.279583C2.40545 0.283251 2.41587 0.28927 2.4247 0.297245C2.43353 0.30522 2.44058 0.314972 2.44538 0.32586C2.45018 0.336749 2.45263 0.348529 2.45256 0.360429V0.936512C2.45251 0.959672 2.45722 0.982594 2.4664 1.00386C2.47558 1.02512 2.48904 1.04427 2.50593 1.06011C2.52282 1.07595 2.54279 1.08815 2.5646 1.09595C2.5864 1.10375 2.60958 1.10699 2.63269 1.10545C2.67621 1.10171 2.71668 1.08161 2.74596 1.0492C2.77524 1.01679 2.79113 0.974481 2.79044 0.930811V0.359373C2.79037 0.347473 2.79281 0.335693 2.79761 0.324805C2.80242 0.313916 2.80946 0.304165 2.8183 0.296189C2.82713 0.288214 2.83755 0.282196 2.84887 0.278527C2.86019 0.274859 2.87215 0.273624 2.88399 0.274904C3.35679 0.328033 3.80264 0.522297 4.16347 0.832397C4.52431 1.1425 4.78341 1.55406 4.90703 2.0135C4.91026 2.02599 4.91058 2.03906 4.90797 2.0517C4.90536 2.06434 4.89989 2.07621 4.89198 2.0864C4.88407 2.0966 4.87393 2.10484 4.86233 2.11051C4.85074 2.11618 4.838 2.11911 4.8251 2.11909H4.31659C4.27299 2.1185 4.23079 2.13444 4.19847 2.16371C4.16615 2.19297 4.1461 2.23339 4.14237 2.27683C4.14084 2.29994 4.14407 2.32312 4.15187 2.34493C4.15967 2.36673 4.17187 2.3867 4.18772 2.4036C4.20356 2.42049 4.22271 2.43394 4.24397 2.44312C4.26523 2.4523 4.28815 2.45702 4.31131 2.45697H4.90091C4.92281 2.45695 4.94386 2.46544 4.95962 2.48065C4.97538 2.49586 4.98461 2.51659 4.98538 2.53848C4.98665 2.56741 4.98665 2.59655 4.98665 2.6259Z"
            fill="white"
          />
        </svg>
        <div className="absolute flex items-center justify-center flex-col">
          <div className="flex items-center gap-x-2">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2929 8.27153C10.4011 7.91333 10.1916 7.53486 9.83336 7.43349C9.76578 7.41321 9.70495 7.39294 9.63737 7.37942C9.63061 6.77792 9.50896 6.1967 9.28593 5.66954L5.61611 8.2918C6.90697 8.21746 8.20458 8.35939 9.45489 8.7311C9.81308 8.83248 10.1916 8.62972 10.2929 8.27153ZM7.46204 13.5874C7.51151 13.5986 7.56166 13.6039 7.61052 13.6039C7.92005 13.6039 8.19857 13.3908 8.26919 13.0759L8.94503 10.0637C9.01897 9.73364 8.83812 9.40039 8.52128 9.28218C7.06133 8.73968 5.45493 8.73968 3.99497 9.28218C3.67814 9.40032 3.49735 9.73364 3.57122 10.0637L4.24706 13.0759C4.32891 13.4408 4.6919 13.6705 5.05422 13.5874C5.41857 13.5055 5.64754 13.1445 5.5657 12.7802L5.02644 10.3752C5.83955 10.1719 6.67644 10.1719 7.48954 10.3752L6.95029 12.7802C6.86865 13.1445 7.09769 13.5056 7.46204 13.5874ZM0.979847 9.94086C1.10826 10.1233 1.31777 10.2247 1.52728 10.2247C1.66245 10.2247 1.80437 10.1842 1.91927 10.0963L11.381 3.33789C11.6852 3.12162 11.7527 2.7026 11.5365 2.39847C11.3202 2.09435 10.9012 2.02676 10.5971 2.24303L8.04238 4.0678C7.99561 4.03191 7.9456 4.00387 7.89735 3.97149C8.13896 3.63776 8.28568 3.23158 8.28568 2.79046C8.28568 1.67532 7.3733 0.762939 6.25816 0.762939C5.14302 0.762939 4.23064 1.67532 4.23064 2.79046C4.23064 3.23368 4.37899 3.64141 4.6227 3.97602C3.71497 4.57157 3.05799 5.63649 2.91275 6.89957C2.89248 7.05502 2.87896 7.21722 2.87896 7.37942C2.81137 7.39294 2.75055 7.41321 2.68297 7.43349C2.33829 7.5281 2.12878 7.8863 2.21663 8.23098L1.13529 9.00144C0.831162 9.21771 0.763577 9.63673 0.979847 9.94086Z"
                fill="#040F0A"
              />
            </svg>
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6695 7.09865V4.12609C12.6695 4.02755 12.6304 3.93304 12.5607 3.86336C12.491 3.79367 12.3965 3.75453 12.2979 3.75453C12.1994 3.75453 12.1049 3.79367 12.0352 3.86336C11.9655 3.93304 11.9264 4.02755 11.9264 4.12609V5.2408H11.1832V4.49766C11.1832 4.30057 11.1049 4.11155 10.9656 3.97219C10.8262 3.83282 10.6372 3.75453 10.4401 3.75453H9.8507L8.55353 2.45735L4.35143 9.26645L4.36421 9.27188C4.45439 9.30928 4.5511 9.32838 4.64873 9.32807H7.68538C7.78301 9.32838 7.87972 9.30928 7.9699 9.27188C8.06008 9.23449 8.14193 9.17954 8.21069 9.11023L9.8507 7.47022H10.4401C10.6372 7.47022 10.8262 7.39192 10.9656 7.25256C11.1049 7.11319 11.1832 6.92417 11.1832 6.72708V5.98394H11.9264V7.09865C11.9264 7.1972 11.9655 7.29171 12.0352 7.36139C12.1049 7.43107 12.1994 7.47022 12.2979 7.47022C12.3965 7.47022 12.491 7.43107 12.5607 7.36139C12.6304 7.29171 12.6695 7.1972 12.6695 7.09865ZM3.63968 8.62649L7.78858 1.90361C7.75446 1.89889 7.71998 1.89657 7.68538 1.89668H6.72441V1.15354H7.83912C7.93766 1.15354 8.03217 1.11439 8.10186 1.04471C8.17154 0.975026 8.21069 0.880516 8.21069 0.78197C8.21069 0.683423 8.17154 0.588913 8.10186 0.519231C8.03217 0.449548 7.93766 0.4104 7.83912 0.4104H4.86656C4.76801 0.4104 4.6735 0.449548 4.60382 0.519231C4.53414 0.588913 4.49499 0.683423 4.49499 0.78197C4.49499 0.880516 4.53414 0.975026 4.60382 1.04471C4.6735 1.11439 4.76801 1.15354 4.86656 1.15354H5.98127V1.89668H3.00871C2.81162 1.89668 2.6226 1.97497 2.48323 2.11434C2.34387 2.2537 2.26557 2.44272 2.26557 2.63982V5.2408H1.52244V4.12609C1.52244 4.02755 1.48329 3.93304 1.41361 3.86336C1.34392 3.79367 1.24941 3.75453 1.15087 3.75453C1.05232 3.75453 0.95781 3.79367 0.888127 3.86336C0.818444 3.93304 0.779297 4.02755 0.779297 4.12609V7.09865C0.779297 7.1972 0.818444 7.29171 0.888127 7.36139C0.95781 7.43107 1.05232 7.47022 1.15087 7.47022C1.24941 7.47022 1.34392 7.43107 1.41361 7.36139C1.48329 7.29171 1.52244 7.1972 1.52244 7.09865V5.98394H2.26557V6.94491C2.26526 7.04254 2.28436 7.13925 2.32176 7.22943C2.35915 7.31961 2.4141 7.40146 2.48341 7.47022L3.63968 8.62649Z"
                fill="#898989"
              />
            </svg>
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.01598 8.26841C2.03872 8.41102 2.16173 8.51596 2.30614 8.51596H9.81425C10.2109 8.51596 10.5988 8.36317 10.8677 8.0708C10.9329 8.00001 10.993 7.92172 11.0506 7.84027H1.94769L2.01598 8.26841ZM1.8524 6.86648H11.2495C11.3306 6.86648 11.406 6.8883 11.4733 6.92353C11.6813 6.15734 11.6352 5.24726 11.2276 4.44778C11.1292 4.25533 10.9808 4.09224 10.8074 3.96442L7.20204 1.30811C6.25441 0.611705 5.1099 0.234131 3.93308 0.234131H1.07906C0.898306 0.234131 0.76042 0.395761 0.788892 0.574245L1.79335 6.87244C1.81292 6.87005 1.83217 6.86648 1.8524 6.86648ZM3.99047 5.17745C3.99047 5.23138 3.94676 5.2751 3.89282 5.2751H2.46449C2.41055 5.2751 2.36684 5.23138 2.36684 5.17745V4.9487C2.36684 4.89477 2.41055 4.85105 2.46449 4.85105H3.89285C3.94676 4.85105 3.99049 4.89477 3.99049 4.9487L3.99047 5.17745ZM3.93308 0.968736C4.95858 0.968736 5.93853 1.29049 6.76716 1.90021L9.08849 3.61036H2.01725L1.5956 0.968736H3.93308ZM11.2495 7.09653H1.85244C1.71059 7.09653 1.5956 7.21152 1.5956 7.35337C1.5956 7.49522 1.71059 7.61021 1.85244 7.61021H11.2495C11.3914 7.61021 11.5064 7.49522 11.5064 7.35337C11.5064 7.21152 11.3914 7.09653 11.2495 7.09653Z"
                fill={clsx(fuel < 30 ? "black" : "#898989")}
              />
            </svg>
          </div>
          <div>
            <span className="text-white text-opacity-30 text-2xl font-semibold font-['Orbitron']">
              0
            </span>
            <span className="text-neutral-200 text-2xl font-semibold font-['Orbitron']">
              92
            </span>
          </div>
          <div className="text-white text-opacity-50 text-[8.74px] font-medium font-['Orbitron']">
            {settings.speedometers.units.toLocaleUpperCase()}
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-x-2">
              <div className="text-neutral-400 text-[4.85px] font-medium font-['Orbitron']">
                1
              </div>
              <div className="text-white text-[8.25px] font-medium font-['Orbitron']">
                2
              </div>
              <div className="text-neutral-400 text-[4.85px] font-medium font-['Orbitron']">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeedoMeter4;
