import { useSettings } from "../../../contexts/SettingsContext";

interface Props {
  speed: number;
  maxSpeed: number;
  fuel: number;
  maxFuel: number;
  gear: number;
}

const SpeedoMeter4: React.FC<Props> = ({
  speed,
  maxSpeed,
  fuel,
  maxFuel,
  gear,
}) => {
  const { settings } = useSettings();

  return (
    <div className="w-[354px] h-[352px] relative">
      <div className="absolute top-24 w-full ">
        <div className="items-center justify-center flex flex-col">
          <div className="flex items-center justify-center">
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
        <path
          d="M80.9966 252.118C80.7204 252.596 80.1082 252.76 79.6321 252.48C56.1338 238.666 37.6953 217.651 27.0562 192.536C16.2869 167.113 14.0956 138.874 20.8141 112.094C27.5327 85.3146 42.7951 61.4538 64.2898 44.1258C85.5247 27.0071 111.699 17.1854 138.936 16.0994C139.488 16.0774 139.95 16.511 139.968 17.063L139.993 17.8476C140.011 18.3996 139.577 18.861 139.025 18.8831C112.394 19.9498 86.8013 29.5554 66.0377 46.294C45.0144 63.2421 30.0867 86.5796 23.5155 112.772C16.9443 138.964 19.0876 166.584 29.6207 191.449C40.0237 216.007 58.0508 236.556 81.0247 250.068C81.5007 250.348 81.6653 250.96 81.3891 251.438L80.9966 252.118Z"
          fill="none"
          stroke="white"
          strokeWidth={3}
          strokeDasharray={(speed * 240) / maxSpeed + " 5000"}
        />
      </svg>

      <svg
        width="354"
        height="352"
        viewBox="0 0 354 352"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="176.959"
          cy="176.999"
          r="127"
          fill="url(#paint0_linear_43_1579)"
          fillOpacity="0.87"
        />
        <circle
          cx="176.959"
          cy="176.999"
          r="126.5"
          stroke="white"
          strokeOpacity="0.1"
        />
        <g filter="url(#filter0_d_43_1579)">
          <path
            d="M236.593 273.968L235.583 272.959C235.504 272.88 235.398 272.836 235.287 272.836C235.176 272.836 235.069 272.88 234.991 272.959C234.913 273.037 234.868 273.143 234.868 273.254C234.868 273.365 234.913 273.472 234.991 273.55L236.001 274.561C236.079 274.639 236.123 274.745 236.123 274.855V279.108C236.123 279.219 236.079 279.325 236.001 279.404C235.922 279.482 235.816 279.526 235.705 279.526C235.594 279.526 235.488 279.482 235.409 279.404C235.331 279.325 235.287 279.219 235.287 279.108V277.017C235.287 276.685 235.155 276.366 234.919 276.13C234.684 275.895 234.365 275.763 234.032 275.763H233.196V273.254C233.196 272.922 233.064 272.603 232.829 272.367C232.594 272.132 232.275 272 231.942 272H227.761C227.428 272 227.109 272.132 226.874 272.367C226.638 272.603 226.506 272.922 226.506 273.254V281.199H225.67C225.559 281.199 225.453 281.243 225.374 281.321C225.296 281.399 225.252 281.506 225.252 281.617C225.252 281.728 225.296 281.834 225.374 281.912C225.453 281.991 225.559 282.035 225.67 282.035H234.032C234.143 282.035 234.25 281.991 234.328 281.912C234.407 281.834 234.451 281.728 234.451 281.617C234.451 281.506 234.407 281.399 234.328 281.321C234.25 281.243 234.143 281.199 234.032 281.199H233.196V276.599H234.032C234.143 276.599 234.25 276.643 234.328 276.722C234.407 276.8 234.451 276.907 234.451 277.017V279.108C234.451 279.441 234.583 279.76 234.818 279.995C235.053 280.23 235.372 280.362 235.705 280.362C236.038 280.362 236.357 280.23 236.592 279.995C236.827 279.76 236.959 279.441 236.959 279.108V274.855C236.96 274.691 236.928 274.527 236.865 274.375C236.802 274.223 236.71 274.085 236.593 273.968ZM231.076 277.174L230.24 279.265C230.198 279.368 230.117 279.45 230.015 279.493C229.913 279.537 229.797 279.538 229.694 279.496C229.591 279.455 229.509 279.374 229.466 279.272C229.422 279.169 229.421 279.054 229.463 278.951L230.07 277.436H229.015C228.946 277.436 228.879 277.419 228.818 277.387C228.758 277.355 228.706 277.308 228.668 277.251C228.629 277.195 228.606 277.129 228.598 277.061C228.591 276.993 228.601 276.924 228.627 276.861L229.463 274.77C229.484 274.719 229.514 274.673 229.552 274.633C229.591 274.594 229.637 274.563 229.688 274.541C229.738 274.52 229.793 274.509 229.848 274.508C229.902 274.508 229.957 274.518 230.008 274.539C230.059 274.559 230.105 274.59 230.145 274.628C230.184 274.667 230.215 274.712 230.237 274.763C230.258 274.814 230.27 274.868 230.27 274.923C230.271 274.978 230.26 275.033 230.24 275.084L229.633 276.599H230.687C230.756 276.599 230.824 276.616 230.884 276.648C230.945 276.68 230.996 276.727 231.035 276.783C231.073 276.84 231.097 276.906 231.104 276.974C231.111 277.042 231.102 277.111 231.076 277.174Z"
            fill="white"
          />
        </g>
        <path
          d="M128.67 278.797V280.051C128.67 280.273 128.582 280.485 128.425 280.642C128.268 280.799 128.056 280.887 127.834 280.887H122.186C122.147 280.887 122.109 280.877 122.076 280.857C122.044 280.836 122.017 280.808 121.999 280.773C121.982 280.739 121.974 280.7 121.977 280.662C121.98 280.623 121.994 280.587 122.016 280.555L125.235 276.131C125.302 276.043 125.331 275.932 125.318 275.821C125.305 275.711 125.249 275.611 125.163 275.541C125.119 275.506 125.068 275.481 125.014 275.467C124.96 275.452 124.904 275.449 124.848 275.457C124.793 275.465 124.74 275.484 124.692 275.512C124.644 275.541 124.602 275.579 124.569 275.625L120.806 280.802C120.786 280.829 120.76 280.851 120.731 280.865C120.701 280.88 120.668 280.888 120.634 280.887H117.799C117.577 280.887 117.365 280.799 117.208 280.642C117.051 280.485 116.963 280.273 116.963 280.051V278.856C116.963 278.762 116.963 278.669 116.97 278.577C116.972 278.524 116.996 278.473 117.034 278.436C117.073 278.399 117.125 278.378 117.179 278.379H118.635C118.693 278.379 118.749 278.367 118.802 278.344C118.855 278.322 118.902 278.288 118.941 278.246C118.98 278.205 119.011 278.155 119.03 278.101C119.049 278.047 119.057 277.99 119.053 277.933C119.044 277.825 118.994 277.725 118.914 277.652C118.834 277.58 118.729 277.541 118.621 277.542H117.377C117.345 277.542 117.313 277.535 117.285 277.521C117.256 277.507 117.231 277.486 117.212 277.461C117.192 277.436 117.179 277.407 117.172 277.375C117.166 277.344 117.167 277.312 117.175 277.281C117.802 274.99 119.77 273.25 122.167 272.981C122.196 272.977 122.226 272.981 122.254 272.99C122.282 272.999 122.308 273.014 122.329 273.033C122.351 273.053 122.369 273.077 122.381 273.104C122.393 273.131 122.399 273.16 122.398 273.19V274.615C122.398 274.673 122.41 274.73 122.433 274.782C122.455 274.835 122.489 274.882 122.531 274.921C122.572 274.961 122.622 274.991 122.676 275.01C122.73 275.029 122.787 275.037 122.844 275.034C122.952 275.024 123.052 274.975 123.125 274.894C123.197 274.814 123.236 274.709 123.235 274.601V273.187C123.234 273.158 123.241 273.128 123.252 273.102C123.264 273.075 123.282 273.05 123.304 273.031C123.325 273.011 123.351 272.996 123.379 272.987C123.407 272.978 123.437 272.975 123.466 272.978C124.636 273.11 125.74 273.59 126.633 274.358C127.526 275.125 128.167 276.144 128.473 277.281C128.481 277.312 128.482 277.344 128.475 277.376C128.469 277.407 128.455 277.436 128.436 277.461C128.416 277.487 128.391 277.507 128.363 277.521C128.334 277.535 128.302 277.542 128.27 277.542H127.012C126.904 277.541 126.799 277.58 126.719 277.653C126.639 277.725 126.59 277.825 126.581 277.933C126.577 277.99 126.585 278.047 126.604 278.101C126.623 278.155 126.654 278.205 126.693 278.246C126.732 278.288 126.779 278.322 126.832 278.344C126.885 278.367 126.941 278.379 126.999 278.379H128.458C128.512 278.379 128.564 278.4 128.603 278.437C128.642 278.475 128.665 278.526 128.667 278.58C128.67 278.652 128.67 278.724 128.67 278.797Z"
          fill="white"
        />
        <path
          d="M166.124 287.999V282.422C166.124 281.918 166.24 281.469 166.471 281.074C166.716 280.679 167.036 280.366 167.431 280.134C167.84 279.889 168.289 279.767 168.779 279.767H178.115C178.251 279.767 178.367 279.719 178.462 279.624C178.571 279.515 178.625 279.392 178.625 279.256V276.008C178.625 275.872 178.571 275.756 178.462 275.661C178.367 275.552 178.251 275.497 178.115 275.497H168.841C168.705 275.497 168.582 275.552 168.473 275.661C168.378 275.756 168.33 275.872 168.33 276.008V276.805H166.124V275.947C166.124 275.443 166.24 274.993 166.471 274.598C166.716 274.203 167.036 273.883 167.431 273.638C167.84 273.393 168.289 273.271 168.779 273.271H178.176C178.653 273.271 179.088 273.393 179.483 273.638C179.892 273.883 180.219 274.203 180.464 274.598C180.709 274.993 180.832 275.443 180.832 275.947V279.317C180.832 279.807 180.709 280.257 180.464 280.665C180.219 281.06 179.892 281.38 179.483 281.625C179.088 281.857 178.653 281.973 178.176 281.973H168.841C168.705 281.973 168.582 282.027 168.473 282.136C168.378 282.231 168.33 282.347 168.33 282.483V285.282C168.33 285.418 168.378 285.541 168.473 285.65C168.582 285.745 168.705 285.793 168.841 285.793H180.832V287.999H166.124Z"
          fill="white"
        />
        <path
          d="M197.17 284.352C196.874 284.352 196.61 284.28 196.377 284.136C196.145 283.991 195.957 283.803 195.813 283.571C195.668 283.338 195.596 283.078 195.596 282.79V282.429H196.906V282.754C196.906 282.834 196.934 282.906 196.99 282.97C197.046 283.026 197.114 283.054 197.194 283.054H202.662C202.742 283.054 202.81 283.026 202.866 282.97C202.922 282.906 202.95 282.834 202.95 282.754V280.903C202.95 280.823 202.922 280.755 202.866 280.699C202.81 280.635 202.742 280.603 202.662 280.603H197.17V279.305H202.289C202.377 279.305 202.45 279.277 202.506 279.221C202.562 279.157 202.59 279.085 202.59 279.005V277.298C202.59 277.218 202.562 277.15 202.506 277.094C202.45 277.03 202.377 276.998 202.289 276.998H197.194C197.114 276.998 197.046 277.03 196.99 277.094C196.934 277.15 196.906 277.218 196.906 277.298V277.743H195.596V277.262C195.596 276.966 195.664 276.702 195.801 276.469C195.945 276.237 196.137 276.049 196.377 275.904C196.618 275.76 196.882 275.688 197.17 275.688H202.325C202.622 275.688 202.886 275.76 203.118 275.904C203.359 276.049 203.547 276.237 203.683 276.469C203.819 276.702 203.887 276.966 203.887 277.262V279.041C203.887 279.145 203.875 279.249 203.851 279.353C203.835 279.457 203.807 279.553 203.767 279.641C203.944 279.818 204.068 280.014 204.14 280.23C204.212 280.447 204.248 280.659 204.248 280.867V282.79C204.248 283.078 204.176 283.338 204.032 283.571C203.895 283.803 203.707 283.991 203.467 284.136C203.235 284.28 202.978 284.352 202.698 284.352H197.17Z"
          fill="#A9A9A9"
        />
        <path
          d="M150.675 284.352V277.418L149.678 278.62H147.971L150.423 275.7H151.973V284.352H150.675Z"
          fill="#A9A9A9"
        />
        <path
          d="M145.698 239.132C145.844 238.648 145.561 238.138 145.078 238.001C144.987 237.973 144.905 237.946 144.813 237.928C144.804 237.116 144.64 236.332 144.339 235.62L139.387 239.159C141.129 239.059 142.88 239.25 144.567 239.752C145.051 239.889 145.561 239.615 145.698 239.132ZM141.878 246.306C141.945 246.321 142.012 246.328 142.078 246.328C142.496 246.328 142.872 246.04 142.967 245.615L143.879 241.55C143.979 241.105 143.735 240.655 143.307 240.496C141.337 239.763 139.169 239.763 137.199 240.496C136.771 240.655 136.527 241.105 136.627 241.55L137.539 245.615C137.65 246.108 138.139 246.418 138.628 246.305C139.12 246.195 139.429 245.708 139.319 245.216L138.591 241.971C139.688 241.696 140.818 241.696 141.915 241.971L141.187 245.216C141.077 245.708 141.386 246.195 141.878 246.306ZM133.13 241.384C133.303 241.631 133.586 241.768 133.869 241.768C134.051 241.768 134.243 241.713 134.398 241.594L147.166 232.474C147.577 232.182 147.668 231.616 147.376 231.206C147.084 230.796 146.519 230.704 146.109 230.996L142.661 233.459C142.598 233.41 142.53 233.372 142.465 233.329C142.791 232.878 142.989 232.33 142.989 231.735C142.989 230.23 141.758 228.999 140.253 228.999C138.748 228.999 137.517 230.23 137.517 231.735C137.517 232.333 137.717 232.883 138.046 233.335C136.821 234.139 135.934 235.576 135.738 237.28C135.711 237.49 135.693 237.709 135.693 237.928C135.602 237.946 135.52 237.973 135.428 238.001C134.963 238.128 134.68 238.612 134.799 239.077L133.34 240.117C132.929 240.409 132.838 240.974 133.13 241.384Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M186.695 240.799V235.932C186.695 235.77 186.631 235.616 186.516 235.502C186.402 235.387 186.248 235.323 186.086 235.323C185.925 235.323 185.77 235.387 185.656 235.502C185.542 235.616 185.478 235.77 185.478 235.932V237.757H184.261V236.54C184.261 236.217 184.133 235.908 183.904 235.68C183.676 235.452 183.367 235.323 183.044 235.323H182.079L179.955 233.199L173.074 244.349L173.095 244.358C173.243 244.419 173.401 244.45 173.561 244.45H178.533C178.693 244.45 178.851 244.419 178.999 244.358C179.147 244.297 179.281 244.207 179.393 244.093L182.079 241.408H183.044C183.367 241.408 183.676 241.28 183.904 241.051C184.133 240.823 184.261 240.514 184.261 240.191V238.974H185.478V240.799C185.478 240.961 185.542 241.115 185.656 241.23C185.77 241.344 185.925 241.408 186.086 241.408C186.248 241.408 186.402 241.344 186.516 241.23C186.631 241.115 186.695 240.961 186.695 240.799ZM171.908 243.301L178.702 232.293C178.646 232.285 178.59 232.281 178.533 232.281H176.96V231.064H178.785C178.946 231.064 179.101 231 179.215 230.886C179.329 230.772 179.393 230.617 179.393 230.456C179.393 230.294 179.329 230.14 179.215 230.026C179.101 229.912 178.946 229.847 178.785 229.847H173.917C173.756 229.847 173.601 229.912 173.487 230.026C173.373 230.14 173.309 230.294 173.309 230.456C173.309 230.617 173.373 230.772 173.487 230.886C173.601 231 173.756 231.064 173.917 231.064H175.743V232.281H170.875C170.553 232.281 170.243 232.409 170.015 232.638C169.787 232.866 169.658 233.175 169.658 233.498V237.757H168.441V235.932C168.441 235.77 168.377 235.616 168.263 235.502C168.149 235.387 167.994 235.323 167.833 235.323C167.672 235.323 167.517 235.387 167.403 235.502C167.289 235.616 167.225 235.77 167.225 235.932V240.799C167.225 240.961 167.289 241.115 167.403 241.23C167.517 241.344 167.672 241.408 167.833 241.408C167.994 241.408 168.149 241.344 168.263 241.23C168.377 241.115 168.441 240.961 168.441 240.799V238.974H169.658V240.548C169.658 240.707 169.689 240.866 169.75 241.013C169.812 241.161 169.902 241.295 170.015 241.408L171.908 243.301Z"
          fill="#898989"
        />
        <path
          d="M205.275 244.352C205.312 244.586 205.514 244.757 205.75 244.757H218.045C218.694 244.757 219.329 244.507 219.77 244.028C219.877 243.913 219.975 243.784 220.069 243.651H205.163L205.275 244.352ZM205.007 242.056H220.395C220.528 242.056 220.651 242.092 220.761 242.15C221.102 240.895 221.027 239.405 220.359 238.096C220.198 237.781 219.955 237.514 219.671 237.304L213.767 232.955C212.216 231.814 210.341 231.196 208.414 231.196H203.741C203.445 231.196 203.219 231.461 203.266 231.753L204.911 242.066C204.943 242.062 204.974 242.056 205.007 242.056ZM208.508 239.291C208.508 239.379 208.437 239.451 208.349 239.451H206.01C205.921 239.451 205.85 239.379 205.85 239.291V238.916C205.85 238.828 205.921 238.756 206.01 238.756H208.349C208.437 238.756 208.508 238.828 208.508 238.916L208.508 239.291ZM208.414 232.399C210.094 232.399 211.698 232.926 213.055 233.924L216.856 236.725H205.277L204.587 232.399H208.414ZM220.395 242.433H205.007C204.775 242.433 204.587 242.621 204.587 242.854C204.587 243.086 204.775 243.274 205.007 243.274H220.395C220.627 243.274 220.816 243.086 220.816 242.854C220.816 242.621 220.627 242.433 220.395 242.433Z"
          fill="#898989"
        />
        <path
          d="M240.459 286.984C264.317 273.21 283.049 252.052 293.83 226.7C304.611 201.349 306.857 173.18 300.228 146.441C293.6 119.702 278.457 95.8435 257.083 78.4634C235.71 61.0833 209.264 51.1243 181.735 50.0884L181.63 52.8715C208.556 53.8847 234.421 63.6253 255.326 80.6243C276.231 97.6233 291.042 120.959 297.525 147.111C304.008 173.264 301.812 200.815 291.267 225.611C280.722 250.406 262.401 271.1 239.067 284.572L240.459 286.984Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M239.959 286.118C240.236 286.596 240.848 286.76 241.324 286.48C258.4 276.441 272.895 262.545 283.646 245.897C294.578 228.969 301.325 209.683 303.33 189.632C305.334 169.581 302.539 149.341 295.174 130.584C287.931 112.137 276.474 95.6462 261.724 82.4255C261.312 82.0569 260.68 82.0966 260.315 82.5108L259.795 83.0995C259.43 83.5137 259.47 84.1454 259.881 84.5141C274.3 97.4424 285.5 113.567 292.582 131.602C299.785 149.947 302.519 169.744 300.558 189.355C298.598 208.966 291.999 227.829 281.306 244.386C270.795 260.663 256.624 274.25 239.931 284.068C239.455 284.348 239.291 284.96 239.567 285.438L239.959 286.118Z"
          fill="none"
          stroke="white"
          strokeWidth={3}
          strokeDasharray={(Math.min(fuel, maxFuel) * 240) / maxFuel + " 500"}
        />
        <path
          d="M165.589 302.967C165.563 303.254 165.774 303.507 166.061 303.531C171.02 303.959 176 304.094 180.975 303.937C181.263 303.928 181.487 303.686 181.477 303.399C181.467 303.112 181.226 302.887 180.938 302.896C176.007 303.052 171.07 302.918 166.154 302.495C165.868 302.47 165.615 302.681 165.589 302.967Z"
          fill="white"
        />
        <path
          d="M113.459 286.984C89.602 273.21 70.8701 252.052 60.089 226.7C49.3078 201.349 47.0621 173.18 53.6905 146.441C60.3188 119.702 75.4618 95.8435 96.8356 78.4634C118.209 61.0833 144.655 51.1243 172.184 50.0884L172.288 52.8715C145.363 53.8847 119.498 63.6253 98.5927 80.6243C77.6876 97.6233 62.8767 120.959 56.3937 147.111C49.9107 173.264 52.1072 200.815 62.6519 225.611C73.1966 250.406 91.5177 271.1 114.852 284.572L113.459 286.984Z"
          fill="white"
          fillOpacity="0.2"
        />

        <defs>
          <filter
            id="filter0_d_43_1579"
            x="217.203"
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
              result="effect1_dropShadow_43_1579"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_43_1579"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_43_1579"
            x1="176.959"
            y1="49.9985"
            x2="176.959"
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

export default SpeedoMeter4;
