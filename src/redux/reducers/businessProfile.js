import {
  SELECT_BUSINESS_PROFILE,
  DESELECT_BUSINESS_PROFILE,
} from "../../constants/actions";
import produce from "immer";

function businessProfile(
  state = {
    byKey: {},
  },
  action
) {
  switch (action.type) {
    case SELECT_BUSINESS_PROFILE: {
      return produce(state, (draft) => {
        draft.byKey[action.profile] = true;
      });
    }
    case DESELECT_BUSINESS_PROFILE: {
      return produce(state, (draft) => {
        draft.byKey[action.profile] = false;
      });
    }
    default: {
      return state;
    }
  }
}

export default businessProfile;
