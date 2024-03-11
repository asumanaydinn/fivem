import { useSettings } from "../../../contexts/SettingsContext";

interface SpeedFuelGaugeProps {
  speed: number; // Current speed passed from outside
  maxSpeed: number; // Maximum speed of the gauge
  fuel: number; // Current fuel level passed from outside
  maxFuel: number; // Maximum fuel level (for simplicity, you might set this to 100)
  gear: number;
}

const SpeedoMeter8: React.FC<SpeedFuelGaugeProps> = ({
  speed,
  maxSpeed,
  fuel,
  maxFuel,
  gear,
}) => {

  const {settings} = useSettings()
  return (
    <div className="flex items-center justify-center relative">
      <svg
        width="108"
        height="108"
        viewBox="0 0 108 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="54"
          cy="54"
          r="54"
          fill="url(#paint0_linear_86_819)"
          fill-opacity="0.9"
        />
        <circle
          cx="54"
          cy="54"
          r="53.6276"
          stroke="white"
          stroke-opacity="0.13"
          stroke-width="0.744828"
        />

        <g filter="url(#filter1_d_86_819)">
          <path
            d="M45.1699 98.4844C45.2082 98.3573 45.1339 98.2229 45.0068 98.187C44.9828 98.1798 44.9612 98.1726 44.9372 98.1678C44.9348 97.9543 44.8916 97.748 44.8125 97.5609L43.5101 98.4916C43.9682 98.4652 44.4287 98.5156 44.8724 98.6475C44.9996 98.6835 45.1339 98.6115 45.1699 98.4844ZM44.1652 100.371C44.1827 100.375 44.2005 100.377 44.2179 100.377C44.3277 100.377 44.4266 100.301 44.4516 100.189L44.6915 99.1204C44.7177 99.0033 44.6536 98.885 44.5411 98.8431C44.023 98.6505 43.4529 98.6505 42.9347 98.8431C42.8223 98.885 42.7581 99.0033 42.7843 99.1204L43.0242 100.189C43.0532 100.319 43.1821 100.4 43.3107 100.371C43.44 100.342 43.5212 100.214 43.4922 100.085L43.3008 99.231C43.5894 99.1588 43.8864 99.1588 44.1749 99.231L43.9836 100.085C43.9546 100.214 44.0359 100.342 44.1652 100.371ZM41.8647 99.0768C41.9102 99.1416 41.9846 99.1776 42.0589 99.1776C42.1069 99.1776 42.1573 99.1632 42.1981 99.132L45.556 96.7334C45.664 96.6567 45.688 96.508 45.6112 96.4C45.5345 96.2921 45.3857 96.2681 45.2778 96.3449L44.3712 96.9925C44.3546 96.9797 44.3368 96.9698 44.3197 96.9583C44.4054 96.8399 44.4575 96.6957 44.4575 96.5391C44.4575 96.1434 44.1337 95.8196 43.7379 95.8196C43.3422 95.8196 43.0184 96.1434 43.0184 96.5391C43.0184 96.6964 43.071 96.8411 43.1575 96.9599C42.8354 97.1713 42.6022 97.5492 42.5506 97.9975C42.5435 98.0526 42.5387 98.1102 42.5387 98.1678C42.5147 98.1726 42.4931 98.1798 42.4691 98.187C42.3468 98.2205 42.2724 98.3477 42.3036 98.47L41.9198 98.7434C41.8119 98.8202 41.7879 98.9689 41.8647 99.0768Z"
            fill="#9CFFDC"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.9514 98.9228V97.6427C55.9514 97.6003 55.9345 97.5596 55.9045 97.5296C55.8745 97.4995 55.8338 97.4827 55.7913 97.4827C55.7489 97.4827 55.7082 97.4995 55.6782 97.5296C55.6482 97.5596 55.6313 97.6003 55.6313 97.6427V98.1227H55.3113V97.8027C55.3113 97.7178 55.2776 97.6364 55.2176 97.5764C55.1576 97.5164 55.0762 97.4827 54.9913 97.4827H54.7375L54.1789 96.9241L52.3693 99.8563L52.3748 99.8586C52.4137 99.8747 52.4553 99.883 52.4974 99.8828H53.805C53.8471 99.883 53.8887 99.8747 53.9276 99.8586C53.9664 99.8425 54.0016 99.8189 54.0312 99.789L54.7375 99.0828H54.9913C55.0762 99.0828 55.1576 99.0491 55.2176 98.989C55.2776 98.929 55.3113 98.8476 55.3113 98.7628V98.4427H55.6313V98.9228C55.6313 98.9652 55.6482 99.0059 55.6782 99.0359C55.7082 99.0659 55.7489 99.0828 55.7913 99.0828C55.8338 99.0828 55.8745 99.0659 55.9045 99.0359C55.9345 99.0059 55.9514 98.9652 55.9514 98.9228ZM52.0628 99.5807L53.8495 96.6856C53.8348 96.6836 53.8199 96.6826 53.805 96.6826H53.3912V96.3626H53.8712C53.9137 96.3626 53.9544 96.3458 53.9844 96.3158C54.0144 96.2857 54.0312 96.245 54.0312 96.2026C54.0312 96.1602 54.0144 96.1195 53.9844 96.0895C53.9544 96.0595 53.9137 96.0426 53.8712 96.0426H52.5912C52.5487 96.0426 52.508 96.0595 52.478 96.0895C52.448 96.1195 52.4311 96.1602 52.4311 96.2026C52.4311 96.245 52.448 96.2857 52.478 96.3158C52.508 96.3458 52.5487 96.3626 52.5912 96.3626H53.0712V96.6826H51.7911C51.7062 96.6826 51.6248 96.7164 51.5648 96.7764C51.5048 96.8364 51.4711 96.9178 51.4711 97.0027V98.1227H51.1511V97.6427C51.1511 97.6003 51.1342 97.5596 51.1042 97.5296C51.0742 97.4995 51.0335 97.4827 50.9911 97.4827C50.9486 97.4827 50.9079 97.4995 50.8779 97.5296C50.8479 97.5596 50.8311 97.6003 50.8311 97.6427V98.9228C50.8311 98.9652 50.8479 99.0059 50.8779 99.0359C50.9079 99.0659 50.9486 99.0828 50.9911 99.0828C51.0335 99.0828 51.0742 99.0659 51.1042 99.0359C51.1342 99.0059 51.1511 98.9652 51.1511 98.9228V98.4427H51.4711V98.8566C51.471 98.8986 51.4792 98.9403 51.4953 98.9791C51.5114 99.0179 51.5351 99.0532 51.5649 99.0828L52.0628 99.5807Z"
          fill="#898989"
        />
        <path
          d="M60.8376 99.857C60.8474 99.9184 60.9004 99.9636 60.9626 99.9636H64.1958C64.3666 99.9636 64.5337 99.8978 64.6495 99.7719C64.6776 99.7414 64.7034 99.7077 64.7282 99.6727H60.8082L60.8376 99.857ZM60.7672 99.2533H64.8139C64.8488 99.2533 64.8813 99.2627 64.9103 99.2779C64.9998 98.9479 64.98 98.556 64.8045 98.2117C64.7621 98.1289 64.6982 98.0586 64.6235 98.0036L63.0709 96.8597C62.6628 96.5598 62.17 96.3972 61.6632 96.3972H60.4342C60.3563 96.3972 60.297 96.4668 60.3092 96.5437L60.7418 99.2559C60.7502 99.2548 60.7585 99.2533 60.7672 99.2533ZM61.6879 98.526C61.6879 98.5492 61.6691 98.568 61.6459 98.568H61.0308C61.0076 98.568 60.9887 98.5492 60.9887 98.526V98.4275C60.9887 98.4042 61.0076 98.3854 61.0308 98.3854H61.6459C61.6691 98.3854 61.6879 98.4042 61.6879 98.4275L61.6879 98.526ZM61.6632 96.7136C62.1048 96.7136 62.5268 96.8521 62.8837 97.1147L63.8833 97.8511H60.8382L60.6566 96.7136H61.6632ZM64.8139 99.3524H60.7672C60.7061 99.3524 60.6566 99.4019 60.6566 99.463C60.6566 99.5241 60.7061 99.5736 60.7672 99.5736H64.8139C64.875 99.5736 64.9245 99.5241 64.9245 99.463C64.9245 99.4019 64.875 99.3524 64.8139 99.3524Z"
          fill="#898989"
        />
        <path
          d="M91.263 91.669C98.673 84.2589 103.719 74.8179 105.764 64.5398C107.808 54.2617 106.759 43.6082 102.749 33.9265C98.7384 24.2448 91.9471 15.9696 83.2338 10.1476C74.5205 4.32553 64.2764 1.21802 53.797 1.21802C43.3175 1.21802 33.0734 4.32553 24.3601 10.1476C15.6468 15.9696 8.85558 24.2448 4.84527 33.9265C0.83497 43.6082 -0.214309 54.2617 1.83013 64.5398C3.87456 74.8179 8.92089 84.2589 16.331 91.669"
          stroke="#797979"
          stroke-width="0.353233"
        />
        <g filter="url(#filter2_i_86_819)">
          <path
            d="M89.3898 90.056C96.4294 82.9951 101.223 73.999 103.166 64.2052C105.108 54.4114 104.111 44.2599 100.301 35.0344C96.4914 25.8089 90.0398 17.9237 81.7621 12.376C73.4845 6.82827 63.7526 3.86719 53.7971 3.86719C43.8417 3.86719 34.1098 6.82827 25.8321 12.376C17.5545 17.9237 11.1028 25.8089 7.29302 35.0344C3.48324 44.2599 2.48642 54.4114 4.42863 64.2052C6.37085 73.999 11.1649 82.9951 18.2044 90.056"
            stroke="#1E1E1E"
            stroke-width="3.53233"
          />
        </g>

        <g filter="url(#filter2_i_86_819)">
          <path
            d="M89.3898 90.056C96.4294 82.9951 101.223 73.999 103.166 64.2052C105.108 54.4114 104.111 44.2599 100.301 35.0344C96.4914 25.8089 90.0398 17.9237 81.7621 12.376C73.4845 6.82827 63.7526 3.86719 53.7971 3.86719C43.8417 3.86719 34.1098 6.82827 25.8321 12.376C17.5545 17.9237 11.1028 25.8089 7.29302 35.0344C3.48324 44.2599 2.48642 54.4114 4.42863 64.2052C6.37085 73.999 11.1649 82.9951 18.2044 90.056"
            stroke="#E3BB51"
            strokeWidth={3}
            strokeDasharray={`${(speed * 240) / maxSpeed} 240`}
          />
        </g>
        <path
          d="M86.912 58.9499C88.2254 52.347 87.5513 45.503 84.975 39.2832C82.3987 33.0635 78.0359 27.7474 72.4383 24.0072C66.8406 20.267 60.2596 18.2706 53.5274 18.2706C46.7952 18.2706 40.2142 20.267 34.6166 24.0072C29.0189 27.7474 24.6561 33.0635 22.0798 39.2832C19.5035 45.503 18.8294 52.347 20.1428 58.9499C21.4562 65.5527 24.6981 71.6178 29.4585 76.3782"
          stroke="#797979"
          stroke-width="0.415475"
        />
        <g filter="url(#filter3_di_86_819)">
          <path
            d="M84.1618 58.3457C85.367 52.2684 84.7485 45.9691 82.3844 40.2444C80.0203 34.5197 76.0169 29.6267 70.8803 26.1841C65.7438 22.7416 59.7049 20.9042 53.5272 20.9042C47.3496 20.9042 41.3107 22.7416 36.1742 26.1841C31.0376 29.6267 27.0342 34.5196 24.6701 40.2444C22.306 45.9691 21.6875 52.2684 22.8927 58.3457C24.0979 64.423 27.0727 70.0054 31.4409 74.3869"
            stroke="url(#paint2_linear_86_819)"
            stroke-width="4.15475"
            shape-rendering="crispEdges"
            strokeDasharray={`${(fuel * 240) / maxFuel} 200`}
          />
        </g>
        <path
          d="M77.93 74.4267C82.0124 69.7662 84.6264 64.0016 85.4414 57.8618"
          stroke="#1E1E1E"
          stroke-width="2.07738"
        />
        <path
          d="M96.3328 36.3325C92.8521 27.9465 86.9578 20.7789 79.3951 15.736C71.8325 10.6931 62.9412 8.00147 53.8457 8.00146C44.7502 8.00146 35.8589 10.6931 28.2963 15.736C20.7336 20.7789 14.8392 27.9465 11.3585 36.3325C7.87784 44.7185 6.96712 53.9462 8.74157 62.8488C10.516 71.7513 14.3664 80.6655 20.7979 87.0838"
          stroke="#132B22"
          stroke-width="2.82586"
        />
        <g filter="url(#filter4_d_86_819)">
          <path
            d="M97.6903 35.8312C94.0944 27.1539 88.0049 19.7373 80.192 14.5193C72.379 9.30123 63.1935 6.51611 53.7969 6.51611C44.4004 6.51611 35.2149 9.30123 27.4019 14.5193C19.589 19.7373 13.4995 27.1539 9.9036 35.8312C6.3077 44.5085 5.36684 54.0567 7.20002 63.2685C9.03319 72.4802 13.1069 81.4897 19.7513 88.131"
            stroke="#5DC5A0"
            stroke-width="0.353233"
          />
        </g>
        <rect
          x="18.9302"
          y="88.2811"
          width="1.76616"
          height="0.706466"
          transform="rotate(136.594 18.9302 88.2811)"
          fill="white"
        />
        <rect
          x="9.04248"
          y="35.4366"
          width="1.76616"
          height="0.706466"
          transform="rotate(-156.52 9.04248 35.4366)"
          fill="white"
        />
        <rect
          width="1.76616"
          height="0.706466"
          transform="matrix(-0.902725 0.430218 0.430218 0.902725 99.8496 33.9191)"
          fill="white"
        />
        <rect
          x="33.4248"
          y="10.1179"
          width="1.76616"
          height="0.706466"
          transform="rotate(-115.227 33.4248 10.1179)"
          fill="white"
        />
        <rect
          x="74.2847"
          y="10.1675"
          width="1.76616"
          height="0.706466"
          transform="rotate(-64.7825 74.2847 10.1675)"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d_86_819"
            x="25.8543"
            y="33.1101"
            width="55.0658"
            height="27.8654"
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
            <feGaussianBlur stdDeviation="4.01133" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.34902 0 0 0 0 0.737255 0 0 0 0 0.6 0 0 0 0.66 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_86_819"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_86_819"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_86_819"
            x="35.054"
            y="89.0538"
            width="17.3681"
            height="18.089"
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
            <feGaussianBlur stdDeviation="3.38291" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.34902 0 0 0 0 0.737255 0 0 0 0 0.6 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_86_819"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_86_819"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_i_86_819"
            x="1.69531"
            y="2.10107"
            width="104.204"
            height="89.3785"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.176616" />
            <feGaussianBlur stdDeviation="0.176616" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_86_819"
            />
          </filter>
          <filter
            id="filter3_di_86_819"
            x="15.2213"
            y="16.2689"
            width="76.612"
            height="67.0147"
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
            <feOffset dy="2.43609" />
            <feGaussianBlur stdDeviation="2.49699" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.34902 0 0 0 0 0.737255 0 0 0 0 0.596078 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_86_819"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_86_819"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2.45639" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0560764 0 0 0 0 0.354167 0 0 0 0 0.24577 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_86_819"
            />
          </filter>
          <filter
            id="filter4_d_86_819"
            x="4.6893"
            y="4.91842"
            width="94.5853"
            height="84.7586"
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
            <feGaussianBlur stdDeviation="0.710526" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.34902 0 0 0 0 0.466667 0 0 0 0 0.737255 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_86_819"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_86_819"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_i_86_819"
            x="47.5039"
            y="70.6466"
            width="12.9927"
            height="14.6165"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.62406" />
            <feGaussianBlur stdDeviation="0.81203" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_86_819"
            />
          </filter>
          <linearGradient
            id="paint0_linear_86_819"
            x1="54"
            y1="-7.63448"
            x2="54"
            y2="108"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#030303" />
            <stop offset="0.509715" stop-color="#0F0F0F" />
            <stop offset="1" stop-color="#0C0C0C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_86_819"
            x1="32.3223"
            y1="8.09518"
            x2="27.0241"
            y2="100.102"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E3BB51" />
            <stop offset="1" stop-color="#E38651" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_86_819"
            x1="53.5939"
            y1="14.6165"
            x2="54.6089"
            y2="75.5187"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#59BC98" stop-opacity="0" />
            <stop offset="0.44818" stop-color="#59BC98" stop-opacity="0.63" />
            <stop offset="1" stop-color="#59BC98" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>{" "}
      <div className="absolute centered flex items-center justify-center flex-col">
        <div className="text-center text-emerald-400 text-base font-medium font-['Orbitron']">
          038
        </div>
        <div className="text-center text-zinc-600 text-[6.87px] font-medium font-['Orbitron'] tracking-wide">
          {settings.speedometers.units.toLocaleUpperCase()}
        </div>
        <div className="w-[12.99px] h-[12.99px] text-center flex items-center justify-center bg-zinc-300 bg-opacity-10 rounded-full shadow-inner border border-white border-opacity-10">
          <div className="text-center text-zinc-500 text-[6.14px] font-medium font-['Tomorrow']">
            {gear}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedoMeter8;
