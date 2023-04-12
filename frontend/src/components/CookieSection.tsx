import useCookieResults from "../hooks/useCookieResults";

const CookieSection = () => {
  const { check, message } = useCookieResults();
  return (
    <section>
      <button onClick={check}>쿠키를 주고받을 수 있나요?</button>
      <div className="message">{message}</div>
    </section>
  );
};

export default CookieSection;
