import axios from "axios";

/** HINT H01: axios에서 withCredentials를 설정 해주세요
 * axios setting
 * 여기서 axios 설정 해주시면됩니다.
 * */
axios.defaults.timeout = 60;
axios.defaults.withCredentials = true;