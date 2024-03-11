import clsx from "clsx";
import { useSettings } from "../../../contexts/SettingsContext";

type Props = {
  speed: number;
  fuel: number;
  gear: number;
};

const SpeedoMeter2 = (props: Props) => {
  const { fuel, gear, speed } = props;

  const { settings } = useSettings();

  return (
    <div className="w-32 h-32 flex flex-col items-center justify-center bg-red-50">
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
      <div className="flex flex-col items-end justify-start">
        <div className="">
          {speed < 100 && speed !== 0 && (
            <span className="text-black text-opacity-30 text-[32px] font-extrabold font-['Orbitron']">
              0
            </span>
          )}
          <span className="text-black text-[32px] font-extrabold font-['Orbitron']">
            {speed}
          </span>
        </div>
        <div className=" text-black text-[12px] font-extrabold font-['Orbitron']">
          {settings.speedometers.units.toLocaleUpperCase()}
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <div
          className={clsx(
            "text-center text-[12px] font-extrabold font-['Orbitron']",
            gear === 1 ? "text-black" : "text-zinc-500"
          )}
        >
          1
        </div>
        <div
          className={clsx(
            "text-center text-[12px] font-extrabold font-['Orbitron']",
            gear === 2 ? "text-black" : "text-zinc-500"
          )}
        >
          2
        </div>
        <div
          className={clsx(
            "text-center text-[12px] font-extrabold font-['Orbitron']",
            gear === 3 ? "text-black" : "text-zinc-500"
          )}
        >
          3
        </div>
        <div
          className={clsx(
            "text-center text-[12px] font-extrabold font-['Orbitron']",
            gear === 4 ? "text-black" : "text-zinc-500"
          )}
        >
          4
        </div>
        <div
          className={clsx(
            "text-center text-[12px] font-extrabold font-['Orbitron']",
            gear === 5 ? "text-black" : "text-zinc-500"
          )}
        >
          5
        </div>
        <div
          className={clsx(
            "text-center text-[12px] font-extrabold font-['Orbitron']",
            gear === 6 ? "text-black" : "text-zinc-500"
          )}
        >
          6
        </div>
      </div>
    </div>
  );
};

export default SpeedoMeter2;
