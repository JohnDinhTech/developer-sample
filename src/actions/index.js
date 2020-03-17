import { SET_SELECTED_PATH } from "./types";

export const setSelectedPath = payload => dispatch => {
  setTimeout(() => {
    dispatch({
      payload,
      type: SET_SELECTED_PATH
    });
  }, 100);
};
