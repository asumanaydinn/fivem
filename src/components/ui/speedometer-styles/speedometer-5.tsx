import { useSettings } from "../../../contexts/SettingsContext";

interface Props {
  speed: number;
  maxSpeed: number;
  fuel: number;
  maxFuel: number;
  gear: number;
}

const SpeedoMeter5: React.FC<Props> = ({
  speed,
  maxSpeed,
  fuel,
  maxFuel,
  gear,
}) => {
  const { settings } = useSettings();

  return (
    <div className="w-[306px] h-[306px] relative">
      <div className="absolute top-[120px] w-full -left-[1px]">
        <div className="items-center justify-center flex flex-col">
          <div className="flex items-center justify-center">
            {speed !== 0 && speed < 100 && (
              <span className="leading-tight text-neutral-400 text-[16px] font-medium font-['Orbitron']">
                0
              </span>
            )}
            <span className="leading-tight text-white text-[16px] font-medium font-['Orbitron']">
              {Math.min(speed, maxSpeed)}
            </span>
          </div>
          <div className="text-neutral-400 text-[10.53px] font-medium font-['Orbitron']">
            {settings.speedometers.units.toLocaleUpperCase()}
          </div>
        </div>
      </div>
      <svg
        width="306"
        height="306"
        viewBox="0 0 306 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="153" cy="153" r="145" fill="url(#paint0_linear_79_1179)" />
        <circle
          cx="153"
          cy="153"
          r="144"
          stroke="white"
          stroke-opacity="0.13"
          stroke-width="2"
        />
        <path
          d="M221.4 289.859C252.243 274.444 276.975 249.063 291.585 217.832C306.196 186.6 309.828 151.348 301.894 117.793C293.96 84.238 274.924 54.3467 247.873 32.9659C220.822 11.5852 187.341 -0.0312636 152.861 6.31462e-05C118.381 0.0313899 84.9216 11.7087 57.9094 33.1385C30.8971 54.5684 11.9154 84.4942 4.04211 118.064C-3.83122 151.633 -0.134528 186.878 14.5328 218.083C29.2001 249.289 53.978 274.625 84.8489 289.983L92.2059 275.196C64.6675 261.495 42.5645 238.894 29.4805 211.057C16.3966 183.221 13.0989 151.781 20.1223 121.835C27.1457 91.8895 44.0783 65.1942 68.1745 46.0777C92.2708 26.9613 122.118 16.5446 152.876 16.5166C183.634 16.4887 213.5 26.8511 237.631 45.9238C261.762 64.9964 278.743 91.6609 285.821 121.594C292.899 151.527 289.658 182.973 276.625 210.833C263.591 238.693 241.529 261.334 214.016 275.085L221.4 289.859Z"
          fill="url(#paint1_linear_79_1179)"
        />
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="27.56%" stop-color="#FF6847" />
            <stop offset="76.96%" stop-color="#FF0B54" />
          </linearGradient>
        </defs>
        <path
          d="M80.6428 276.041C80.3666 276.519 79.7544 276.683 79.278 276.403C52.5314 260.715 31.4784 236.899 19.1941 208.409C6.77781 179.613 3.98247 147.579 11.2234 117.068C18.4643 86.5566 35.3552 59.1952 59.3865 39.0488C83.1621 19.1168 112.672 7.29941 143.615 5.30251C144.167 5.26695 144.64 5.68848 144.672 6.23985L144.804 8.54477C144.836 9.09614 144.414 9.56854 143.863 9.60422C113.846 11.5477 85.2196 23.0145 62.1546 42.3508C38.8339 61.9014 22.4425 88.4537 15.4157 118.063C8.38889 147.672 11.1016 178.758 23.1507 206.703C35.0678 234.341 55.4889 257.448 81.4324 272.672C81.9088 272.951 82.0733 273.563 81.7971 274.041L80.6428 276.041Z"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth={3}
          strokeDasharray={Math.min(speed, maxSpeed) + " 1500"}
        />
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="27.56%" stop-color="#FDAAD2" />
              <stop offset="76.96%" stop-color="#FF800B" />
            </linearGradient>
          </defs>
        </svg>

        <path
          d="M220.932 278.493C221.192 278.981 221.798 279.166 222.284 278.903C254.637 261.417 279.194 232.336 291.005 197.482C302.816 162.628 300.999 124.609 285.942 91.0567C285.716 90.5528 285.122 90.3311 284.62 90.5607L282.52 91.5204C282.018 91.7499 281.797 92.3438 282.023 92.8478C296.624 125.401 298.383 162.285 286.924 196.099C275.465 229.913 251.645 258.128 220.261 275.099C219.775 275.361 219.589 275.967 219.849 276.454L220.932 278.493Z"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth={3}
          strokeDasharray={(Math.min(fuel, maxFuel) * 240) / maxFuel + " 1500"}
        />
        <g opacity="0.3">
          <rect
            x="152.322"
            y="26.9299"
            width="0.777993"
            height="12.4479"
            fill="white"
          />
          <rect
            x="200.603"
            y="36.2776"
            width="0.777993"
            height="12.4479"
            transform="rotate(22.5 200.603 36.2776)"
            fill="white"
          />
          <rect
            x="241.63"
            y="63.3896"
            width="0.777993"
            height="12.4479"
            transform="rotate(45 241.63 63.3896)"
            fill="white"
          />
          <rect
            x="269.161"
            y="104.139"
            width="0.777993"
            height="12.4479"
            transform="rotate(67.5 269.161 104.139)"
            fill="white"
          />
          <rect
            x="279"
            y="152.322"
            width="0.777993"
            height="12.4479"
            transform="rotate(90 279 152.322)"
            fill="white"
          />
          <rect
            x="269.652"
            y="200.602"
            width="0.777993"
            height="12.4479"
            transform="rotate(112.5 269.652 200.602)"
            fill="white"
          />
          <rect
            x="242.539"
            y="241.63"
            width="0.777993"
            height="12.4479"
            transform="rotate(135 242.539 241.63)"
            fill="white"
          />
          <rect
            x="201.791"
            y="269.16"
            width="0.777993"
            height="12.4479"
            transform="rotate(157.5 201.791 269.16)"
            fill="white"
          />
          <rect
            x="153.607"
            y="279"
            width="0.777993"
            height="12.4479"
            transform="rotate(180 153.607 279)"
            fill="white"
          />
          <rect
            x="105.327"
            y="269.652"
            width="0.777993"
            height="12.4479"
            transform="rotate(-157.5 105.327 269.652)"
            fill="white"
          />
          <rect
            x="64.2993"
            y="242.54"
            width="0.777993"
            height="12.4479"
            transform="rotate(-135 64.2993 242.54)"
            fill="white"
          />
          <rect
            x="36.77"
            y="201.791"
            width="0.777993"
            height="12.4479"
            transform="rotate(-112.5 36.77 201.791)"
            fill="white"
          />
          <rect
            x="26.9297"
            y="153.608"
            width="0.777993"
            height="12.4479"
            transform="rotate(-90 26.9297 153.608)"
            fill="white"
          />
          <rect
            x="36.2773"
            y="105.327"
            width="0.777993"
            height="12.4479"
            transform="rotate(-67.5 36.2773 105.327)"
            fill="white"
          />
          <rect
            x="63.3906"
            y="64.2993"
            width="0.777993"
            height="12.4479"
            transform="rotate(-45 63.3906 64.2993)"
            fill="white"
          />
          <rect
            x="104.139"
            y="36.7698"
            width="0.777993"
            height="12.4479"
            transform="rotate(-22.5 104.139 36.7698)"
            fill="white"
          />
        </g>
        <path
          d="M150.517 253.26C150.263 253.26 150.031 253.197 149.82 253.07C149.615 252.936 149.45 252.764 149.323 252.552C149.203 252.334 149.143 252.101 149.143 251.855L149.143 247.047C149.143 246.793 149.203 246.561 149.323 246.349C149.45 246.138 149.615 245.969 149.82 245.842C150.031 245.715 150.263 245.652 150.517 245.652L155.378 245.652C155.624 245.652 155.85 245.715 156.054 245.842C156.265 245.969 156.435 246.138 156.561 246.349C156.688 246.561 156.752 246.793 156.752 247.047L156.752 251.855C156.752 252.101 156.688 252.334 156.561 252.552C156.435 252.764 156.265 252.936 156.054 253.07C155.85 253.197 155.624 253.26 155.378 253.26L150.517 253.26ZM150.665 252.077L155.346 252.077C155.417 252.077 155.476 252.052 155.526 252.003C155.582 251.953 155.61 251.894 155.61 251.823L155.61 247.987L150.665 252.077ZM150.285 250.904L155.219 246.814L150.549 246.814C150.478 246.814 150.415 246.843 150.359 246.899C150.309 246.948 150.285 247.008 150.285 247.079L150.285 250.904Z"
          fill="#F2F2F2"
        />
        <path
          d="M77.9648 228.715C77.7042 228.715 77.4717 228.651 77.2674 228.524C77.0631 228.398 76.8976 228.232 76.7708 228.028C76.644 227.823 76.5806 227.594 76.5806 227.341L76.5806 227.024L77.7324 227.024L77.7324 227.309C77.7324 227.38 77.757 227.443 77.8063 227.499C77.8556 227.549 77.9155 227.573 77.986 227.573L82.794 227.573C82.8644 227.573 82.9243 227.549 82.9736 227.499C83.0229 227.443 83.0476 227.38 83.0476 227.309L83.0476 225.682C83.0476 225.611 83.0229 225.552 82.9736 225.502C82.9243 225.446 82.8644 225.418 82.794 225.418L77.9648 225.418L77.9648 224.276L82.4664 224.276C82.5439 224.276 82.6073 224.252 82.6566 224.202C82.7059 224.146 82.7306 224.083 82.7306 224.012L82.7306 222.512C82.7306 222.441 82.7059 222.381 82.6566 222.332C82.6073 222.276 82.5439 222.248 82.4664 222.248L77.986 222.248C77.9155 222.248 77.8556 222.276 77.8063 222.332C77.757 222.381 77.7324 222.441 77.7324 222.512L77.7324 222.903L76.5806 222.903L76.5806 222.48C76.5806 222.219 76.6404 221.987 76.7602 221.783C76.887 221.578 77.0561 221.413 77.2674 221.286C77.4788 221.159 77.7112 221.096 77.9648 221.096L82.4981 221.096C82.7587 221.096 82.9912 221.159 83.1955 221.286C83.4068 221.413 83.5724 221.578 83.6921 221.783C83.8119 221.987 83.8718 222.219 83.8718 222.48L83.8718 224.044C83.8718 224.136 83.8612 224.227 83.8401 224.319C83.826 224.41 83.8013 224.495 83.7661 224.572C83.9211 224.727 84.0303 224.9 84.0937 225.09C84.1571 225.28 84.1888 225.467 84.1888 225.65L84.1888 227.341C84.1888 227.594 84.1254 227.823 83.9986 228.028C83.8788 228.232 83.7133 228.398 83.5019 228.524C83.2976 228.651 83.0722 228.715 82.8257 228.715L77.9648 228.715ZM86.7267 228.715C86.4731 228.715 86.2406 228.651 86.0293 228.524C85.825 228.391 85.6594 228.218 85.5326 228.007C85.4129 227.788 85.353 227.556 85.353 227.309L85.353 222.501C85.353 222.248 85.4129 222.015 85.5326 221.804C85.6594 221.592 85.825 221.423 86.0293 221.297C86.2406 221.17 86.4731 221.106 86.7267 221.106L91.5875 221.106C91.8341 221.106 92.0595 221.17 92.2638 221.297C92.4751 221.423 92.6442 221.592 92.771 221.804C92.8978 222.015 92.9612 222.248 92.9612 222.501L92.9612 227.309C92.9612 227.556 92.8978 227.788 92.771 228.007C92.6442 228.218 92.4751 228.391 92.2638 228.524C92.0595 228.651 91.8341 228.715 91.5875 228.715L86.7267 228.715ZM86.8746 227.531L91.5558 227.531C91.6263 227.531 91.6861 227.506 91.7355 227.457C91.7918 227.408 91.82 227.348 91.82 227.277L91.82 223.442L86.8746 227.531ZM86.4942 226.358L91.429 222.269L86.7584 222.269C86.6879 222.269 86.6245 222.297 86.5682 222.353C86.5189 222.403 86.4942 222.462 86.4942 222.533L86.4942 226.358Z"
          fill="#F2F2F2"
        />
        <path
          d="M50.104 157.31C49.8504 157.31 49.6179 157.247 49.4065 157.12C49.2022 156.993 49.0367 156.827 48.9099 156.623C48.7901 156.419 48.7302 156.19 48.7302 155.936L48.7302 155.524L49.8715 155.524L49.8715 155.905C49.8715 155.975 49.8961 156.038 49.9455 156.095C50.0018 156.144 50.0652 156.169 50.1357 156.169L54.9331 156.169C55.0035 156.169 55.0634 156.144 55.1127 156.095C55.1691 156.038 55.1973 155.975 55.1973 155.905L55.1973 154.246C55.1973 154.175 55.1691 154.115 55.1127 154.066C55.0634 154.01 55.0035 153.981 54.9331 153.981L48.7302 153.981L48.7302 149.691L56.3385 149.691L56.3385 150.843L50.1357 150.843C50.0652 150.843 50.0018 150.871 49.9455 150.928C49.8961 150.977 49.8715 151.037 49.8715 151.107L49.8715 152.576C49.8715 152.646 49.8961 152.71 49.9455 152.766C50.0018 152.816 50.0652 152.84 50.1357 152.84L54.9648 152.84C55.2113 152.84 55.4368 152.9 55.6411 153.02C55.8524 153.14 56.0215 153.305 56.1483 153.517C56.2751 153.728 56.3385 153.96 56.3385 154.214L56.3385 155.936C56.3385 156.19 56.2751 156.419 56.1483 156.623C56.0215 156.827 55.8524 156.993 55.6411 157.12C55.4368 157.247 55.2113 157.31 54.9648 157.31L50.104 157.31ZM58.8754 157.31C58.6218 157.31 58.3893 157.247 58.178 157.12C57.9737 156.986 57.8081 156.813 57.6813 156.602C57.5616 156.384 57.5017 156.151 57.5017 155.905L57.5017 151.097C57.5017 150.843 57.5616 150.611 57.6813 150.399C57.8081 150.188 57.9737 150.019 58.178 149.892C58.3893 149.765 58.6218 149.702 58.8754 149.702L63.7362 149.702C63.9828 149.702 64.2082 149.765 64.4125 149.892C64.6238 150.019 64.7929 150.188 64.9197 150.399C65.0465 150.611 65.1099 150.843 65.1099 151.097L65.1099 155.905C65.1099 156.151 65.0465 156.384 64.9197 156.602C64.7929 156.813 64.6238 156.986 64.4125 157.12C64.2082 157.247 63.9828 157.31 63.7362 157.31L58.8754 157.31ZM59.0233 156.127L63.7045 156.127C63.775 156.127 63.8348 156.102 63.8842 156.053C63.9405 156.003 63.9687 155.943 63.9687 155.873L63.9687 152.037L59.0233 156.127ZM58.6429 154.954L63.5777 150.864L58.9071 150.864C58.8366 150.864 58.7732 150.892 58.7169 150.949C58.6676 150.998 58.6429 151.058 58.6429 151.128L58.6429 154.954Z"
          fill="#F2F2F2"
        />
        <path
          d="M77.9965 85.905C77.7429 85.905 77.5105 85.8416 77.2991 85.7148C77.0948 85.588 76.9293 85.4225 76.8025 85.2182C76.6827 85.0139 76.6228 84.7849 76.6228 84.5313L76.6228 82.8089C76.6228 82.675 76.6475 82.5412 76.6968 82.4074C76.7461 82.2665 76.8095 82.1326 76.887 82.0058C76.8095 81.879 76.7461 81.7487 76.6968 81.6148C76.6475 81.4739 76.6228 81.3366 76.6228 81.2027L76.6228 79.6705C76.6228 79.4098 76.6827 79.1774 76.8025 78.9731C76.9293 78.7688 77.0948 78.6032 77.2991 78.4764C77.5105 78.3496 77.7429 78.2862 77.9965 78.2862L82.8574 78.2862C83.0687 78.2862 83.2695 78.3391 83.4597 78.4447C83.6499 78.5504 83.8119 78.6913 83.9458 78.8674C84.0867 79.0435 84.1818 79.2337 84.2311 79.438L84.2311 81.2027C84.2311 81.4704 84.1395 81.7381 83.9563 82.0058C84.1395 82.2594 84.2311 82.5271 84.2311 82.8089L84.2311 84.5313C84.2311 84.7849 84.1677 85.0139 84.0409 85.2182C83.9141 85.4225 83.745 85.588 83.5336 85.7148C83.3293 85.8416 83.1039 85.905 82.8574 85.905L77.9965 85.905ZM78.0282 84.7638L82.8257 84.7638C82.8961 84.7638 82.956 84.7391 83.0053 84.6898C83.0617 84.6335 83.0898 84.5701 83.0898 84.4996L83.0898 82.8406C83.0898 82.7702 83.0617 82.7103 83.0053 82.661C82.956 82.6046 82.8961 82.5764 82.8257 82.5764L78.0282 82.5764C77.9578 82.5764 77.8944 82.6046 77.838 82.661C77.7887 82.7103 77.7641 82.7702 77.7641 82.8406L77.7641 84.4996C77.7641 84.5701 77.7887 84.6335 77.838 84.6898C77.8944 84.7391 77.9578 84.7638 78.0282 84.7638ZM78.0282 81.5514L82.8257 81.5514C82.8961 81.5514 82.956 81.5268 83.0053 81.4775C83.0617 81.4211 83.0898 81.3577 83.0898 81.2873L83.0898 79.7128C83.0898 79.6423 83.0617 79.5824 83.0053 79.5331C82.956 79.4768 82.8961 79.4486 82.8257 79.4486L78.0282 79.4486C77.9578 79.4486 77.8944 79.4768 77.838 79.5331C77.7887 79.5824 77.7641 79.6423 77.7641 79.7128L77.7641 81.2873C77.7641 81.3577 77.7887 81.4211 77.838 81.4775C77.8944 81.5268 77.9578 81.5514 78.0282 81.5514ZM86.8092 85.905C86.5556 85.905 86.3232 85.8416 86.1118 85.7148C85.9075 85.581 85.742 85.4084 85.6152 85.197C85.4954 84.9787 85.4355 84.7462 85.4355 84.4996L85.4355 79.6916C85.4355 79.438 85.4954 79.2056 85.6152 78.9942C85.742 78.7829 85.9075 78.6138 86.1118 78.487C86.3232 78.3602 86.5556 78.2968 86.8092 78.2968L91.6701 78.2968C91.9166 78.2968 92.1421 78.3602 92.3464 78.487C92.5577 78.6138 92.7268 78.7829 92.8536 78.9942C92.9804 79.2056 93.0438 79.438 93.0438 79.6916L93.0438 84.4996C93.0438 84.7462 92.9804 84.9787 92.8536 85.197C92.7268 85.4084 92.5577 85.581 92.3464 85.7148C92.1421 85.8416 91.9166 85.905 91.6701 85.905L86.8092 85.905ZM86.9572 84.7215L91.6384 84.7215C91.7088 84.7215 91.7687 84.6969 91.818 84.6476C91.8744 84.5982 91.9025 84.5384 91.9025 84.4679L91.9025 80.6321L86.9572 84.7215ZM86.5768 83.5486L91.5116 79.4592L86.841 79.4592C86.7705 79.4592 86.7071 79.4873 86.6507 79.5437C86.6014 79.593 86.5768 79.6529 86.5768 79.7233L86.5768 83.5486Z"
          fill="#F2F2F2"
        />
        <path
          d="M143.12 59.1284L143.12 53.0313L142.243 54.088L140.742 54.088L142.898 51.5202L144.261 51.5202L144.261 59.1284L143.12 59.1284ZM146.835 59.1284C146.582 59.1284 146.349 59.065 146.138 58.9382C145.933 58.8044 145.768 58.6318 145.641 58.4204C145.521 58.202 145.461 57.9696 145.461 57.723L145.461 52.915C145.461 52.6614 145.521 52.4289 145.641 52.2176C145.768 52.0063 145.933 51.8372 146.138 51.7104C146.349 51.5836 146.582 51.5202 146.835 51.5202L151.696 51.5202C151.943 51.5202 152.168 51.5836 152.372 51.7104C152.584 51.8372 152.753 52.0063 152.88 52.2176C153.006 52.4289 153.07 52.6614 153.07 52.915L153.07 57.723C153.07 57.9696 153.006 58.202 152.88 58.4204C152.753 58.6318 152.584 58.8044 152.372 58.9382C152.168 59.065 151.943 59.1284 151.696 59.1284L146.835 59.1284ZM146.983 57.9449L151.664 57.9449C151.735 57.9449 151.795 57.9203 151.844 57.8709C151.9 57.8216 151.929 57.7618 151.929 57.6913L151.929 53.8555L146.983 57.9449ZM146.603 56.772L151.538 52.6825L146.867 52.6825C146.796 52.6825 146.733 52.7107 146.677 52.7671C146.627 52.8164 146.603 52.8763 146.603 52.9467L146.603 56.772ZM155.648 59.1284C155.394 59.1284 155.162 59.065 154.95 58.9382C154.746 58.8044 154.581 58.6318 154.454 58.4204C154.334 58.202 154.274 57.9696 154.274 57.723L154.274 52.915C154.274 52.6614 154.334 52.4289 154.454 52.2176C154.581 52.0063 154.746 51.8372 154.95 51.7104C155.162 51.5836 155.394 51.5202 155.648 51.5202L160.509 51.5202C160.755 51.5202 160.981 51.5836 161.185 51.7104C161.396 51.8372 161.565 52.0063 161.692 52.2176C161.819 52.4289 161.882 52.6614 161.882 52.915L161.882 57.723C161.882 57.9696 161.819 58.202 161.692 58.4204C161.565 58.6318 161.396 58.8044 161.185 58.9382C160.981 59.065 160.755 59.1284 160.509 59.1284L155.648 59.1284ZM155.796 57.9449L160.477 57.9449C160.547 57.9449 160.607 57.9203 160.657 57.8709C160.713 57.8216 160.741 57.7618 160.741 57.6913L160.741 53.8555L155.796 57.9449ZM155.415 56.772L160.35 52.6825L155.68 52.6825C155.609 52.6825 155.546 52.7107 155.489 52.7671C155.44 52.8164 155.415 52.8763 155.415 52.9467L155.415 56.772Z"
          fill="#F2F2F2"
        />
        <path
          d="M208.946 83.6738L208.946 77.5767L208.069 78.6334L206.568 78.6334L208.724 76.0656L210.087 76.0656L210.087 83.6738L208.946 83.6738ZM211.288 83.6738L211.288 80.789C211.288 80.5284 211.348 80.2959 211.467 80.0916C211.594 79.8873 211.76 79.7253 211.964 79.6055C212.175 79.4787 212.408 79.4153 212.661 79.4153L217.49 79.4153C217.561 79.4153 217.621 79.3907 217.67 79.3414C217.726 79.285 217.755 79.2216 217.755 79.1512L217.755 77.471C217.755 77.4006 217.726 77.3407 217.67 77.2914C217.621 77.235 217.561 77.2068 217.49 77.2068L212.693 77.2068C212.623 77.2068 212.559 77.235 212.503 77.2914C212.454 77.3407 212.429 77.4006 212.429 77.471L212.429 77.8831L211.288 77.8831L211.288 77.4393C211.288 77.1786 211.348 76.9462 211.467 76.7419C211.594 76.5376 211.76 76.372 211.964 76.2452C212.175 76.1184 212.408 76.055 212.661 76.055L217.522 76.055C217.769 76.055 217.994 76.1184 218.198 76.2452C218.41 76.372 218.579 76.5376 218.706 76.7419C218.833 76.9462 218.896 77.1786 218.896 77.4393L218.896 79.1829C218.896 79.4365 218.833 79.6689 218.706 79.8803C218.579 80.0846 218.41 80.2501 218.198 80.3769C217.994 80.4967 217.769 80.5566 217.522 80.5566L212.693 80.5566C212.623 80.5566 212.559 80.5847 212.503 80.6411C212.454 80.6904 212.429 80.7503 212.429 80.8207L212.429 82.2684C212.429 82.3389 212.454 82.4023 212.503 82.4586C212.559 82.5079 212.623 82.5326 212.693 82.5326L218.896 82.5326L218.896 83.6738L211.288 83.6738ZM221.433 83.6738C221.179 83.6738 220.947 83.6104 220.735 83.4836C220.531 83.3498 220.366 83.1772 220.239 82.9658C220.119 82.7475 220.059 82.515 220.059 82.2684L220.059 77.4604C220.059 77.2068 220.119 76.9744 220.239 76.763C220.366 76.5517 220.531 76.3826 220.735 76.2558C220.947 76.129 221.179 76.0656 221.433 76.0656L226.294 76.0656C226.54 76.0656 226.766 76.129 226.97 76.2558C227.181 76.3826 227.35 76.5517 227.477 76.763C227.604 76.9744 227.667 77.2068 227.667 77.4604L227.667 82.2684C227.667 82.515 227.604 82.7475 227.477 82.9658C227.35 83.1772 227.181 83.3498 226.97 83.4836C226.766 83.6104 226.54 83.6738 226.294 83.6738L221.433 83.6738ZM221.581 82.4903L226.262 82.4903C226.332 82.4903 226.392 82.4657 226.442 82.4164C226.498 82.367 226.526 82.3072 226.526 82.2367L226.526 78.4009L221.581 82.4903ZM221.2 81.3174L226.135 77.228L221.465 77.228C221.394 77.228 221.331 77.2561 221.274 77.3125C221.225 77.3618 221.2 77.4217 221.2 77.4921L221.2 81.3174Z"
          fill="#F2F2F2"
        />
        <path
          d="M240.186 157.31L240.186 151.213L239.308 152.27L237.808 152.27L239.964 149.702L241.327 149.702L241.327 157.31L240.186 157.31ZM243.901 157.31C243.648 157.31 243.415 157.247 243.204 157.12C242.999 156.993 242.834 156.827 242.707 156.623C242.587 156.419 242.527 156.19 242.527 155.936L242.527 155.524L243.669 155.524L243.669 155.905C243.669 155.975 243.693 156.038 243.743 156.095C243.799 156.144 243.862 156.169 243.933 156.169L248.73 156.169C248.801 156.169 248.861 156.144 248.91 156.095C248.966 156.038 248.994 155.975 248.994 155.905L248.994 154.246C248.994 154.175 248.966 154.115 248.91 154.066C248.861 154.01 248.801 153.981 248.73 153.981L242.527 153.981L242.527 149.691L250.136 149.691L250.136 150.843L243.933 150.843C243.862 150.843 243.799 150.871 243.743 150.928C243.693 150.977 243.669 151.037 243.669 151.107L243.669 152.576C243.669 152.646 243.693 152.71 243.743 152.766C243.799 152.816 243.862 152.84 243.933 152.84L248.762 152.84C249.009 152.84 249.234 152.9 249.438 153.02C249.65 153.14 249.819 153.305 249.945 153.517C250.072 153.728 250.136 153.96 250.136 154.214L250.136 155.936C250.136 156.19 250.072 156.419 249.945 156.623C249.819 156.827 249.65 156.993 249.438 157.12C249.234 157.247 249.009 157.31 248.762 157.31L243.901 157.31ZM252.673 157.31C252.419 157.31 252.186 157.247 251.975 157.12C251.771 156.993 251.605 156.827 251.478 156.623C251.359 156.419 251.299 156.19 251.299 155.936L251.299 155.524L252.44 155.524L252.44 155.905C252.44 155.975 252.465 156.038 252.514 156.095C252.57 156.144 252.634 156.169 252.704 156.169L257.502 156.169C257.572 156.169 257.632 156.144 257.681 156.095C257.738 156.038 257.766 155.975 257.766 155.905L257.766 154.246C257.766 154.175 257.738 154.115 257.681 154.066C257.632 154.01 257.572 153.981 257.502 153.981L251.299 153.981L251.299 149.691L258.907 149.691L258.907 150.843L252.704 150.843C252.634 150.843 252.57 150.871 252.514 150.928C252.465 150.977 252.44 151.037 252.44 151.107L252.44 152.576C252.44 152.646 252.465 152.71 252.514 152.766C252.57 152.816 252.634 152.84 252.704 152.84L257.533 152.84C257.78 152.84 258.005 152.9 258.21 153.02C258.421 153.14 258.59 153.305 258.717 153.517C258.844 153.728 258.907 153.96 258.907 154.214L258.907 155.936C258.907 156.19 258.844 156.419 258.717 156.623C258.59 156.827 258.421 156.993 258.21 157.12C258.005 157.247 257.78 157.31 257.533 157.31L252.673 157.31Z"
          fill="#F2F2F2"
        />
        <path
          d="M208.946 230.946L208.946 224.849L208.069 225.906L206.568 225.906L208.724 223.338L210.087 223.338L210.087 230.946L208.946 230.946ZM212.661 230.946C212.408 230.946 212.175 230.883 211.964 230.756C211.76 230.629 211.594 230.464 211.467 230.259C211.348 230.055 211.288 229.826 211.288 229.573L211.288 227.85C211.288 227.716 211.312 227.582 211.362 227.449C211.411 227.308 211.474 227.174 211.552 227.047C211.474 226.92 211.411 226.79 211.362 226.656C211.312 226.515 211.288 226.378 211.288 226.244L211.288 224.712C211.288 224.451 211.348 224.219 211.467 224.014C211.594 223.81 211.76 223.644 211.964 223.518C212.175 223.391 212.408 223.327 212.661 223.327L217.522 223.327C217.734 223.327 217.934 223.38 218.125 223.486C218.315 223.592 218.477 223.733 218.611 223.909C218.751 224.085 218.847 224.275 218.896 224.479L218.896 226.244C218.896 226.512 218.804 226.779 218.621 227.047C218.804 227.301 218.896 227.568 218.896 227.85L218.896 229.573C218.896 229.826 218.833 230.055 218.706 230.259C218.579 230.464 218.41 230.629 218.198 230.756C217.994 230.883 217.769 230.946 217.522 230.946L212.661 230.946ZM212.693 229.805L217.49 229.805C217.561 229.805 217.621 229.78 217.67 229.731C217.726 229.675 217.755 229.611 217.755 229.541L217.755 227.882C217.755 227.811 217.726 227.752 217.67 227.702C217.621 227.646 217.561 227.618 217.49 227.618L212.693 227.618C212.623 227.618 212.559 227.646 212.503 227.702C212.454 227.752 212.429 227.811 212.429 227.882L212.429 229.541C212.429 229.611 212.454 229.675 212.503 229.731C212.559 229.78 212.623 229.805 212.693 229.805ZM212.693 226.593L217.49 226.593C217.561 226.593 217.621 226.568 217.67 226.519C217.726 226.462 217.755 226.399 217.755 226.329L217.755 224.754C217.755 224.684 217.726 224.624 217.67 224.574C217.621 224.518 217.561 224.49 217.49 224.49L212.693 224.49C212.623 224.49 212.559 224.518 212.503 224.574C212.454 224.624 212.429 224.684 212.429 224.754L212.429 226.329C212.429 226.399 212.454 226.462 212.503 226.519C212.559 226.568 212.623 226.593 212.693 226.593ZM221.474 230.946C221.22 230.946 220.988 230.883 220.777 230.756C220.572 230.622 220.407 230.45 220.28 230.238C220.16 230.02 220.1 229.787 220.1 229.541L220.1 224.733C220.1 224.479 220.16 224.247 220.28 224.035C220.407 223.824 220.572 223.655 220.777 223.528C220.988 223.401 221.22 223.338 221.474 223.338L226.335 223.338C226.581 223.338 226.807 223.401 227.011 223.528C227.223 223.655 227.392 223.824 227.518 224.035C227.645 224.247 227.709 224.479 227.709 224.733L227.709 229.541C227.709 229.787 227.645 230.02 227.518 230.238C227.392 230.45 227.223 230.622 227.011 230.756C226.807 230.883 226.581 230.946 226.335 230.946L221.474 230.946ZM221.622 229.763L226.303 229.763C226.374 229.763 226.434 229.738 226.483 229.689C226.539 229.64 226.567 229.58 226.567 229.509L226.567 225.673L221.622 229.763ZM221.242 228.59L226.176 224.5L221.506 224.5C221.435 224.5 221.372 224.529 221.316 224.585C221.266 224.634 221.242 224.694 221.242 224.765L221.242 228.59Z"
          fill="#F2F2F2"
        />
        <g filter="url(#filter0_d_79_1179)">
          <circle cx="151" cy="138" r="42" fill="url(#paint4_linear_79_1179)" />
          <circle
            cx="151"
            cy="138"
            r="41.4324"
            stroke="white"
            stroke-opacity="0.13"
            stroke-width="1.13514"
          />
        </g>

        <g filter="url(#filter1_d_79_1179)">
          <rect
            x="115"
            y="190.362"
            width="73"
            height="23.2754"
            rx="6.34791"
            fill="url(#paint5_linear_79_1179)"
            fill-opacity="0.03"
            shape-rendering="crispEdges"
          />
          <rect
            x="115.437"
            y="190.8"
            width="72.1255"
            height="22.4009"
            rx="5.91068"
            stroke="white"
            stroke-opacity="0.12"
            stroke-width="0.874457"
            shape-rendering="crispEdges"
          />
        </g>
        <path
          d="M135.339 203.006C135.415 202.757 135.269 202.492 135.019 202.422C134.972 202.408 134.929 202.393 134.882 202.384C134.877 201.964 134.792 201.559 134.637 201.191L132.077 203.021C132.977 202.969 133.882 203.068 134.755 203.327C135.005 203.398 135.269 203.256 135.339 203.006ZM133.364 206.715C133.399 206.723 133.434 206.727 133.468 206.727C133.684 206.727 133.878 206.578 133.927 206.358L134.399 204.257C134.451 204.026 134.324 203.794 134.103 203.711C133.085 203.333 131.964 203.333 130.946 203.711C130.725 203.794 130.598 204.026 130.65 204.257L131.121 206.358C131.179 206.613 131.432 206.773 131.685 206.715C131.939 206.658 132.098 206.406 132.041 206.152L131.665 204.474C132.232 204.332 132.816 204.332 133.384 204.474L133.007 206.152C132.95 206.406 133.11 206.658 133.364 206.715ZM128.842 204.171C128.932 204.298 129.078 204.369 129.224 204.369C129.318 204.369 129.417 204.341 129.497 204.279L136.098 199.564C136.311 199.414 136.358 199.121 136.207 198.909C136.056 198.697 135.764 198.65 135.551 198.801L133.769 200.074C133.737 200.049 133.702 200.029 133.668 200.007C133.837 199.774 133.939 199.49 133.939 199.183C133.939 198.405 133.302 197.768 132.524 197.768C131.746 197.768 131.11 198.405 131.11 199.183C131.11 199.492 131.213 199.776 131.383 200.01C130.75 200.425 130.292 201.168 130.191 202.049C130.176 202.158 130.167 202.271 130.167 202.384C130.12 202.393 130.077 202.408 130.03 202.422C129.79 202.488 129.644 202.738 129.705 202.978L128.95 203.516C128.738 203.667 128.691 203.959 128.842 204.171Z"
          fill="#FF504B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M156.533 203.869V201.352C156.533 201.269 156.5 201.189 156.441 201.13C156.382 201.071 156.302 201.038 156.219 201.038C156.135 201.038 156.055 201.071 155.996 201.13C155.937 201.189 155.904 201.269 155.904 201.352V202.296H155.275V201.667C155.275 201.5 155.209 201.34 155.091 201.222C154.973 201.104 154.813 201.038 154.646 201.038H154.147L153.049 199.94L149.492 205.704L149.502 205.708C149.579 205.74 149.661 205.756 149.743 205.756H152.314C152.397 205.756 152.478 205.74 152.555 205.708C152.631 205.677 152.7 205.63 152.759 205.571L154.147 204.183H154.646C154.813 204.183 154.973 204.117 155.091 203.999C155.209 203.881 155.275 203.721 155.275 203.554V202.925H155.904V203.869C155.904 203.952 155.937 204.032 155.996 204.091C156.055 204.15 156.135 204.183 156.219 204.183C156.302 204.183 156.382 204.15 156.441 204.091C156.5 204.032 156.533 203.952 156.533 203.869ZM148.889 205.162L152.401 199.471C152.372 199.467 152.343 199.465 152.314 199.465H151.5V198.836H152.444C152.527 198.836 152.607 198.803 152.666 198.744C152.725 198.685 152.759 198.605 152.759 198.521C152.759 198.438 152.725 198.358 152.666 198.299C152.607 198.24 152.527 198.207 152.444 198.207H149.928C149.844 198.207 149.764 198.24 149.705 198.299C149.646 198.358 149.613 198.438 149.613 198.521C149.613 198.605 149.646 198.685 149.705 198.744C149.764 198.803 149.844 198.836 149.928 198.836H150.871V199.465H148.355C148.188 199.465 148.028 199.531 147.91 199.649C147.792 199.767 147.726 199.927 147.726 200.094V202.296H147.097V201.352C147.097 201.269 147.064 201.189 147.005 201.13C146.946 201.071 146.866 201.038 146.782 201.038C146.699 201.038 146.619 201.071 146.56 201.13C146.501 201.189 146.468 201.269 146.468 201.352V203.869C146.468 203.952 146.501 204.032 146.56 204.091C146.619 204.15 146.699 204.183 146.782 204.183C146.866 204.183 146.946 204.15 147.005 204.091C147.064 204.032 147.097 203.952 147.097 203.869V202.925H147.726V203.738C147.726 203.821 147.742 203.903 147.773 203.979C147.805 204.056 147.852 204.125 147.91 204.183L148.889 205.162Z"
          fill="#898989"
        />
        <path
          d="M166.139 205.705C166.158 205.826 166.262 205.915 166.385 205.915H172.74C173.076 205.915 173.405 205.785 173.632 205.538C173.687 205.478 173.738 205.411 173.787 205.343H166.081L166.139 205.705ZM166.001 204.518H173.955C174.024 204.518 174.088 204.537 174.145 204.567C174.321 203.918 174.282 203.148 173.937 202.471C173.854 202.308 173.728 202.17 173.581 202.062L170.529 199.813C169.727 199.223 168.758 198.904 167.762 198.904H165.346C165.193 198.904 165.076 199.041 165.1 199.192L165.951 204.523C165.967 204.521 165.983 204.518 166.001 204.518ZM167.811 203.088C167.811 203.134 167.774 203.171 167.728 203.171H166.519C166.473 203.171 166.436 203.134 166.436 203.088V202.895C166.436 202.849 166.473 202.812 166.519 202.812H167.728C167.774 202.812 167.811 202.849 167.811 202.895L167.811 203.088ZM167.762 199.526C168.63 199.526 169.46 199.798 170.161 200.314L172.126 201.762H166.14L165.783 199.526H167.762ZM173.955 204.713H166.001C165.881 204.713 165.783 204.81 165.783 204.93C165.783 205.05 165.881 205.148 166.001 205.148H173.955C174.076 205.148 174.173 205.05 174.173 204.93C174.173 204.81 174.076 204.713 173.955 204.713Z"
          fill="#898989"
        />
        <defs>
          <filter
            id="filter0_d_79_1179"
            x="43.9512"
            y="30.9512"
            width="214.098"
            height="214.098"
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
            <feGaussianBlur stdDeviation="32.5244" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_79_1179"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_79_1179"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_79_1179"
            x="101.14"
            y="176.503"
            width="100.719"
            height="50.9946"
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
            <feGaussianBlur stdDeviation="6.9298" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_79_1179"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_79_1179"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_79_1179"
            x1="153"
            y1="-12.5"
            x2="153"
            y2="298"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#030303" />
            <stop offset="0.509715" stop-color="#0F0F0F" />
            <stop offset="1" stop-color="#202020" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_79_1179"
            x1="153"
            y1="0"
            x2="153"
            y2="306"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#090909" />
            <stop offset="1" stop-color="#161616" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_79_1179"
            x1="27"
            y1="104"
            x2="80"
            y2="276"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF6847" />
            <stop offset="1" stop-color="#FF0B54" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_79_1179"
            x1="27"
            y1="104"
            x2="80"
            y2="276"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FDAAD2" />
            <stop offset="1" stop-color="#FF800B" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_79_1179"
            x1="151"
            y1="96"
            x2="151"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2E2E2E" />
            <stop offset="1" stop-color="#242424" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_79_1179"
            x1="117.645"
            y1="202"
            x2="188"
            y2="202"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D9D9D9" />
            <stop offset="0.505" stop-color="#D9D9D9" stop-opacity="0" />
            <stop offset="1" stop-color="#D9D9D9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SpeedoMeter5;
