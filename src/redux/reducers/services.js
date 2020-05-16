import {
  SELECT_BUSINESS_PROFILE,
  DESELECT_BUSINESS_PROFILE,
  GET_PARTNERS_REQUEST,
  GET_PARTNERS_SUCCESS,
  GET_PARTNERS_ERROR,
} from "../../constants/actions";
import produce from "immer";

// REFACTOR
function mapPartnersToList(data) {
  const result = [];
  for (const key in data) {
    const array = Array.isArray(data[key]) ? data[key] : [];

    for (const service of array) {
      result.push(service);
    }
  }
  return result;
}

function services(
  state = {
    // biz profile
    bpByKey: {
      // uncomment to test
      // store_front: true,
      // online: true,
      // fashion: true,
      // food: true,
    }, // business profile by key

    // partners
    partnersByKey: {},
    allPartners: [],
    isFetchingPartners: false,
  },
  action
) {
  switch (action.type) {
    case GET_PARTNERS_REQUEST: {
      return produce(state, (draft) => {
        draft.isFetchingPartners = true;
      })
    }
    case GET_PARTNERS_SUCCESS: {
      return produce(state, (draft) => {
        draft.partnersByKey = action.data;
        draft.allPartners = mapPartnersToList(action.data);
        draft.isFetchingPartners = false;
      })
    }
    case GET_PARTNERS_ERROR: {
      return produce(state, (draft) => {
        draft.isFetchingPartners = false;
      })
    }
    case SELECT_BUSINESS_PROFILE: {
      return produce(state, (draft) => {
        draft.bpByKey[action.profile] = true;
      });
    }
    case DESELECT_BUSINESS_PROFILE: {
      return produce(state, (draft) => {
        draft.bpByKey[action.profile] = false;
      });
    }
    default: {
      return state;
    }
  }
}

export default services;
