import { get } from "./http";
import { generateOptions, handleResponse } from "./reqres";

export async function fetchRewards() {
  // TODO: amend endpoint
  return get("rewards", generateOptions()).then(handleResponse);
}
