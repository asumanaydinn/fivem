import { Status } from "../../../types/status";

interface StatusStyle7Props {
  status: Status;
}

const StatusStyle7: React.FC<StatusStyle7Props> = ({ status }) => {
  // Assuming each status value ranges from 0 to 100
  const maxStatusValue = 100;

  // Calculate height percentage for the background of each status
  const healthHeight = `${(status.health / maxStatusValue) * 100}%`;
  const hydrationHeight = `${(status.hydration / maxStatusValue) * 100}%`;
  const hungryHeight = `${(status.hungry / maxStatusValue) * 100}%`;
  const energyHeight = `${(status.energy / maxStatusValue) * 100}%`;
  const armorHeight = `${(status.armor / maxStatusValue) * 100}%`;
  const stressHeight = `${(status.stress / maxStatusValue) * 100}%`;

  return (
    <div className="flex gap-x-2 items-center">
      <div className="w-11 relative h-11 bg-[#FF4758] bg-opacity-25 flex items-center justify-center border-4 border-[#FF4758] border-opacity-25">
        <div
          className="bg-[#E12E59] w-full absolute bottom-0"
          style={{ height: healthHeight }}
        ></div>
        <svg
          className="absolute"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0601 2.24636C15.2719 0.382927 12.3683 0.382927 10.5801 2.24636L9.36291 3.50784L8.1457 2.24194C6.35308 0.378501 3.45391 0.378501 1.66572 2.24194C-0.348209 4.33554 -0.348209 7.73487 1.66572 9.82847L9.36291 17.8444L17.0601 9.8329C19.074 7.7393 19.074 4.33997 17.0601 2.24636Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="w-11 relative h-11 bg-[#814BB7] bg-opacity-25 border-[#814BB7] border-4 border-opacity-25 flex items-center justify-center">
        <div
          className="bg-purple-600 w-full absolute bottom-0"
          style={{ height: hydrationHeight }}
        ></div>
        <svg
          className="absolute"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.87963 17.3888C10.4174 17.3888 13.312 14.4942 13.312 10.9564C13.312 7.41864 6.87963 0.23584 6.87963 0.23584C6.87963 0.23584 0.447266 7.52585 0.447266 10.9564C0.447266 14.387 3.34183 17.3888 6.87963 17.3888Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="w-11 relative h-11 bg-[#DE2EE1] bg-opacity-25 border-4 border-[#DE2EE1] border-opacity-25 flex items-center justify-center">
        <div
          className="bg-[#DE2EE1] w-full absolute bottom-0"
          style={{ height: hungryHeight }}
        ></div>
        <svg
          className="absolute"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.84712 6.03993C1.726 5.89092 1.63984 5.71665 1.59497 5.52994C1.55009 5.34324 1.54766 5.14884 1.58784 4.96107C2.18426 2.14191 5.41281 0.0949707 9.26587 0.0949707C13.1189 0.0949707 16.3475 2.14191 16.9439 4.96107C16.9845 5.14898 16.9824 5.34361 16.9378 5.53061C16.8932 5.7176 16.8071 5.89219 16.686 6.0415C16.5649 6.1908 16.4118 6.31102 16.2381 6.39327C16.0643 6.47552 15.8743 6.51772 15.682 6.51675L2.84972 6.51675C2.65758 6.51732 2.46776 6.47479 2.29424 6.39226C2.12072 6.30974 1.96793 6.18934 1.84712 6.03993ZM17.3942 10.4083L14.0926 11.6124L11.1121 10.4156C10.9591 10.3544 10.7884 10.3544 10.6353 10.4156L7.66525 11.6044L4.69036 10.4156C4.5439 10.3571 4.38104 10.3545 4.23281 10.4083L0.700833 11.6927C0.551556 11.7584 0.432873 11.8784 0.368874 12.0285C0.304876 12.1785 0.300356 12.3472 0.356233 12.5005C0.412111 12.6537 0.524198 12.7799 0.669744 12.8535C0.81529 12.9271 0.983389 12.9426 1.13992 12.8968L2.20192 12.5123L2.20192 12.9385C2.20192 13.7901 2.54021 14.6068 3.14237 15.209C3.74453 15.8111 4.56123 16.1494 5.41281 16.1494L13.1189 16.1494C13.9705 16.1494 14.7872 15.8111 15.3894 15.209C15.9915 14.6068 16.3298 13.7901 16.3298 12.9385L16.3298 12.1623L17.8333 11.6156C17.9176 11.591 17.996 11.5493 18.0635 11.4931C18.1311 11.4369 18.1864 11.3675 18.226 11.2891C18.2657 11.2107 18.2888 11.125 18.294 11.0373C18.2992 10.9497 18.2864 10.8618 18.2563 10.7793C18.2262 10.6968 18.1795 10.6213 18.119 10.5575C18.0586 10.4938 17.9857 10.4431 17.9049 10.4086C17.8241 10.3742 17.7371 10.3566 17.6493 10.3571C17.5614 10.3576 17.4746 10.3762 17.3942 10.4116L17.3942 10.4083ZM0.917568 9.08546L17.6142 9.08546C17.7845 9.08546 17.9478 9.0178 18.0683 8.89737C18.1887 8.77694 18.2564 8.6136 18.2564 8.44328C18.2564 8.27296 18.1887 8.10962 18.0683 7.98919C17.9478 7.86876 17.7845 7.8011 17.6142 7.8011L0.917568 7.8011C0.747252 7.8011 0.583912 7.86876 0.46348 7.98919C0.343048 8.10962 0.275391 8.27296 0.275391 8.44328C0.275391 8.6136 0.343048 8.77694 0.46348 8.89737C0.583912 9.0178 0.747252 9.08546 0.917568 9.08546Z"
            fill="white"
          />
        </svg>
      </div>{" "}
      <div className="w-11 relative h-11 bg-[#E12E39] bg-opacity-25 border-4 border-[#E12E39] border-opacity-25 flex items-center justify-center">
        <div
          className="bg-[#E12E39] w-full absolute bottom-0"
          style={{ height: energyHeight }}
        ></div>
        <svg
          className="absolute"
          width="16"
          height="21"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.82606 20.6872C6.71901 20.6871 6.6128 20.6684 6.51218 20.6318C6.31807 20.5608 6.15343 20.4266 6.04463 20.2509C5.93583 20.0751 5.88916 19.8679 5.9121 19.6625L6.62296 13.117H1.18533C1.01761 13.1173 0.852997 13.0718 0.70916 12.9856C0.565322 12.8993 0.447698 12.7755 0.36892 12.6275C0.290142 12.4794 0.253188 12.3127 0.262025 12.1452C0.270862 11.9777 0.325157 11.8158 0.419078 11.6768L7.7031 0.783127C7.8183 0.612648 7.98715 0.485539 8.18284 0.421981C8.37854 0.358423 8.58985 0.362059 8.78324 0.432312C8.96915 0.501333 9.1279 0.628385 9.23598 0.794658C9.34405 0.96093 9.39572 1.15759 9.38332 1.35551L8.67246 7.94713H14.1101C14.2778 7.94688 14.4424 7.99232 14.5863 8.07857C14.7301 8.16482 14.8477 8.28863 14.9265 8.43669C15.0053 8.58476 15.0422 8.75148 15.0334 8.91897C15.0246 9.08645 14.9703 9.24836 14.8763 9.38732L7.59232 20.281C7.50763 20.4063 7.39347 20.5089 7.25986 20.5797C7.12625 20.6505 6.97728 20.6875 6.82606 20.6872Z"
            fill="white"
          />
        </svg>
      </div>{" "}
      <div className="w-11 relative h-11 bg-[#56B954] border-[#56B954] border-4 border-opacity-25 bg-opacity-25 flex items-center justify-center">
        <div
          className="bg-[#56B954] w-full absolute bottom-0"
          style={{ height: armorHeight }}
        ></div>
        <svg
          className="absolute"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0792 3.54806L16.7518 3.52287C13.0237 3.23139 9.17685 0.805978 9.14085 0.784387L8.94654 0.658447L8.75222 0.784387C8.71623 0.805978 4.86939 3.23139 1.14131 3.52287L0.813851 3.54806L0.806647 3.87554C0.806647 3.96911 0.759864 13.185 8.76301 17.9494L8.94654 18.0574L9.13007 17.9494C17.1332 13.185 17.0864 3.96911 17.0864 3.87554L17.0792 3.54806Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="w-11 relative h-11 bg-[#E12E39] bg-opacity-25 border-opacity-25 border-4 border-[#E12E39] flex items-center justify-center">
        <div
          className="bg-[#E12E39] w-full absolute bottom-0"
          style={{ height: stressHeight }}
        ></div>
        <svg
          className="absolute"
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6323 5.17613V4.77618C20.6312 3.90953 20.3742 3.0625 19.8935 2.34137C19.4128 1.62024 18.7299 1.05715 17.9304 0.722744C17.1308 0.388341 16.2503 0.297528 15.3994 0.461701C14.5484 0.625875 13.7649 1.03772 13.1471 1.64556C13.1106 1.68239 13.0817 1.72609 13.0622 1.77414C13.0426 1.82219 13.0327 1.87364 13.0332 1.92552V10.7965C13.0334 10.8686 13.053 10.9393 13.0901 11.0011C13.1272 11.063 13.1803 11.1136 13.2439 11.1477C13.3074 11.1819 13.379 11.1982 13.451 11.1949C13.523 11.1917 13.5929 11.1691 13.6531 11.1294C14.4137 10.6417 15.2973 10.3803 16.2008 10.3755C16.4099 10.3716 16.6126 10.448 16.7672 10.589C16.9217 10.73 17.0164 10.9248 17.0317 11.1334C17.0374 11.2419 17.0209 11.3505 16.9833 11.4524C16.9456 11.5544 16.8876 11.6476 16.8128 11.7264C16.7379 11.8052 16.6478 11.8679 16.5479 11.9107C16.448 11.9535 16.3405 11.9755 16.2318 11.9753C15.3832 11.9753 14.5694 12.3124 13.9693 12.9125C13.3693 13.5125 13.0322 14.3263 13.0322 15.1749V18.5625C13.0321 18.6224 13.0454 18.6814 13.0712 18.7354C13.097 18.7894 13.1346 18.8369 13.1811 18.8745C13.7488 19.3442 14.4171 19.6768 15.1341 19.8462C15.8512 20.0157 16.5976 20.0175 17.3155 19.8515C18.0333 19.6855 18.7032 19.3562 19.2731 18.8891C19.843 18.4221 20.2975 17.83 20.6013 17.1587C20.6318 17.0912 20.6431 17.0165 20.6337 16.943C20.6243 16.8695 20.5947 16.8 20.5481 16.7424C20.5015 16.6847 20.4399 16.6411 20.37 16.6165C20.3001 16.5918 20.2247 16.5871 20.1523 16.6028C19.6538 16.717 19.1439 16.7747 18.6325 16.7747H17.8596C17.6532 16.7773 17.4535 16.7017 17.3005 16.5632C17.1475 16.4247 17.0526 16.2334 17.0347 16.0278C17.0274 15.9184 17.0427 15.8087 17.0797 15.7054C17.1166 15.6022 17.1744 15.5076 17.2494 15.4276C17.3244 15.3477 17.4151 15.2839 17.5157 15.2405C17.6164 15.197 17.7249 15.1747 17.8346 15.1749H18.6345C19.4702 15.1762 20.2937 14.9744 21.0342 14.587C21.9111 14.1303 22.6396 13.433 23.1343 12.577C23.629 11.7209 23.8693 10.7415 23.8271 9.75369C23.785 8.76588 23.462 7.81056 22.8961 6.99979C22.3302 6.18902 21.5449 5.55641 20.6323 5.17613ZM19.4324 8.7757H19.0324C18.0778 8.7757 17.1622 8.39646 16.4872 7.72141C15.8121 7.04636 15.4329 6.1308 15.4329 5.17613V4.77618C15.4329 4.56403 15.5171 4.36058 15.6672 4.21056C15.8172 4.06055 16.0206 3.97628 16.2328 3.97628C16.4449 3.97628 16.6484 4.06055 16.7984 4.21056C16.9484 4.36058 17.0327 4.56403 17.0327 4.77618V5.17613C17.0327 5.43875 17.0844 5.69879 17.1849 5.94141C17.2854 6.18403 17.4327 6.40448 17.6184 6.59018C17.9934 6.96521 18.5021 7.17589 19.0324 7.17589H19.4324C19.6445 7.17589 19.848 7.26017 19.998 7.41018C20.148 7.56019 20.2323 7.76365 20.2323 7.9758C20.2323 8.18795 20.148 8.3914 19.998 8.54142C19.848 8.69143 19.6445 8.7757 19.4324 8.7757ZM8.23374 0.376709C7.06733 0.378033 5.94908 0.841972 5.1243 1.66675C4.29953 2.49152 3.83559 3.60978 3.83427 4.77618V5.17613C2.92171 5.55661 2.13654 6.18939 1.57086 7.00028C1.00517 7.81116 0.682413 8.76652 0.640432 9.75433C0.598452 10.7421 0.838989 11.7214 1.33384 12.5774C1.82868 13.4334 2.55732 14.1305 3.43431 14.587C4.1748 14.9744 4.99831 15.1762 5.83403 15.1749H6.60693C6.81364 15.1719 7.01384 15.2472 7.16725 15.3858C7.32067 15.5244 7.41591 15.7159 7.43383 15.9218C7.4411 16.0313 7.42579 16.141 7.38886 16.2443C7.35192 16.3475 7.29416 16.4421 7.21914 16.522C7.14413 16.602 7.05347 16.6657 6.95279 16.7092C6.85212 16.7527 6.74359 16.775 6.63393 16.7747H5.83403C5.32217 16.775 4.81195 16.7169 4.31321 16.6018C4.24083 16.586 4.16549 16.5906 4.09558 16.6151C4.02568 16.6396 3.96396 16.6831 3.9173 16.7406C3.87065 16.7982 3.84089 16.8675 3.83135 16.941C3.82181 17.0145 3.83285 17.0891 3.86326 17.1567C4.16696 17.8281 4.62141 18.4205 5.19128 18.8877C5.76116 19.3549 6.43111 19.6845 7.14905 19.8506C7.86699 20.0168 8.61359 20.0152 9.33081 19.8459C10.048 19.6766 10.7165 19.3442 11.2844 18.8745C11.331 18.8369 11.3685 18.7894 11.3943 18.7354C11.4201 18.6814 11.4334 18.6224 11.4334 18.5625V15.1749C11.4334 14.3263 11.0963 13.5125 10.4962 12.9125C9.89616 12.3124 9.08233 11.9753 8.23374 11.9753C8.12506 11.9755 8.0175 11.9535 7.91761 11.9107C7.81772 11.8679 7.72759 11.8052 7.65274 11.7264C7.57789 11.6476 7.51987 11.5544 7.48223 11.4524C7.4446 11.3505 7.42813 11.2419 7.43383 11.1334C7.44915 10.9246 7.54395 10.7296 7.69871 10.5886C7.85348 10.4476 8.05642 10.3714 8.26573 10.3755C9.16926 10.3803 10.0528 10.6417 10.8134 11.1294C10.8737 11.1691 10.9435 11.1917 11.0155 11.1949C11.0876 11.1982 11.1591 11.1819 11.2226 11.1477C11.2862 11.1136 11.3393 11.063 11.3764 11.0011C11.4135 10.9393 11.4332 10.8686 11.4334 10.7965V1.92552C11.4337 1.82054 11.3928 1.71962 11.3194 1.64456C10.4981 0.831879 9.38916 0.376246 8.23374 0.376709ZM9.03364 5.17613C9.03364 6.1308 8.6544 7.04636 7.97935 7.72141C7.3043 8.39646 6.38874 8.7757 5.43407 8.7757H5.03412C4.82197 8.7757 4.61852 8.69143 4.4685 8.54142C4.31849 8.3914 4.23422 8.18795 4.23422 7.9758C4.23422 7.76365 4.31849 7.56019 4.4685 7.41018C4.61852 7.26017 4.82197 7.17589 5.03412 7.17589H5.43407C5.69669 7.17589 5.95673 7.12417 6.19935 7.02367C6.44197 6.92317 6.66242 6.77587 6.84812 6.59018C7.03381 6.40448 7.18111 6.18403 7.28161 5.94141C7.38211 5.69879 7.43383 5.43875 7.43383 5.17613V4.77618C7.43383 4.56403 7.51811 4.36058 7.66812 4.21056C7.81813 4.06055 8.02159 3.97628 8.23374 3.97628C8.44589 3.97628 8.64934 4.06055 8.79936 4.21056C8.94937 4.36058 9.03364 4.56403 9.03364 4.77618V5.17613Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default StatusStyle7;