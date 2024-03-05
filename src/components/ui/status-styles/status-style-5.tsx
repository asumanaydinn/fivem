import { Status } from "../../../types/status";
import StatusStyle5Item from "./status-style-5-item";

interface StatusStyle5Props {
  status: Status;
}

const StatusStyle5: React.FC<StatusStyle5Props> = ({ status }) => {
  // Assuming each status value ranges from 0 to 100
  const maxStatusValue = 100;

  // Calculate height percentage for the background of each status
  const healthHeight = (status.health / maxStatusValue) * 100;
  const hydrationHeight = (status.hydration / maxStatusValue) * 100;
  const hungryHeight = (status.hungry / maxStatusValue) * 100;
  const energyHeight = (status.energy / maxStatusValue) * 100;
  const armorHeight = (status.armor / maxStatusValue) * 100;
  const stressHeight = (status.stress / maxStatusValue) * 100;

  return (
    <div className="flex gap-x-2 relative">
      <StatusStyle5Item
        percentage={healthHeight}
        activeColor="#4D2FA1"
        color="#8256FF"
        Icon={() => (
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7391 1.35062C13.2817 -0.168053 10.9154 -0.168053 9.45801 1.35062L8.466 2.3787L7.47399 1.34701C6.01304 -0.17166 3.65025 -0.17166 2.19291 1.34701C0.551584 3.05327 0.551584 5.82367 2.19291 7.52992L8.466 14.0627L14.7391 7.53353C16.3804 5.82728 16.3804 3.05687 14.7391 1.35062Z"
              fill="white"
            />
          </svg>
        )}
      />
      <StatusStyle5Item
        percentage={hydrationHeight}
        activeColor="#FF56C5"
        color="#FF72CF"
        Icon={() => (
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.14213 14.7888C9.15614 14.7888 11.6222 12.3228 11.6222 9.30878C11.6222 6.29477 6.14213 0.175415 6.14213 0.175415C6.14213 0.175415 0.662109 6.3861 0.662109 9.30878C0.662109 12.2315 3.12812 14.7888 6.14213 14.7888Z"
              fill="white"
            />
          </svg>
        )}
      />{" "}
      <StatusStyle5Item
        percentage={hungryHeight}
        activeColor="#FFA756"
        color="#FFBB7D"
        Icon={() => (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.18184 5.58299C2.08565 5.46465 2.01722 5.32624 1.98158 5.17796C1.94595 5.02968 1.94401 4.8753 1.97593 4.72617C2.4496 2.48723 5.01367 0.861572 8.07373 0.861572C11.1338 0.861572 13.6979 2.48723 14.1715 4.72617C14.2038 4.87541 14.2021 5.02998 14.1667 5.17849C14.1312 5.327 14.0629 5.46566 13.9667 5.58423C13.8705 5.70281 13.749 5.79828 13.611 5.86361C13.4729 5.92893 13.322 5.96244 13.1694 5.96167L2.9781 5.96167C2.8255 5.96213 2.67474 5.92835 2.53694 5.86281C2.39913 5.79727 2.27779 5.70165 2.18184 5.58299ZM14.5292 9.05233L11.9071 10.0086L9.54001 9.05807C9.41846 9.00947 9.28288 9.00947 9.16133 9.05807L6.80253 10.0022L4.43991 9.05807C4.3236 9.0116 4.19425 9.00955 4.07653 9.05233L1.27148 10.0723C1.15292 10.1245 1.05866 10.2199 1.00784 10.339C0.95701 10.4582 0.953421 10.5922 0.997798 10.7139C1.04218 10.8356 1.13119 10.9358 1.24678 10.9943C1.36238 11.0527 1.49588 11.065 1.62019 11.0286L2.46362 10.7232L2.46362 11.0618C2.46362 11.7381 2.73229 12.3867 3.21051 12.8649C3.68874 13.3432 4.33736 13.6118 5.01367 13.6118L11.1338 13.6118C11.8101 13.6118 12.4587 13.3432 12.9369 12.8649C13.4152 12.3867 13.6838 11.7381 13.6838 11.0618L13.6838 10.4453L14.8779 10.0111C14.9449 9.99155 15.0071 9.95843 15.0607 9.91382C15.1144 9.86922 15.1583 9.81408 15.1898 9.75183C15.2213 9.68957 15.2396 9.62152 15.2438 9.55187C15.2479 9.48223 15.2377 9.41248 15.2138 9.34694C15.1899 9.2814 15.1528 9.22146 15.1048 9.17082C15.0568 9.12019 14.9989 9.07994 14.9348 9.05256C14.8706 9.02519 14.8015 9.01127 14.7317 9.01167C14.662 9.01206 14.593 9.02677 14.5292 9.05488L14.5292 9.05233ZM1.4436 8.00171L14.7039 8.00171C14.8391 8.00171 14.9688 7.94798 15.0645 7.85233C15.1601 7.75668 15.2139 7.62696 15.2139 7.4917C15.2139 7.35644 15.1601 7.22671 15.0645 7.13107C14.9688 7.03542 14.8391 6.98169 14.7039 6.98169L1.4436 6.98169C1.30834 6.98169 1.17862 7.03542 1.08297 7.13107C0.987327 7.22671 0.933594 7.35644 0.933594 7.4917C0.933594 7.62696 0.987327 7.75668 1.08297 7.85233C1.17862 7.94798 1.30834 8.00171 1.4436 8.00171Z"
              fill="white"
            />
          </svg>
        )}
      />{" "}
      <StatusStyle5Item
        percentage={energyHeight}
        activeColor="#FF4758"
        color="#FF7E8A"
        Icon={() => (
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.52033 15.4706C5.43972 15.4705 5.35973 15.4564 5.28395 15.4289C5.13778 15.3754 5.01379 15.2744 4.93186 15.142C4.84992 15.0096 4.81478 14.8536 4.83205 14.6989L5.36738 9.76971H1.27245C1.14615 9.7699 1.02218 9.73568 0.913863 9.67072C0.805542 9.60577 0.716963 9.51253 0.657638 9.40103C0.598312 9.28953 0.570483 9.16397 0.577138 9.03784C0.583793 8.91172 0.624681 8.78978 0.69541 8.68514L6.18081 0.481385C6.26756 0.353002 6.39472 0.25728 6.54209 0.209416C6.68946 0.161553 6.84859 0.164291 6.99423 0.217197C7.13423 0.269174 7.25378 0.364853 7.33517 0.490069C7.41656 0.615284 7.45547 0.76338 7.44613 0.91243L6.9108 5.8764H11.0057C11.132 5.87621 11.256 5.91043 11.3643 5.97538C11.4726 6.04034 11.5612 6.13357 11.6205 6.24508C11.6799 6.35658 11.7077 6.48214 11.701 6.60826C11.6944 6.73439 11.6535 6.85632 11.5828 6.96096L6.09738 15.1647C6.0336 15.2591 5.94763 15.3363 5.84701 15.3896C5.74639 15.443 5.63421 15.4708 5.52033 15.4706Z"
              fill="white"
            />
          </svg>
        )}
      />{" "}
      <StatusStyle5Item
        percentage={armorHeight}
        activeColor="#D84DA8"
        color="#FF89D7"
        Icon={() => (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0165 2.41286L13.7452 2.39199C10.6561 2.15047 7.46868 0.140797 7.43885 0.122907L7.27784 0.0185547L7.11684 0.122907C7.08701 0.140797 3.89956 2.15047 0.810506 2.39199L0.539178 2.41286L0.533208 2.68421C0.533208 2.76174 0.494444 10.3979 7.12577 14.3457L7.27784 14.4351L7.42992 14.3457C14.0612 10.3979 14.0225 2.76174 14.0225 2.68421L14.0165 2.41286Z"
              fill="white"
            />
          </svg>
        )}
      />{" "}
      <StatusStyle5Item
        percentage={stressHeight}
        activeColor="#FFA756"
        color="#FFBF83"
        Icon={() => (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3395 4.28198V3.99125C15.3387 3.36127 15.1519 2.74555 14.8025 2.22135C14.4531 1.69716 13.9566 1.28783 13.3754 1.04475C12.7942 0.801668 12.1542 0.735655 11.5356 0.854995C10.917 0.974335 10.3475 1.27371 9.89843 1.71556C9.87187 1.74233 9.85087 1.7741 9.83665 1.80903C9.82243 1.84396 9.81526 1.88136 9.81557 1.91907V8.36748C9.81571 8.41989 9.83002 8.4713 9.85698 8.51625C9.88394 8.5612 9.92256 8.59803 9.96874 8.62283C10.0149 8.64763 10.0669 8.65949 10.1193 8.65714C10.1717 8.6548 10.2224 8.63834 10.2662 8.60951C10.8191 8.255 11.4614 8.06494 12.1182 8.06148C12.2702 8.05866 12.4175 8.11419 12.5299 8.21667C12.6422 8.31914 12.711 8.46077 12.7222 8.61242C12.7263 8.69131 12.7143 8.77021 12.687 8.84432C12.6596 8.91843 12.6174 8.98618 12.563 9.04345C12.5086 9.10072 12.4431 9.1463 12.3705 9.17741C12.2979 9.20853 12.2197 9.22451 12.1407 9.22441C11.5238 9.22441 10.9322 9.46945 10.4961 9.90563C10.0599 10.3418 9.81484 10.9334 9.81484 11.5503V14.0127C9.81478 14.0562 9.82448 14.0992 9.84323 14.1384C9.86197 14.1777 9.88928 14.2122 9.92314 14.2395C10.3358 14.581 10.8216 14.8227 11.3428 14.9459C11.864 15.069 12.4066 15.0704 12.9285 14.9497C13.4503 14.829 13.9372 14.5896 14.3515 14.2502C14.7657 13.9107 15.0961 13.4802 15.3169 12.9923C15.3392 12.9432 15.3473 12.8889 15.3405 12.8355C15.3337 12.7821 15.3121 12.7316 15.2783 12.6896C15.2444 12.6477 15.1996 12.6161 15.1488 12.5981C15.098 12.5802 15.0432 12.5768 14.9906 12.5882C14.6282 12.6712 14.2576 12.7132 13.8858 12.7132H13.324C13.174 12.715 13.0288 12.6601 12.9176 12.5594C12.8064 12.4587 12.7373 12.3197 12.7243 12.1702C12.7191 12.0907 12.7302 12.0109 12.757 11.9359C12.7839 11.8608 12.8259 11.7921 12.8804 11.7339C12.9349 11.6758 13.0008 11.6295 13.074 11.5979C13.1472 11.5663 13.2261 11.5501 13.3058 11.5503H13.8873C14.4947 11.5512 15.0934 11.4045 15.6316 11.1229C16.2691 10.7909 16.7987 10.284 17.1582 9.66174C17.5178 9.03945 17.6925 8.32753 17.6619 7.60948C17.6312 6.89142 17.3964 6.19699 16.9851 5.60763C16.5737 5.01827 16.0029 4.55841 15.3395 4.28198ZM14.4673 6.89856H14.1765C13.4826 6.89856 12.817 6.62288 12.3263 6.13218C11.8356 5.64148 11.56 4.97594 11.56 4.28198V3.99125C11.56 3.83704 11.6212 3.68914 11.7303 3.5801C11.8393 3.47105 11.9872 3.40979 12.1414 3.40979C12.2956 3.40979 12.4435 3.47105 12.5526 3.5801C12.6616 3.68914 12.7229 3.83704 12.7229 3.99125V4.28198C12.7229 4.47288 12.7605 4.66191 12.8335 4.83827C12.9066 5.01464 13.0137 5.17489 13.1486 5.30987C13.4213 5.58248 13.791 5.73564 14.1765 5.73564H14.4673C14.6215 5.73564 14.7694 5.7969 14.8784 5.90594C14.9875 6.01499 15.0487 6.16288 15.0487 6.3171C15.0487 6.47131 14.9875 6.61921 14.8784 6.72825C14.7694 6.8373 14.6215 6.89856 14.4673 6.89856ZM6.3268 0.793213C5.47892 0.794175 4.66605 1.13142 4.06651 1.73096C3.46697 2.3305 3.12972 3.14337 3.12876 3.99125V4.28198C2.46541 4.55856 1.89466 5.01854 1.48346 5.60798C1.07225 6.19742 0.837637 6.89189 0.80712 7.60994C0.776604 8.32799 0.951454 9.03986 1.31117 9.66207C1.67088 10.2843 2.20054 10.791 2.83803 11.1229C3.3763 11.4045 3.97492 11.5512 4.58242 11.5503H5.14425C5.29451 11.548 5.44004 11.6028 5.55156 11.7035C5.66308 11.8043 5.73231 11.9435 5.74534 12.0932C5.75062 12.1727 5.73949 12.2525 5.71265 12.3276C5.6858 12.4026 5.64381 12.4713 5.58928 12.5295C5.53475 12.5876 5.46885 12.6339 5.39567 12.6655C5.32249 12.6971 5.24359 12.7133 5.16388 12.7132H4.58242C4.21034 12.7133 3.83945 12.6711 3.47691 12.5874C3.4243 12.576 3.36953 12.5793 3.31872 12.5971C3.2679 12.615 3.22304 12.6466 3.18912 12.6884C3.15521 12.7302 3.13358 12.7806 3.12664 12.834C3.11971 12.8874 3.12774 12.9417 3.14984 12.9908C3.3706 13.4789 3.70095 13.9095 4.1152 14.2491C4.52945 14.5888 5.01644 14.8283 5.53833 14.9491C6.06021 15.0699 6.60292 15.0687 7.12428 14.9457C7.64563 14.8226 8.13158 14.5809 8.54435 14.2395C8.57821 14.2122 8.60552 14.1777 8.62427 14.1384C8.64301 14.0992 8.65271 14.0562 8.65265 14.0127V11.5503C8.65265 10.9334 8.4076 10.3418 7.97142 9.90563C7.53524 9.46945 6.94365 9.22441 6.3268 9.22441C6.2478 9.22451 6.16961 9.20853 6.097 9.17741C6.02439 9.1463 5.95888 9.10072 5.90447 9.04345C5.85005 8.98618 5.80788 8.91843 5.78052 8.84432C5.75316 8.77021 5.74119 8.69131 5.74534 8.61242C5.75647 8.46064 5.82539 8.31891 5.93788 8.21641C6.05038 8.11392 6.1979 8.05847 6.35006 8.06148C7.00684 8.06494 7.64912 8.255 8.20202 8.60951C8.24579 8.63834 8.29655 8.6548 8.34891 8.65714C8.40128 8.65949 8.4533 8.64763 8.49948 8.62283C8.54566 8.59803 8.58427 8.5612 8.61124 8.51625C8.6382 8.4713 8.65251 8.41989 8.65265 8.36748V1.91907C8.6529 1.84275 8.62314 1.7694 8.56979 1.71483C7.97277 1.12408 7.16669 0.792876 6.3268 0.793213ZM6.90826 4.28198C6.90826 4.97594 6.63259 5.64148 6.14189 6.13218C5.65118 6.62288 4.98565 6.89856 4.29169 6.89856H4.00096C3.84674 6.89856 3.69885 6.8373 3.5898 6.72825C3.48075 6.61921 3.41949 6.47131 3.41949 6.3171C3.41949 6.16288 3.48075 6.01499 3.5898 5.90594C3.69885 5.7969 3.84674 5.73564 4.00096 5.73564H4.29169C4.48258 5.73564 4.67161 5.69804 4.84798 5.62498C5.02434 5.55193 5.18459 5.44486 5.31957 5.30987C5.45456 5.17489 5.56163 5.01464 5.63469 4.83827C5.70774 4.66191 5.74534 4.47288 5.74534 4.28198V3.99125C5.74534 3.83704 5.8066 3.68914 5.91565 3.5801C6.02469 3.47105 6.17259 3.40979 6.3268 3.40979C6.48101 3.40979 6.62891 3.47105 6.73796 3.5801C6.847 3.68914 6.90826 3.83704 6.90826 3.99125V4.28198Z"
              fill="white"
            />
          </svg>
        )}
      />
    </div>
  );
};

export default StatusStyle5;
