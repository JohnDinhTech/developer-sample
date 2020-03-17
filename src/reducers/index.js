import { combineReducers } from "redux";
import { createResponsiveStateReducer } from "redux-responsive";
import selectedPath from "./selectedPath";
export default combineReducers({
  selectedPath,
  browser: createResponsiveStateReducer({
    smallMobile: 482,
    mobile: 732,
    smallTablet: 964,
    tablet: 1180,
    desktop: 1659
  })
});
