import { AllTypes } from "../actions/types";

const initialState = {
    token: null
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AllTypes.SET_TOKEN:
      return {
        ...state,
        token: payload
      }
    default:
        return state;
    }
}

export default auth;