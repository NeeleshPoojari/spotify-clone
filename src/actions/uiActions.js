import { AllTypes } from "./types";

export const updateView = (viewType) => (dispatch) => {

  dispatch({
    type: AllTypes.UPDATE_VIEW,
    payload: viewType,
  });
};
