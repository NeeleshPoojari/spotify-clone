import axios from "axios";
import { AllTypes } from "./types";

//API LINKS
const apiLinks = {
  featured: "https://api.spotify.com/v1/browse/featured-playlists",
  latest: "https://api.spotify.com/v1/browse/new-releases",
  genres: "https://api.spotify.com/v1/browse/categories?country=IN&locale=in_IN"
};


//GENRES
export const fetchGenresSuccess = (genres) => {
  return {
    type: AllTypes.FETCH_GENRES_SUCCESS,
    payload: genres,
  };
};

export const fetchGenresError = (error) => {
  return {
    type: AllTypes.FETCH_GENRES_ERROR,
    payload: error,
  };
};

export const fetchGenres = (token) => async (dispatch) => {
  dispatch({
    type: AllTypes.FETCH_ASYNC_START,
  });

  try {
    const res = await axios.get(apiLinks["genres"], {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    dispatch(fetchGenresSuccess(res.data.categories.items));
  } catch (error) {
    dispatch(fetchGenresError(error));
  }
};


//NEW RELEASES

export const fetchNewReleasesSuccess = (newReleases) => {
  return {
    type: "FETCH_NEW_RELEASES_SUCCESS",
    payload: newReleases,
  };
};

export const fetchNewReleasesError = (error) => {
  return {
    type: "FETCH_NEW_RELEASES_ERROR",
    payload: error,
  };
};

export const fetchNewRelease = (token) => async (dispatch) => {
    dispatch({
      type: AllTypes.FETCH_ASYNC_START,
    });
  
    try {
      const res = await axios.get(apiLinks["latest"], {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
  
      dispatch(fetchNewReleasesSuccess(res.data.albums.items));
    } catch (error) {
      dispatch(fetchNewReleasesError(error));
    }
  };


//FEATURED

export const fetchFeaturedSuccess = (featured) => {
  return {
    type: "FETCH_FEATURED_SUCCESS",
    payload: featured,
  };
};

export const fetchFeaturedError = (error) => {
  return {
    type: "FETCH_FEATURED_ERROR",
    payload: error
  };
};


export const fetchFeatured = (token) => async (dispatch) => {
    dispatch({
      type: AllTypes.FETCH_ASYNC_START,
    });
  
    try {
      const res = await axios.get(apiLinks["featured"], {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
  
      dispatch(fetchFeaturedSuccess(res.data.playlists.items));
    } catch (error) {
      dispatch(fetchFeaturedError(error));
    }
  };