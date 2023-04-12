import useHttpOnlyCookieResults from "../hooks/useHttpOnlyCookieResults";

const HttpOnlyCookieSection = () => {
  const { check, message } = useHttpOnlyCookieResults();
  return (
    <section>
      <button onClick={check}>HttpOnly 쿠키를 주고받을 수 있나요?</button>
      <div className="message">{message}</div>
    </section>
  );
};
export default HttpOnlyCookieSection;
