import axios from "./axios";
import { MENU } from "./api";
export function getMenu() {
  return axios.get(MENU.GET_MENU_LIST);
}
