import { Link } from "react-router-dom";
import CookieSection from "../components/CookieSection";
import CorsSection from "../components/CorsSection";

const CookiePage = () => {
  return (
    <>
      <h2>쿠키 테스트!</h2>
      <p>쿠키 테스트가 완료되면 http only 쿠키 테스트 링크가 생성됩니다.</p>
      <CorsSection />
      <CookieSection />
    </>
  );
};

export default CookiePage;
