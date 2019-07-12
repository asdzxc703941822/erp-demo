import axios from "axios";
import qs from "qs";
import { LOGIN } from "./api";
export function getToken(params) {
  return axios.post(LOGIN.TOKEN, qs.stringify(params), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
