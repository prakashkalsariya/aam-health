import { AuthService } from "./auth";
import QuestionnarieService from "./questionnarie";

export class ApiServices {
  auth = new AuthService();
}

const apiServices = new ApiServices();

export default apiServices;
