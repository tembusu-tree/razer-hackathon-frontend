import {
  RECEIVE_USER_DATA,
  GET_USER_REQUEST_SUCCESS,
} from "../../constants/actions";
import produce from "immer";

const user = (
  state = {
    firstName: "",
    lastName: "",
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_USER_DATA: {
      const data = action.data || {};
      const mData = data.data || {};
      const client = mData.client || {};

      return produce(state, (draft) => {
        draft.firstName = client.firstName;
        draft.lastName = client.lastName;
      });
    }
    case GET_USER_REQUEST_SUCCESS: {
      const data = action.data;
      return produce(state, (draft) => {
        draft.firstName = data.firstName;
        draft.lastName = data.lastName;
      });
    }
    default: {
      return state;
    }
  }
};

export default user;
