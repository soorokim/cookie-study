import axios from "axios";
import { useState } from "react";
import { TestStatus } from "./types";

const HTTP_ONLY_COOKIE_NAME = "http-only-cookie";

const getCookiesByString = (cookieString: string) =>
  new Map<string, string>(
    cookieString.split("; ").map((t) => t.split("=")) as [[string, string]]
  );

const useHttpOnlyCookieResults = () => {
  const [results, setResults] = useState({} as TestStatus);

  const check = async () => {
    let success = false;
    let message = "Yes";

    try {
      await axios.get("/cookie/create?path=/http-only");
      await axios.get("/http-only/create");
      if (document.cookie) {
        const cookieMap = getCookiesByString(document.cookie);
        console.log(document.cookie);
        if (!cookieMap.get(HTTP_ONLY_COOKIE_NAME)) {
          await axios.post("/http-only/check");
          success = true;
        } else {
          message =
            "백엔드의 쿠키설정이 잘못되었습니다. http only cookie가 아닙니다.\n H04를 검색해 확인하세요";
        }
      }
    } catch (e) {
      message =
        "백엔드에서 http only 쿠키를 확인 할 수 없습니다.\n H03을 검색해 확인해보세요";
    }

    setResults({ success, message });
  };

  return { isSuccess: results.success, message: results.message, check };
};

export default useHttpOnlyCookieResults;
