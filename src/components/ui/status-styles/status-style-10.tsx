import { useSettings } from "../../../contexts/SettingsContext";
import { Status } from "../../../types/status";
import StatusStyle10Item from "./status-style-10-item";

interface StatusStyle10Props {
  status: Status;
}

const StatusStyle10: React.FC<StatusStyle10Props> = ({ status }) => {
  const { settings } = useSettings();

  return (
    <div className="flex flex-col items-start justify-between h-20">
      <div className="flex items-center w-full justify-between">
        <div className="w-[93.91px] relative h-[3.79px] bg-[#FF5F98] bg-opacity-40">
          {" "}
          <div
            className="absolute left-0 h-[3.79px] bg-[#FF5F98]"
            style={{ width: status.health + "%" }}
          ></div>
        </div>
        <svg
          width="73"
          height="74"
          viewBox="0 0 73 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_800_3694)">
            <circle
              cx="36.4054"
              cy="37.2128"
              r="18.3224"
              fill="white"
              fill-opacity="0.08"
            />
            <g filter="url(#filter1_d_800_3694)">
              <path
                d="M49.7642 27.6762C48.1598 25.4286 46.0143 23.6221 43.5262 22.4239C41.0382 21.2258 38.288 20.6748 35.5304 20.8219L35.6338 22.7603C38.0653 22.6306 40.4902 23.1164 42.684 24.1729C44.8778 25.2293 46.7696 26.8222 48.1843 28.804L49.7642 27.6762Z"
                fill="white"
              />
            </g>
            <g filter="url(#filter2_d_800_3694)">
              <path
                d="M30.6506 21.8406C28.0643 22.8086 25.764 24.4135 23.9628 26.5067C22.1615 28.5999 20.9175 31.1137 20.3459 33.8154L22.1023 34.187C22.6114 31.7808 23.7194 29.542 25.3236 27.6777C26.9278 25.8135 28.9765 24.3842 31.2799 23.522L30.6506 21.8406Z"
                fill="white"
              />
            </g>
            <g filter="url(#filter3_d_800_3694)">
              <path
                d="M20.0677 38.792C20.3334 41.5407 21.2882 44.1779 22.8439 46.4595C24.3995 48.7412 26.5057 50.5934 28.9674 51.8448L29.4851 50.8265C27.1947 49.6622 25.2351 47.9389 23.7877 45.816C22.3403 43.6932 21.4519 41.2395 21.2048 38.6821L20.0677 38.792Z"
                fill="white"
                fill-opacity="0.28"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter4_d_800_3694)">
              <path
                d="M33.7024 53.4023C36.4262 53.8571 39.2207 53.6174 41.8272 52.7053C44.4338 51.7932 46.768 50.2382 48.6139 48.1842L47.7643 47.4207C46.0469 49.3316 43.8751 50.7784 41.4499 51.6271C39.0248 52.4757 36.4248 52.6988 33.8905 52.2756L33.7024 53.4023Z"
                fill="white"
                fill-opacity="0.28"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter5_d_800_3694)">
              <path
                d="M50.2331 46.0537C51.7206 43.7271 52.5971 41.0628 52.7814 38.3074C52.9656 35.5521 52.4518 32.7948 51.2873 30.2908L50.2515 30.7725C51.3349 33.1022 51.813 35.6676 51.6416 38.2312C51.4701 40.7948 50.6546 43.2737 49.2706 45.4384L50.2331 46.0537Z"
                fill="white"
                fill-opacity="0.28"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter6_d_800_3694)">
              <path
                d="M36.5558 40.345C38.1434 40.345 39.4346 39.0297 39.4346 37.4139V33.0172C39.4346 31.4007 38.1434 30.0861 36.5558 30.0861C34.9681 30.0861 33.677 31.4007 33.677 33.0172V37.4139C33.677 39.0297 34.9681 40.345 36.5558 40.345ZM41.5937 37.4139V35.9483C41.5937 35.754 41.5178 35.5676 41.3829 35.4302C41.2479 35.2928 41.0648 35.2155 40.874 35.2155C40.6831 35.2155 40.5 35.2928 40.3651 35.4302C40.2301 35.5676 40.1543 35.754 40.1543 35.9483V37.4139C40.1543 39.4342 38.54 41.0778 36.5558 41.0778C34.5716 41.0778 32.9573 39.4342 32.9573 37.4139V35.9483C32.9573 35.754 32.8815 35.5676 32.7465 35.4302C32.6115 35.2928 32.4285 35.2155 32.2376 35.2155C32.0467 35.2155 31.8636 35.2928 31.7287 35.4302C31.5937 35.5676 31.5179 35.754 31.5179 35.9483V37.4139C31.5179 39.9933 33.3985 42.1272 35.8361 42.4848V43.2762H33.677C33.4861 43.2762 33.303 43.3534 33.1681 43.4908C33.0331 43.6282 32.9573 43.8146 32.9573 44.009C32.9573 44.2033 33.0331 44.3897 33.1681 44.5271C33.303 44.6645 33.4861 44.7417 33.677 44.7417H39.4346C39.6254 44.7417 39.8085 44.6645 39.9435 44.5271C40.0784 44.3897 40.1543 44.2033 40.1543 44.009C40.1543 43.8146 40.0784 43.6282 39.9435 43.4908C39.8085 43.3534 39.6254 43.2762 39.4346 43.2762H37.2755V42.4848C39.7131 42.1272 41.5937 39.9933 41.5937 37.4139Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_800_3694"
              x="0.163956"
              y="0.97139"
              width="72.4828"
              height="72.4828"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="8.9595" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_800_3694"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_800_3694"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_800_3694"
              x="23.5009"
              y="8.76905"
              width="38.2928"
              height="32.0644"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2.50615"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_800_3694"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.76169" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_800_3694"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_800_3694"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_800_3694"
              x="8.31635"
              y="9.81104"
              width="34.9931"
              height="36.4055"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2.50615"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_800_3694"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.76169" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_800_3694"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_800_3694"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_800_3694"
              x="8.03822"
              y="26.6526"
              width="33.4764"
              height="37.2218"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2.50615"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_800_3694"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.76169" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_800_3694"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_800_3694"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_800_3694"
              x="21.6729"
              y="35.3911"
              width="38.9706"
              height="30.2649"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2.50615"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_800_3694"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.76169" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_800_3694"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_800_3694"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d_800_3694"
              x="37.2411"
              y="18.2612"
              width="27.6064"
              height="39.822"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2.50615"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_800_3694"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.76169" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.21 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_800_3694"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_800_3694"
                result="shape"
              />
            </filter>
            <filter
              id="filter6_d_800_3694"
              x="25.5442"
              y="24.1124"
              width="22.0232"
              height="26.603"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.98685" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_800_3694"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_800_3694"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="w-[93.91px] relative h-[3.79px] bg-[#5FBCFF] bg-opacity-40">
          {" "}
          <div
            className="absolute right-0 h-[3.79px] bg-[#5FBCFF]"
            style={{ width: status.health + "%" }}
          ></div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-x-12">
        <div className="flex items-center w-24 justify-center">
          {(!settings.status.hideHydration ||
            status.hydration >
              settings.styleVisibility["2"].visibilityThresholds
                ?.hydration) && (
            <StatusStyle10Item
              activeColor="#FFE24D"
              Icon={() => (
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64166 15.0444C8.74458 15.0444 11.2833 12.5057 11.2833 9.40277C11.2833 6.29985 5.64166 1.15145e-09 5.64166 1.15145e-09C5.64166 1.15145e-09 -1.30498e-09 6.39388 -1.91909e-09 9.40277C-2.53319e-09 12.4117 2.53875 15.0444 5.64166 15.0444Z"
                    fill="#FFE24D"
                  />
                </svg>
              )}
              fillPercentage={status.hydration}
            />
          )}
          {(!settings.status.hideHungry ||
            status.hungry >
              settings.styleVisibility["2"].visibilityThresholds?.hunger) && (
            <StatusStyle10Item
              activeColor="#33DAFF"
              Icon={() => (
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.28698 4.86633C1.1878 4.74432 1.11725 4.60162 1.08051 4.44874C1.04377 4.29585 1.04177 4.13668 1.07467 3.98293C1.56304 1.67451 4.20668 -0.00158691 7.36169 -0.00158692C10.5167 -0.00158692 13.1603 1.67451 13.6487 3.98293C13.682 4.13679 13.6802 4.29616 13.6437 4.44928C13.6071 4.6024 13.5367 4.74536 13.4375 4.86761C13.3384 4.98987 13.213 5.0883 13.0707 5.15565C12.9284 5.22301 12.7728 5.25756 12.6154 5.25676L2.10794 5.25676C1.95061 5.25723 1.79518 5.2224 1.65309 5.15483C1.51101 5.08726 1.3859 4.98867 1.28698 4.86633ZM14.0174 8.44332L11.314 9.42926L8.87346 8.44923C8.74814 8.39913 8.60835 8.39913 8.48303 8.44923L6.05104 9.42269L3.61511 8.44923C3.49519 8.40132 3.36183 8.39922 3.24046 8.44332L0.348365 9.49499C0.226133 9.54879 0.128952 9.64709 0.0765474 9.76993C0.0241432 9.89277 0.0204426 10.0309 0.0661966 10.1564C0.111951 10.2819 0.203731 10.3852 0.322909 10.4455C0.442086 10.5058 0.579731 10.5184 0.707905 10.4809L1.5775 10.1661L1.5775 10.5151C1.5775 11.2124 1.85451 11.8811 2.34757 12.3742C2.84064 12.8673 3.50938 13.1443 4.20668 13.1443L10.5167 13.1443C11.214 13.1443 11.8827 12.8673 12.3758 12.3742C12.8689 11.8811 13.1459 11.2124 13.1459 10.5151L13.1459 9.8795L14.377 9.43189C14.446 9.41168 14.5102 9.37753 14.5655 9.33154C14.6208 9.28556 14.6661 9.22871 14.6985 9.16452C14.731 9.10033 14.7499 9.03017 14.7542 8.95836C14.7585 8.88656 14.7479 8.81465 14.7233 8.74707C14.6987 8.67949 14.6604 8.61769 14.6109 8.56549C14.5614 8.51328 14.5018 8.47178 14.4356 8.44356C14.3695 8.41533 14.2982 8.40098 14.2263 8.40139C14.1544 8.4018 14.0833 8.41697 14.0174 8.44595L14.0174 8.44332ZM0.525835 7.3601L14.1975 7.3601C14.337 7.3601 14.4707 7.3047 14.5694 7.20609C14.668 7.10747 14.7234 6.97372 14.7234 6.83426C14.7234 6.6948 14.668 6.56106 14.5694 6.46244C14.4707 6.36383 14.337 6.30843 14.1975 6.30843L0.525835 6.30843C0.386375 6.30843 0.252627 6.36383 0.154013 6.46244C0.0554003 6.56106 1.36672e-09 6.6948 1.39518e-09 6.83426C1.42365e-09 6.97372 0.0554003 7.10747 0.154013 7.20609C0.252627 7.3047 0.386375 7.3601 0.525835 7.3601Z"
                    fill="#33DAFF"
                  />
                </svg>
              )}
              fillPercentage={status.hungry}
            />
          )}
        </div>
        <div className="flex items-center w-24 justify-center">
          {(!settings.status.hideEnergy ||
            status.energy >
              settings.styleVisibility["2"].visibilityThresholds?.energy) && (
            <StatusStyle10Item
              activeColor="#33FF85"
              Icon={() => (
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.39985 16.8354C5.3118 16.8353 5.22445 16.8199 5.14168 16.7899C4.98204 16.7314 4.84662 16.6211 4.75714 16.4765C4.66765 16.3319 4.62926 16.1615 4.64813 15.9926L5.2328 10.6091H0.760457C0.622513 10.6093 0.487118 10.5719 0.368815 10.501C0.250511 10.43 0.153767 10.3282 0.0889742 10.2064C0.0241811 10.0846 -0.0062133 9.94749 0.00105493 9.80974C0.00832316 9.67199 0.0529796 9.53882 0.130228 9.42453L6.12119 0.464664C6.21595 0.324448 6.35482 0.219903 6.51578 0.167628C6.67673 0.115353 6.85053 0.118344 7.00959 0.176126C7.1625 0.232894 7.29306 0.337391 7.38196 0.474148C7.47085 0.610904 7.51334 0.772649 7.50314 0.935437L6.91847 6.35692H11.3908C11.5288 6.35671 11.6642 6.39408 11.7825 6.46502C11.9008 6.53597 11.9975 6.63779 12.0623 6.75957C12.1271 6.88135 12.1575 7.01848 12.1502 7.15624C12.1429 7.29399 12.0983 7.42716 12.021 7.54144L6.03008 16.5013C5.96043 16.6044 5.86653 16.6887 5.75664 16.747C5.64675 16.8052 5.52423 16.8356 5.39985 16.8354Z"
                    fill="#33FF85"
                  />
                </svg>
              )}
              fillPercentage={status.energy}
            />
          )}

          {(!settings.status.hideStress ||
            status.stress >
              settings.styleVisibility["2"].visibilityThresholds?.stress) && (
            <StatusStyle10Item
              activeColor="#FF3357"
              Icon={() => (
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.793 4.13496V3.85909C13.7923 3.2613 13.615 2.67704 13.2834 2.17963C12.9519 1.68222 12.4808 1.29381 11.9293 1.06315C11.3778 0.832486 10.7705 0.769846 10.1835 0.883088C9.59654 0.99633 9.0561 1.28041 8.62999 1.69968C8.60479 1.72508 8.58486 1.75522 8.57137 1.78837C8.55787 1.82151 8.55107 1.857 8.55137 1.89279V8.01169C8.5515 8.06143 8.56508 8.11021 8.59066 8.15286C8.61625 8.19552 8.65289 8.23046 8.69671 8.254C8.74052 8.27753 8.78989 8.28878 8.83958 8.28656C8.88927 8.28433 8.93743 8.26871 8.97897 8.24136C9.50362 7.90496 10.1131 7.72461 10.7363 7.72133C10.8806 7.71865 11.0204 7.77135 11.127 7.86859C11.2336 7.96583 11.2989 8.10021 11.3094 8.24412C11.3134 8.31897 11.302 8.39385 11.276 8.46417C11.2501 8.53449 11.2101 8.59878 11.1584 8.65313C11.1068 8.70747 11.0446 8.75072 10.9757 8.78024C10.9068 8.80976 10.8326 8.82494 10.7577 8.82483C10.1723 8.82483 9.61098 9.05736 9.19709 9.47125C8.7832 9.88514 8.55068 10.4465 8.55068 11.0318V13.3685C8.55062 13.4098 8.55982 13.4505 8.57761 13.4878C8.59539 13.525 8.62131 13.5578 8.65344 13.5837C9.04497 13.9077 9.50595 14.1371 10.0005 14.2539C10.4951 14.3708 11.01 14.3721 11.5052 14.2576C12.0003 14.1431 12.4624 13.9159 12.8555 13.5938C13.2486 13.2716 13.5621 12.8632 13.7716 12.4002C13.7927 12.3536 13.8004 12.3021 13.794 12.2514C13.7875 12.2007 13.7671 12.1528 13.7349 12.113C13.7028 12.0732 13.6603 12.0432 13.6121 12.0262C13.5639 12.0092 13.5119 12.0059 13.4619 12.0167C13.1181 12.0955 12.7664 12.1353 12.4136 12.1353H11.8805C11.7381 12.1371 11.6004 12.085 11.4949 11.9894C11.3893 11.8939 11.3238 11.762 11.3115 11.6201C11.3065 11.5447 11.317 11.469 11.3425 11.3977C11.368 11.3265 11.4078 11.2613 11.4596 11.2061C11.5113 11.151 11.5739 11.107 11.6433 11.077C11.7127 11.0471 11.7876 11.0317 11.8632 11.0318H12.415C12.9914 11.0327 13.5595 10.8935 14.0702 10.6263C14.6751 10.3113 15.1776 9.83031 15.5188 9.23982C15.8601 8.64933 16.0258 7.97379 15.9967 7.29242C15.9676 6.61106 15.7449 5.95211 15.3545 5.39287C14.9642 4.83362 14.4225 4.39726 13.793 4.13496ZM12.9654 6.61784H12.6895C12.031 6.61783 11.3995 6.35625 10.9338 5.89062C10.4682 5.42499 10.2066 4.79346 10.2066 4.13496V3.85909C10.2066 3.71275 10.2647 3.57241 10.3682 3.46894C10.4717 3.36547 10.612 3.30734 10.7584 3.30734C10.9047 3.30734 11.045 3.36547 11.1485 3.46894C11.252 3.57241 11.3101 3.71275 11.3101 3.85909V4.13496C11.3101 4.3161 11.3458 4.49547 11.4151 4.66283C11.4844 4.83018 11.586 4.98224 11.7141 5.11033C11.9728 5.36901 12.3237 5.51434 12.6895 5.51434H12.9654C13.1117 5.51434 13.252 5.57247 13.3555 5.67594C13.459 5.77941 13.5171 5.91975 13.5171 6.06608C13.5171 6.21242 13.459 6.35276 13.3555 6.45623C13.252 6.5597 13.1117 6.61784 12.9654 6.61784ZM5.24087 0.824463C4.43632 0.825376 3.66498 1.14539 3.09607 1.71429C2.52717 2.2832 2.20716 3.05453 2.20625 3.85909V4.13496C1.57679 4.3974 1.03521 4.83388 0.645014 5.3932C0.254821 5.95252 0.0321923 6.6115 0.0032352 7.29287C-0.0257219 7.97423 0.140193 8.64972 0.481524 9.24013C0.822855 9.83054 1.32545 10.3114 1.93037 10.6263C2.44113 10.8935 3.00917 11.0327 3.58562 11.0318H4.11875C4.26133 11.0297 4.39942 11.0817 4.50524 11.1773C4.61106 11.2729 4.67676 11.405 4.68912 11.547C4.69413 11.6225 4.68357 11.6982 4.65809 11.7694C4.63262 11.8406 4.59277 11.9059 4.54103 11.961C4.48929 12.0162 4.42675 12.0601 4.35731 12.0901C4.28787 12.1201 4.21301 12.1355 4.13737 12.1353H3.58562C3.23255 12.1355 2.88062 12.0955 2.53661 12.016C2.48668 12.0051 2.43471 12.0083 2.38649 12.0252C2.33828 12.0421 2.2957 12.0721 2.26352 12.1118C2.23134 12.1515 2.21081 12.1993 2.20423 12.25C2.19765 12.3007 2.20527 12.3522 2.22625 12.3988C2.43573 12.8619 2.74919 13.2705 3.14228 13.5928C3.53536 13.9151 3.99747 14.1424 4.49268 14.257C4.9879 14.3716 5.50288 14.3705 5.99759 14.2537C6.49231 14.137 6.95342 13.9077 7.3451 13.5837C7.37724 13.5578 7.40315 13.525 7.42094 13.4878C7.43872 13.4505 7.44792 13.4098 7.44787 13.3685V11.0318C7.44787 10.4465 7.21535 9.88514 6.80145 9.47125C6.38756 9.05736 5.8262 8.82483 5.24087 8.82483C5.16591 8.82494 5.09171 8.80976 5.02281 8.78024C4.95391 8.75072 4.89175 8.70747 4.84011 8.65313C4.78848 8.59878 4.74846 8.53449 4.7225 8.46417C4.69654 8.39385 4.68518 8.31897 4.68912 8.24412C4.69968 8.10009 4.76507 7.9656 4.87182 7.86835C4.97858 7.77109 5.11856 7.71848 5.26294 7.72133C5.88616 7.72461 6.49562 7.90496 7.02026 8.24136C7.0618 8.26871 7.10997 8.28433 7.15965 8.28656C7.20934 8.28878 7.25871 8.27753 7.30253 8.254C7.34635 8.23046 7.38299 8.19552 7.40857 8.15286C7.43416 8.11021 7.44774 8.06143 7.44787 8.01169V1.89279C7.44811 1.82037 7.41987 1.75076 7.36924 1.69899C6.80273 1.13843 6.03784 0.824143 5.24087 0.824463ZM5.79262 4.13496C5.79262 4.79346 5.53103 5.42499 5.0654 5.89062C4.59977 6.35625 3.96824 6.61783 3.30974 6.61784H3.03387C2.88754 6.61784 2.7472 6.5597 2.64372 6.45623C2.54025 6.35276 2.48212 6.21242 2.48212 6.06608C2.48212 5.91975 2.54025 5.77941 2.64372 5.67594C2.7472 5.57247 2.88754 5.51434 3.03387 5.51434H3.30974C3.49089 5.51434 3.67026 5.47866 3.83761 5.40934C4.00496 5.34002 4.15702 5.23841 4.28511 5.11033C4.4132 4.98224 4.5148 4.83018 4.58412 4.66283C4.65344 4.49547 4.68912 4.3161 4.68912 4.13496V3.85909C4.68912 3.71275 4.74725 3.57241 4.85072 3.46894C4.9542 3.36547 5.09454 3.30734 5.24087 3.30734C5.3872 3.30734 5.52754 3.36547 5.63101 3.46894C5.73449 3.57241 5.79262 3.71275 5.79262 3.85909V4.13496Z"
                    fill="#FF3357"
                  />
                </svg>
              )}
              fillPercentage={status.stress}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusStyle10;
