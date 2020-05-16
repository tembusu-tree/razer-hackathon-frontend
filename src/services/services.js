import { get } from "./http";
import { generateOptions, handleResponse } from "./reqres";

export async function fetchServices() {
  // TODO: amend endpoint
  return get("services?personalized=true", generateOptions()).then(
    handleResponse
  );
}

export async function fetchAllServices() {
  // TODO: amend endpoint
  return get("services", generateOptions()).then(handleResponse);
}
