import { AllTypes } from "../actions/types";

const initialState = {
    viewType: "featured"
};

const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AllTypes.UPDATE_VIEW:
      return {
          ...state,
          viewType: payload
      };
    default:
      return state;
  }
}
export default uiReducer;