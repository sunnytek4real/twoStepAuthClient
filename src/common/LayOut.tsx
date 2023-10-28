import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <div className="flex w-[85%] phone:w-full miniLapTop:flex-col miniLapTop:h-full h-[90%] bg-[#171616] rounded-md">
        <Outlet />
      </div>
    </>
  );
};

export default LayOut;
