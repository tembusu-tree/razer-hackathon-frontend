import { patch } from "./http";
import { generateOptions, handleResponse } from "./reqres";

export async function updateBusinessProfile(list) {
  // TODO: amend endpoint
  return patch(
    "business/interests",
    { interests: list },
    generateOptions()
  ).then(handleResponse);
}
