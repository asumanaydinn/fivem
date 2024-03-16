import React, { useState } from "react";
import SettingsModal from "../settings/settings-modal";
import { useSettings } from "../../../contexts/SettingsContext";

import StatusStyle1 from "../../ui/status-styles/status-style-1";
import StatusStyle2 from "../../ui/status-styles/status-style-2";
import StatusStyle3 from "../../ui/status-styles/status-style-3";
import StatusStyle4 from "../../ui/status-styles/status-style-4";
import Menu from "../menu";
import SpeedoMeter1 from "../../ui/speedometer-styles/speedometer-1";
import SpeedoMeter2 from "../../ui/speedometer-styles/speedometer-2";
import SpeedoMeter3 from "../../ui/speedometer-styles/speedometer-3";
import SpeedoMeter4 from "../../ui/speedometer-styles/speedometer-4";
import SpeedoMeter5 from "../../ui/speedometer-styles/speedometer-5";
import SpeedoMeter6 from "../../ui/speedometer-styles/speedometer-6";
import SpeedoMeter7 from "../../ui/speedometer-styles/speedometer-7";
import SpeedoMeter8 from "../../ui/speedometer-styles/speedometer-8";
import SpeedoMeter9 from "../../ui/speedometer-styles/speedometer-9";
import SpeedoMeter10 from "../../ui/speedometer-styles/speedometer-10";
import StatusStyle8 from "../../ui/status-styles/status-style-8";
import QuickInfo from "./quick-info";
import { useMusicPlayer } from "../../../contexts/MediaContext";
import ReactPlayer from "react-player";

import Draggable from "react-draggable";
import StatusStyle10 from "../../ui/status-styles/status-style-10";
import StatusStyle5 from "../../ui/status-styles/status-style-5";
import { StatusStyle6 } from "../../icons/status-style-6";
import StatusStyle9 from "../../ui/status-styles/status-style-9";
import StatusStyle7 from "../../ui/status-styles/status-style-7";

const statusComponents = [
  StatusStyle1,
  StatusStyle2,
  StatusStyle3,
  StatusStyle4,
  StatusStyle5,
  StatusStyle6,
  StatusStyle7,
  StatusStyle8,
  StatusStyle9,
  StatusStyle10,
];

const speedometerComponents = [
  SpeedoMeter1,
  SpeedoMeter2,
  SpeedoMeter3,
  SpeedoMeter4,
  SpeedoMeter5,
  SpeedoMeter6,
  SpeedoMeter7,
  SpeedoMeter8,
  SpeedoMeter9,
  SpeedoMeter10,
];

const Hud = () => {
  const { settings } = useSettings();
  const { musicList, playing, setPlaying } = useMusicPlayer();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [gear, setGear] = useState(1);

  // Function to increase speed - simulate pressing the gas pedal
  const pressGasPedal = () => {
    setSpeed((prevSpeed) => prevSpeed + 10);
  };

  // Function to change gear
  const changeGear = (newGear: number) => {
    setGear(newGear);
  };

  const { playNextTrack, currentTrackIndex } = useMusicPlayer();

  const StatusComponent =
    statusComponents[parseInt(settings.status.statusStyleType, 10) - 1];
  const SpeedoMeterComponent =
    speedometerComponents[
      parseInt(settings.speedometers.speedometerType, 10) - 1
    ];

  return (
    <div className=" w-full h-full">
      <img
        className="h-screen w-screen absolute object-cover"
        src={`${process.env.PUBLIC_URL}/assets/bg.svg`}
        alt="background"
      />
      <div className="p-4 w-full h-full">
        {!settings.general.hideAllHud && (
          <div className="relative w-full h-full">
            <ReactPlayer
              loop={true}
              url={musicList.length > 0 ? musicList[currentTrackIndex].url : ""}
              playing={playing}
              controls={true}
              onPause={() => setPlaying(false)}
              onEnded={playNextTrack}
              style={{ visibility: "hidden" }}
              width="96%"
              height="180px"
            />

            <Draggable disabled={!settings.general.freeformEditMode}>
              <div className="absolute bottom-24 left-0 flex flex-col gap-y-2">
                <Menu />
              </div>
            </Draggable>

            <Draggable disabled={!settings.general.freeformEditMode}>
              <div className="absolute bottom-0 left-0 flex flex-col gap-y-2">
                {!settings.status.hideAllStatus && (
                  <StatusComponent
                    status={{
                      armor: 20,
                      energy: 30,
                      health: 50,
                      hungry: 20,
                      hydration: 100,
                      stress: 10,
                    }}
                  />
                )}
              </div>
            </Draggable>

            <button
              className="absolute top-0 left-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Open Settings
            </button>

            <SettingsModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

            <Draggable disabled={!settings.general.freeformEditMode}>
              <div className="absolute flex flex-col gap-y-2 right-0 bottom-0">
                <button className="bg-white" onClick={pressGasPedal}>
                  Press Gas Pedal
                </button>
                <button
                  className="bg-white"
                  onClick={() => changeGear(gear + 1)}
                >
                  Gear Up
                </button>
                <button
                  className="bg-white"
                  onClick={() => changeGear(gear - 1)}
                >
                  Gear Down
                </button>

                {SpeedoMeterComponent && (
                  <SpeedoMeterComponent
                    speed={speed}
                    fuel={30}
                    gear={gear}
                    maxFuel={100}
                    maxSpeed={300}
                  />
                )}
              </div>
            </Draggable>

            <Draggable disabled={!settings.general.freeformEditMode}>
              <div className="absolute right-0 top-0">
                <QuickInfo />
              </div>
            </Draggable>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hud;
