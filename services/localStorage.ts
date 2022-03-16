import { LocalStorageKeys } from "../constants/local-storage";
import { MessageCodes } from "../constants/message-codes";
import { IResponse } from "../interfaces/api/api";
import { ILoginValues, IUserData } from "../interfaces/api/IAuth";

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
    setUserData: (userData: IUserData) => {
      localStorage.setItem(LocalStorageKeys.user, JSON.stringify(userData));
    },

    getUserDetails: (): IUserData | null => {
      if (localStorage.getItem(LocalStorageKeys.user)) {
        return JSON.parse(
          localStorage.getItem(LocalStorageKeys.user) as string
        );
      }
      return null;
    },

    isUserLoggedIn: (): boolean => {
      const userDetails = this.auth.getUserDetails();
      if (userDetails) {
        return true;
      }
      return false;
    },

    getUsers: (): IUserData[] | null => {
      try {
        if (localStorage.getItem(LocalStorageKeys.users)) {
          return JSON.parse(
            localStorage.getItem(LocalStorageKeys.users) as string
          );
        }
        return null;
      } catch (err) {
        return null;
      }
    },

    logout: () => {
      if (localStorage.getItem(LocalStorageKeys.user)) {
        localStorage.removeItem(LocalStorageKeys.user);
      }
    },

    setUsers: (users: IUserData[]) => {
      localStorage.setItem(LocalStorageKeys.users, JSON.stringify(users));
    },

    sigupUser: async (
      values: IUserData
    ): Promise<IResponse<IUserData | null>> => {
      let updatedUsers: IUserData[] = [];
      const users = this.auth.getUsers();

      if (users) {
        updatedUsers = [...updatedUsers, ...users];
        const existingUser = updatedUsers.find(
          (user) => user.email === values.email
        );

        if (existingUser) {
          let msg = "User is already registered!";
          let message_code = "";

          if (existingUser.email === values.email) {
            msg = "Email is already used!";
            message_code = MessageCodes.email_is_used;
          }

          return {
            success: false,
            message: msg,
            message_code,
            errors: {
              error: msg,
            },
            data: null,
          };
        }
      }

      updatedUsers.push(values);
      localStorage.setItem(
        LocalStorageKeys.users,
        JSON.stringify(updatedUsers)
      );
      this.auth.setUserData(values);
      return {
        success: true,
        message: `User created successfully`,
        data: values,
      };
    },

    loginUser: async (
      values: ILoginValues
    ): Promise<IResponse<IUserData | null>> => {
      const users = this.auth.getUsers();

      if (users) {
        const user = users.find((user) => user.email === values.email);

        if (!user) {
          return {
            success: false,
            message: `User does not found with email address!`,
            message_code: MessageCodes.user_not_found_with_email_address,
            data: null,
          };
        }

        if (user) {
          const isMatch = user.password === values.password;

          if (!isMatch) {
            return {
              success: false,
              message: `You entered wrong password!`,
              message_code: MessageCodes.wrong_password,
              data: null,
            };
          }
          this.auth.setUserData(user);
          return {
            success: true,
            message: `Login successfully.`,
            message_code: MessageCodes.login_success,
            data: user,
          };
        }
      }
      return {
        success: false,
        message: `Somthing went wrong!`,
        message_code: MessageCodes.user_not_found_with_email_address,
        data: null,
      };
    },
  };
}
