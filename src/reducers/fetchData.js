import { AllTypes } from "../actions/types";

const initialState = {
  featured: [],
  new_release: [],
  genres: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AllTypes.FETCH_ASYNC_START:
      return {
        ...state,
        loading: true,
      };

    case AllTypes.FETCH_FEATURED_SUCCESS:
      return {
        ...state,
        featured: payload,
        loading: false,
      };

    case AllTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: payload,
        loading: false,
      };
      
    case AllTypes.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        new_release: payload,
        loading: false,
      };

    case AllTypes.FETCH_NEW_RELEASES_ERROR:
    case AllTypes.FETCH_GENRES_ERROR:
    case AllTypes.FETCH_FEATURED_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
