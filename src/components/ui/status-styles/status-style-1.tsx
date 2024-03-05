import { Status } from "../../../types/status";

interface StatusStyle1Props {
  status: Status;
}

const StatusStyle1: React.FC<StatusStyle1Props> = ({ status }) => {
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
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-2 items-center">
        <div className="w-7 relative h-7 bg-[#010100] flex items-center justify-center">
          <div
            className="bg-[#E12E59] w-full absolute bottom-0"
            style={{ height: healthHeight }}
          ></div>
          <svg
            className="absolute"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.34048 1.21299C8.41194 0.245382 6.90422 0.245382 5.97569 1.21299L5.34364 1.86802L4.7116 1.21069C3.78077 0.243084 2.27535 0.243084 1.34681 1.21069C0.301063 2.29781 0.301063 4.06294 1.34681 5.15006L5.34364 9.31237L9.34048 5.15236C10.3862 4.06524 10.3862 2.30011 9.34048 1.21299Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-7 relative h-7 bg-[#010100] flex items-center justify-center">
          <div
            className="bg-purple-600 w-full absolute bottom-0"
            style={{ height: hydrationHeight }}
          ></div>
          <svg
            className="absolute"
            width="8"
            height="11"
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.74931 10.0913C5.78833 10.0913 7.45663 8.42296 7.45663 6.38394C7.45663 4.34491 3.74931 0.205078 3.74931 0.205078C3.74931 0.205078 0.0419922 4.4067 0.0419922 6.38394C0.0419922 8.36117 1.71028 10.0913 3.74931 10.0913Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-7 relative h-7 bg-[#010100] flex items-center justify-center">
          <div
            className="bg-[#DE2EE1] w-full absolute bottom-0"
            style={{ height: hungryHeight }}
          ></div>
          <svg
            className="absolute"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.18066 3.66002C1.11421 3.57827 1.06694 3.48266 1.04232 3.38023C1.0177 3.2778 1.01636 3.17115 1.03841 3.06813C1.36563 1.52145 3.1369 0.398437 5.25081 0.398437C7.36472 0.398437 9.136 1.52145 9.46322 3.06813C9.4855 3.17122 9.48436 3.278 9.45987 3.38059C9.43538 3.48318 9.38817 3.57897 9.32173 3.66088C9.25528 3.7428 9.1713 3.80875 9.07596 3.85388C8.98063 3.899 8.87639 3.92215 8.77091 3.92162L1.73071 3.92162C1.6253 3.92194 1.52116 3.8986 1.42596 3.85333C1.33076 3.80805 1.24694 3.74199 1.18066 3.66002ZM9.71028 6.05667L7.89893 6.71726L6.26373 6.06063C6.17976 6.02706 6.0861 6.02706 6.00213 6.06063L4.37266 6.71286L2.74055 6.06063C2.6602 6.02853 2.57084 6.02712 2.48952 6.05667L0.55177 6.7613C0.469872 6.79735 0.404759 6.86321 0.369647 6.94552C0.334536 7.02782 0.332056 7.1204 0.362712 7.20447C0.393368 7.28853 0.454863 7.35779 0.534714 7.39817C0.614565 7.43855 0.706789 7.44703 0.792668 7.4219L1.37531 7.21095L1.37531 7.4448C1.37531 7.912 1.56091 8.36007 1.89127 8.69043C2.22163 9.0208 2.6697 9.20639 3.1369 9.20639L7.36472 9.20639C7.83193 9.20639 8.27999 9.0208 8.61036 8.69043C8.94072 8.36007 9.12631 7.912 9.12631 7.4448L9.12631 7.01894L9.95118 6.71903C9.99743 6.70549 10.0404 6.68261 10.0775 6.65179C10.1145 6.62098 10.1449 6.58289 10.1666 6.53989C10.1884 6.49688 10.2011 6.44987 10.2039 6.40176C10.2068 6.35365 10.1997 6.30546 10.1832 6.26019C10.1667 6.21491 10.1411 6.1735 10.1079 6.13852C10.0748 6.10355 10.0348 6.07574 9.99047 6.05683C9.94614 6.03792 9.8984 6.0283 9.85021 6.02858C9.80202 6.02885 9.75439 6.03901 9.71028 6.05843L9.71028 6.05667ZM0.670678 5.33089L9.83095 5.33089C9.92439 5.33089 10.014 5.29377 10.0801 5.2277C10.1461 5.16163 10.1833 5.07201 10.1833 4.97857C10.1833 4.88513 10.1461 4.79552 10.0801 4.72945C10.014 4.66337 9.92439 4.62626 9.83095 4.62626L0.670678 4.62626C0.577237 4.62626 0.487623 4.66337 0.421551 4.72945C0.355478 4.79552 0.318359 4.88513 0.318359 4.97857C0.318359 5.07201 0.355478 5.16163 0.421551 5.2277C0.487623 5.29377 0.577237 5.33089 0.670678 5.33089Z"
              fill="white"
            />
          </svg>
        </div>{" "}
        <div className="w-7 relative h-7 bg-[#010100] flex items-center justify-center">
          <div
            className="bg-[#E12E39] w-full absolute bottom-0"
            style={{ height: energyHeight }}
          ></div>
          <svg
            width="9"
            className="absolute"
            height="12"
            viewBox="0 0 9 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25411 11.0751C4.1959 11.0751 4.13816 11.0649 4.08345 11.045C3.97791 11.0064 3.8884 10.9335 3.82925 10.8379C3.77009 10.7423 3.74472 10.6297 3.75719 10.518L4.14368 6.95926H1.18727C1.09608 6.9594 1.00658 6.93469 0.928373 6.8878C0.850169 6.8409 0.786217 6.77359 0.743386 6.69309C0.700555 6.61258 0.680463 6.52194 0.685268 6.43088C0.690072 6.33982 0.719592 6.25178 0.770657 6.17624L4.73095 0.253372C4.79358 0.160683 4.88539 0.0915747 4.99178 0.0570186C5.09818 0.0224625 5.21307 0.0244394 5.31821 0.0626357C5.41929 0.100162 5.5056 0.169239 5.56436 0.259641C5.62313 0.350043 5.65122 0.456963 5.64447 0.564573L5.25798 4.14841H8.2144C8.30558 4.14827 8.39508 4.17298 8.47329 4.21987C8.55149 4.26677 8.61544 4.33408 8.65828 4.41458C8.70111 4.49508 8.7212 4.58573 8.71639 4.67679C8.71159 4.76785 8.68207 4.85588 8.631 4.93143L4.67071 10.8543C4.62467 10.9224 4.5626 10.9782 4.48996 11.0167C4.41732 11.0552 4.33632 11.0753 4.25411 11.0751Z"
              fill="white"
            />
          </svg>
        </div>{" "}
        <div className="w-7 relative h-7 bg-[#010100] flex items-center justify-center">
          <div
            className="bg-[#E12E39] w-full absolute bottom-0"
            style={{ height: stressHeight }}
          ></div>
          <svg
            className="absolute"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1659 3.04754V2.85577C10.1654 2.44024 10.0422 2.0341 9.81174 1.68834C9.58126 1.34258 9.2538 1.07259 8.87044 0.912253C8.48709 0.751915 8.06491 0.708373 7.6569 0.78709C7.24889 0.865806 6.87322 1.06328 6.57702 1.35472C6.5595 1.37238 6.54565 1.39333 6.53627 1.41637C6.52689 1.43941 6.52216 1.46408 6.52237 1.48895V5.74234C6.52246 5.77691 6.5319 5.81082 6.54968 5.84047C6.56747 5.87012 6.59294 5.89441 6.6234 5.91077C6.65385 5.92713 6.68817 5.93495 6.72271 5.9334C6.75725 5.93186 6.79073 5.921 6.81961 5.90198C7.1843 5.66815 7.60794 5.54278 8.04116 5.5405C8.14144 5.53864 8.23862 5.57527 8.31273 5.64286C8.38683 5.71046 8.43222 5.80387 8.43955 5.9039C8.44229 5.95594 8.43439 6.00798 8.41635 6.05687C8.3983 6.10575 8.37049 6.15044 8.3346 6.18821C8.2987 6.22599 8.25549 6.25605 8.2076 6.27658C8.1597 6.2971 8.10813 6.30764 8.05602 6.30757C7.64914 6.30757 7.25893 6.4692 6.97122 6.75691C6.68352 7.04461 6.52189 7.43483 6.52189 7.8417V9.46597C6.52185 9.49466 6.52825 9.52299 6.54061 9.54887C6.55297 9.57476 6.57098 9.59754 6.59332 9.61555C6.86548 9.84078 7.18592 10.0002 7.52972 10.0815C7.87353 10.1627 8.23144 10.1636 8.57563 10.084C8.91982 10.0044 9.24102 9.8465 9.51426 9.62257C9.7875 9.39864 10.0054 9.11472 10.1511 8.79287C10.1657 8.7605 10.1711 8.7247 10.1666 8.68945C10.1621 8.6542 10.1479 8.6209 10.1256 8.59325C10.1033 8.56561 10.0737 8.54471 10.0402 8.53289C10.0067 8.52107 9.97054 8.51879 9.93581 8.52631C9.69678 8.58109 9.45233 8.60876 9.2071 8.60877H8.83651C8.73756 8.60999 8.64181 8.57376 8.56846 8.50734C8.49511 8.44092 8.44957 8.34923 8.44099 8.25065C8.43751 8.19818 8.44485 8.14557 8.46256 8.09606C8.48027 8.04655 8.50797 8.00122 8.54393 7.96287C8.5799 7.92452 8.62337 7.89397 8.67164 7.87313C8.71991 7.85229 8.77195 7.84159 8.82453 7.8417H9.20806C9.60876 7.84231 10.0036 7.74557 10.3587 7.55981C10.7791 7.34083 11.1284 7.0065 11.3656 6.59604C11.6028 6.18558 11.718 5.71599 11.6978 5.24236C11.6776 4.76873 11.5227 4.31068 11.2514 3.92194C10.9801 3.53319 10.6035 3.22987 10.1659 3.04754ZM9.59063 4.77344H9.39887C8.94113 4.77344 8.50214 4.5916 8.17847 4.26793C7.8548 3.94426 7.67297 3.50528 7.67297 3.04754V2.85577C7.67297 2.75405 7.71337 2.6565 7.7853 2.58457C7.85723 2.51265 7.95478 2.47224 8.0565 2.47224C8.15822 2.47224 8.25577 2.51265 8.3277 2.58457C8.39963 2.6565 8.44003 2.75405 8.44003 2.85577V3.04754C8.44003 3.17345 8.46484 3.29814 8.51302 3.41447C8.56121 3.5308 8.63183 3.6365 8.72087 3.72554C8.90069 3.90535 9.14457 4.00637 9.39887 4.00637H9.59063C9.69235 4.00637 9.78991 4.04678 9.86183 4.11871C9.93376 4.19063 9.97417 4.28819 9.97417 4.3899C9.97417 4.49162 9.93376 4.58918 9.86183 4.6611C9.78991 4.73303 9.69235 4.77344 9.59063 4.77344ZM4.22117 0.746338C3.66191 0.746973 3.12573 0.969419 2.73027 1.36488C2.33482 1.76034 2.11237 2.29651 2.11173 2.85577V3.04754C1.67419 3.22997 1.29772 3.53337 1.02649 3.92217C0.755257 4.31096 0.600503 4.76904 0.580374 5.24267C0.560245 5.7163 0.675576 6.18585 0.912843 6.59625C1.15011 7.00666 1.49947 7.34091 1.91997 7.55981C2.27501 7.74557 2.66986 7.84231 3.07057 7.8417H3.44116C3.54027 7.84024 3.63626 7.87636 3.70982 7.94281C3.78337 8.00925 3.82904 8.10108 3.83763 8.19983C3.84112 8.25229 3.83378 8.30491 3.81607 8.35442C3.79836 8.40392 3.77066 8.44926 3.73469 8.48761C3.69873 8.52596 3.65526 8.5565 3.60699 8.57735C3.55872 8.59819 3.50668 8.60889 3.4541 8.60877H3.07057C2.82514 8.60887 2.58051 8.58105 2.34137 8.52583C2.30667 8.51826 2.27055 8.52048 2.23703 8.53224C2.20351 8.54399 2.17392 8.56483 2.15155 8.59242C2.12918 8.62001 2.11491 8.65327 2.11033 8.68849C2.10576 8.72372 2.11106 8.75952 2.12564 8.79191C2.27125 9.11385 2.48915 9.39786 2.76239 9.62189C3.03563 9.84591 3.35685 10.0039 3.70109 10.0836C4.04532 10.1633 4.4033 10.1625 4.74718 10.0813C5.09107 10.0001 5.4116 9.84075 5.68387 9.61555C5.7062 9.59754 5.72422 9.57476 5.73658 9.54887C5.74894 9.52299 5.75534 9.49466 5.7553 9.46597V7.8417C5.7553 7.43483 5.59367 7.04461 5.30596 6.75691C5.01826 6.4692 4.62805 6.30757 4.22117 6.30757C4.16906 6.30764 4.11749 6.2971 4.06959 6.27658C4.0217 6.25605 3.97848 6.22599 3.94259 6.18821C3.9067 6.15044 3.87889 6.10575 3.86084 6.05687C3.84279 6.00798 3.8349 5.95594 3.83763 5.9039C3.84498 5.80379 3.89043 5.7103 3.96464 5.6427C4.03884 5.57509 4.13615 5.53852 4.23651 5.5405C4.66972 5.54278 5.09337 5.66815 5.45806 5.90198C5.48694 5.921 5.52042 5.93186 5.55496 5.9334C5.5895 5.93495 5.62381 5.92713 5.65427 5.91077C5.68473 5.89441 5.7102 5.87012 5.72799 5.84047C5.74577 5.81082 5.75521 5.77691 5.7553 5.74234V1.48895C5.75547 1.43862 5.73584 1.39023 5.70065 1.35424C5.30685 0.96458 4.77516 0.746116 4.22117 0.746338ZM4.6047 3.04754C4.6047 3.50528 4.42287 3.94426 4.0992 4.26793C3.77553 4.5916 3.33654 4.77344 2.8788 4.77344H2.68703C2.58531 4.77344 2.48776 4.73303 2.41584 4.6611C2.34391 4.58918 2.3035 4.49162 2.3035 4.3899C2.3035 4.28819 2.34391 4.19063 2.41584 4.11871C2.48776 4.04678 2.58531 4.00637 2.68703 4.00637H2.8788C3.00472 4.00637 3.1294 3.98157 3.24573 3.93338C3.36206 3.8852 3.46776 3.81457 3.5568 3.72554C3.64583 3.6365 3.71646 3.5308 3.76465 3.41447C3.81283 3.29814 3.83763 3.17345 3.83763 3.04754V2.85577C3.83763 2.75405 3.87804 2.6565 3.94997 2.58457C4.0219 2.51265 4.11945 2.47224 4.22117 2.47224C4.32289 2.47224 4.42044 2.51265 4.49237 2.58457C4.56429 2.6565 4.6047 2.75405 4.6047 2.85577V3.04754Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="w-24 h-4 bg-[#010100] relative flex items-center justify-center">
          <div
            className="h-4 absolute left-0 bg-[#1CB459] flex items-center justify-center"
            style={{ width: healthHeight }}
          ></div>
          <svg
            width="8"
            height="7"
            className="absolute"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.73085 1.05446C6.07878 0.374949 5.01996 0.374949 4.36789 1.05446L3.92402 1.51446L3.48016 1.05285C2.82647 0.373335 1.76927 0.373335 1.1172 1.05285C0.382809 1.81629 0.382809 3.05588 1.1172 3.81932L3.92402 6.74236L6.73085 3.82094C7.46524 3.05749 7.46524 1.8179 6.73085 1.05446Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-24 h-4 bg-[#010100] relative flex items-center justify-center">
          <div
            className="h-4 absolute left-0 bg-[#2E60E1] flex items-center justify-center"
            style={{ width: armorHeight }}
          ></div>{" "}
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.162408 1.84758L0.331248 1.83459C2.25349 1.6843 4.23696 0.433734 4.25552 0.422602L4.35571 0.357666L4.4559 0.422602C4.47446 0.433734 6.45794 1.6843 8.38018 1.83459L8.54902 1.84758L8.55273 2.01644C8.55273 2.06468 8.57685 6.81647 4.45034 9.27308L4.35571 9.32874L4.26108 9.27308C0.134571 6.81647 0.158693 2.06468 0.158693 2.01644L0.162408 1.84758Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusStyle1;