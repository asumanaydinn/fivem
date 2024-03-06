import { useRef, useEffect } from "react";

interface SpeedFuelGaugeProps {
  speed: number; // Current speed passed from outside
  maxSpeed: number; // Maximum speed of the gauge
  fuel: number; // Current fuel level passed from outside
  maxFuel: number; // Maximum fuel level (for simplicity, you might set this to 100)
  gear: number;
}

const SpeedoMeter6: React.FC<SpeedFuelGaugeProps> = ({
  speed,
  maxSpeed,
  fuel,
  maxFuel,
  gear,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const centerX = canvas!.width / 2;
    const centerY = canvas!.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    const drawGauge = () => {
      if (context) {
        context.clearRect(0, 0, canvas!.width, canvas!.height); // Clear the canvas

        // Speed arc
        let speedAngleStart = Math.PI + 0.3; // Start from the left (middle of the circle)
        let speedAngleEnd = Math.PI + (speed / maxSpeed) * Math.PI - 0.3; // End angle based on animated speed
        context.beginPath();
        context.arc(
          centerX,
          centerY,
          radius - 10,
          speedAngleStart,
          speedAngleEnd
        );
        context.lineWidth = 2; // Make the arc a bit thicker
        context.strokeStyle = "#FFB290"; // Different color for speed
        context.stroke();
      }
    };

    drawGauge();
  }, [speed, maxSpeed, fuel, maxFuel]); // Update dependencies to include animatedSpeed

  return (
    <div className="relative">
      <div className="left-[50.48px] top-[82.34px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        0
      </div>
      <div className="left-[25.84px] top-[73.99px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        30
      </div>
      <div className="left-[16.36px] top-[49.73px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        50
      </div>
      <div className="left-[25.84px] top-[25.46px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        80
      </div>
      <div className="left-[47.83px] top-[16.36px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        100
      </div>
      <div className="left-[70.20px] top-[24.70px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        120
      </div>
      <div className="left-[80.82px] top-[49.73px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        155
      </div>
      <div className="left-[70.20px] top-[74.75px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
        180
      </div>
      <div className="w-[98.56px] flex items-center justify-center h-[98.56px]  bg-gradient-to-b from-black via-stone-950 to-neutral-800 rounded-full border border-white border-opacity-10">
        {" "}
        <canvas
          className="-rotate-90"
          ref={canvasRef}
          width="132"
          height="132"
        ></canvas>{" "}
        <div className="w-[28.55px] h-[28.55px] flex flex-col bg-opacity-30 items-center justify-center absolute bg-gradient-to-b from-zinc-800 to-neutral-800 rounded-full shadow border border-white border-opacity-10">
          <div className="w-[42.12px] h-[42.12px] centered  bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-5" />
          <div className="w-[42.12px] h-[42.12px] centered  bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-5" />
          <div className="w-[48.56px] h-[48.56px] centered  bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-5" />
          <div className="w-[48.56px] h-[48.56px] centered  bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-5" />
          <div className=" text-white text-[7.04px] font-medium font-['Orbitron']">
            125
          </div>
          <div className=" text-neutral-400 text-[3.58px] font-medium font-['Orbitron']">
            KMH
          </div>
        </div>
        <div className="w-[24.12px] h-[7.69px] absolute top-[70px]">
          <div className="w-[24.12px] h-[7.69px] left-0 top-0 absolute bg-stone-950 rounded-tl-sm rounded-tr-sm rounded-bl rounded-br shadow border border-white border-opacity-10" />
          <div className="w-[15.45px] h-[3.18px] left-[3.99px] top-[2.41px] absolute"></div>
        </div>
        <svg
          className="absolute top-16 z-10"
          width="35"
          height="19"
          viewBox="0 0 35 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_79_1215)">
            <rect
              x="5.08398"
              y="5.69763"
              width="24.8105"
              height="7.91058"
              rx="2.15744"
              fill="url(#paint0_linear_79_1215)"
              fill-opacity="0.03"
              shape-rendering="crispEdges"
            />
            <rect
              x="5.23258"
              y="5.84623"
              width="24.5133"
              height="7.61338"
              rx="2.00884"
              stroke="white"
              stroke-opacity="0.12"
              stroke-width="0.297198"
              shape-rendering="crispEdges"
            />
          </g>
          <path
            d="M11.9979 9.99495C12.0236 9.91002 11.9739 9.82028 11.889 9.79625C11.8729 9.79144 11.8585 9.78663 11.8425 9.78343C11.8409 9.64081 11.812 9.50299 11.7592 9.378L10.889 9.99976C11.1951 9.98213 11.5028 10.0158 11.7992 10.1039C11.8842 10.128 11.9739 10.0799 11.9979 9.99495ZM11.3267 11.2554C11.3384 11.2581 11.3503 11.2593 11.3619 11.2593C11.4353 11.2593 11.5013 11.2088 11.5181 11.1341L11.6783 10.4199C11.6959 10.3416 11.653 10.2626 11.5779 10.2346C11.2317 10.106 10.8508 10.106 10.5046 10.2346C10.4295 10.2626 10.3866 10.3416 10.4042 10.4199L10.5644 11.1341C10.5838 11.2206 10.6699 11.2751 10.7558 11.2554C10.8422 11.236 10.8965 11.1504 10.8771 11.064L10.7492 10.4937C10.942 10.4455 11.1404 10.4455 11.3332 10.4937L11.2054 11.064C11.186 11.1504 11.2403 11.236 11.3267 11.2554ZM9.78972 10.3908C9.82017 10.434 9.86984 10.4581 9.91952 10.4581C9.95157 10.4581 9.98522 10.4485 10.0125 10.4276L12.2559 8.82514C12.328 8.77386 12.3441 8.67451 12.2928 8.6024C12.2415 8.53029 12.1422 8.51426 12.07 8.56554L11.4643 8.99821C11.4532 8.9897 11.4414 8.98305 11.4299 8.97538C11.4872 8.89625 11.522 8.79994 11.522 8.69534C11.522 8.43093 11.3057 8.2146 11.0413 8.2146C10.7768 8.2146 10.5605 8.43093 10.5605 8.69534C10.5605 8.80043 10.5957 8.89711 10.6535 8.97645C10.4382 9.11766 10.2825 9.37016 10.248 9.66965C10.2432 9.70651 10.24 9.74497 10.24 9.78343C10.224 9.78663 10.2096 9.79144 10.1935 9.79625C10.1118 9.81868 10.0621 9.90361 10.083 9.98534L9.82658 10.168C9.75447 10.2193 9.73844 10.3187 9.78972 10.3908Z"
            fill="#FF504B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.2012 10.288V9.43279C19.2012 9.40444 19.1899 9.37725 19.1698 9.3572C19.1498 9.33715 19.1226 9.32589 19.0943 9.32589C19.0659 9.32589 19.0387 9.33715 19.0187 9.3572C18.9986 9.37725 18.9873 9.40444 18.9873 9.43279V9.7535H18.7735V9.5397C18.7735 9.48299 18.751 9.42861 18.7109 9.38851C18.6708 9.34842 18.6164 9.32589 18.5597 9.32589H18.3902L18.017 8.95269L16.808 10.9117L16.8117 10.9133C16.8376 10.924 16.8654 10.9295 16.8935 10.9294H17.7672C17.7953 10.9295 17.8231 10.924 17.849 10.9133C17.875 10.9025 17.8985 10.8867 17.9183 10.8668L18.3902 10.3949H18.5597C18.6164 10.3949 18.6708 10.3724 18.7109 10.3323C18.751 10.2922 18.7735 10.2378 18.7735 10.1811V9.96731H18.9873V10.288C18.9873 10.3164 18.9986 10.3436 19.0187 10.3636C19.0387 10.3837 19.0659 10.3949 19.0943 10.3949C19.1226 10.3949 19.1498 10.3837 19.1698 10.3636C19.1899 10.3436 19.2012 10.3164 19.2012 10.288ZM16.6032 10.7276L17.7969 8.79337C17.7871 8.79202 17.7771 8.79135 17.7672 8.79138H17.4907V8.57757H17.8114C17.8398 8.57757 17.867 8.56631 17.887 8.54626C17.9071 8.52622 17.9183 8.49902 17.9183 8.47067C17.9183 8.44232 17.9071 8.41513 17.887 8.39508C17.867 8.37503 17.8398 8.36377 17.8114 8.36377H16.9562C16.9278 8.36377 16.9007 8.37503 16.8806 8.39508C16.8606 8.41513 16.8493 8.44232 16.8493 8.47067C16.8493 8.49902 16.8606 8.52622 16.8806 8.54626C16.9007 8.56631 16.9278 8.57757 16.9562 8.57757H17.2769V8.79138H16.4217C16.365 8.79138 16.3106 8.81391 16.2705 8.854C16.2304 8.8941 16.2079 8.94848 16.2079 9.00518V9.7535H15.9941V9.43279C15.9941 9.40444 15.9828 9.37725 15.9628 9.3572C15.9427 9.33715 15.9155 9.32589 15.8872 9.32589C15.8588 9.32589 15.8316 9.33715 15.8116 9.3572C15.7915 9.37725 15.7803 9.40444 15.7803 9.43279V10.288C15.7803 10.3164 15.7915 10.3436 15.8116 10.3636C15.8316 10.3837 15.8588 10.3949 15.8872 10.3949C15.9155 10.3949 15.9427 10.3837 15.9628 10.3636C15.9828 10.3436 15.9941 10.3164 15.9941 10.288V9.96731H16.2079V10.2438C16.2078 10.2719 16.2133 10.2997 16.224 10.3256C16.2348 10.3516 16.2506 10.3751 16.2706 10.3949L16.6032 10.7276Z"
            fill="#898989"
          />
          <path
            d="M22.4654 10.9121C22.472 10.9531 22.5074 10.9833 22.5489 10.9833H24.709C24.8232 10.9833 24.9348 10.9394 25.0121 10.8552C25.0309 10.8349 25.0482 10.8123 25.0647 10.7889H22.4458L22.4654 10.9121ZM22.4184 10.5087H25.122C25.1453 10.5087 25.167 10.515 25.1864 10.5252C25.2462 10.3047 25.2329 10.0429 25.1157 9.81288C25.0874 9.75751 25.0447 9.71058 24.9948 9.67381L23.9575 8.90957C23.6849 8.70922 23.3556 8.60059 23.017 8.60059H22.1959C22.1439 8.60059 22.1042 8.64709 22.1124 8.69844L22.4014 10.5105C22.407 10.5098 22.4126 10.5087 22.4184 10.5087ZM23.0335 10.0228C23.0335 10.0383 23.0209 10.0509 23.0054 10.0509H22.5945C22.579 10.0509 22.5664 10.0383 22.5664 10.0228V9.95699C22.5664 9.94148 22.579 9.9289 22.5945 9.9289H23.0054C23.0209 9.9289 23.0335 9.94148 23.0335 9.95699L23.0335 10.0228ZM23.017 8.81194C23.312 8.81194 23.594 8.90451 23.8324 9.07992L24.5002 9.57194H22.4658L22.3445 8.81194H23.017ZM25.122 10.5749H22.4184C22.3776 10.5749 22.3445 10.608 22.3445 10.6488C22.3445 10.6896 22.3776 10.7227 22.4184 10.7227H25.122C25.1628 10.7227 25.1959 10.6896 25.1959 10.6488C25.1959 10.608 25.1628 10.5749 25.122 10.5749Z"
            fill="#898989"
          />
          <defs>
            <filter
              id="filter0_d_79_1215"
              x="0.373576"
              y="0.987224"
              width="34.2314"
              height="17.3313"
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
              <feGaussianBlur stdDeviation="2.3552" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_79_1215"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_79_1215"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_79_1215"
              x1="5.98291"
              y1="9.65292"
              x2="29.8944"
              y2="9.65292"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9D9D9" />
              <stop offset="0.505" stop-color="#D9D9D9" stop-opacity="0" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
          </defs>
        </svg>
        <div className="opacity-30 w-[85.67px] h-[85.67px] absolute">
          <div className="w-[0.26px] h-[4.23px] left-[42.62px] top-0 absolute">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[59.03px] top-[3.18px] absolute origin-top-left rotate-[22.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[72.97px] top-[12.39px] absolute origin-top-left rotate-45">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[82.33px] top-[26.24px] absolute origin-top-left rotate-[67.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[85.67px] top-[42.62px] absolute origin-top-left rotate-90">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[82.49px] top-[59.03px] absolute origin-top-left rotate-[112.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[73.28px] top-[72.97px] absolute origin-top-left rotate-[135deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[59.43px] top-[82.33px] absolute origin-top-left rotate-[157.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[43.05px] top-[85.67px] absolute origin-top-left rotate-180">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[26.64px] top-[82.49px] absolute origin-top-left rotate-[-157.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[12.70px] top-[73.28px] absolute origin-top-left rotate-[-135deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[3.34px] top-[59.43px] absolute origin-top-left rotate-[-112.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-0 top-[43.05px] absolute origin-top-left -rotate-90">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[3.18px] top-[26.64px] absolute origin-top-left rotate-[-67.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[12.39px] top-[12.70px] absolute origin-top-left -rotate-45">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
          <div className="w-[0.26px] h-[4.23px] left-[26.24px] top-[3.34px] absolute origin-top-left rotate-[-22.50deg]">
            <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedoMeter6;
