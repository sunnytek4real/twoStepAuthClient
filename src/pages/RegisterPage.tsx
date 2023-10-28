import { Link, useNavigate } from "react-router-dom";
import CoverImage from "../statics/CoverImage";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerAuthAPI } from "../api/twoStepAPI";
import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "../utils/Loader";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    registerAuthAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "A Mail has been sent to your account",
          text: "Visit this mail in other to continue your registeration process",
          timerProgressBar: true,
          showConfirmButton: false,
          iconColor: "dodgerblue",
          timer: 4000,
        }).then(() => {
          navigate("/message");
          setLoading(false);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "A Problem occured",
          text: "This might be as a result of wrong credentials or network connectivity issues",
          timerProgressBar: true,
          showConfirmButton: false,
          iconColor: "crimson",
          timer: 4000,
        }).then(() => {
          setLoading(false);
        });
      }
    });
  });
  return (
    <>
      {loading && <Loader />}
      <CoverImage title="You are new here!!!" />
      <form
        onSubmit={onHandleSubmit}
        className="w-[40%] phone:text-[13px] miniLapTop:w-full miniLapTop:h-[60%] flex flex-col h-full items-center p-10 "
      >
        <p className="font-Poppins1 text-[30px]">Sign Up</p>
        {/*User Name*/}
        <div className="w-full my-2">
          <p>User Name</p>
          <input
            type="text"
            {...register("userName")}
            placeholder="username goes here"
            required
            className={`text-slate-500 pl-3 mt-2 w-full h-[50px] rounded-md bg-[#232A31]`}
          />
        </div>
        {/*Email*/}
        <div className="w-full my-2">
          <p>Email Address</p>
          <input
            type="email"
            {...register("email")}
            placeholder="email address goes here"
            required
            className={`text-slate-500 pl-3 mt-2 w-full h-[50px] rounded-md bg-[#232A31]`}
          />
        </div>
        {/*Password*/}
        <div className="w-full my-2">
          <p>Password</p>
          <input
            type="password"
            {...register("password")}
            placeholder="your password goes here"
            required
            className={`text-slate-500 pl-3 mt-2 w-full h-[50px] rounded-md bg-[#232A31]`}
          />
        </div>
        {/*Ends here*/}
        <div className="w-full flex items-center my-2">
          <input
            type="checkbox"
            onClick={(e: any) => {
              setChecked(e.target.checked);
            }}
            className="w-[20px] cursor-pointer h-[20px] mr-2"
          />
          <span>
            I agree to the <span className="text-blue-600">Terms</span> and{" "}
            <span className="text-blue-600">Privacy Policy</span>.
          </span>
        </div>
        <button
          type="submit"
          disabled={!checked}
          className={`w-full ${
            checked
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 hover:bg-blue-400"
          } h-[50px] my-2 rounded-md  transition-all duration-500`}
        >
          Sign Up
        </button>
        <div className="flex justify-center my-2 items-center w-full">
          <hr className="w-full border-slate-700" />
          <span className="mx-3">or</span>
          <hr className="w-full border-slate-700" />
        </div>
        <p className="flex flex-col items-center">
          Already have an account?{" "}
          <Link
            to={`/sign-in`}
            className="text-blue-500 hover:text-blue-700 duration-500 transition-all cursor-pointer"
          >
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
};

export default RegisterPage;
