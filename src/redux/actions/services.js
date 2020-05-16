import {
  SELECT_BUSINESS_PROFILE,
  DESELECT_BUSINESS_PROFILE,
  GET_PARTNERS_SUCCESS,
  GET_PARTNERS_ERROR,
  GET_PARTNERS_REQUEST,
} from "../../constants/actions";
import { fetchAllServices } from "../../services/services";

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

function getPartnersRequest() {
  return {
    type: GET_PARTNERS_REQUEST,
  }
}

function getPartnersSuccess(data) {
  return {
    type: GET_PARTNERS_SUCCESS,
    data,
  }
}

function getPartnersError(error) {
  return {
    type: GET_PARTNERS_ERROR,
    error,
  }
}

export function getPartners() {
  return (dispatch) => {
    dispatch(getPartnersRequest());
    return fetchAllServices()
      .then(
        (data) => {
          dispatch(getPartnersSuccess(data));
        },
        (err) => {
          dispatch(getPartnersError(err));
        }
      )
  }
}
