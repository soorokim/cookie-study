import useHttpOnlyCookieTest from "../hooks/useHttpOnlyCookieTest";

const HttpOnlyCookieSection = () => {
  const { check, message } = useHttpOnlyCookieTest();
  return (
    <section>
      <button onClick={check}>HttpOnly 쿠키를 주고받을 수 있나요?</button>
      <div className="message">{message}</div>
    </section>
  );
};
export default HttpOnlyCookieSection;
