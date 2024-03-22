import React from "react";
import { useSettings } from "../../../contexts/SettingsContext";

interface Props {
  speed: number;
  maxSpeed: number;
  fuel: number;
  maxFuel: number;
  gear: number;
}

const SpeedoMeter3: React.FC<Props> = ({ speed, fuel, maxFuel, gear }) => {
  const { settings } = useSettings();

  return (
    <div className="w-[300px] h-[300px] flex items-end justify-end relative">
      <div className="absolute top-24 left-4 w-full">
        <div className="items-center justify-center flex flex-col w-full">
          <div className="flex items-center justify-center w-full">
            {speed !== 0 && speed < 100 && (
              <span className="text-white leading-tight text-opacity-30 text-[61.02px] font-semibold font-['Orbitron']">
                0
              </span>
            )}
            <span className="leading-tight text-neutral-200 text-[61.02px] font-semibold font-['Orbitron']">
              {speed}
            </span>
          </div>
          <div className="text-white text-opacity-50 text-[21.63px] font-medium font-['Orbitron']">
            {settings.speedometers.units.toLocaleUpperCase()}
          </div>
        </div>
      </div>

      <svg
        className="absolute top-[34px] left-[33px]"
        width="157"
        height="269"
        viewBox="0 0 157 269"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_43_1570)">
          <path
            d="M80.9966 252.118C80.7204 252.596 80.1082 252.76 79.6321 252.48C56.1338 238.666 37.6953 217.651 27.0562 192.536C16.2869 167.113 14.0956 138.874 20.8141 112.094C27.5327 85.3146 42.7951 61.4538 64.2898 44.1258C85.5247 27.0071 111.699 17.1854 138.936 16.0994C139.488 16.0774 139.95 16.511 139.968 17.063L139.993 17.8476C140.011 18.3996 139.577 18.861 139.025 18.8831C112.394 19.9498 86.8013 29.5554 66.0377 46.294C45.0144 63.2421 30.0867 86.5796 23.5155 112.772C16.9443 138.964 19.0876 166.584 29.6207 191.449C40.0237 216.007 58.0508 236.556 81.0247 250.068C81.5007 250.348 81.6653 250.96 81.3891 251.438L80.9966 252.118Z"
            fill="none"
            stroke="#FC56FF"
            strokeWidth={3}
            strokeDasharray={Math.min((speed * 240) / 410, 327) + " 5000"}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_43_1570"
            x="0.896582"
            y="-0.00136757"
            width="155.197"
            height="268.718"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="8.05" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.988235 0 0 0 0 0.337255 0 0 0 0 1 0 0 0 0.72 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_43_1570"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_43_1570"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="354"
        height="300"
        viewBox="0 0 310 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="176.997"
          cy="176.999"
          r="127"
          fill="url(#paint0_linear_43_1542)"
          fillOpacity="0.74"
        />

        <circle
          cx="176.997"
          cy="176.999"
          r="126.5"
          stroke="white"
          strokeOpacity="0.1"
        />
        <g filter="url(#filter0_d_43_1542)">
          <path
            d="M236.631 273.968L235.62 272.959C235.541 272.88 235.435 272.836 235.324 272.836C235.213 272.836 235.107 272.88 235.028 272.959C234.95 273.037 234.906 273.143 234.906 273.254C234.906 273.365 234.95 273.472 235.028 273.55L236.038 274.561C236.116 274.639 236.16 274.745 236.16 274.855V279.108C236.16 279.219 236.116 279.325 236.038 279.404C235.959 279.482 235.853 279.526 235.742 279.526C235.631 279.526 235.525 279.482 235.446 279.404C235.368 279.325 235.324 279.219 235.324 279.108V277.017C235.324 276.685 235.192 276.366 234.957 276.13C234.721 275.895 234.402 275.763 234.07 275.763H233.233V273.254C233.233 272.922 233.101 272.603 232.866 272.367C232.631 272.132 232.312 272 231.979 272H227.798C227.465 272 227.146 272.132 226.911 272.367C226.676 272.603 226.543 272.922 226.543 273.254V281.199H225.707C225.596 281.199 225.49 281.243 225.412 281.321C225.333 281.399 225.289 281.506 225.289 281.617C225.289 281.728 225.333 281.834 225.412 281.912C225.49 281.991 225.596 282.035 225.707 282.035H234.07C234.18 282.035 234.287 281.991 234.365 281.912C234.444 281.834 234.488 281.728 234.488 281.617C234.488 281.506 234.444 281.399 234.365 281.321C234.287 281.243 234.18 281.199 234.07 281.199H233.233V276.599H234.07C234.18 276.599 234.287 276.643 234.365 276.722C234.444 276.8 234.488 276.907 234.488 277.017V279.108C234.488 279.441 234.62 279.76 234.855 279.995C235.09 280.23 235.409 280.362 235.742 280.362C236.075 280.362 236.394 280.23 236.629 279.995C236.864 279.76 236.996 279.441 236.996 279.108V274.855C236.997 274.691 236.965 274.527 236.902 274.375C236.839 274.223 236.747 274.085 236.631 273.968ZM231.113 277.174L230.277 279.265C230.235 279.368 230.154 279.45 230.052 279.493C229.95 279.537 229.835 279.538 229.732 279.496C229.629 279.455 229.546 279.374 229.503 279.272C229.459 279.169 229.458 279.054 229.5 278.951L230.107 277.436H229.052C228.984 277.436 228.916 277.419 228.856 277.387C228.795 277.355 228.743 277.308 228.705 277.251C228.667 277.195 228.643 277.129 228.636 277.061C228.628 276.993 228.638 276.924 228.664 276.861L229.5 274.77C229.521 274.719 229.551 274.673 229.59 274.633C229.628 274.594 229.674 274.563 229.725 274.541C229.775 274.52 229.83 274.509 229.885 274.508C229.94 274.508 229.994 274.518 230.045 274.539C230.096 274.559 230.143 274.59 230.182 274.628C230.221 274.667 230.252 274.712 230.274 274.763C230.295 274.814 230.307 274.868 230.307 274.923C230.308 274.978 230.297 275.033 230.277 275.084L229.67 276.599H230.725C230.793 276.599 230.861 276.616 230.921 276.648C230.982 276.68 231.033 276.727 231.072 276.783C231.11 276.84 231.134 276.906 231.141 276.974C231.148 277.042 231.139 277.111 231.113 277.174Z"
            fill="#FF6A56"
          />
        </g>
        <path
          d="M128.707 278.797V280.051C128.707 280.273 128.619 280.485 128.462 280.642C128.306 280.799 128.093 280.887 127.871 280.887H122.223C122.184 280.887 122.146 280.877 122.114 280.857C122.081 280.836 122.054 280.808 122.036 280.773C122.019 280.739 122.011 280.7 122.014 280.662C122.017 280.623 122.031 280.587 122.053 280.555L125.272 276.131C125.339 276.043 125.368 275.932 125.355 275.821C125.342 275.711 125.286 275.611 125.2 275.541C125.156 275.506 125.105 275.481 125.051 275.467C124.997 275.452 124.941 275.449 124.885 275.457C124.83 275.465 124.777 275.484 124.729 275.512C124.681 275.541 124.639 275.579 124.606 275.625L120.843 280.802C120.823 280.829 120.797 280.851 120.768 280.865C120.738 280.88 120.705 280.888 120.672 280.887H117.836C117.614 280.887 117.402 280.799 117.245 280.642C117.088 280.485 117 280.273 117 280.051V278.856C117 278.762 117 278.669 117.007 278.577C117.009 278.524 117.033 278.473 117.072 278.436C117.111 278.399 117.162 278.378 117.216 278.379H118.672C118.73 278.379 118.787 278.367 118.839 278.344C118.892 278.322 118.939 278.288 118.978 278.246C119.018 278.205 119.048 278.155 119.067 278.101C119.086 278.047 119.094 277.99 119.091 277.933C119.081 277.825 119.032 277.725 118.951 277.652C118.871 277.58 118.766 277.541 118.658 277.542H117.414C117.382 277.542 117.351 277.535 117.322 277.521C117.293 277.507 117.268 277.486 117.249 277.461C117.229 277.436 117.216 277.407 117.209 277.375C117.203 277.344 117.204 277.312 117.212 277.281C117.839 274.99 119.807 273.25 122.204 272.981C122.233 272.977 122.263 272.981 122.291 272.99C122.319 272.999 122.345 273.014 122.367 273.033C122.388 273.053 122.406 273.077 122.418 273.104C122.43 273.131 122.436 273.16 122.436 273.19V274.615C122.435 274.673 122.447 274.73 122.47 274.782C122.493 274.835 122.526 274.882 122.568 274.921C122.609 274.961 122.659 274.991 122.713 275.01C122.767 275.029 122.824 275.037 122.881 275.034C122.989 275.024 123.089 274.975 123.162 274.894C123.234 274.814 123.273 274.709 123.272 274.601V273.187C123.272 273.158 123.278 273.128 123.29 273.102C123.301 273.075 123.319 273.05 123.341 273.031C123.363 273.011 123.388 272.996 123.416 272.987C123.444 272.978 123.474 272.975 123.503 272.978C124.673 273.11 125.777 273.59 126.67 274.358C127.563 275.125 128.204 276.144 128.51 277.281C128.518 277.312 128.519 277.344 128.513 277.376C128.506 277.407 128.493 277.436 128.473 277.461C128.453 277.487 128.428 277.507 128.4 277.521C128.371 277.535 128.339 277.542 128.307 277.542H127.049C126.941 277.541 126.837 277.58 126.757 277.653C126.677 277.725 126.627 277.825 126.618 277.933C126.614 277.99 126.622 278.047 126.641 278.101C126.661 278.155 126.691 278.205 126.73 278.246C126.769 278.288 126.817 278.322 126.869 278.344C126.922 278.367 126.979 278.379 127.036 278.379H128.495C128.549 278.379 128.601 278.4 128.64 278.437C128.679 278.475 128.702 278.526 128.704 278.58C128.707 278.652 128.707 278.724 128.707 278.797Z"
          fill="#FC56FF"
        />
        <path
          d="M166.161 287.999V282.422C166.161 281.918 166.277 281.469 166.508 281.074C166.753 280.679 167.073 280.366 167.468 280.134C167.877 279.889 168.326 279.767 168.817 279.767H178.152C178.288 279.767 178.404 279.719 178.499 279.624C178.608 279.515 178.663 279.392 178.663 279.256V276.008C178.663 275.872 178.608 275.756 178.499 275.661C178.404 275.552 178.288 275.497 178.152 275.497H168.878C168.742 275.497 168.619 275.552 168.51 275.661C168.415 275.756 168.367 275.872 168.367 276.008V276.805H166.161V275.947C166.161 275.443 166.277 274.993 166.508 274.598C166.753 274.203 167.073 273.883 167.468 273.638C167.877 273.393 168.326 273.271 168.817 273.271H178.213C178.69 273.271 179.126 273.393 179.521 273.638C179.929 273.883 180.256 274.203 180.501 274.598C180.746 274.993 180.869 275.443 180.869 275.947V279.317C180.869 279.807 180.746 280.257 180.501 280.665C180.256 281.06 179.929 281.38 179.521 281.625C179.126 281.857 178.69 281.973 178.213 281.973H168.878C168.742 281.973 168.619 282.027 168.51 282.136C168.415 282.231 168.367 282.347 168.367 282.483V285.282C168.367 285.418 168.415 285.541 168.51 285.65C168.619 285.745 168.742 285.793 168.878 285.793H180.869V287.999H166.161Z"
          fill="white"
        />
        <path
          d="M197.208 284.352C196.911 284.352 196.647 284.28 196.414 284.136C196.182 283.991 195.994 283.803 195.85 283.571C195.706 283.338 195.633 283.078 195.633 282.79V282.429H196.943V282.754C196.943 282.834 196.971 282.906 197.027 282.97C197.083 283.026 197.151 283.054 197.232 283.054H202.699C202.779 283.054 202.847 283.026 202.903 282.97C202.959 282.906 202.987 282.834 202.987 282.754V280.903C202.987 280.823 202.959 280.755 202.903 280.699C202.847 280.635 202.779 280.603 202.699 280.603H197.208V279.305H202.326C202.415 279.305 202.487 279.277 202.543 279.221C202.599 279.157 202.627 279.085 202.627 279.005V277.298C202.627 277.218 202.599 277.15 202.543 277.094C202.487 277.03 202.415 276.998 202.326 276.998H197.232C197.151 276.998 197.083 277.03 197.027 277.094C196.971 277.15 196.943 277.218 196.943 277.298V277.743H195.633V277.262C195.633 276.966 195.702 276.702 195.838 276.469C195.982 276.237 196.174 276.049 196.414 275.904C196.655 275.76 196.919 275.688 197.208 275.688H202.362C202.659 275.688 202.923 275.76 203.156 275.904C203.396 276.049 203.584 276.237 203.72 276.469C203.857 276.702 203.925 276.966 203.925 277.262V279.041C203.925 279.145 203.913 279.249 203.889 279.353C203.873 279.457 203.844 279.553 203.804 279.641C203.981 279.818 204.105 280.014 204.177 280.23C204.249 280.447 204.285 280.659 204.285 280.867V282.79C204.285 283.078 204.213 283.338 204.069 283.571C203.933 283.803 203.744 283.991 203.504 284.136C203.272 284.28 203.015 284.352 202.735 284.352H197.208Z"
          fill="#A9A9A9"
        />
        <path
          d="M150.712 284.352V277.418L149.715 278.62H148.009L150.46 275.7H152.01V284.352H150.712Z"
          fill="#A9A9A9"
        />

        <path
          d="M145.735 239.132C145.881 238.648 145.598 238.138 145.115 238.001C145.024 237.973 144.942 237.946 144.851 237.928C144.841 237.116 144.677 236.332 144.376 235.62L139.424 239.159C141.166 239.059 142.917 239.25 144.604 239.752C145.088 239.889 145.598 239.615 145.735 239.132ZM141.915 246.306C141.982 246.321 142.049 246.328 142.115 246.328C142.533 246.328 142.909 246.04 143.004 245.615L143.916 241.55C144.016 241.105 143.772 240.655 143.344 240.496C141.374 239.763 139.206 239.763 137.236 240.496C136.808 240.655 136.564 241.105 136.664 241.55L137.576 245.615C137.687 246.108 138.177 246.418 138.665 246.305C139.157 246.195 139.466 245.708 139.356 245.216L138.628 241.971C139.725 241.696 140.855 241.696 141.952 241.971L141.224 245.216C141.114 245.708 141.423 246.195 141.915 246.306ZM133.167 241.384C133.34 241.631 133.623 241.768 133.906 241.768C134.088 241.768 134.28 241.713 134.435 241.594L147.204 232.474C147.614 232.182 147.705 231.616 147.413 231.206C147.122 230.796 146.556 230.704 146.146 230.996L142.698 233.459C142.635 233.41 142.567 233.372 142.502 233.329C142.828 232.878 143.026 232.33 143.026 231.735C143.026 230.23 141.795 228.999 140.29 228.999C138.785 228.999 137.554 230.23 137.554 231.735C137.554 232.333 137.754 232.883 138.083 233.335C136.858 234.139 135.972 235.576 135.776 237.28C135.748 237.49 135.73 237.709 135.73 237.928C135.639 237.946 135.557 237.973 135.465 238.001C135 238.128 134.718 238.612 134.836 239.077L133.377 240.117C132.966 240.409 132.875 240.974 133.167 241.384Z"
          fill={settings.carSettings.seatBelts === "on" ? "white" : "#898989"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M186.732 240.799V235.932C186.732 235.77 186.668 235.616 186.554 235.502C186.439 235.387 186.285 235.323 186.123 235.323C185.962 235.323 185.807 235.387 185.693 235.502C185.579 235.616 185.515 235.77 185.515 235.932V237.757H184.298V236.54C184.298 236.217 184.17 235.908 183.942 235.68C183.713 235.452 183.404 235.323 183.081 235.323H182.116L179.992 233.199L173.111 244.349L173.132 244.358C173.28 244.419 173.438 244.45 173.598 244.45H178.57C178.73 244.45 178.889 244.419 179.036 244.358C179.184 244.297 179.318 244.207 179.43 244.093L182.116 241.408H183.081C183.404 241.408 183.713 241.28 183.942 241.051C184.17 240.823 184.298 240.514 184.298 240.191V238.974H185.515V240.799C185.515 240.961 185.579 241.115 185.693 241.23C185.807 241.344 185.962 241.408 186.123 241.408C186.285 241.408 186.439 241.344 186.554 241.23C186.668 241.115 186.732 240.961 186.732 240.799ZM171.946 243.301L178.739 232.293C178.683 232.285 178.627 232.281 178.57 232.281H176.997V231.064H178.822C178.983 231.064 179.138 231 179.252 230.886C179.366 230.772 179.43 230.617 179.43 230.456C179.43 230.294 179.366 230.14 179.252 230.026C179.138 229.912 178.983 229.847 178.822 229.847H173.955C173.793 229.847 173.638 229.912 173.524 230.026C173.41 230.14 173.346 230.294 173.346 230.456C173.346 230.617 173.41 230.772 173.524 230.886C173.638 231 173.793 231.064 173.955 231.064H175.78V232.281H170.912C170.59 232.281 170.28 232.409 170.052 232.638C169.824 232.866 169.695 233.175 169.695 233.498V237.757H168.479V235.932C168.479 235.77 168.414 235.616 168.3 235.502C168.186 235.387 168.032 235.323 167.87 235.323C167.709 235.323 167.554 235.387 167.44 235.502C167.326 235.616 167.262 235.77 167.262 235.932V240.799C167.262 240.961 167.326 241.115 167.44 241.23C167.554 241.344 167.709 241.408 167.87 241.408C168.032 241.408 168.186 241.344 168.3 241.23C168.414 241.115 168.479 240.961 168.479 240.799V238.974H169.695V240.548C169.695 240.707 169.726 240.866 169.787 241.013C169.849 241.161 169.939 241.295 170.052 241.408L171.946 243.301Z"
          fill={settings.carSettings.engineHasProblem ? "white" : "#898989"}
        />
        <path
          d="M205.312 244.352C205.35 244.586 205.551 244.757 205.787 244.757H218.082C218.731 244.757 219.367 244.507 219.807 244.028C219.914 243.913 220.012 243.784 220.106 243.651H205.201L205.312 244.352ZM205.044 242.056H220.432C220.565 242.056 220.688 242.092 220.799 242.15C221.139 240.895 221.064 239.405 220.396 238.096C220.235 237.781 219.992 237.514 219.708 237.304L213.804 232.955C212.253 231.814 210.379 231.196 208.452 231.196H203.778C203.482 231.196 203.256 231.461 203.303 231.753L204.948 242.066C204.98 242.062 205.011 242.056 205.044 242.056ZM208.546 239.291C208.546 239.379 208.474 239.451 208.386 239.451H206.047C205.958 239.451 205.887 239.379 205.887 239.291V238.916C205.887 238.828 205.958 238.756 206.047 238.756H208.386C208.474 238.756 208.546 238.828 208.546 238.916L208.546 239.291ZM208.452 232.399C210.131 232.399 211.735 232.926 213.092 233.924L216.893 236.725H205.314L204.624 232.399H208.452ZM220.432 242.433H205.045C204.812 242.433 204.624 242.621 204.624 242.854C204.624 243.086 204.812 243.274 205.045 243.274H220.432C220.664 243.274 220.853 243.086 220.853 242.854C220.853 242.621 220.664 242.433 220.432 242.433Z"
          fill={settings.carSettings.doorIsOpen ? "white" : "#898989"}
        />
        <path
          d="M240.497 286.984C264.354 273.21 283.086 252.052 293.867 226.7C304.648 201.349 306.894 173.18 300.266 146.441C293.637 119.702 278.494 95.8435 257.12 78.4634C235.747 61.0833 209.301 51.1243 181.772 50.0884L181.668 52.8715C208.593 53.8847 234.458 63.6253 255.363 80.6243C276.268 97.6233 291.079 120.959 297.562 147.111C304.045 173.264 301.849 200.815 291.304 225.611C280.759 250.406 262.438 271.1 239.104 284.572L240.497 286.984Z"
          fill="#FF6A56"
          fillOpacity="0.2"
        />
        <g filter="url(#filter1_d_43_1542)">
          <path
            d="M239.997 286.118C240.273 286.596 240.885 286.76 241.361 286.48C258.437 276.441 272.932 262.545 283.683 245.897C294.615 228.969 301.362 209.683 303.367 189.632C305.371 169.581 302.576 149.341 295.211 130.584C287.968 112.137 276.511 95.6462 261.761 82.4255C261.349 82.0569 260.717 82.0966 260.352 82.5108L259.832 83.0995C259.467 83.5137 259.507 84.1454 259.918 84.5141C274.337 97.4424 285.538 113.567 292.619 131.602C299.822 149.947 302.556 169.744 300.595 189.355C298.635 208.966 292.036 227.829 281.343 244.386C270.832 260.663 256.661 274.25 239.968 284.068C239.492 284.348 239.328 284.96 239.604 285.438L239.997 286.118Z"
            fill="none"
            stroke="#FF6A56"
            strokeWidth={3}
            strokeDasharray={(Math.min(fuel, maxFuel) * 240) / maxFuel + " 500"}
          />
        </g>
        <g filter="url(#filter2_d_43_1542)">
          <path
            d="M165.639 302.827C165.606 303.191 165.874 303.512 166.238 303.543C171.104 303.957 175.99 304.09 180.872 303.941C181.237 303.93 181.522 303.623 181.509 303.258C181.496 302.893 181.19 302.608 180.825 302.619C175.998 302.766 171.168 302.635 166.357 302.226C165.993 302.195 165.672 302.463 165.639 302.827Z"
            fill="white"
          />
        </g>
        <path
          d="M113.497 286.984C89.6391 273.21 70.9072 252.052 60.1261 226.7C49.3449 201.349 47.0992 173.18 53.7276 146.441C60.3559 119.702 75.4989 95.8435 96.8727 78.4634C118.247 61.0833 144.692 51.1243 172.221 50.0884L172.326 52.8715C145.401 53.8847 119.535 63.6253 98.6298 80.6243C77.7248 97.6233 62.9138 120.959 56.4308 147.111C49.9478 173.264 52.1443 200.815 62.689 225.611C73.2337 250.406 91.5548 271.1 114.889 284.572L113.497 286.984Z"
          fill="#FC56FF"
          fillOpacity="0.2"
        />

        <defs>
          <filter
            id="filter0_d_43_1542"
            x="217.24"
            y="263.951"
            width="27.8051"
            height="26.1325"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4.02438" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_43_1542"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_43_1542"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_43_1542"
            x="223.37"
            y="66.0729"
            width="96.7269"
            height="236.644"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="8.05" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.415686 0 0 0 0 0.337255 0 0 0 0.72 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_43_1542"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_43_1542"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_43_1542"
            x="149.536"
            y="286.124"
            width="48.073"
            height="33.9764"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="8.05" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.72 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_43_1542"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_43_1542"
              result="shape"
            />
          </filter>
          <filter
            id="filter0_d_43_1570"
            x="0.896582"
            y="-0.00136757"
            width="155.197"
            height="268.718"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="8.05" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.988235 0 0 0 0 0.337255 0 0 0 0 1 0 0 0 0.72 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_43_1570"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_43_1570"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_43_1542"
            x1="176.997"
            y1="49.9985"
            x2="176.997"
            y2="303.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#181818" />
            <stop offset="0.465" stopColor="#222222" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SpeedoMeter3;
