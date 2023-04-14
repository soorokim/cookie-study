import { Link } from "react-router-dom";
import HttpOnlyCookieSection from "../components/HttpOnlyCookieSection";

const HttpOnlyPage = () => {
  return (
    <>
      <h2>Http Only 쿠키 테스트</h2>
      <HttpOnlyCookieSection />
      <Link to="/cookie">일반 쿠키 테스트로 이동</Link>
    </>
  );
};
export default HttpOnlyPage;
