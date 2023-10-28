/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins1: "Poppins-Semibold",
      },
      screens: {
        lapTop: { max: "1490px" },
        otp: { max: "1300px" },
        miniLapTop: { max: "1100px" },
        tab: { max: "750px" },
        phone: { max: "500px" },
      },
    },
  },
  plugins: [],
};
