import { AllTypes } from "./types";



export const setToken = (token) =>(dispatch) => {
    dispatch({
      type: AllTypes.SET_TOKEN,
      payload: token
    })
}