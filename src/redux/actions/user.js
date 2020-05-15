import {
  FETCH_USER_REQUEST_SUCCESS,
  FETCH_USER_REQUEST_ERROR,
  FETCH_USER_REQUEST,
} from "../../constants/actions";

export const fetchUserProfile = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    dispatch(fetchUserSuccess("hello"));
    dispatch(fetchUserError("hello"));
  };
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_REQUEST_SUCCESS,
    data,
  };
};

const fetchUserError = (error) => {
  return {
    type: FETCH_USER_REQUEST_ERROR,
    error,
  };
};
