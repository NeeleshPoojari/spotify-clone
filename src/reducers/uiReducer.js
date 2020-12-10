import { AllTypes } from "../actions/types";

const initialState = {
    viewType: "featured"
};

export default function (state = initialState, action) {
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
