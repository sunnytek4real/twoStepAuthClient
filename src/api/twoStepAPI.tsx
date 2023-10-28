import axios from "axios";

const apiURL: string = `https://two-step-auth-be.onrender.com/api`;

export const registerAuthAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/register`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const signInAuthAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const enterOtpAuthAPI = async (token: string, data: any) => {
  try {
    return await axios.post(`${apiURL}/${token}/first-process`, data);
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyAuthAPI = async (token: string) => {
  try {
    return await axios.get(`${apiURL}/${token}/verified`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const oneAuthAPI = async (_id: string) => {
  try {
    return await axios.get(`${apiURL}/${_id}/one`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
