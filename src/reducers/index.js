import { combineReducers } from "redux";
import { createResponsiveStateReducer } from "redux-responsive"
export default combineReducers({
    browser: createResponsiveStateReducer({
        smallMobile: 482,
        mobile: 732,
        smallTablet: 964,
        tablet: 1180,
        desktop: 1659,
    })
})