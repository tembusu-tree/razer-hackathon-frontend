// import { localStorageItemExists } from "../utils/storage";

import { post } from "./http";
import { handleResponse } from "./reqres";
import { setToken, getToken } from "./token";

export const isAuthenticated = () => {
  return true;
  // return !!getToken();
};

export const login = async (email, password) => {
  // TODO:
  return post("auth/login", { email, password })
    .then(handleResponse)
    .then((data) => {
      // this is already res.data
      // TODO: return token
      const token = "";
      setToken(token);
      return data || token;
    });
};

export const register = async (
  acra,
  businessType,
  businessSize,
  companyMobile,
  email,
  password,
  firstName,
  lastName,
  mobile
) => {
  // TODO: generate payload
  const data = {
    acra,
    businessType,
    businessSize,
    companyMobile,
    email,
    password,
    firstName,
    lastName,
    mobile,
  };

  return post("auth/register", data)
    .then(handleResponse)
    .then((data) => {
      // TODO: get token, set to local storage and return
      const token = "??";
      setToken(token);
      return data || token;
    });
};
