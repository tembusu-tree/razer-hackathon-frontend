import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../utils/storage";

export function setToken(stored) {
  return setLocalStorageItem("token", stored);
}

export function getToken() {
  return getLocalStorageItem("token");
}

export function removeToken() {
  return removeLocalStorageItem("token");
}
