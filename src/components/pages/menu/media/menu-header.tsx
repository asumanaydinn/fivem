// Consider splitting these into separate components or functional chunks if they grow in complexity
const LogoAndLocation: React.FC = () => (
  <div className="flex gap-x-2 items-center">
    {/* Logo */}
    <div className="w-[32.56px] h-[32.56px] flex items-center justify-center bg-gradient-to-b from-violet-300 to-gray-200 rounded-[0.57px]">
      <div className="text-center text-black text-xs font-extrabold">NE</div>
    </div>
    {/* Location Name */}
    <div className="flex flex-col gap-y-2 items-start justify-start">
      <div className="text-center text-white text-xs font-semibold">
        LOCATION NAME
      </div>
      <div className="text-center text-white text-opacity-50 text-[7.95px] font-bold">
        Location Name
      </div>
    </div>
  </div>
);

export default LogoAndLocation;
