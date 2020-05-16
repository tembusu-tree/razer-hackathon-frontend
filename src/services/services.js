import { get } from "./http";
import { generateOptions, handleResponse } from "./reqres";

export async function fetchServices() {
  // deprecated
  return get("services?personalized=true", generateOptions()).then(
    handleResponse
  );
}

export async function fetchAllServices() {
  return get("partners", generateOptions()).then(handleResponse);
}
