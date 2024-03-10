import React, { ReactNode, useState } from "react";
import { useSettings } from "../../../contexts/SettingsContext";
import { StatusStyleType } from "../../../types/settings";

interface StatusStyleSettingItemProps {
  statusStyleNumber: number; // The number of the speedometer
  children: ReactNode; // Children components to be rendered inside
}

const StatusStyleSettingItem: React.FC<StatusStyleSettingItemProps> = ({
  statusStyleNumber,
  children,
}) => {
  const { settings, updateSettings, setOpenSettings } = useSettings();

  const handleSelect = () => {
    // Update the speedometerType to the selected speedometerNumber, converting number to string if necessary
    updateSettings("status", {
      statusStyleType: statusStyleNumber.toString() as StatusStyleType,
    });
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(79deg, #090909 5.22%, #161616 50.4%, #0B0B0B 96.49%)",
      }}
      className="w-full relative h-[230px] flex flex-col justify-end rounded border border-white border-opacity-20 "
    >
      <div className="flex items-center justify-center h-28">{children}</div>

      <div className="flex flex-col items-center gap-y-5 mb-2 h-28">
        <div className="flex flex-col items-center justify-start h-12">
          <div className="text-center text-neutral-400 text-lg font-semibold font-['Qanelas Soft']">
            Status Style #{statusStyleNumber}
          </div>

          {settings.status.statusStyleType === statusStyleNumber.toString() && (
            <div className="text-center text-gray-200 text-[10.54px] font-semibold font-['Qanelas Soft']">
              Selected Now
            </div>
          )}
        </div>
        <div className="flex gap-x-2">
          {settings.status.statusStyleType === statusStyleNumber.toString() && (
            <div className="w-[184.70px] h-[32.59px] pl-[70.62px] pr-[19.92px] pt-[5.43px] pb-[4.53px] bg-neutral-200 rounded border-2 border-neutral-200 justify-start items-start inline-flex">
              <div className="text-black text-xs font-bold font-['Satoshi'] leading-snug tracking-tight">
                Selected
              </div>
            </div>
          )}

          {settings.status.statusStyleType !== statusStyleNumber.toString() && (
            <button
              onClick={() => handleSelect()}
              className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex"
            >
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </button>
          )}

          {settings.status.statusStyleType !== statusStyleNumber.toString() && (
            <button
              onClick={() =>
                setOpenSettings(statusStyleNumber.toString() as StatusStyleType)
              }
              className="w-[35.81px] cursor-pointer hover:bg-opacity-20 h-[35.81px] bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0405 7.5378C12.043 7.44884 12.043 7.35989 12.0405 7.27094L12.9622 6.1195C13.0105 6.05904 13.044 5.98808 13.0598 5.91233C13.0757 5.83658 13.0736 5.75816 13.0536 5.68339C12.9022 5.11554 12.6763 4.57028 12.3815 4.06186C12.3429 3.99534 12.2893 3.93876 12.2249 3.89661C12.1606 3.85447 12.0873 3.82792 12.0109 3.81909L10.5456 3.65601C10.4847 3.59177 10.4229 3.53 10.3603 3.4707L10.1874 2.00175C10.1785 1.92528 10.1518 1.85195 10.1096 1.7876C10.0673 1.72325 10.0106 1.66967 9.94398 1.63111C9.4356 1.33661 8.89031 1.11102 8.32245 0.960264C8.24768 0.940287 8.16926 0.938152 8.09351 0.954032C8.01776 0.969911 7.9468 1.00336 7.88634 1.05169L6.73799 1.96839C6.64904 1.96839 6.56009 1.96839 6.47113 1.96839L5.31969 1.0486C5.25924 1.00027 5.18828 0.966823 5.11253 0.950943C5.03678 0.935063 4.95836 0.937198 4.88358 0.957175C4.31574 1.10853 3.77048 1.33453 3.26205 1.62926C3.19554 1.66788 3.13895 1.7215 3.09681 1.78585C3.05466 1.85019 3.02812 1.92348 3.01929 1.99989L2.85621 3.46761C2.79197 3.52897 2.73019 3.59074 2.67089 3.65293L1.20194 3.82156C1.12548 3.83046 1.05215 3.8571 0.987796 3.89935C0.923448 3.94161 0.869861 3.99831 0.831308 4.06495C0.536868 4.57344 0.311081 5.11869 0.159841 5.68648C0.139949 5.7613 0.137914 5.83975 0.153901 5.9155C0.169889 5.99125 0.203451 6.06219 0.251882 6.12259L1.16859 7.27094C1.16859 7.35989 1.16859 7.44884 1.16859 7.5378L0.248794 8.68923C0.200468 8.74969 0.167018 8.82065 0.151138 8.8964C0.135259 8.97215 0.137393 9.05057 0.15737 9.12535C0.30873 9.69319 0.534728 10.2385 0.829455 10.7469C0.868079 10.8134 0.921697 10.87 0.986041 10.9121C1.05039 10.9543 1.12368 10.9808 1.20009 10.9896L2.66533 11.1527C2.72669 11.217 2.78847 11.2787 2.85065 11.338L3.02176 12.807C3.03066 12.8835 3.05729 12.9568 3.09955 13.0211C3.1418 13.0855 3.19851 13.1391 3.26514 13.1776C3.77363 13.4721 4.31888 13.6978 4.88667 13.8491C4.96149 13.869 5.03994 13.871 5.11569 13.855C5.19145 13.839 5.26238 13.8055 5.32278 13.757L6.47113 12.8403C6.56009 12.8428 6.64904 12.8428 6.73799 12.8403L7.88943 13.762C7.94989 13.8103 8.02085 13.8438 8.0966 13.8596C8.17235 13.8755 8.25077 13.8734 8.32554 13.8534C8.89348 13.7023 9.43878 13.4763 9.94707 13.1813C10.0136 13.1427 10.0702 13.0891 10.1123 13.0247C10.1545 12.9604 10.181 12.8871 10.1898 12.8107L10.3529 11.3455C10.4172 11.2845 10.4789 11.2227 10.5382 11.1601L12.0072 10.9872C12.0836 10.9783 12.157 10.9516 12.2213 10.9094C12.2857 10.8671 12.3393 10.8104 12.3778 10.7438C12.6723 10.2353 12.898 9.69005 13.0493 9.12226C13.0692 9.04744 13.0712 8.96899 13.0552 8.89324C13.0392 8.81748 13.0057 8.74655 12.9572 8.68615L12.0405 7.5378ZM6.60456 9.87527C6.11587 9.87527 5.63814 9.73035 5.2318 9.45885C4.82547 9.18734 4.50877 8.80144 4.32175 8.34994C4.13473 7.89844 4.0858 7.40163 4.18114 6.92232C4.27648 6.44301 4.51181 6.00274 4.85737 5.65718C5.20293 5.31162 5.64321 5.07629 6.12251 4.98095C6.60182 4.88561 7.09864 4.93454 7.55014 5.12155C8.00163 5.30857 8.38753 5.62527 8.65904 6.03161C8.93055 6.43795 9.07546 6.91567 9.07546 7.40437C9.07546 8.05969 8.81514 8.68817 8.35175 9.15156C7.88837 9.61494 7.25989 9.87527 6.60456 9.87527Z"
                  fill="#ABABAB"
                />
              </svg>
            </button>
          )}

          {settings.status.statusStyleType === statusStyleNumber.toString() && (
            <button
              onClick={() =>
                setOpenSettings(statusStyleNumber.toString() as StatusStyleType)
              }
              className="w-[32.82px] cursor-pointer hover:bg-neutral-300 flex items-center justify-center h-[32.82px] bg-neutral-200 rounded border-2 border-neutral-200 "
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9618 8.07776C12.9644 7.98196 12.9644 7.88617 12.9618 7.79037L13.9543 6.55036C14.0064 6.48525 14.0424 6.40883 14.0595 6.32726C14.0766 6.24568 14.0743 6.16123 14.0528 6.0807C13.8898 5.46918 13.6464 4.88197 13.329 4.33444C13.2874 4.2628 13.2297 4.20187 13.1604 4.15648C13.0911 4.11109 13.0121 4.08251 12.9298 4.073L11.3519 3.89738C11.2863 3.82819 11.2197 3.76167 11.1523 3.6978L10.9661 2.11586C10.9565 2.03351 10.9278 1.95454 10.8823 1.88524C10.8368 1.81594 10.7757 1.75823 10.7039 1.71671C10.1565 1.39956 9.56922 1.15661 8.95769 0.99426C8.87716 0.972746 8.79271 0.970447 8.71113 0.987549C8.62955 1.00465 8.55313 1.04067 8.48802 1.09272L7.25134 2.07993C7.15555 2.07993 7.05975 2.07993 6.96396 2.07993L5.72394 1.08939C5.65884 1.03735 5.58242 1.00132 5.50084 0.984222C5.41926 0.967121 5.33481 0.96942 5.25428 0.990934C4.64276 1.15394 4.05555 1.39732 3.50802 1.71472C3.43639 1.75631 3.37545 1.81405 3.33007 1.88335C3.28468 1.95264 3.25609 2.03157 3.24658 2.11386L3.07096 3.69448C3.00177 3.76056 2.93525 3.82708 2.87139 3.89405L1.28944 4.07566C1.20709 4.08524 1.12812 4.11393 1.05882 4.15943C0.989524 4.20494 0.931815 4.26601 0.890297 4.33777C0.573207 4.88537 0.330053 5.47256 0.167179 6.08403C0.145756 6.1646 0.143565 6.24909 0.160782 6.33067C0.177999 6.41225 0.214143 6.48864 0.2663 6.55369L1.25352 7.79037C1.25352 7.88617 1.25352 7.98196 1.25352 8.07776L0.262974 9.31777C0.210931 9.38287 0.174908 9.45929 0.157806 9.54087C0.140705 9.62245 0.143004 9.7069 0.164518 9.78743C0.32752 10.399 0.570903 10.9862 0.888301 11.5337C0.929896 11.6053 0.987638 11.6663 1.05693 11.7116C1.12623 11.757 1.20516 11.7856 1.28745 11.7951L2.8654 11.9708C2.93148 12.0399 2.99801 12.1065 3.06497 12.1703L3.24924 13.7523C3.25883 13.8346 3.28751 13.9136 3.33302 13.9829C3.37852 14.0522 3.43959 14.1099 3.51135 14.1514C4.05895 14.4685 4.64615 14.7117 5.25761 14.8745C5.33819 14.896 5.42267 14.8981 5.50425 14.8809C5.58583 14.8637 5.66222 14.8276 5.72727 14.7754L6.96396 13.7882C7.05975 13.7909 7.15555 13.7909 7.25134 13.7882L8.49135 14.7807C8.55646 14.8328 8.63288 14.8688 8.71445 14.8859C8.79603 14.903 8.88049 14.9007 8.96101 14.8792C9.57263 14.7165 10.1599 14.4731 10.7073 14.1554C10.7789 14.1138 10.8398 14.0561 10.8852 13.9868C10.9306 13.9175 10.9592 13.8385 10.9687 13.7563L11.1443 12.1783C11.2135 12.1127 11.28 12.0461 11.3439 11.9787L12.9259 11.7925C13.0082 11.7829 13.0872 11.7542 13.1565 11.7087C13.2258 11.6632 13.2835 11.6021 13.325 11.5304C13.6421 10.9828 13.8852 10.3956 14.0481 9.7841C14.0695 9.70352 14.0717 9.61904 14.0545 9.53746C14.0373 9.45588 14.0012 9.37949 13.949 9.31444L12.9618 8.07776ZM7.10765 10.595C6.58136 10.595 6.06689 10.439 5.62929 10.1466C5.1917 9.85419 4.85064 9.4386 4.64923 8.95237C4.44783 8.46614 4.39514 7.93111 4.49781 7.41494C4.60048 6.89876 4.85392 6.42462 5.22606 6.05248C5.5982 5.68033 6.07234 5.4269 6.58852 5.32423C7.1047 5.22155 7.63973 5.27425 8.12596 5.47565C8.61218 5.67705 9.02777 6.01812 9.32016 6.45571C9.61255 6.8933 9.76862 7.40777 9.76862 7.93406C9.76862 8.6398 9.48826 9.31662 8.98924 9.81565C8.49021 10.3147 7.81338 10.595 7.10765 10.595Z"
                  fill="black"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusStyleSettingItem;
