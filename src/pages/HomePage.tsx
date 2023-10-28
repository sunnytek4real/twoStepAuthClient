import { ColorRing } from "react-loader-spinner";
import { useMainSignState, useMainSignStateData } from "../global/jotai";
import { useLoginUsersData } from "../hooks/swrHooks";
import moment from "moment";

const HomePage = () => {
  const [state, setState] = useMainSignState();
  const [newState, setNewState] = useMainSignStateData();
  const { myID, isLoading } = useLoginUsersData(newState!);

  console.log(state)
  return (
    <>
      <div className="flex-col h-full flex w-full items-center">
        <center className="fixed top-10">
          <button
            onClick={() => {
              setState(null);
              setNewState(null);
            }}
          >
            LogOut
          </button>
          <p className="text-[40px] text-center">Two Step Auth System</p>
          <span className="text-[13px]">
            This is a display of the signed in user's data
          </span>
          {isLoading ? (
            <ColorRing />
          ) : (
            <>
              <div className="text-[13px]">
                <p>Name: {myID?.userName}</p>
                <p>Email: {myID?.email}</p>
                <p>CreatedAt: {moment(myID?.createdAt).fromNow()}</p>
                <p>
                  Verified: {myID?.verified === true ? "🚀🚀🚀Hell Yah" : ""}
                </p>
              </div>
            </>
          )}
        </center>
      </div>
    </>
  );
};

export default HomePage;
