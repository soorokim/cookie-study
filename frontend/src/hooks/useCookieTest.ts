import axios from "axios";
import { useState } from "react";
import { TestStatus } from "./types";

const useCookieResults = () => {
  const [results, setResults] = useState({} as TestStatus);

  const check = async () => {
    let success = false;
    let message = "Yes";

    try {
      await axios.get("/cookie/create");
      if (document.cookie) {
        await axios.post("/cookie/check");
        success = true;
      }
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
      if (error.message === "Network Error") {
        message = "backend CORS설정을 확인하세요!\n H02를 검색해서 확인하세요";
      }
    }
    if (!axios.defaults.withCredentials) {
      message =
        "axios 설정에서 withCredentials를 설정해주세요\n H01을 검색해 체크해보세요 ";
    }
    setResults({ success, message });
  };

  return { isSuccess: results.success, message: results.message, check };
};

export default useCookieResults;
