import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
export default combineReducers({
  alert,
  auth,
  //   auth: authReducer,
  //   error: errorReducer,
  //   profile: profileReducer,
  //   post: postReducer,
});
