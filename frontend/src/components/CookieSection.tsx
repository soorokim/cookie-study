import { Link } from "react-router-dom";
import useCookieTest from "../hooks/useCookieTest";

const CookieSection = () => {
  const { check, message, isSuccess } = useCookieTest();
  return (
    <section>
      <button onClick={check}>쿠키를 주고받을 수 있나요?</button>
      <div className="message">{message}</div>
      {isSuccess && <Link to="/http-only"> Http Only 쿠키 테스트로 이동</Link>}
    </section>
  );
};

export default CookieSection;
