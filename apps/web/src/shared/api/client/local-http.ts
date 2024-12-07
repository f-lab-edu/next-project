import axios from "axios";

export const localHttp = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
});
