import types from '../actions/types';

//Get site data from url reducer
const initialState = {
  status: null,
  message: null,
  error: false,
  homeScreen: {
    refreshing: false,
    data: {},
  },
  restaurantDetail: {
    refreshing: false,
    data: {},
  },
  cusineDetail:{
    refreshing: false,
    data: {},
  }
};

export const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RESTAURANT_AWARDS_SUCCESS:
      return {
        ...state,
        restaurantDetail:{
          ...state.restaurantDetail,
          data:action.payload.data
        }
      };
      case types.GET_CUSINE_SUCCESS:
      return {
        ...state,
        cusineDetail:{
          ...state.cusineDetail,
          data:action.payload
        }
      };

    default:
      return state;
  }
};
