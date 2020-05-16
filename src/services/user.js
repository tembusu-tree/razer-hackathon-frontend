import { get } from "./http";
import { generateOptions, handleResponse } from "./reqres";

export async function fetchUserProfile() {
  return get("clients", generateOptions()).then(handleResponse);
}
