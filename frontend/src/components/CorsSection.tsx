import useCorsTest from "../hooks/useCorsTest";

const CorsSection = () => {
  const { check, message } = useCorsTest();
  return (
    <section>
      <button onClick={check}>CORS해결 됐나요?</button>
      <div className="message">{message}</div>
    </section>
  );
};

export default CorsSection;
