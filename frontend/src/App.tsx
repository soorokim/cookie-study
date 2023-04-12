import "./App.css";
import axios from "axios";
import CorsSection from "./components/CorsSection";
import CookieSection from "./components/CookieSection";
import HttpOnlyCookieSection from "./components/HttpOnlyCookieSection";

/** HINT H01: axios에서 withCredentials를 설정 해주세요
 * axios setting
 * 여기서 axios 설정 해주시면됩니다.
 * */
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 60;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <p>쿠키 테스트!</p>
      <CorsSection />
      <CookieSection />
      <HttpOnlyCookieSection />
    </div>
  );
}

export default App;
