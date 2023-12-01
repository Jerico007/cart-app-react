import {
  FETCHINGDATA,
  GETDATA,
  GETERROR,
  REMOVEITEM,
  INCREAMENT,
  DECREAMENT,
  CLEARCART,
} from "./actions";
import axios from "axios";

export const get_data = (data) => {
  return {
    type: GETDATA,
    payLoad: data,
  };
};

export const get_error =(data)=>{
    return {
        type : GETERROR,
        payLoad:data
    }
}

export const fetch_data = () => {
  return async function (dispatch) {
    try {
      //Loading data
      dispatch(fetching_data());
      const response = await axios.get(
        "https://course-api.com/react-useReducer-cart-project"
      );
      dispatch(get_data(response.data));
    } catch (error) {
        dispatch(get_error(error.message));
    }
  };
};

export const fetching_data = () => {
  return {
    type: FETCHINGDATA,
  };
};

export const remove_Item = (data) => {
  return {
    type: REMOVEITEM,
    payLoad: data,
  };
};

export const inCreament = (data) => {
  return {
    type: INCREAMENT,
    payLoad: data,
  };
};

export const deCreament = (data) => {
  return {
    type: DECREAMENT,
    payLoad: data,
  };
};

export const clearCart = () => {
  return {
    type: CLEARCART,
  };
};
