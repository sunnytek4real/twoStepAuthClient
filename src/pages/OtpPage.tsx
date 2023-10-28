import { Link, useNavigate, useParams } from "react-router-dom";
import CoverImage from "../statics/CoverImage";
import image from "../assets/otp-icon-light.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enterOtpAuthAPI } from "../api/twoStepAPI";
import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "../utils/Loader";

const OtpPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { token }: any = useParams();
  const schema = yup.object({
    otp: yup.string().required(),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleOTP = handleSubmit(async (data: any) => {
    setLoading(true);
    enterOtpAuthAPI(token, data).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Go and verify your account",
          text: "Visit mail in other to complete your registeration process",
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
          title: "OTP Error",
          text: "This might be as a result of wrong OTP or network connectivity issues",
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
      <CoverImage title="Account security ASAP!!!" />
      <form
        onSubmit={onHandleOTP}
        className="w-[40%] miniLapTop:w-full miniLapTop:h-[60%] miniLapTop:p-12 flex flex-col h-full items-center p-10 phone:p-6"
      >
        <p className="font-Poppins1 text-[30px]">Validate OTP</p>
        <img src={image} className="my-5" />
        <p className="text-gray-500 text-center otp:text-[13px] otp:leading-6 leading-9">
          Please enter the OTP (one time password) to verify your account. A
          Code has been sent to <br />
          <span className="text-white text-[20px] phone:text-[15px]">
            *******@gmail.com
          </span>
        </p>
        {/*OTP*/}
        <div className="w-full flex flex-col items-center my-3">
          <p className="mb-2 miniLapTop:text-center">Enter 4 digit code</p>
          <input
            {...register("otp")}
            placeholder="****"
            type="text"
            spellCheck={false}
            maxLength={4}
            required
            className="text-slate-500 w-[100px] placeholder:text-center text-center rounded-md text-[30px]"
          />
        </div>
        <button className="w-full h-[50px] miniLapTop:w-[350px] phone:w-[250px] bg-blue-600 my-1 rounded-md hover:bg-blue-700 transition-all duration-500">
          Validate
        </button>
        <div className="flex justify-center my-1 items-center w-full">
          <hr className="w-full border-slate-700" />
          <span className="mx-3">or</span>
          <hr className="w-full border-slate-700" />
        </div>
        <p className="flex flex-col mt-3 items-center">
          Didn't get the code?
          <Link
            to={`/`}
            className="text-blue-500 hover:text-blue-700 duration-500 transition-all cursor-pointer"
          >
            Resend It
          </Link>
        </p>
      </form>
    </>
  );
};

export default OtpPage;
