export interface ILoginValues {
  email: string;
  password: string;
}

export interface IUserData {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  is_phone_verified?: boolean;
  is_email_verified?: boolean;
  created_at?: string;
  updated_at?: string;
  access_token?: string;
  refresh_token?: string;
}

export interface ICreateUserValues extends IUserData {
  password?: string;
}

export interface IDecodedToken extends IUserData {
  exp: number;
  iat: number;
}
