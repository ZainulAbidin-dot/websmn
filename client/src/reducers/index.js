import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
export default combineReducers({
  alert,
  auth,
  profile,
  //   auth: authReducer,
  //   error: errorReducer,
  //   profile: profileReducer,
  //   post: postReducer,
});
