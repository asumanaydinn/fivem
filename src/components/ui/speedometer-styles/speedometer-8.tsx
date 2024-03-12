import { useSettings } from "../../../contexts/SettingsContext";

interface Props {
  speed: number;
  maxSpeed: number;
  fuel: number;
  maxFuel: number;
  gear: number;
}

const SpeedoMeter8: React.FC<Props> = ({ speed, maxSpeed, gear }) => {
  const { settings } = useSettings();

  return (
    <div className="w-[312px] h-[312px] relative">
      <div className="absolute top-24 w-full ">
        <div className="items-center justify-center flex flex-col">
          <div className="w-[118.44px] h-[60.67px] text-center text-emerald-400 text-4xl font-medium font-['Orbitron']">
            {Math.min(speed, maxSpeed)}
          </div>
          <div className="text-center text-zinc-600 text-xl font-medium font-['Orbitron'] tracking-[2.98px]">
            {settings.speedometers.units.toLocaleUpperCase()}
          </div>
        </div>
      </div>{" "}
      <div className="absolute w-10 z-10 top-[211px] left-[134px] ">
        <div className="flex items-center justify-center w-full text-left text-zinc-500 text-base/snug font-medium font-['Orbitron']">
          {gear}
        </div>
      </div>
      <svg
        width="312"
        height="312"
        viewBox="0 0 312 312"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="156"
          cy="156"
          r="156"
          fill="url(#paint0_linear_756_1195)"
          fill-opacity="0.9"
        />
        <circle
          cx="156"
          cy="156"
          r="155.628"
          stroke="white"
          stroke-opacity="0.13"
          stroke-width="0.744828"
        />

        <g filter="url(#filter1_d_756_1195)">
          <path
            d="M130.491 284.51C130.602 284.143 130.387 283.755 130.02 283.651C129.95 283.63 129.888 283.61 129.819 283.596C129.812 282.979 129.687 282.383 129.458 281.843L125.696 284.531C127.019 284.455 128.35 284.6 129.632 284.981C129.999 285.085 130.387 284.878 130.491 284.51ZM127.588 289.961C127.639 289.972 127.691 289.977 127.741 289.977C128.058 289.977 128.344 289.759 128.416 289.436L129.109 286.348C129.185 286.009 128.999 285.668 128.674 285.546C127.178 284.99 125.531 284.99 124.034 285.546C123.709 285.668 123.524 286.009 123.599 286.348L124.292 289.436C124.376 289.81 124.748 290.046 125.12 289.96C125.493 289.877 125.728 289.506 125.644 289.133L125.091 286.667C125.925 286.459 126.783 286.459 127.617 286.667L127.064 289.133C126.98 289.506 127.215 289.877 127.588 289.961ZM120.943 286.222C121.074 286.409 121.289 286.513 121.504 286.513C121.642 286.513 121.788 286.471 121.906 286.381L131.606 279.452C131.918 279.23 131.988 278.801 131.766 278.489C131.544 278.177 131.115 278.108 130.803 278.329L128.183 280.2C128.136 280.164 128.084 280.135 128.035 280.102C128.283 279.759 128.433 279.343 128.433 278.891C128.433 277.747 127.498 276.812 126.354 276.812C125.211 276.812 124.275 277.747 124.275 278.891C124.275 279.345 124.428 279.763 124.677 280.106C123.747 280.717 123.073 281.809 122.924 283.104C122.903 283.263 122.89 283.429 122.89 283.596C122.82 283.61 122.758 283.63 122.689 283.651C122.335 283.748 122.12 284.115 122.211 284.469L121.102 285.259C120.79 285.48 120.721 285.91 120.943 286.222Z"
            fill="#9CFFDC"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M161.637 285.777V282.079C161.637 281.956 161.588 281.838 161.502 281.752C161.415 281.665 161.298 281.616 161.175 281.616C161.052 281.616 160.935 281.665 160.848 281.752C160.761 281.838 160.713 281.956 160.713 282.079V283.465H159.788V282.541C159.788 282.296 159.691 282.06 159.517 281.887C159.344 281.714 159.109 281.616 158.864 281.616H158.13L156.517 280.003L151.289 288.473L151.305 288.48C151.417 288.527 151.538 288.55 151.659 288.55H155.437C155.558 288.55 155.678 288.527 155.791 288.48C155.903 288.434 156.005 288.365 156.09 288.279L158.13 286.239H158.864C159.109 286.239 159.344 286.141 159.517 285.968C159.691 285.795 159.788 285.559 159.788 285.314V284.39H160.713V285.777C160.713 285.899 160.761 286.017 160.848 286.103C160.935 286.19 161.052 286.239 161.175 286.239C161.298 286.239 161.415 286.19 161.502 286.103C161.588 286.017 161.637 285.899 161.637 285.777ZM150.404 287.677L155.565 279.314C155.523 279.308 155.48 279.305 155.437 279.305H154.241V278.381H155.628C155.751 278.381 155.868 278.332 155.955 278.245C156.041 278.158 156.09 278.041 156.09 277.918C156.09 277.796 156.041 277.678 155.955 277.591C155.868 277.505 155.751 277.456 155.628 277.456H151.93C151.807 277.456 151.69 277.505 151.603 277.591C151.516 277.678 151.468 277.796 151.468 277.918C151.468 278.041 151.516 278.158 151.603 278.245C151.69 278.332 151.807 278.381 151.93 278.381H153.317V279.305H149.619C149.374 279.305 149.138 279.402 148.965 279.576C148.792 279.749 148.694 279.984 148.694 280.23V283.465H147.77V282.079C147.77 281.956 147.721 281.838 147.634 281.752C147.548 281.665 147.43 281.616 147.307 281.616C147.185 281.616 147.067 281.665 146.981 281.752C146.894 281.838 146.845 281.956 146.845 282.079V285.777C146.845 285.899 146.894 286.017 146.981 286.103C147.067 286.19 147.185 286.239 147.307 286.239C147.43 286.239 147.548 286.19 147.634 286.103C147.721 286.017 147.77 285.899 147.77 285.777V284.39H148.694V285.585C148.694 285.707 148.718 285.827 148.764 285.939C148.811 286.051 148.879 286.153 148.965 286.239L150.404 287.677Z"
          fill="#898989"
        />
        <path
          d="M175.753 288.476C175.782 288.653 175.935 288.784 176.114 288.784H185.455C185.948 288.784 186.431 288.594 186.765 288.23C186.846 288.142 186.921 288.045 186.993 287.943H175.668L175.753 288.476ZM175.55 286.732H187.24C187.341 286.732 187.435 286.759 187.519 286.803C187.777 285.85 187.72 284.718 187.213 283.723C187.091 283.484 186.906 283.281 186.69 283.122L182.205 279.817C181.026 278.951 179.602 278.481 178.138 278.481H174.588C174.363 278.481 174.191 278.682 174.227 278.904L175.476 286.739C175.501 286.736 175.525 286.732 175.55 286.732ZM178.21 284.631C178.21 284.698 178.155 284.752 178.088 284.752H176.311C176.244 284.752 176.19 284.698 176.19 284.631V284.346C176.19 284.279 176.244 284.225 176.311 284.225H178.088C178.155 284.225 178.21 284.279 178.21 284.346L178.21 284.631ZM178.138 279.395C179.414 279.395 180.633 279.795 181.664 280.554L184.552 282.681H175.755L175.23 279.395H178.138ZM187.24 287.018H175.55C175.373 287.018 175.23 287.161 175.23 287.338C175.23 287.514 175.373 287.657 175.55 287.657H187.24C187.417 287.657 187.56 287.514 187.56 287.338C187.56 287.161 187.417 287.018 187.24 287.018Z"
          fill="#898989"
        />
        <path
          d="M263.648 264.821C285.055 243.415 299.634 216.14 305.54 186.448C311.446 156.756 308.415 125.979 296.829 98.0098C285.244 70.0404 265.625 46.1345 240.453 29.3152C215.281 12.4959 185.687 3.51868 155.413 3.51868C125.139 3.51868 95.5454 12.4959 70.3736 29.3152C45.2017 46.1345 25.5827 70.0404 13.9974 98.0098C2.41203 125.979 -0.619224 156.756 5.28692 186.448C11.1931 216.14 25.7713 243.414 47.1782 264.821"
          stroke="#797979"
          stroke-width="0.353233"
        />
        <g filter="url(#filter2_i_756_1195)">
          <path
            d="M258.237 260.162C278.574 239.764 292.423 213.775 298.034 185.482C303.645 157.189 300.765 127.862 289.759 101.211C278.753 74.559 260.115 51.7796 236.202 35.7529C212.288 19.7261 184.174 11.1719 155.414 11.1719C126.654 11.1719 98.5392 19.7261 74.626 35.7529C50.7127 51.7796 32.0746 74.559 21.0686 101.211C10.0625 127.862 7.18283 157.189 12.7937 185.482C18.4045 213.775 32.2539 239.764 52.5904 260.162"
            stroke="#1E1E1E"
            stroke-width="3.53233"
          />
        </g>
        <path
          d="M44.8352 258.991C29.0429 243.199 16.9424 224.106 9.4022 203.084C1.86201 182.061 -0.93087 159.63 1.22401 137.401C3.37889 115.171 10.4281 93.6945 21.8657 74.5117C33.3033 55.329 48.8456 38.9161 67.3771 26.451C85.9087 13.986 106.97 5.77788 129.049 2.41586C151.128 -0.946153 173.678 0.621289 195.08 7.00569C216.482 13.3901 236.205 24.4331 252.833 39.3422C269.462 54.2513 282.584 72.6566 291.258 93.2373L280.033 97.9682C272.057 79.0444 259.992 62.1208 244.702 48.412C229.412 34.7032 211.276 24.5493 191.598 18.6788C171.919 12.8084 151.185 11.3672 130.883 14.4585C110.581 17.5499 91.2156 25.0972 74.1759 36.5587C57.1363 48.0202 42.8453 63.1117 32.3285 80.7501C21.8117 98.3885 15.3301 118.136 13.3487 138.576C11.3673 159.016 13.9353 179.641 20.8684 198.971C27.8016 218.301 38.9279 235.856 53.4488 250.377L44.8352 258.991Z"
          fill="url(#paint0_linear_756_1208)"
        />
        <path
          d="M251.079 170.3C254.873 151.225 252.926 131.453 245.483 113.485C238.041 95.5168 225.437 80.1592 209.266 69.3541C193.095 58.549 174.083 52.7819 154.635 52.7819C135.186 52.7819 116.174 58.549 100.003 69.3541C83.8324 80.1592 71.2287 95.5168 63.786 113.485C56.3434 131.453 54.3961 151.225 58.1903 170.3C61.9845 189.375 71.3499 206.896 85.1021 220.648"
          stroke="#797979"
          stroke-width="0.415475"
        />
        <g filter="url(#filter3_di_756_1195)">
          <path
            d="M243.134 168.554C246.616 150.998 244.829 132.8 237.999 116.262C231.17 99.7235 219.604 85.5882 204.765 75.6431C189.926 65.6981 172.481 60.3899 154.634 60.3899C136.788 60.3899 119.342 65.698 104.503 75.6431C89.6641 85.5882 78.0986 99.7235 71.2691 116.262C64.4395 132.8 62.6526 150.998 66.1342 168.554C69.6159 186.111 78.2099 202.238 90.8293 214.895"
            stroke="url(#paint2_linear_756_1195)"
            stroke-width="4.15475"
            shape-rendering="crispEdges"
          />
        </g>
        <path
          d="M225.132 215.01C236.925 201.547 244.477 184.893 246.831 167.156"
          stroke="#1E1E1E"
          stroke-width="2.07738"
        />
        <path
          d="M278.295 104.961C268.24 80.7344 251.211 60.0278 229.364 45.4595C207.516 30.8912 181.83 23.1154 155.554 23.1154C129.278 23.1154 103.592 30.8912 81.7448 45.4595C59.8972 60.0278 42.869 80.7344 32.8136 104.961C22.7582 129.187 20.1273 155.845 25.2535 181.563C30.3797 207.282 41.503 233.034 60.0829 251.576"
          stroke="#132B22"
          stroke-width="2.82586"
        />
        <g filter="url(#filter4_d_756_1195)">
          <path
            d="M282.216 103.512C271.828 78.4447 254.236 57.0189 231.666 41.9446C209.095 26.8702 182.559 18.8243 155.413 18.8243C128.268 18.8243 101.732 26.8702 79.1609 41.9446C56.5902 57.0189 38.9984 78.4446 28.6102 103.512C18.2221 128.58 15.504 156.164 20.7999 182.776C26.0957 209.387 37.8642 235.415 57.059 254.601"
            stroke="#5DC5A0"
            stroke-width="0.353233"
          />
        </g>
        <rect
          x="54.687"
          y="255.035"
          width="5.10225"
          height="2.0409"
          transform="rotate(136.594 54.687 255.035)"
          fill="white"
        />
        <rect
          x="26.1226"
          y="102.373"
          width="5.10225"
          height="2.0409"
          transform="rotate(-156.52 26.1226 102.373)"
          fill="white"
        />
        <rect
          width="5.10225"
          height="2.0409"
          transform="matrix(-0.902725 0.430218 0.430218 0.902725 288.454 97.9885)"
          fill="white"
        />
        <rect
          x="96.5605"
          y="29.2295"
          width="5.10225"
          height="2.0409"
          transform="rotate(-115.227 96.5605 29.2295)"
          fill="white"
        />
        <rect
          x="214.601"
          y="29.3727"
          width="5.10225"
          height="2.0409"
          transform="rotate(-64.7825 214.601 29.3727)"
          fill="white"
        />
        <g filter="url(#filter5_i_756_1195)">
          <circle
            cx="156"
            cy="222.857"
            r="18.7669"
            fill="#D9D9D9"
            fill-opacity="0.13"
          />
        </g>
        <circle
          cx="156"
          cy="222.857"
          r="18.6654"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.203008"
        />

        <defs>
          <filter
            id="filter0_d_756_1195"
            x="102.9"
            y="106.604"
            width="102.659"
            height="42.2826"
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
              result="effect1_dropShadow_756_1195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_756_1195"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_756_1195"
            x="114.047"
            y="270.046"
            width="24.6142"
            height="26.6977"
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
              result="effect1_dropShadow_756_1195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_756_1195"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_i_756_1195"
            x="8.2334"
            y="9.40576"
            width="294.36"
            height="252.18"
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
              result="effect1_innerShadow_756_1195"
            />
          </filter>
          <filter
            id="filter3_di_756_1195"
            x="57.3293"
            y="55.7546"
            width="194.61"
            height="168.038"
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
              result="effect1_dropShadow_756_1195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_756_1195"
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
              result="effect2_innerShadow_756_1195"
            />
          </filter>
          <filter
            id="filter4_d_756_1195"
            x="16.5648"
            y="17.2267"
            width="267.235"
            height="238.92"
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
              result="effect1_dropShadow_756_1195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_756_1195"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_i_756_1195"
            x="137.233"
            y="204.09"
            width="37.5337"
            height="39.158"
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
              result="effect1_innerShadow_756_1195"
            />
          </filter>
          <linearGradient
            id="paint0_linear_756_1195"
            x1="156"
            y1="-22.0552"
            x2="156"
            y2="312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#030303" />
            <stop offset="0.509715" stop-color="#0F0F0F" />
            <stop offset="1" stop-color="#0C0C0C" />
          </linearGradient>
          <linearGradient
            id="paint0_linear_756_1208"
            x1="90.3755"
            y1="19.3861"
            x2="75.0697"
            y2="285.185"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E3BB51" />
            <stop offset="1" stop-color="#E38651" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_756_1195"
            x1="154.827"
            y1="42.2255"
            x2="157.759"
            y2="218.165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#59BC98" stop-opacity="0" />
            <stop offset="0.44818" stop-color="#59BC98" stop-opacity="0.63" />
            <stop offset="1" stop-color="#59BC98" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SpeedoMeter8;
