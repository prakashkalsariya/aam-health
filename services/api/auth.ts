import { IResponse } from "../../interfaces/api/api";
import {
  IUserData,
  ILoginValues,
  ICreateUserValues,
  IDecodedToken,
} from "../../interfaces/api/IAuth";
import { LocalStorageService } from "../localStorage";

export class AuthService {
  login = async (values: ILoginValues): Promise<IResponse<IUserData>> => {
    // try {
    //   const response = await axiosInstance.post(`/auth/login`, values);
    //   if (response?.data && response?.data?.success) {
    //     LocalStorageService.auth.setUserData(response?.data?.data);
    //   }
    //   return response?.data;
    // } catch (err) {
    //   console.log("Error occured while submitting answere:", err);
    //   return {
    //     errors: err as any,
    //     message: "Error occured while login!",
    //   };
    // }
  };

  signup = async (values: ICreateUserValues): Promise<IResponse<IUserData>> => {
    // try {
    //   const response = await axiosInstance.post(`/auth/signup`, values);
    //   if (response?.data && response?.data?.success) {
    //     LocalStorageService.auth.setUserData(response?.data?.data);
    //   }
    //   return response?.data;
    // } catch (err) {
    //   console.log("Error occured while submitting answere:", err);
    //   return {
    //     errors: err as any,
    //     message: "Error occured while registering user!",
    //   };
    // }
  };

  isUserLoggedIn = (): boolean => {
    // let isLoggedIn = true;
    // const accessToken = LocalStorageService.auth.getAccessToken();
    // const userDeatails = LocalStorageService.auth.getUserDetails();
    // if (userDeatails && accessToken) {
    //   const decoded = jwt.decode(accessToken) as IDecodedToken;
    //   if (decoded?.exp && new Date().getTime() > decoded?.exp * 1000) {
    //     isLoggedIn = false;
    //   }
    // } else {
    //   isLoggedIn = false;
    // }
    // return isLoggedIn;
  };
}
