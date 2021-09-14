import types from "../actions/types";
import * as State from "../lib/states";

//Get site data from url reducer
export const siteData = (state = State.initial, action) => {
  switch (action.type) {
    case types.GET_SITE_DATA_RESET:
      return State.initial;
    case types.GET_SITE_DATA_REQUEST:
      return {
        ...state,
        ...State.request,
        data: state.data,
      };
    case types.GET_SITE_DATA_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        error: false,
        data: action.payload.data,
        loading: false,
        timeStamp: new Date(),
      };
    case types.GET_SITE_DATA_FAILURE:
      return {
        ...state,
        status: action.error.status,
        message: action.error.message,
        error: true,
        data: null,
        loading: false,
        timeStamp: new Date(),
      };
    default:
      return state;
  }
};

//Save site data for user reducer
export const saveSiteRes = (state = State.initial, action) => {
  switch (action.type) {
    case types.SAVE_SITE_RESET:
      return State.initial;
    case types.SAVE_SITE_REQUEST:
      return {
        ...state,
        ...State.request,
        data: state.data,
      };
    case types.SAVE_SITE_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        error: false,
        data: action.payload.data,
        loading: false,
        timeStamp: new Date(),
      };
    case types.SAVE_SITE_FAILURE:
      return {
        ...state,
        status: action.error.status,
        message: action.error.message,
        error: true,
        data: null,
        loading: false,
        timeStamp: new Date(),
      };
    default:
      return state;
  }
};

//Save site data for user reducer
export const updateSiteRes = (state = State.initial, action) => {
  switch (action.type) {
    case types.UPDATE_SITE_RESET:
      return State.initial;
    case types.UPDATE_SITE_REQUEST:
      return {
        ...state,
        ...State.request,
        data: state.data,
      };
    case types.UPDATE_SITE_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        error: false,
        data: action.payload.data,
        loading: false,
        timeStamp: new Date(),
      };
    case types.UPDATE_SITE_FAILURE:
      return {
        ...state,
        status: action.error.status,
        message: action.error.message,
        error: true,
        data: null,
        loading: false,
        timeStamp: new Date(),
      };
    default:
      return state;
  }
};

//Delete site data for user reducer
export const deleteSiteRes = (state = State.initial, action) => {
  switch (action.type) {
    case types.DELETE_SITE_RESET:
      return State.initial;
    case types.DELETE_SITE_REQUEST:
      return {
        ...state,
        ...State.request,
        data: state.data,
      };
    case types.DELETE_SITE_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        error: false,
        data: action.payload.data,
        loading: false,
        timeStamp: new Date(),
      };
    case types.DELETE_SITE_FAILURE:
      return {
        ...state,
        status: action.error.status,
        message: action.error.message,
        error: true,
        data: null,
        loading: false,
        timeStamp: new Date(),
      };
    default:
      return state;
  }
};

//All user saved sites reducer
export const savedSites = (state = State.initial, action) => {
  switch (action.type) {
    case types.GET_SAVED_SITES_RESET:
      return State.initial;
    case types.GET_SAVED_SITES_REQUEST:
      return {
        ...state,
        ...State.request,
        data: state.data,
      };
    case types.GET_SAVED_SITES_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        error: false,
        data: action.payload.data.data,
        loading: false,
        timeStamp: new Date(),
      };
    case types.GET_SAVED_SITES_FAILURE:
      return {
        ...state,
        status: action.error.status,
        message: action.error.message,
        error: true,
        data: null,
        loading: false,
        timeStamp: new Date(),
      };
    default:
      return state;
  }
};
