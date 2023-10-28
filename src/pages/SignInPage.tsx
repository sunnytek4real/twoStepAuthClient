import { Link, useNavigate, useParams } from "react-router-dom";
import CoverImage from "../statics/CoverImage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signInAuthAPI, verifyAuthAPI } from "../api/twoStepAPI";
import Swal from "sweetalert2";
import { useMainSignState } from "../global/jotai";
import { useEffect, useState } from "react";
import Loader from "../utils/Loader";

const SignInPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useMainSignState();
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useParams();
  const schema = yup.object({
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(state);

  const onHandleSubmit = handleSubmit(async (data: any) => {
    setLoading(true);
    signInAuthAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Welcome 🚀🚀🚀",
          text: "We are pleased to have you",
          timerProgressBar: true,
          showConfirmButton: false,
          iconColor: "dodgerblue",
          timer: 4000,
        }).then(() => {
          navigate("/home");
          setLoading(false);
          setState(res);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "An error occured",
          text: "This might be due to the following reasons: You have not been verified, wrong credentials or network connectivity issues.",
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

  useEffect(() => {
    if (token) {
      verifyAuthAPI(token);
    }
  }, []);
  return (
    <>
      {loading && <Loader />}
      <CoverImage title="Welcome Back" />
      <form
        onSubmit={onHandleSubmit}
        className="w-[40%] phone:text-[13px] miniLapTop:w-full miniLapTop:h-[60%] flex flex-col h-full items-center p-10 "
      >
        <p className="font-Poppins1 text-[30px]">Sign In</p>
        {/*Email*/}
        <div className="w-full my-3">
          <p>Email Address</p>
          <input
            {...register("email")}
            type="email"
            required
            placeholder="email address goes here"
            className="text-slate-500 pl-3 mt-2 w-full h-[50px] rounded-md bg-[#232A31]"
          />
        </div>
        {/*Password*/}
        <div className="w-full my-3">
          <p>Password</p>
          <input
            type="password"
            {...register("password")}
            required
            placeholder="your password goes here"
            className="text-slate-500 pl-3 mt-2 w-full h-[50px] rounded-md bg-[#232A31]"
          />
        </div>
        {/*Ends here*/}
        <div className="w-full flex items-center phone:flex-col justify-between my-3">
          <div className="flex items-center phone:mb-3">
            <input
              type="checkbox"
              className="w-[20px] cursor-pointer h-[20px] mr-2"
            />
            <span>Remember me</span>
          </div>
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              Swal.fire({
                icon: "info",
                iconColor: "dodgerblue",
                timer: 4000,
                timerProgressBar: true,
                showConfirmButton: false,
              });
            }}
          >
            Forgot Password?
          </span>
        </div>
        <button
          type="submit"
          className="w-full h-[50px] bg-blue-600 my-3 rounded-md hover:bg-blue-700 transition-all duration-500"
        >
          Sign In
        </button>
        <div className="flex justify-center my-3 items-center w-full">
          <hr className="w-full border-slate-700" />
          <span className="mx-3">or</span>
          <hr className="w-full border-slate-700" />
        </div>
        <p className="flex flex-col mt-3 items-center">
          Don't have an account?
          <Link
            to={`/`}
            className="text-blue-500 hover:text-blue-700 duration-500 transition-all cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignInPage;
