import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { LocalStorageService } from "../services/localStorage";
import { sampleUsers } from "../data/auth";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const users = LocalStorageService.auth.getUsers();

    if (!users) {
      LocalStorageService.auth.setUsers(sampleUsers);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
