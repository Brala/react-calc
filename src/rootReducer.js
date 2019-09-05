import { combineReducers } from "redux";
import buttonsReducer from "./components/buttons/reducers/duck";
import displayReducer from "./components/display/reducers/duck";

const rootReducer = combineReducers({
  buttons: buttonsReducer,
  display: displayReducer
});

export default rootReducer;
