import { SET_SELECTED_PATH } from "../actions/types";
export default (state = "/", action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_PATH:
      return payload;
    default:
      return state;
  }
};
