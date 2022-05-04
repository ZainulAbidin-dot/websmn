import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_REPOS,
} from "../actions/types";

const initialState = {
  profile: {},
  profiles: [],
  repo: [],
  loading: false,
  error: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    // case GET_PROFILES:
    //   return {
    //     ...state,
    //     profiles: payload,
    //     loading: false,
    //   };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // case CLEAR_PROFILE:
    //   return {
    //     ...state,
    //     profile: null,
    //     repos: [],
    //     loading: false,
    //   };
    // case GET_REPOS:
    //   return {
    //     ...state,
    //     repos: payload,
    //     loading: false,
    //   };
    // case SET_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    default:
      return state;
  }
}
