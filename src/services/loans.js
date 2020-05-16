import { get, post } from "./http";
import { generateOptions, handleResponse } from "./reqres";

export async function fetchInterestRate(loanAmount) {
  // TODO: amend endpoint
  return get(`loans/interest?amount=${loanAmount}`, generateOptions()).then(
    handleResponse
  );
}

export async function requestLoan(loanAmount, interestRate) {
  // TODO: amend endpoint
  return post(
    "loans",
    { amount: loanAmount, interestRate },
    generateOptions()
  ).then(handleResponse);
}
