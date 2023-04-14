import axios from "axios";
import { useState } from "react";
import { TestStatus } from "./types";

const useCookieResults = () => {
  const [results, setResults] = useState({} as TestStatus);

  const check = async () => {
    let success = false;
    let message = "Yes";

    try {
      // TODO: path를 보내지 않아도 cookie에서 접근하기 때문에 document.cookie에 값이 있어야 하는데 이상하게 접근하질 못한다.
      // 이해 할 수 없는 현상이다ㅠ 왜냐면 http-only 테스트 페이지에서는 문제가 없기 때문이다.
      await axios.get("/cookie/create?path=/");
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
