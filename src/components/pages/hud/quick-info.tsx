import { useState } from "react";
import { useSettings } from "../../../contexts/SettingsContext";
import { InfoIdIcon } from "../../icons/info-id-icon";
import { JobIcon } from "../../icons/job-icon";
import { CashIcon } from "../../icons/cash-icon";
import { BankStateIcon } from "../../icons/bank-state-icon";

const QuickInfo = () => {
  const { settings } = useSettings();

  const [serverInfoDetail, setServerInfoDetail] = useState<{
    serverName: string;
    serverLink: string;
    serverLogo: string;
    bankState: string;
    jobStatus: string;
    cash: string;
    id: number;
  }>({
    serverLink: "Yeni server.com",
    serverLogo: "",
    serverName: "yeni server",
    bankState: "1234",
    cash: "242",
    id: 1244,
    jobStatus: "işsiz",
  });

  const serverInfo = () => {
    return (
      <div className="flex flex-col">
        <div className="w-[339px] h-[57.57px] px-2 flex justify-between items-center left-0 top-0 relative opacity-90 bg-black rounded">
          <img
            className="object-cover w-[92.75px] h-[22.82px]"
            src={`/assets/cyberpunk.png`}
            alt="background"
          />
          <div className="w-[2.13px] h-[40.51px] left-[110.87px] top-[8.53px]  bg-neutral-700 rounded-[0.98px]" />
          <div className="flex flex-col gap-y-1">
            <div className="left-[124.73px] top-[12.84px]  text-center text-white text-xs font-semibold font-['Orbitron']">
              {serverInfoDetail.serverName.toUpperCase()}
            </div>
            <div className="left-[140.79px] top-[32.35px]  text-center text-cyan-400 text-[7.35px] font-semibold font-['Orbitron']">
              {serverInfoDetail.serverLink}
            </div>
          </div>
          <div className="w-[2.13px] h-[40.51px] left-[253.72px] top-[8.53px]  bg-neutral-700 rounded-[0.98px]" />
          <div className="flex flex-col gap-y-1 items-center">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.085 12.8363C23.085 13.0343 23.0064 13.2241 22.8665 13.364C22.7265 13.5039 22.5367 13.5826 22.3388 13.5826H1.44447C1.24656 13.5826 1.05675 13.5039 0.916807 13.364C0.776862 13.2241 0.698242 13.0343 0.698242 12.8363C0.698242 12.6384 0.776862 12.4486 0.916807 12.3087C1.05675 12.1687 1.24656 12.0901 1.44447 12.0901H5.21758C5.19003 11.8423 5.17602 11.5932 5.1756 11.3439C5.1756 9.56269 5.88318 7.85443 7.14268 6.59493C8.40218 5.33543 10.1104 4.62785 11.8916 4.62785C13.6728 4.62785 15.3811 5.33543 16.6406 6.59493C17.9001 7.85443 18.6077 9.56269 18.6077 11.3439C18.6073 11.5932 18.5932 11.8423 18.5657 12.0901H22.3388C22.5367 12.0901 22.7265 12.1687 22.8665 12.3087C23.0064 12.4486 23.085 12.6384 23.085 12.8363ZM19.3539 15.8212H4.42937C4.23146 15.8212 4.04166 15.8999 3.90171 16.0398C3.76177 16.1798 3.68315 16.3696 3.68315 16.5675C3.68315 16.7654 3.76177 16.9552 3.90171 17.0951C4.04166 17.2351 4.23146 17.3137 4.42937 17.3137H19.3539C19.5518 17.3137 19.7416 17.2351 19.8816 17.0951C20.0215 16.9552 20.1001 16.7654 20.1001 16.5675C20.1001 16.3696 20.0215 16.1798 19.8816 16.0398C19.7416 15.8999 19.5518 15.8212 19.3539 15.8212ZM7.49263 3.46933C7.53649 3.55704 7.59719 3.63525 7.67126 3.6995C7.74534 3.76375 7.83135 3.81278 7.92438 3.84378C8.0174 3.87479 8.11563 3.88718 8.21344 3.88022C8.31125 3.87327 8.40674 3.84712 8.49444 3.80327C8.58215 3.75942 8.66036 3.69872 8.72461 3.62464C8.78886 3.55056 8.83788 3.46455 8.86889 3.37153C8.8999 3.2785 8.91228 3.18028 8.90533 3.08247C8.89838 2.98465 8.87223 2.88917 8.82838 2.80146L8.08215 1.30901C7.99359 1.13188 7.83828 0.997185 7.65041 0.934559C7.46253 0.871934 7.25747 0.886507 7.08034 0.975073C6.90321 1.06364 6.76852 1.21894 6.70589 1.40682C6.64327 1.59469 6.65784 1.79975 6.74641 1.97688L7.49263 3.46933ZM1.85676 7.5344L3.34921 8.28063C3.52622 8.36919 3.73116 8.38382 3.91895 8.32128C4.10673 8.25874 4.26199 8.12417 4.35055 7.94716C4.43912 7.77015 4.45374 7.56521 4.3912 7.37742C4.32867 7.18964 4.19409 7.03438 4.01708 6.94582L2.52463 6.19959C2.43699 6.15574 2.34156 6.12958 2.24381 6.1226C2.14605 6.11563 2.04788 6.12797 1.9549 6.15894C1.86191 6.18991 1.77594 6.23888 1.70188 6.30307C1.62783 6.36727 1.56714 6.44542 1.52329 6.53306C1.47944 6.62071 1.45327 6.71613 1.4463 6.81388C1.43933 6.91164 1.45167 7.00981 1.48264 7.1028C1.5136 7.19578 1.56258 7.28175 1.62677 7.35581C1.69096 7.42986 1.76911 7.49055 1.85676 7.5344ZM20.1001 8.35898C20.2157 8.359 20.3297 8.33218 20.4331 8.28063L21.9256 7.5344C22.0132 7.49055 22.0914 7.42986 22.1556 7.35581C22.2198 7.28175 22.2687 7.19578 22.2997 7.1028C22.3307 7.00981 22.343 6.91164 22.336 6.81388C22.3291 6.71613 22.3029 6.62071 22.2591 6.53306C22.2152 6.44542 22.1545 6.36727 22.0805 6.30307C22.0064 6.23888 21.9204 6.18991 21.8274 6.15894C21.7345 6.12797 21.6363 6.11563 21.5385 6.1226C21.4408 6.12958 21.3454 6.15574 21.2577 6.19959L19.7653 6.94582C19.6151 7.02118 19.4948 7.14502 19.4237 7.29729C19.3527 7.44955 19.3351 7.62133 19.3739 7.78482C19.4126 7.94831 19.5054 8.09394 19.6372 8.19814C19.769 8.30234 19.9321 8.35901 20.1001 8.35898ZM15.2888 3.80327C15.3765 3.84719 15.472 3.87339 15.5698 3.88037C15.6677 3.88736 15.7659 3.87499 15.859 3.84397C15.952 3.81296 16.038 3.76391 16.1121 3.69962C16.1862 3.63534 16.2468 3.55708 16.2906 3.46933L17.0369 1.97688C17.1254 1.79975 17.14 1.59469 17.0774 1.40682C17.0148 1.21894 16.8801 1.06364 16.7029 0.975073C16.5258 0.886507 16.3207 0.871934 16.1329 0.934559C15.945 0.997185 15.7897 1.13188 15.7011 1.30901L14.9549 2.80146C14.911 2.88916 14.8848 2.98465 14.8778 3.08247C14.8708 3.1803 14.8832 3.27855 14.9142 3.37159C14.9452 3.46463 14.9943 3.55065 15.0585 3.62472C15.1228 3.69879 15.2011 3.75947 15.2888 3.80327Z"
                fill="#DDAB29"
              />
            </svg>
            <div className="left-[267.58px] top-[32.23px]  text-center text-stone-300 text-[10.44px] font-semibold font-['Orbitron']">
              09.23 PM
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (settings.general.hideQuickInfo) return null;

  return (
    <div className="flex flex-col gap-y-1">
      {!settings.general.hideServerLogo && serverInfo()}

      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
        {!settings.general.hideUserMoney && (
          <>
            <div className="w-[163.10px] h-[29.85px] flex items-center justify-start opacity-90 bg-black rounded ">
              <div className="w-0.5 h-4 bg-cyan-500 rounded-tr-[1px] rounded-br-[1px]" />
              <div className="flex items-center justify-start px-2 gap-x-1">
                <BankStateIcon />
                <span className="text-neutral-400 text-[11.11px] font-semibold font-['Orbitron']">
                  BANK :
                </span>
                <span className="text-white text-[11.11px] font-semibold font-['Orbitron']">
                  {serverInfoDetail.bankState}
                </span>
              </div>
            </div>
            <div className="w-[163.10px] h-[29.85px] flex items-center justify-start opacity-90 bg-black rounded ">
              <div className="w-0.5 h-4 bg-yellow-500 rounded-tr-[1px] rounded-br-[1px]" />
              <div className="flex items-center justify-start px-2 gap-x-1">
                <CashIcon />

                <span className="text-neutral-400 text-[11.11px] font-semibold font-['Orbitron']">
                  CASH :
                </span>
                <span className="text-white text-[11.11px] font-semibold font-['Orbitron']">
                  {serverInfoDetail.cash}
                </span>
              </div>
            </div>
          </>
        )}

        <div className="w-[163.10px] h-[29.85px] flex items-center justify-start opacity-90 bg-black rounded ">
          <div className="w-0.5 h-4 bg-teal-400 rounded-tr-[1px] rounded-br-[1px]" />
          <div className="flex items-center justify-start px-2 gap-x-1">
            <JobIcon />
            <span className="text-neutral-400 text-[11.11px] font-semibold font-['Orbitron']">
              JOB :
            </span>
            <span className="text-white text-[11.11px] font-semibold font-['Orbitron']">
              {serverInfoDetail.jobStatus.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="w-[163.10px] h-[29.85px] flex items-center justify-start opacity-90 bg-black rounded ">
          <div className="w-0.5 h-4 bg-red-600 rounded-tr-[1px] rounded-br-[1px]" />
          <div className="flex items-center justify-start px-2 gap-x-1">
            <InfoIdIcon />

            <span className="text-neutral-400 text-[11.11px] font-semibold font-['Orbitron']">
              ID :
            </span>
            <span className="text-white text-[11.11px] font-semibold font-['Orbitron']">
              {serverInfoDetail.id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
