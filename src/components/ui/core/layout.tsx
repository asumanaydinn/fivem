import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen">
      <div className=" w-full h-full">
        <img
          className="h-screen w-screen absolute object-cover"
          src={`/assets/bg.svg`}
          alt="background"
        />
        <div className="w-full h-full p-4">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
