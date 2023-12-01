
import {
  FETCHINGDATA,
  GETDATA,
  INCREAMENT,
  DECREAMENT,
  CLEARCART,
  REMOVEITEM,
  GETERROR,
} from "../Action/actions";

const initial = {
  data: [],
  fetching: false,
  error: null,
};

const cartReducer = (state = initial, action) => {
  if (action.type === GETDATA) {
    return { ...state, data: action.payLoad, fetching: false };
  }

  if (action.type === FETCHINGDATA) {
    return { ...state, fetching: true };
  }

  if (action.type === GETERROR) {
    return { ...state, data: [], fetching: false, error: action.payLoad };
  }

  if (action.type === INCREAMENT) {
    const { data } = state;

    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === action.payLoad) {
        newData[i].amount += 1;
        break;
      }
    }
    return { ...state, data: newData };
  }

  if (action.type === DECREAMENT) {
    const { data } = state;

    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === action.payLoad && newData[i].amount > 1) {
        newData[i].amount -= 1;
        break;
      }
    }
    return { ...state, data: newData };
  }

  if(action.type === REMOVEITEM)
  {
    const { data } = state;

    const newData = data.filter((val)=>(action.payLoad !== val.id));

    return {...state,data:newData};
    
  }

  if(action.type === CLEARCART)
  {
    return {...state,data:[]}
  }
  return state;
};

export default cartReducer;
