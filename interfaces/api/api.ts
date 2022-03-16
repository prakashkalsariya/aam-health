export interface IResponse<T> {
  data?: T;
  message?: string;
  success?: boolean;
  message_code?: string;
  errors?: Record<any, any>;
}
