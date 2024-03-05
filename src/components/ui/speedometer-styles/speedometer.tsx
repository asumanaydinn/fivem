// Speedometer.tsx
import React, { useEffect, useRef } from "react";

interface SpeedometerProps {
  speed: number; // Current speed passed from outside
  maxSpeed: number; // Maximum speed of the speedometer
}

const Speedometer: React.FC<SpeedometerProps> = ({ speed, maxSpeed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const centerX = canvas!.width / 2;
    const centerY = canvas!.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    const drawSpeedometer = () => {
      if (context) {
        context.clearRect(0, 0, canvas!.width, canvas!.height); // Clear the canvas

        // Draw outer circle
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.stroke();

        // Draw the speed arc
        const angle = (speed / maxSpeed) * 2 * Math.PI - Math.PI / 2;
        context.beginPath();
        context.arc(centerX, centerY, radius - 10, -Math.PI / 2, angle, false);
        context.strokeStyle = "blue";
        context.lineWidth = 10;
        context.stroke();

        // Display the speed and gear in the middle
        context.font = "20px Arial";
        context.fillStyle = "black";
        context.fillText(`Speed: ${Math.round(speed)}`, centerX - 40, centerY);
        // Calculate gear based on speed
        const gear = Math.floor(speed / (maxSpeed / 5)) + 1;
        context.fillText(`Gear: ${gear}`, centerX - 40, centerY + 30);
      }
    };

    drawSpeedometer();
  }, [speed, maxSpeed]);

  return (
    <canvas
      ref={canvasRef}
      width="400"
      height="400"
      className="border-2 border-gray-200"
    ></canvas>
  );
};

export default Speedometer;
