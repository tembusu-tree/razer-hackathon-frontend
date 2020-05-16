import {
  SELECT_BUSINESS_PROFILE,
  DESELECT_BUSINESS_PROFILE,
} from "../../constants/actions";

export function selectBusinessProfile(profile) {
  return {
    type: SELECT_BUSINESS_PROFILE,
    profile,
  };
}

export function deselectBusinessProfile(profile) {
  return {
    type: DESELECT_BUSINESS_PROFILE,
    profile,
  };
}
