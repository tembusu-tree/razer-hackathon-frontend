import { LoggerLevel } from "../constants/common";
import moment from "moment";

const isDev = process.env.NODE_ENV === "development";

function Logger(tag = LoggerLevel.DEBUG, level = LoggerLevel.DEBUG) {
  function generateLog(message, lev) {
    return {
      type: lev,
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
      message,
    };
  }
  function debug(message) {
    if (isDev) {
      console.log(tag, generateLog(message, LoggerLevel.DEBUG));
    }
  }
  function info(message) {
    if (isDev) {
      console.info(tag, generateLog(message, LoggerLevel.INFO));
    }
    debug(message);
  }
  function warn(message) {
    if (isDev) {
      console.warn(tag, generateLog(message, LoggerLevel.WARN));
    }
    info(message);
  }
  function error(message) {
    if (isDev) {
      console.error(tag, generateLog(message, LoggerLevel.ERROR));
    }
    warn(message);
  }
  function log(message) {
    if (typeof this[level] === "function") {
      this[level](message);
    }
  }
  return {
    debug,
    info,
    warn,
    error,
    log,
  };
}
export default Logger;
