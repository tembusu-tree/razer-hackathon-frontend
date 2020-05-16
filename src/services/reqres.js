import Logger from "../utils/logger";
import { getToken } from "./token";
import apiConfig from "../config/api";
import { name } from "../../package.json";

const logger = Logger(name);

export function handleResponse(res) {
  logger.debug(res);

  if (res.status < 200 && res.status >= 300) {
    logger.warn(res);
    throw new Error(`E_${res.status.toString()}`);
  }

  return res.data;
}

export function generateOptions(authRequired = true) {
  const token = getToken();

  if (authRequired && !token && typeof token !== "string") {
    logger.warn(
      "Attempting to call a private API without a token. Subsequent calls might return 401."
    );
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function mergeHttpConfig(options) {
  const config = { ...apiConfig };
  const opts = options || {};
  const headers = opts.headers || {};

  return {
    ...opts,
    headers: {
      ...config.headers,
      ...headers,
    },
    timeout: opts.timeout || config.timeout,
    validateStatus: opts.validateStatus ? opts.validateStatus : () => true,
  };
}
