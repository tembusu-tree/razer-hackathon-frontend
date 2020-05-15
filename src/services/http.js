import axios from "axios";
import httpConfig from "../config/api";

const http = axios.create(httpConfig);

export async function get(path, options = {}) {
  return http.get(path, options);
}

export async function post(path, data, options = {}) {
  return http.post(path, data, options);
}

export async function put(path, data, options = {}) {
  return http.put(path, data, options);
}

export async function patch(path, data, options = {}) {
  return http.patch(path, data, options);
}

export async function del(path, options = {}) {
  return http.delete(path, options);
}
