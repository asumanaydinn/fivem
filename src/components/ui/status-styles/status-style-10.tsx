import { useSettings } from "../../../contexts/SettingsContext";
import { Status } from "../../../types/status";

interface StatusStyle2Props {
  status: Status;
}

const StatusStyle10: React.FC<StatusStyle2Props> = ({ status }) => {
  const { settings } = useSettings();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center gap-x-1">
        <div className="origin-top-left rotate-180 w-[93.91px] h-[3.79px] relative">
          <div className="w-[93.91px] h-[3.79px] left-0 top-0 absolute origin-top-left rotate-180 bg-rose-400 bg-opacity-40 rounded-[0.95px]" />
          <div className="w-[33.20px] h-[3.79px] left-[-60.71px] top-0 absolute origin-top-left rotate-180 bg-rose-400 rounded-[0.95px] shadow" />
        </div>

        <svg
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_126_1411)">
            <circle
              cx="36.4054"
              cy="36.5614"
              r="18.3224"
              fill="white"
              fill-opacity="0.08"
            />
            <g filter="url(#filter1_d_126_1411)">
              <path
                d="M49.7642 27.0248C48.1598 24.7772 46.0143 22.9707 43.5262 21.7726C41.0382 20.5744 38.288 20.0234 35.5304 20.1705L35.6338 22.1089C38.0653 21.9792 40.4902 22.4651 42.684 23.5215C44.8778 24.5779 46.7696 26.1708 48.1843 28.1526L49.7642 27.0248Z"
                fill="white"
              />
            </g>
            <g filter="url(#filter2_d_126_1411)">
              <path
                d="M30.6506 21.1893C28.0643 22.1573 25.764 23.7622 23.9628 25.8553C22.1615 27.9485 20.9175 30.4623 20.3459 33.164L22.1023 33.5356C22.6114 31.1294 23.7194 28.8906 25.3236 27.0264C26.9278 25.1621 28.9765 23.7328 31.2799 22.8707L30.6506 21.1893Z"
                fill="white"
              />
            </g>
            <g filter="url(#filter3_d_126_1411)">
              <path
                d="M20.0677 38.1406C20.3334 40.8893 21.2882 43.5265 22.8439 45.8082C24.3995 48.0898 26.5057 49.9421 28.9674 51.1935L29.4851 50.1752C27.1947 49.0109 25.2351 47.2875 23.7877 45.1647C22.3403 43.0418 21.4519 40.5881 21.2048 38.0307L20.0677 38.1406Z"
                fill="white"
                fill-opacity="0.28"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter4_d_126_1411)">
              <path
                d="M33.7024 52.7509C36.4262 53.2058 39.2207 52.966 41.8272 52.0539C44.4338 51.1418 46.768 49.5868 48.6139 47.5329L47.7643 46.7693C46.0469 48.6803 43.8751 50.1271 41.4499 50.9757C39.0248 51.8243 36.4248 52.0474 33.8905 51.6242L33.7024 52.7509Z"
                fill="white"
                fill-opacity="0.28"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter5_d_126_1411)">
              <path
                d="M50.2331 45.4023C51.7206 43.0757 52.5971 40.4114 52.7814 37.6561C52.9656 34.9007 52.4518 32.1434 51.2873 29.6394L50.2515 30.1211C51.3349 32.4508 51.813 35.0162 51.6416 37.5798C51.4701 40.1434 50.6546 42.6223 49.2706 44.787L50.2331 45.4023Z"
                fill="white"
                fill-opacity="0.28"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter6_d_126_1411)">
              <path
                d="M36.5558 39.6937C38.1434 39.6937 39.4346 38.3783 39.4346 36.7625V32.3658C39.4346 30.7493 38.1434 29.4347 36.5558 29.4347C34.9681 29.4347 33.677 30.7493 33.677 32.3658V36.7625C33.677 38.3783 34.9681 39.6937 36.5558 39.6937ZM41.5937 36.7625V35.297C41.5937 35.1026 41.5178 34.9162 41.3829 34.7788C41.2479 34.6414 41.0648 34.5642 40.874 34.5642C40.6831 34.5642 40.5 34.6414 40.3651 34.7788C40.2301 34.9162 40.1543 35.1026 40.1543 35.297V36.7625C40.1543 38.7828 38.54 40.4265 36.5558 40.4265C34.5716 40.4265 32.9573 38.7828 32.9573 36.7625V35.297C32.9573 35.1026 32.8815 34.9162 32.7465 34.7788C32.6115 34.6414 32.4285 34.5642 32.2376 34.5642C32.0467 34.5642 31.8636 34.6414 31.7287 34.7788C31.5937 34.9162 31.5179 35.1026 31.5179 35.297V36.7625C31.5179 39.3419 33.3985 41.4758 35.8361 41.8334V42.6248H33.677C33.4861 42.6248 33.303 42.702 33.1681 42.8394C33.0331 42.9769 32.9573 43.1632 32.9573 43.3576C32.9573 43.5519 33.0331 43.7383 33.1681 43.8757C33.303 44.0132 33.4861 44.0904 33.677 44.0904H39.4346C39.6254 44.0904 39.8085 44.0132 39.9435 43.8757C40.0784 43.7383 40.1543 43.5519 40.1543 43.3576C40.1543 43.1632 40.0784 42.9769 39.9435 42.8394C39.8085 42.702 39.6254 42.6248 39.4346 42.6248H37.2755V41.8334C39.7131 41.4758 41.5937 39.3419 41.5937 36.7625Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_126_1411"
              x="0.163956"
              y="0.320023"
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
                result="effect1_dropShadow_126_1411"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_126_1411"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_126_1411"
              x="23.5009"
              y="8.11768"
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
                result="effect1_dropShadow_126_1411"
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
                result="effect1_dropShadow_126_1411"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_126_1411"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_126_1411"
              x="8.31635"
              y="9.15968"
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
                result="effect1_dropShadow_126_1411"
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
                result="effect1_dropShadow_126_1411"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_126_1411"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_126_1411"
              x="8.03822"
              y="26.0012"
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
                result="effect1_dropShadow_126_1411"
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
                result="effect1_dropShadow_126_1411"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_126_1411"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_126_1411"
              x="21.6729"
              y="34.7398"
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
                result="effect1_dropShadow_126_1411"
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
                result="effect1_dropShadow_126_1411"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_126_1411"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d_126_1411"
              x="37.2411"
              y="17.6099"
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
                result="effect1_dropShadow_126_1411"
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
                result="effect1_dropShadow_126_1411"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_126_1411"
                result="shape"
              />
            </filter>
            <filter
              id="filter6_d_126_1411"
              x="25.5442"
              y="23.461"
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
                result="effect1_dropShadow_126_1411"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_126_1411"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="w-[93.91px] h-[3.79px] relative">
          <div className="w-[93.91px] h-[3.79px] left-0 top-0 absolute bg-blue-400 bg-opacity-40 rounded-[0.95px]" />
          <div className="w-[33.20px] h-[3.79px] left-[60.71px] top-[-0px] absolute bg-blue-400 rounded-[0.95px] shadow" />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <svg
            width="88"
            height="87"
            viewBox="0 0 88 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_126_1262)">
              <circle
                cx="43.9698"
                cy="43.4919"
                r="22.4805"
                fill="#C85D70"
                fill-opacity="0.08"
              />
              <path
                d="M64.1077 43.4915C64.1077 54.6138 55.0912 63.6303 43.9689 63.6303C32.8465 63.6303 23.8301 54.6138 23.8301 43.4915C23.8301 32.3691 32.8465 23.3527 43.9689 23.3527C55.0912 23.3527 64.1077 32.3691 64.1077 43.4915ZM26.6879 43.4915C26.6879 53.0355 34.4249 60.7724 43.9689 60.7724C53.5129 60.7724 61.2498 53.0355 61.2498 43.4915C61.2498 33.9475 53.5129 26.2105 43.9689 26.2105C34.4249 26.2105 26.6879 33.9475 26.6879 43.4915Z"
                fill="#FF3357"
                fill-opacity="0.439216"
              />
              <g filter="url(#filter1_d_126_1262)">
                <path
                  d="M64.1077 43.4915C64.1077 40.4136 63.4022 37.3767 62.0455 34.614C60.6887 31.8513 58.7168 29.4364 56.2811 27.5547C53.8455 25.673 51.0109 24.3746 47.9952 23.7593C44.9795 23.1439 41.8628 23.228 38.8847 24.005L39.6062 26.7703C42.1617 26.1035 44.8361 26.0314 47.4238 26.5594C50.0116 27.0874 52.4439 28.2016 54.5339 29.8162C56.6239 31.4309 58.316 33.5032 59.4803 35.8738C60.6445 38.2444 61.2498 40.8504 61.2498 43.4915H64.1077Z"
                  fill="#FF3357"
                />
              </g>
              <path
                d="M50.6213 39.885V39.5771C50.6205 38.9099 50.4226 38.2578 50.0526 37.7026C49.6825 37.1474 49.1567 36.7139 48.5412 36.4565C47.9256 36.199 47.2478 36.1291 46.5927 36.2555C45.9375 36.3819 45.3343 36.699 44.8587 37.1669C44.8306 37.1953 44.8084 37.2289 44.7933 37.2659C44.7782 37.3029 44.7707 37.3425 44.771 37.3825V44.2119C44.7711 44.2674 44.7863 44.3219 44.8148 44.3695C44.8434 44.4171 44.8843 44.4561 44.9332 44.4824C44.9821 44.5086 45.0372 44.5212 45.0927 44.5187C45.1481 44.5162 45.2019 44.4988 45.2482 44.4683C45.8338 44.0928 46.514 43.8915 47.2096 43.8879C47.3707 43.8849 47.5267 43.9437 47.6457 44.0522C47.7647 44.1607 47.8375 44.3107 47.8493 44.4713C47.8537 44.5549 47.841 44.6385 47.8121 44.717C47.7831 44.7954 47.7384 44.8672 47.6808 44.9279C47.6232 44.9885 47.5538 45.0368 47.4769 45.0697C47.4 45.1027 47.3172 45.1196 47.2335 45.1195C46.5802 45.1195 45.9536 45.379 45.4917 45.841C45.0297 46.3029 44.7702 46.9295 44.7702 47.5828V50.1908C44.7701 50.2369 44.7804 50.2824 44.8003 50.3239C44.8201 50.3655 44.849 50.4021 44.8849 50.431C45.3219 50.7926 45.8364 51.0486 46.3884 51.1791C46.9405 51.3095 47.5152 51.3109 48.0678 51.1831C48.6205 51.0553 49.1362 50.8018 49.5749 50.4422C50.0137 50.0827 50.3636 49.6268 50.5974 49.11C50.621 49.0581 50.6296 49.0006 50.6224 48.944C50.6152 48.8874 50.5924 48.8339 50.5565 48.7895C50.5207 48.7451 50.4732 48.7116 50.4194 48.6926C50.3656 48.6736 50.3076 48.67 50.2518 48.682C49.868 48.77 49.4755 48.8144 49.0817 48.8144H48.4867C48.3278 48.8164 48.1741 48.7582 48.0563 48.6516C47.9385 48.5449 47.8654 48.3977 47.8516 48.2394C47.846 48.1552 47.8578 48.0707 47.8863 47.9912C47.9147 47.9117 47.9592 47.8389 48.0169 47.7773C48.0747 47.7158 48.1445 47.6667 48.222 47.6332C48.2995 47.5998 48.383 47.5826 48.4675 47.5828H49.0833C49.7267 47.5838 50.3607 47.4284 50.9307 47.1302C51.6059 46.7786 52.1667 46.2417 52.5476 45.5827C52.9284 44.9236 53.1134 44.1696 53.081 43.4091C53.0485 42.6486 52.7998 41.9132 52.3642 41.289C51.9285 40.6648 51.3239 40.1778 50.6213 39.885ZM49.6976 42.6562H49.3897C48.6547 42.6562 47.9498 42.3642 47.4301 41.8445C46.9104 41.3248 46.6184 40.62 46.6184 39.885V39.5771C46.6184 39.4138 46.6833 39.2571 46.7988 39.1416C46.9143 39.0261 47.0709 38.9613 47.2343 38.9613C47.3976 38.9613 47.5542 39.0261 47.6697 39.1416C47.7852 39.2571 47.8501 39.4138 47.8501 39.5771V39.885C47.8501 40.0872 47.8899 40.2874 47.9673 40.4742C48.0447 40.661 48.1581 40.8307 48.301 40.9736C48.5897 41.2624 48.9813 41.4246 49.3897 41.4246H49.6976C49.8609 41.4246 50.0175 41.4894 50.133 41.6049C50.2485 41.7204 50.3134 41.8771 50.3134 42.0404C50.3134 42.2037 50.2485 42.3603 50.133 42.4758C50.0175 42.5913 49.8609 42.6562 49.6976 42.6562ZM41.076 36.1901C40.1781 36.1911 39.3171 36.5483 38.6822 37.1832C38.0472 37.8182 37.69 38.6791 37.689 39.5771V39.885C36.9865 40.1779 36.382 40.6651 35.9465 41.2894C35.511 41.9136 35.2625 42.6491 35.2302 43.4096C35.1979 44.1701 35.383 44.924 35.764 45.583C36.145 46.242 36.7059 46.7787 37.3811 47.1302C37.9512 47.4284 38.5852 47.5838 39.2286 47.5828H39.8236C39.9827 47.5804 40.1369 47.6384 40.255 47.7451C40.3731 47.8518 40.4464 47.9993 40.4602 48.1578C40.4658 48.2421 40.454 48.3265 40.4256 48.406C40.3972 48.4855 40.3527 48.5583 40.2949 48.6199C40.2372 48.6815 40.1674 48.7305 40.0899 48.764C40.0124 48.7974 39.9288 48.8146 39.8444 48.8144H39.2286C38.8345 48.8146 38.4417 48.7699 38.0577 48.6813C38.002 48.6691 37.944 48.6727 37.8902 48.6915C37.8364 48.7104 37.7889 48.7439 37.7529 48.7882C37.717 48.8325 37.6941 48.8859 37.6868 48.9424C37.6794 48.999 37.6879 49.0565 37.7113 49.1085C37.9451 49.6254 38.295 50.0815 38.7337 50.4412C39.1725 50.8009 39.6882 51.0545 40.241 51.1825C40.7937 51.3104 41.3685 51.3092 41.9206 51.1788C42.4728 51.0485 42.9875 50.7926 43.4246 50.431C43.4605 50.4021 43.4894 50.3655 43.5093 50.3239C43.5291 50.2824 43.5394 50.2369 43.5393 50.1908V47.5828C43.5393 46.9295 43.2798 46.3029 42.8179 45.841C42.3559 45.379 41.7293 45.1195 41.076 45.1195C40.9924 45.1196 40.9096 45.1027 40.8327 45.0697C40.7558 45.0368 40.6864 44.9885 40.6287 44.9279C40.5711 44.8672 40.5265 44.7954 40.4975 44.717C40.4685 44.6385 40.4558 44.5549 40.4602 44.4713C40.472 44.3106 40.545 44.1605 40.6641 44.0519C40.7833 43.9434 40.9395 43.8847 41.1007 43.8879C41.7963 43.8915 42.4765 44.0928 43.0621 44.4683C43.1084 44.4988 43.1622 44.5162 43.2176 44.5187C43.2731 44.5212 43.3282 44.5086 43.3771 44.4824C43.426 44.4561 43.4669 44.4171 43.4955 44.3695C43.524 44.3219 43.5392 44.2674 43.5393 44.2119V37.3825C43.5396 37.3016 43.5081 37.2239 43.4516 37.1661C42.8193 36.5405 41.9656 36.1897 41.076 36.1901ZM41.6919 39.885C41.6919 40.62 41.3999 41.3248 40.8802 41.8445C40.3605 42.3642 39.6556 42.6562 38.9207 42.6562H38.6127C38.4494 42.6562 38.2928 42.5913 38.1773 42.4758C38.0618 42.3603 37.9969 42.2037 37.9969 42.0404C37.9969 41.8771 38.0618 41.7204 38.1773 41.6049C38.2928 41.4894 38.4494 41.4246 38.6127 41.4246H38.9207C39.1228 41.4246 39.323 41.3847 39.5098 41.3074C39.6966 41.23 39.8663 41.1166 40.0093 40.9736C40.1523 40.8307 40.2657 40.661 40.343 40.4742C40.4204 40.2874 40.4602 40.0872 40.4602 39.885V39.5771C40.4602 39.4138 40.5251 39.2571 40.6406 39.1416C40.7561 39.0261 40.9127 38.9613 41.076 38.9613C41.2394 38.9613 41.396 39.0261 41.5115 39.1416C41.627 39.2571 41.6919 39.4138 41.6919 39.5771V39.885Z"
                fill="#FF3357"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_126_1262"
                x="0.779781"
                y="0.301876"
                width="86.3799"
                height="86.38"
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
                <feGaussianBlur stdDeviation="10.3547" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.2 0 0 0 0 0.342056 0 0 0 0.26 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1262"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1262"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_126_1262"
                x="24.9819"
                y="9.4498"
                width="53.0284"
                height="47.9445"
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
                  radius="2.89643"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_126_1262"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5.50322" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.2 0 0 0 0 0.341176 0 0 0 0.91 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1262"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1262"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            width="88"
            height="87"
            viewBox="0 0 88 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_126_1252)">
              <circle
                cx="43.8985"
                cy="43.4919"
                r="22.4805"
                fill="#33DAFF"
                fill-opacity="0.08"
              />
              <path
                d="M64.0364 43.4915C64.0364 54.6138 55.02 63.6303 43.8976 63.6303C32.7752 63.6303 23.7588 54.6138 23.7588 43.4915C23.7588 32.3691 32.7752 23.3527 43.8976 23.3527C55.02 23.3527 64.0364 32.3691 64.0364 43.4915ZM26.6166 43.4915C26.6166 53.0355 34.3536 60.7724 43.8976 60.7724C53.4416 60.7724 61.1786 53.0355 61.1786 43.4915C61.1786 33.9475 53.4416 26.2105 43.8976 26.2105C34.3536 26.2105 26.6166 33.9475 26.6166 43.4915Z"
                fill="#33DAFF"
                fill-opacity="0.14"
              />
              <g filter="url(#filter1_d_126_1252)">
                <path
                  d="M64.0364 43.4915C64.0364 40.4136 63.3309 37.3767 61.9742 34.614C60.6174 31.8513 58.6455 29.4364 56.2098 27.5547C53.7742 25.673 50.9396 24.3746 47.9239 23.7593C44.9082 23.1439 41.7916 23.228 38.8134 24.005L39.5349 26.7703C42.0904 26.1035 44.7648 26.0314 47.3525 26.5594C49.9403 27.0874 52.3726 28.2016 54.4626 29.8162C56.5526 31.4309 58.2447 33.5032 59.409 35.8738C60.5732 38.2444 61.1786 40.8504 61.1786 43.4915H64.0364Z"
                  fill="#33DAFF"
                />
              </g>
              <path
                d="M36.4795 40.708C36.3595 40.5603 36.2741 40.3876 36.2296 40.2026C36.1851 40.0176 36.1827 39.8249 36.2225 39.6388C36.8136 36.845 40.0132 34.8164 43.8317 34.8164C47.6502 34.8164 50.8498 36.845 51.4408 39.6388C51.4811 39.8251 51.479 40.0179 51.4348 40.2033C51.3905 40.3886 51.3053 40.5616 51.1852 40.7096C51.0652 40.8575 50.9135 40.9767 50.7413 41.0582C50.5691 41.1397 50.3808 41.1815 50.1903 41.1806L37.4731 41.1806C37.2827 41.1811 37.0946 41.139 36.9226 41.0572C36.7506 40.9754 36.5992 40.8561 36.4795 40.708ZM51.8871 45.0372L48.6151 46.2305L45.6614 45.0444C45.5097 44.9837 45.3405 44.9837 45.1888 45.0444L42.2454 46.2226L39.2972 45.0444C39.1521 44.9864 38.9907 44.9839 38.8438 45.0372L35.3435 46.3101C35.1956 46.3752 35.0779 46.4941 35.0145 46.6428C34.9511 46.7915 34.9466 46.9587 35.002 47.1106C35.0574 47.2624 35.1684 47.3875 35.3127 47.4605C35.4569 47.5334 35.6235 47.5487 35.7786 47.5033L36.8311 47.1223L36.8311 47.5447C36.8311 48.3886 37.1664 49.198 37.7631 49.7948C38.3599 50.3915 39.1693 50.7268 40.0132 50.7268L47.6502 50.7268C48.4941 50.7268 49.3035 50.3915 49.9002 49.7948C50.497 49.198 50.8323 48.3886 50.8323 47.5447L50.8323 46.7754L52.3223 46.2337C52.4058 46.2092 52.4835 46.1679 52.5504 46.1122C52.6173 46.0566 52.6721 45.9878 52.7114 45.9101C52.7507 45.8324 52.7736 45.7475 52.7788 45.6606C52.784 45.5737 52.7712 45.4867 52.7414 45.4049C52.7116 45.3231 52.6653 45.2483 52.6054 45.1851C52.5455 45.1219 52.4733 45.0717 52.3932 45.0375C52.3132 45.0034 52.2269 44.986 52.1399 44.9865C52.0528 44.987 51.9668 45.0053 51.8871 45.0404L51.8871 45.0372ZM35.5583 43.7262L52.1051 43.7262C52.2739 43.7262 52.4357 43.6592 52.5551 43.5398C52.6744 43.4205 52.7415 43.2586 52.7415 43.0898C52.7415 42.921 52.6744 42.7591 52.5551 42.6398C52.4357 42.5204 52.2739 42.4534 52.1051 42.4534L35.5583 42.4534C35.3895 42.4534 35.2276 42.5204 35.1083 42.6398C34.9889 42.7591 34.9219 42.921 34.9219 43.0898C34.9219 43.2586 34.9889 43.4205 35.1083 43.5398C35.2276 43.6592 35.3895 43.7262 35.5583 43.7262Z"
                fill="#33DAFF"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_126_1252"
                x="0.708492"
                y="0.301876"
                width="86.3799"
                height="86.38"
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
                <feGaussianBlur stdDeviation="10.3547" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.2 0 0 0 0 0.854902 0 0 0 0 1 0 0 0 0.26 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1252"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1252"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_126_1252"
                x="24.9106"
                y="9.4498"
                width="53.0284"
                height="47.9445"
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
                  radius="2.89643"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_126_1252"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5.50322" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.2 0 0 0 0 0.854902 0 0 0 0 1 0 0 0 0.91 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1252"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1252"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="flex items-center">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_126_1257)">
              <circle
                cx="45.3347"
                cy="45.1869"
                r="22.4812"
                fill="#FFE24D"
                fill-opacity="0.08"
              />
              <path
                d="M65.4732 45.1867C65.4732 56.3093 56.4564 65.3261 45.3337 65.3261C34.2111 65.3261 25.1943 56.3093 25.1943 45.1867C25.1943 34.064 34.2111 25.0472 45.3337 25.0472C56.4564 25.0472 65.4732 34.064 65.4732 45.1867ZM28.0523 45.1867C28.0523 54.731 35.7895 62.4681 45.3337 62.4681C54.878 62.4681 62.6152 54.731 62.6152 45.1867C62.6152 35.6424 54.878 27.9052 45.3337 27.9052C35.7895 27.9052 28.0523 35.6424 28.0523 45.1867Z"
                fill="#FFE24D"
                fill-opacity="0.14"
              />
              <g filter="url(#filter1_d_126_1257)">
                <path
                  d="M65.4732 45.1867C65.4732 42.1087 64.7677 39.0717 63.4109 36.3089C62.0541 33.5462 60.0821 31.1312 57.6463 29.2494C55.2106 27.3676 52.376 26.0692 49.3602 25.4538C46.3444 24.8385 43.2276 24.9225 40.2494 25.6996L40.9709 28.465C43.5265 27.7982 46.201 27.726 48.7888 28.2541C51.3766 28.7821 53.809 29.8963 55.8991 31.511C57.9892 33.1257 59.6813 35.198 60.8456 37.5688C62.0098 39.9395 62.6152 42.5455 62.6152 45.1867H65.4732Z"
                  fill="#FFE24D"
                />
              </g>
              <path
                d="M44.8323 53.3849C48.61 53.3849 51.7008 50.2941 51.7008 46.5164C51.7008 42.7388 44.8323 35.069 44.8323 35.069C44.8323 35.069 37.9639 42.8532 37.9639 46.5164C37.9639 50.1796 41.0547 53.3849 44.8323 53.3849Z"
                fill="#FFE24D"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_126_1257"
                x="0.867159"
                y="0.719332"
                width="88.9356"
                height="88.9351"
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
                <feGaussianBlur stdDeviation="10.9932" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0.301961 0 0 0 0.26 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1257"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1257"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_126_1257"
                x="25.489"
                y="10.2872"
                width="54.7448"
                height="49.6595"
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
                  radius="3.07501"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_126_1257"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5.84253" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0.301961 0 0 0 0.91 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1257"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1257"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            width="89"
            height="90"
            viewBox="0 0 89 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_126_1247)">
              <circle
                cx="44.5193"
                cy="45.1869"
                r="22.4812"
                fill="#33FF85"
                fill-opacity="0.08"
              />
              <path
                d="M64.6577 45.1867C64.6577 56.3093 55.641 65.3261 44.5183 65.3261C33.3956 65.3261 24.3789 56.3093 24.3789 45.1867C24.3789 34.064 33.3956 25.0472 44.5183 25.0472C55.641 25.0472 64.6577 34.064 64.6577 45.1867ZM27.2368 45.1867C27.2368 54.731 34.974 62.4681 44.5183 62.4681C54.0626 62.4681 61.7998 54.731 61.7998 45.1867C61.7998 35.6424 54.0626 27.9052 44.5183 27.9052C34.974 27.9052 27.2368 35.6424 27.2368 45.1867Z"
                fill="#33FF85"
                fill-opacity="0.14"
              />
              <g filter="url(#filter1_d_126_1247)">
                <path
                  d="M64.6577 45.1867C64.6577 42.1087 63.9522 39.0717 62.5954 36.3089C61.2386 33.5462 59.2666 31.1312 56.8309 29.2494C54.3952 27.3676 51.5606 26.0692 48.5447 25.4538C45.5289 24.8385 42.4122 24.9225 39.434 25.6996L40.1555 28.465C42.7111 27.7982 45.3855 27.726 47.9734 28.2541C50.5612 28.7821 52.9936 29.8963 55.0837 31.511C57.1737 33.1257 58.8659 35.198 60.0302 37.5688C61.1944 39.9395 61.7998 42.5455 61.7998 45.1867H64.6577Z"
                  fill="#33FF85"
                />
              </g>
              <path
                d="M44.071 53.9976C43.9745 53.9975 43.8788 53.9806 43.7881 53.9477C43.6131 53.8836 43.4647 53.7627 43.3667 53.6043C43.2686 53.4459 43.2265 53.2591 43.2472 53.0739L43.888 47.1741H38.9867C38.8355 47.1744 38.6872 47.1334 38.5575 47.0557C38.4279 46.9779 38.3218 46.8663 38.2508 46.7329C38.1798 46.5994 38.1465 46.4491 38.1545 46.2982C38.1624 46.1472 38.2114 46.0013 38.296 45.876L44.8615 36.0569C44.9654 35.9032 45.1176 35.7887 45.294 35.7314C45.4704 35.6741 45.6608 35.6774 45.8351 35.7407C46.0027 35.8029 46.1458 35.9174 46.2432 36.0673C46.3406 36.2172 46.3872 36.3944 46.376 36.5728L45.7353 42.5142H50.6365C50.7877 42.514 50.9361 42.555 51.0657 42.6327C51.1954 42.7104 51.3014 42.822 51.3724 42.9555C51.4434 43.089 51.4767 43.2392 51.4688 43.3902C51.4608 43.5412 51.4119 43.6871 51.3272 43.8123L44.7617 53.6315C44.6854 53.7444 44.5825 53.8369 44.462 53.9007C44.3416 53.9645 44.2073 53.9978 44.071 53.9976Z"
                fill="#33FF85"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_126_1247"
                x="0.0517292"
                y="0.719332"
                width="88.9356"
                height="88.9351"
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
                <feGaussianBlur stdDeviation="10.9932" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.2 0 0 0 0 1 0 0 0 0 0.521569 0 0 0 0.26 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1247"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1247"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_126_1247"
                x="24.6735"
                y="10.2872"
                width="54.7448"
                height="49.6595"
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
                  radius="3.07501"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_126_1247"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5.84253" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.498039 0 0 0 0 0.364706 0 0 0 0 0.784314 0 0 0 0.91 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_126_1247"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_126_1247"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusStyle10;
