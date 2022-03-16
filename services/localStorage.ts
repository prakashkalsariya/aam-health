import { LocalStorageKeys } from "../constants/local-storage";
import { IUserData } from "../interfaces/api/IAuth";

export class LocalStorageService {
  static concernType = {
    setSelectedConcernType: (type: string) => {
      localStorage.setItem(LocalStorageKeys.selectedConcernType, type);
    },
    getSelectedConcernType: (): string => {
      if (localStorage.getItem(LocalStorageKeys.selectedConcernType))
        return localStorage.getItem(
          LocalStorageKeys.selectedConcernType
        ) as string;
      return "";
    },
  };

  static auth = {
    setTokens: (data: IUserData) => {
      localStorage.setItem(
        LocalStorageKeys.accessToken,
        data.access_token as string
      );
      localStorage.setItem(
        LocalStorageKeys.refreshToken,
        data.refresh_token as string
      );
    },

    setUserData: (userData: IUserData) => {
      localStorage.setItem(LocalStorageKeys.user, JSON.stringify(userData));
      this.auth.setTokens(userData);
    },

    getUserDetails: (): IUserData | null => {
      if (localStorage.getItem(LocalStorageKeys.user)) {
        return JSON.parse(
          localStorage.getItem(LocalStorageKeys.user) as string
        );
      }
      return null;
    },

    getAccessToken: (): string => {
      return localStorage.getItem(LocalStorageKeys.accessToken) as string;
    },

    getRefreshToken: (): string => {
      return localStorage.getItem(LocalStorageKeys.refreshToken) as string;
    },
  };
}
