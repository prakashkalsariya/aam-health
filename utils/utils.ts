import { QueryParams } from "../constants/pages";
import { LocalStorageService } from "../services/localStorage";

export const handleBookAppointmentNavigation = () => {
  const isLoggedIn = LocalStorageService.auth.isUserLoggedIn();
  const url = "/book-appointment";

  if (!isLoggedIn) {
    // const redirectTo = url;
    window.location.href = `/login?${QueryParams.redirectTo}=${url}`;
    return;
  }
  window.location.href = url;
};
