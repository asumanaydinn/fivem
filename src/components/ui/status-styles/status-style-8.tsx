import { useSettings } from "../../../contexts/SettingsContext";
import { Status } from "../../../types/status";
import StatusStyle8Item from "./status-style-8-item";

interface StatusStyle2Props {
  status: Status;
}

const StatusStyle8: React.FC<StatusStyle2Props> = ({ status }) => {
  const { settings } = useSettings();

  return (
    <div className="flex items-center justify-center gap-x-2">
      {!settings.status.hideHealth ? (
        status.health >
          settings.styleVisibility["8"].visibilityThresholds?.health) && (
        <StatusStyle8Item
          Icon={() => (
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.77948 0.872224C8.82176 -0.125797 7.26665 -0.125797 6.30893 0.872224L5.65702 1.54784L5.0051 0.869854C4.04501 -0.128167 2.49227 -0.128167 1.53455 0.869854C0.455931 1.99115 0.455931 3.81176 1.53455 4.93306L5.65702 9.22621L9.77948 4.93543C10.8581 3.81413 10.8581 1.99352 9.77948 0.872224Z"
                fill="#FF56C6"
              />
            </svg>
          )}
          activeColor="#FF56C6"
          color="#421533"
          value={status.health}
        />
      ): <></>}

      {!settings.status.hideHydration ? (
        status.hydration >
          settings.styleVisibility["8"].visibilityThresholds?.hydration) && (
        <StatusStyle8Item
          Icon={() => (
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.47318 10.8446C6.70515 10.8446 8.53132 9.01849 8.53132 6.78651C8.53132 4.55454 4.47318 0.0229492 4.47318 0.0229492C4.47318 0.0229492 0.415039 4.62217 0.415039 6.78651C0.415039 8.95085 2.2412 10.8446 4.47318 10.8446Z"
                fill="#8256FF"
              />
            </svg>
          )}
          activeColor="#8256FF"
          color="#221645"
          value={status.hydration}
        />
      ): <></>}
      {!settings.status.hideHungry ? (
        status.hungry >
          settings.styleVisibility["8"].visibilityThresholds?.hunger) && (
        <StatusStyle8Item
          Icon={() => (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90719 3.52464C1.83585 3.43688 1.7851 3.33423 1.75867 3.22426C1.73224 3.11429 1.73081 2.99979 1.75448 2.8892C2.10577 1.22872 4.00738 0.0230713 6.27682 0.0230713C8.54627 0.0230713 10.4479 1.22872 10.7992 2.8892C10.8231 2.99987 10.8219 3.11451 10.7956 3.22465C10.7693 3.33479 10.7186 3.43762 10.6473 3.52557C10.5759 3.61351 10.4858 3.68431 10.3834 3.73276C10.2811 3.78121 10.1692 3.80606 10.0559 3.80549L2.49772 3.80549C2.38455 3.80583 2.27275 3.78077 2.17054 3.73217C2.06834 3.68356 1.97835 3.61264 1.90719 3.52464ZM11.0644 6.09763L9.11978 6.80683L7.36427 6.10188C7.27412 6.06584 7.17357 6.06584 7.08343 6.10188L5.33406 6.8021L3.58186 6.10188C3.49559 6.06742 3.39967 6.06591 3.31236 6.09763L1.23203 6.85411C1.14411 6.89281 1.0742 6.96352 1.03651 7.05188C0.998812 7.14024 0.99615 7.23963 1.02906 7.32988C1.06197 7.42014 1.12799 7.49448 1.21372 7.53783C1.29945 7.58119 1.39846 7.5903 1.49065 7.56331L2.11617 7.33684L2.11617 7.5879C2.11617 8.08948 2.31542 8.57051 2.67009 8.92519C3.02476 9.27985 3.5058 9.47911 4.00738 9.47911L8.54627 9.47911C9.04785 9.47911 9.52889 9.27985 9.88356 8.92519C10.2382 8.57051 10.4375 8.08948 10.4375 7.5879L10.4375 7.1307L11.323 6.80872C11.3727 6.79419 11.4188 6.76962 11.4586 6.73654C11.4984 6.70346 11.531 6.66257 11.5543 6.6164C11.5777 6.57023 11.5913 6.51976 11.5944 6.46811C11.5974 6.41646 11.5899 6.36473 11.5721 6.31612C11.5544 6.26751 11.5269 6.22306 11.4913 6.18551C11.4557 6.14796 11.4128 6.1181 11.3652 6.0978C11.3176 6.0775 11.2664 6.06718 11.2146 6.06747C11.1629 6.06777 11.1118 6.07868 11.0644 6.09952L11.0644 6.09763ZM1.35969 5.31845L11.194 5.31845C11.2943 5.31845 11.3905 5.2786 11.4614 5.20767C11.5324 5.13673 11.5722 5.04053 11.5722 4.94021C11.5722 4.83989 11.5324 4.74369 11.4614 4.67275C11.3905 4.60182 11.2943 4.56197 11.194 4.56197L1.35969 4.56197C1.25937 4.56197 1.16316 4.60182 1.09223 4.67275C1.0213 4.74369 0.981445 4.83989 0.981445 4.94021C0.981445 5.04053 1.0213 5.13673 1.09223 5.20767C1.16316 5.2786 1.25937 5.31845 1.35969 5.31845Z"
                fill="#FFA756"
              />
            </svg>
          )}
          activeColor="#FFA756"
          color="#492F18"
          value={status.hungry}
        />
      ): <></>}
      {!settings.status.hideEnergy ? (
        status.energy >
          settings.styleVisibility["8"].visibilityThresholds?.energy) && (
        <StatusStyle8Item
          Icon={() => (
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.2757 11.1808C4.21689 11.1807 4.15854 11.1704 4.10326 11.1503C3.99663 11.1113 3.90618 11.0376 3.84641 10.941C3.78664 10.8445 3.761 10.7307 3.7736 10.6178L4.16412 7.02197H1.17688C1.08474 7.02211 0.99431 6.99714 0.91529 6.94976C0.836271 6.90237 0.771652 6.83436 0.728374 6.75302C0.685097 6.67168 0.664795 6.58008 0.66965 6.48807C0.674505 6.39606 0.704332 6.30711 0.75593 6.23078L4.75751 0.246154C4.8208 0.152499 4.91356 0.0826695 5.02107 0.0477531C5.12858 0.0128366 5.24466 0.0148342 5.3509 0.0534287C5.45304 0.0913464 5.54025 0.161144 5.59962 0.252489C5.659 0.343833 5.68738 0.451868 5.68057 0.5606L5.29004 4.18181H8.27729C8.36942 4.18167 8.45986 4.20663 8.53888 4.25401C8.6179 4.3014 8.68252 4.36941 8.72579 4.45075C8.76907 4.5321 8.78937 4.62369 8.78452 4.7157C8.77966 4.80771 8.74984 4.89666 8.69824 4.97299L4.69665 10.9576C4.65013 11.0264 4.58741 11.0828 4.51401 11.1217C4.44061 11.1606 4.35878 11.1809 4.2757 11.1808Z"
                fill="#56FFAE"
              />
            </svg>
          )}
          activeColor="#56FFAE"
          color="#174730"
          value={status.energy}
        />
      ): <></>}
      {!settings.status.hideArmor ? (
        status.armor >
          settings.styleVisibility["8"].visibilityThresholds?.armor) && (
        <StatusStyle8Item
          Icon={() => (
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8413 2.01765L11.6153 2.00026C9.04181 1.79905 6.38634 0.124789 6.36149 0.109885L6.22736 0.0229492L6.09323 0.109885C6.06838 0.124789 3.41291 1.79905 0.839419 2.00026L0.613376 2.01765L0.608403 2.2437C0.608403 2.30829 0.576108 8.66998 6.10067 11.9589L6.22736 12.0334L6.35405 11.9589C11.8786 8.66998 11.8463 2.30829 11.8463 2.2437L11.8413 2.01765Z"
                fill="#FC56FF"
              />
            </svg>
          )}
          activeColor="#FC56FF"
          color="#451746"
          value={status.armor}
        />
      ): <></>}

      {!settings.status.hideStress ? (
        status.stress >
          settings.styleVisibility["8"].visibilityThresholds?.stress) && (
        <StatusStyle8Item
          Icon={() => (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.73564 2.59668V2.40291C9.73513 1.98305 9.61062 1.57268 9.37774 1.22331C9.14487 0.873944 8.81399 0.601139 8.42664 0.439129C8.03928 0.27712 7.61271 0.233123 7.20044 0.312661C6.78818 0.392199 6.40858 0.591727 6.1093 0.886208C6.0916 0.904051 6.0776 0.925224 6.06812 0.948504C6.05865 0.971783 6.05387 0.99671 6.05408 1.02184V5.31958C6.05417 5.35452 6.06371 5.38878 6.08168 5.41873C6.09965 5.44869 6.12538 5.47324 6.15616 5.48977C6.18694 5.5063 6.22161 5.5142 6.25651 5.51264C6.29141 5.51107 6.32524 5.5001 6.35441 5.48089C6.72291 5.24461 7.15097 5.11794 7.58871 5.11564C7.69003 5.11376 7.78823 5.15077 7.8631 5.21907C7.93798 5.28737 7.98384 5.38176 7.99126 5.48283C7.99402 5.53541 7.98604 5.58799 7.96781 5.63739C7.94957 5.68678 7.92147 5.73194 7.8852 5.7701C7.84894 5.80827 7.80527 5.83865 7.75688 5.85939C7.70849 5.88012 7.65637 5.89078 7.60372 5.89071C7.1926 5.89071 6.79832 6.05402 6.50762 6.34473C6.21691 6.63543 6.05359 7.02972 6.05359 7.44084V9.08204C6.05355 9.11102 6.06002 9.13965 6.07251 9.16581C6.085 9.19196 6.1032 9.21498 6.12577 9.23317C6.40077 9.46076 6.72455 9.62186 7.07194 9.70395C7.41933 9.78604 7.78097 9.78691 8.12875 9.70649C8.47653 9.62607 8.80108 9.46653 9.07717 9.24027C9.35326 9.01401 9.57345 8.72712 9.72062 8.40192C9.73544 8.36921 9.74087 8.33303 9.73633 8.29742C9.73178 8.26181 9.71743 8.22816 9.69487 8.20022C9.67231 8.17229 9.64244 8.15117 9.60858 8.13923C9.57472 8.12729 9.53821 8.12498 9.50312 8.13258C9.26159 8.18794 9.01459 8.21589 8.7668 8.2159H8.39235C8.29237 8.21713 8.19562 8.18052 8.1215 8.11341C8.04739 8.0463 8.00138 7.95365 7.99271 7.85404C7.98919 7.80103 7.99661 7.74787 8.0145 7.69784C8.03239 7.64782 8.06038 7.60201 8.09672 7.56326C8.13306 7.52451 8.17699 7.49365 8.22576 7.47259C8.27453 7.45153 8.32712 7.44072 8.38024 7.44084H8.76777C9.17266 7.44145 9.57163 7.3437 9.93037 7.156C10.3552 6.93474 10.7082 6.59692 10.9478 6.18218C11.1875 5.76744 11.3039 5.29296 11.2835 4.81439C11.263 4.33582 11.1066 3.87299 10.8324 3.4802C10.5583 3.0874 10.1778 2.78091 9.73564 2.59668ZM9.15434 4.34058H8.96057C8.49806 4.34058 8.05449 4.15684 7.72745 3.8298C7.40041 3.50276 7.21667 3.05919 7.21667 2.59668V2.40291C7.21667 2.30013 7.2575 2.20156 7.33018 2.12889C7.40286 2.05621 7.50143 2.01538 7.60421 2.01538C7.70699 2.01538 7.80556 2.05621 7.87823 2.12889C7.95091 2.20156 7.99174 2.30013 7.99174 2.40291V2.59668C7.99174 2.72391 8.0168 2.84989 8.06549 2.96744C8.11418 3.08498 8.18554 3.19178 8.2755 3.28175C8.4572 3.46344 8.70362 3.56551 8.96057 3.56551H9.15434C9.25712 3.56551 9.35569 3.60634 9.42836 3.67902C9.50104 3.75169 9.54187 3.85026 9.54187 3.95304C9.54187 4.05582 9.50104 4.15439 9.42836 4.22707C9.35569 4.29975 9.25712 4.34058 9.15434 4.34058ZM3.72888 0.271485C3.16379 0.272126 2.62202 0.496892 2.22244 0.896474C1.82286 1.29606 1.59809 1.83782 1.59745 2.40291V2.59668C1.15534 2.78101 0.774951 3.08758 0.50089 3.48043C0.22683 3.87328 0.0704625 4.33613 0.0501239 4.8147C0.0297852 5.29327 0.146319 5.76771 0.38606 6.1824C0.6258 6.59709 0.978808 6.93482 1.40369 7.156C1.76243 7.3437 2.1614 7.44145 2.56628 7.44084H2.94074C3.04088 7.43936 3.13787 7.47586 3.2122 7.54299C3.28652 7.61013 3.33267 7.70292 3.34135 7.80269C3.34487 7.8557 3.33745 7.90887 3.31956 7.95889C3.30167 8.00892 3.27368 8.05472 3.23734 8.09347C3.20099 8.13222 3.15707 8.16309 3.1083 8.18415C3.05952 8.20521 3.00694 8.21602 2.95382 8.2159H2.56628C2.3183 8.216 2.07111 8.18789 1.82949 8.1321C1.79442 8.12445 1.75792 8.12669 1.72405 8.13857C1.69019 8.15045 1.66029 8.1715 1.63768 8.19938C1.61508 8.22726 1.60066 8.26086 1.59604 8.29645C1.59142 8.33205 1.59677 8.36822 1.6115 8.40095C1.75863 8.72624 1.9788 9.01322 2.25489 9.23958C2.53098 9.46594 2.85555 9.62558 3.20338 9.7061C3.5512 9.78661 3.91291 9.78582 4.26038 9.7038C4.60785 9.62178 4.93173 9.46073 5.20683 9.23317C5.2294 9.21498 5.2476 9.19196 5.2601 9.16581C5.27259 9.13965 5.27905 9.11102 5.27901 9.08204V7.44084C5.27901 7.02972 5.11569 6.63543 4.82499 6.34473C4.53428 6.05402 4.14 5.89071 3.72888 5.89071C3.67623 5.89078 3.62412 5.88012 3.57572 5.85939C3.52733 5.83865 3.48367 5.80827 3.4474 5.7701C3.41114 5.73194 3.38303 5.68678 3.3648 5.63739C3.34656 5.58799 3.33858 5.53541 3.34135 5.48283C3.34877 5.38167 3.3947 5.28721 3.46968 5.2189C3.54465 5.15059 3.64297 5.11363 3.74438 5.11564C4.18212 5.11794 4.61018 5.24461 4.97867 5.48089C5.00785 5.5001 5.04168 5.51107 5.07658 5.51264C5.11148 5.5142 5.14615 5.5063 5.17693 5.48977C5.20771 5.47324 5.23344 5.44869 5.25141 5.41873C5.26938 5.38878 5.27892 5.35452 5.27901 5.31958V1.02184C5.27918 0.970982 5.25935 0.922091 5.22379 0.885724C4.82589 0.492002 4.28865 0.27126 3.72888 0.271485ZM4.11641 2.59668C4.11641 3.05919 3.93268 3.50276 3.60564 3.8298C3.27859 4.15684 2.83503 4.34058 2.37252 4.34058H2.17875C2.07597 4.34058 1.9774 4.29975 1.90472 4.22707C1.83205 4.15439 1.79122 4.05582 1.79122 3.95304C1.79122 3.85026 1.83205 3.75169 1.90472 3.67902C1.9774 3.60634 2.07597 3.56551 2.17875 3.56551H2.37252C2.49975 3.56551 2.62573 3.54045 2.74327 3.49176C2.86082 3.44307 2.96762 3.37171 3.05759 3.28175C3.14755 3.19178 3.21891 3.08498 3.2676 2.96744C3.31629 2.84989 3.34135 2.72391 3.34135 2.59668V2.40291C3.34135 2.30013 3.38218 2.20156 3.45485 2.12889C3.52753 2.05621 3.6261 2.01538 3.72888 2.01538C3.83166 2.01538 3.93023 2.05621 4.00291 2.12889C4.07558 2.20156 4.11641 2.30013 4.11641 2.40291V2.59668Z"
                fill="#56F5FF"
              />
            </svg>
          )}
          activeColor="#56F5FF"
          color="#174346"
          value={status.stress}
        />
      ): <></>}
    </div>
  );
};

export default StatusStyle8;
