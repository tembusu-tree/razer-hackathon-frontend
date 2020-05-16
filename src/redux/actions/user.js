import {
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_ERROR,
  GET_USER_REQUEST,
  RECEIVE_USER_DATA,
} from "../../constants/actions";
import { fetchUserProfile } from "../../services/user";

export const getUserProfile = () => {
  return (dispatch) => {
    dispatch(getUserRequest());

    return fetchUserProfile().then(
      (data) => {
        dispatch(getUserSuccess(data));
      },
      (err) => {
        dispatch(getUserError(err));
      }
    );
  };
};

const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

const getUserSuccess = (data) => {
  return {
    type: GET_USER_REQUEST_SUCCESS,
    data,
  };
};

const getUserError = (error) => {
  return {
    type: GET_USER_REQUEST_ERROR,
    error,
  };
};

export const receiveUserData = (data) => {
  return {
    type: RECEIVE_USER_DATA,
    data,
  };
};
