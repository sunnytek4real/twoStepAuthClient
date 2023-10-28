import image from "../assets/coders.jpg";

interface iCover {
  title: string;
}
const CoverImage: React.FC<iCover> = ({ title }) => {
  return (
    <>
      <div className="w-[60%] phone:h-[35%] miniLapTop:w-full miniLapTop:h-[40%] h-full relative bg-[]">
        <img
          src={image}
          className="w-full h-full object-cover absolute top-0"
        />
        <div
          style={{ backgroundColor: "rgba(35, 123, 252, 0.9)" }}
          className="w-full h-full absolute top-0 p-10 phone:p-5"
        >
          <p className="text-[40px] font-Poppins1 mb-40 miniLapTop:mb-10 phone:mb-5">
            TS-App
          </p>
          <p className="font-bold text-[40px] tab:text-[25px] font-Poppins1 phone:text-[18px]">
            {title}
          </p>
          <span className="text-[20px] tab:text-[15px] phone:text-[13px] tab:leading-8 leading-10">
            This is a two step authentication system built with React Template
            Typescript, Node, Express, Mongoose ORM and Mongo Database.
          </span>
          <p className="mt-10 tab:mt-3">
            Github Repo Link:
            <a
              href="https://github.com/OkFrank12/twoStepAuthClient.git"
              className="text-slate-800"
            >
            {" "}  OKFrank12
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CoverImage;
