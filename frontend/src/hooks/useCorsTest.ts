import axios from "axios";
import { useEffect, useState } from "react";
import { TestStatus } from "./types";

const useCorsResults = () => {
  const [results, setResults] = useState({} as TestStatus);

  const check = async () => {
    let success = false;
    let message = "Yes";

    try {
      await axios.post("/cors");
      success = true;
    } catch (e) {
      message =
        "CORS를 해결해주세요\n credential설정 후 CORS문제가 생기면 H02를 검색해서 확인하세요";
    }

    setResults((prev) => ({
      ...prev,
      success,
      message,
    }));
  };

  useEffect(() => {
    if (axios.defaults.withCredentials && results.success) check();
  }, [results.success, axios.defaults.withCredentials]);

  return { isSuccess: results.success, message: results.message, check };
};

export default useCorsResults;
