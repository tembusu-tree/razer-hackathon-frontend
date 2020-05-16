import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";
import isMobilePhone from "validator/lib/isMobilePhone";
import isNumeric from "validator/lib/isNumeric";
import _ from "lodash";
import numeral from "numeral";

export const isValidEmail = (value) => {
  return isEmail(value);
};

export const isValidURL = (value) => {
  return isURL(value, {
    require_protocol: true,
    require_valid_protocol: true,
  });
};

export const isTextLengthGte = (value, length) => {
  return typeof value === "string" && value.length >= length;
};

export const isValidPassword = (password) => {
  return typeof password === "string" && password.length > 7;
};

export const isValidMobilePhone = (mobile, strict = false) => {
  return (
    typeof mobile === "string" &&
    isMobilePhone(mobile, "any", { strictMode: strict })
  );
};

export const formatNumber = (number) => {
  return numeral(number).format("0,0");
};

export const debounce = (func, wait) => {
  return _.debounce(func, wait);
};

export const isNumericOnly = (string) => {
  return isNumeric(string);
};

export const calculateInterestRate = (selectedArray, amount) => {
  let interest = 20;
  let num = selectedArray.length - 1;
  interest -= num * 1;
  let extra = Math.floor(amount / 5000);
  interest += extra * 1;
  interest = Math.min(interest, 20);
  interest = Math.max(interest, 11);
  return interest;
};

export function normalizedTrim(string) {
  if (typeof string !== "string") {
    return "";
  }
  return string.trim().toLocaleLowerCase();
}

export function dropFirstFromArray(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return _.drop(arr);
}

export function generateRandomImageURL() {
  const random = Math.random();
  const imageId = Math.floor(random * 1084);
  return `https://picsum.photos/id/${imageId}/200/300`;
}
