import useCorsResults from "../hooks/useCorsResults";

const CorsSection = () => {
  const { check, message } = useCorsResults();
  return (
    <section>
      <button onClick={check}>CORS해결 됐나요?</button>
      <div className="message">{message}</div>
    </section>
  );
};

export default CorsSection;
