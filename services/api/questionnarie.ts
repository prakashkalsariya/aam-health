import { IResponse } from "../../interfaces/api/api";
import { QuestionnaireQuestionType } from "../../interfaces/api/IQuestionnarie";
import {
  IOxfordQuestionnaireRequestData,
  IOxfordQustionnarieQuestion,
  IQuestionnaireWizardFormState,
} from "../../interfaces/IQuestionnaireWizard";
import axiosInstance from "./axios";

export class QuestionnarieService {
  userPhysicalProfileResponse: IQuestionnaireWizardFormState | null = null;

  submitAnswereResponse: IOxfordQuestionnaireRequestData | null = null;

  submitUserPhysicalDeatails = async (data: IQuestionnaireWizardFormState) => {
    try {
      const updatedData = { ...data };
      if (this.userPhysicalProfileResponse) {
        updatedData.id = this.userPhysicalProfileResponse.id;
        updatedData.created_at = this.userPhysicalProfileResponse.created_at;
      }
      const response = await axiosInstance.post(
        "/user-physical-profile",
        updatedData
      );

      if (!this.userPhysicalProfileResponse) {
        this.userPhysicalProfileResponse = response?.data?.data;
      }
      return response;
    } catch (err) {
      console.log("Error occured while submitting user physcical detais:", err);
      return err;
    }
  };

  getQuestionnarieQuestions = async (
    type: QuestionnaireQuestionType
  ): Promise<IResponse<IOxfordQustionnarieQuestion[]>> => {
    try {
      const response = await axiosInstance.get(
        `/questionnaire-questions?question_type=${type}`
      );

      return response?.data;
    } catch (err) {
      console.log("Error occured while getting questionnarie questions:", err);
      return {
        errors: err as any,
        message: "Error occured while getting questionnarie questions",
      };
    }
  };

  submitAnswere = async (
    data: IOxfordQuestionnaireRequestData
  ): Promise<IResponse<IOxfordQuestionnaireRequestData>> => {
    try {
      const updatedValues = {
        ...data,
      };

      if (this.submitAnswereResponse) {
        updatedValues.id = this.submitAnswereResponse.id;
      }

      const response = await axiosInstance.post(
        "/questionnaire-answers",
        updatedValues
      );
      return response?.data;
    } catch (err) {
      console.log("Error occured while submitting answere:", err);
      return {
        errors: err as any,
        message: "Error occured while submitting answere",
      };
    }
  };
}

export default QuestionnarieService;
