import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <>
      <div className="w-full h-screen miniLapTop:h-[150vh] flex items-center justify-center">
        <RouterProvider router={MainRouter} />
      </div>
    </>
  );
};

export default App;
