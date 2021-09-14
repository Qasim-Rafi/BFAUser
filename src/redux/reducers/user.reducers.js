import types from "../actions/types";
import * as State from "../lib/states";

//Get site data from url reducer
export const login_User = (state = State.initial, action) => {
  switch (action.type) {
    case types.LOGIN_USER_RESET:
      return State.initial;
    case types.LOGIN_USER_SUCCESS:
      console.log(action,"action in reducer");
      return {
        ...state,
        data:action.payload,
      };
    case types.REGISTER_GUEST_SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        error: false,
        data: action.payload.data,
        loading: false,
      };
    case types.REGISTER_GUEST_FAILURE:
      return {
        ...state,
        status: action.error.status,
        message: action.error.message,
        error: true,
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

// //Registered user reducer
// export const user = (state = State.initial, action) => {
//   switch (action.type) {
//     case types.REGISTER_USER_RESET:
//       return State.initial;
//     case types.REGISTER_USER_REQUEST:
//       return {
//         ...state,
//         ...State.request,
//         data: state.data,
//       };
//     case types.REGISTER_USER_SUCCESS:
//       return {
//         ...state,
//         status: action.payload.status,
//         message: action.payload.message,
//         error: false,
//         data: action.payload.data,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     case types.REGISTER_USER_FAILURE:
//       return {
//         ...state,
//         status: action.error.status,
//         message: action.error.message,
//         error: true,
//         data: null,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     default:
//       return state;
//   }
// };

// //Get user categories reducer
// export const userCategories = (state = State.initial, action) => {
//   switch (action.type) {
//     case types.GET_USER_CATS_RESET:
//       return State.initial;
//     case types.GET_USER_CATS_REQUEST:
//       return {
//         ...state,
//         ...State.request,
//         data: state.data,
//       };
//     case types.GET_USER_CATS_SUCCESS:
//       return {
//         ...state,
//         status: action.payload.status,
//         message: action.payload.message,
//         error: false,
//         data: action.payload.data.data,
//         loading: false,
//       };
//     case types.GET_USER_CATS_FAILURE:
//       return {
//         ...state,
//         status: action.error.status,
//         message: action.error.message,
//         error: true,
//         data: null,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// //Get user categories reducer
// export const addedCategory = (state = State.initial, action) => {
//   switch (action.type) {
//     case types.ADD_PRODUCT_CAT_RESET:
//       return State.initial;
//     case types.ADD_PRODUCT_CAT_REQUEST:
//       return {
//         ...state,
//         ...State.request,
//         data: state.data,
//       };
//     case types.ADD_PRODUCT_CAT_SUCCESS:
//       return {
//         ...state,
//         status: action.payload.status,
//         message: action.payload.message,
//         error: false,
//         data: action.payload.data.data,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     case types.ADD_PRODUCT_CAT_FAILURE:
//       return {
//         ...state,
//         status: action.error.status,
//         message: action.error.message,
//         error: true,
//         data: null,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     default:
//       return state;
//   }
// };

// //Delete user category reducer
// export const deletedCategory = (state = State.initial, action) => {
//   switch (action.type) {
//     case types.DELETE_PRODUCT_CAT_RESET:
//       return State.initial;
//     case types.DELETE_PRODUCT_CAT_REQUEST:
//       return {
//         ...state,
//         ...State.request,
//         data: state.data,
//       };
//     case types.DELETE_PRODUCT_CAT_SUCCESS:
//       return {
//         ...state,
//         status: action.payload.status,
//         message: action.payload.message,
//         error: false,
//         data: action.payload.data.data,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     case types.DELETE_PRODUCT_CAT_FAILURE:
//       return {
//         ...state,
//         status: action.error.status,
//         message: action.error.message,
//         error: true,
//         data: null,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     default:
//       return state;
//   }
// };

// // export const categories
// //Get user categories reducer
// export const catsWProducts = (state = State.initial, action) => {
//   switch (action.type) {
//     case types.CATS_WITH_PRODUCTS_RESET:
//       return State.initial;
//     case types.CATS_WITH_PRODUCTS_REQUEST:
//       return {
//         ...state,
//         ...State.request,
//         data: state.data,
//       };
//     case types.CATS_WITH_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         status: action.payload.status,
//         message: action.payload.message,
//         error: false,
//         data: action.payload.data.data,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     case types.CATS_WITH_PRODUCTS_FAILURE:
//       return {
//         ...state,
//         status: action.error.status,
//         message: action.error.message,
//         error: true,
//         data: null,
//         loading: false,
//         timeStamp: new Date(),
//       };
//     default:
//       return state;
//   }
// };