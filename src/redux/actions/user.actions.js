import types from "./types";


//Login Action
export const loginUser = (data) => {
  return {
    type: types.LOGIN_USER_REQUEST,
    data:data,
  };
};

export const loginUserReset = () => {
  return {
    type: types.LOGIN_USER_RESET,
  };
};

//Register actions


export const registerUser = (params) => {
  return {
    type: types.REGISTER_USER_REQUEST,
    params,
  };
};

export const registerUserReset = () => {
  return {
    type: types.REGISTER_USER_RESET,
  };
};



// //Get User categories actions
// export const getUserCategories = (params) => {
//   return {
//     type: types.GET_USER_CATS_REQUEST,
//     params,
//   };
// };

// export const getUserCategoriesReset = () => {
//   return {
//     type: types.GET_USER_CATS_RESET,
//   };
// };

// //Get User categories actions
// export const addRUpdateCategory = (params) => {
//   return {
//     type: types.ADD_PRODUCT_CAT_REQUEST,
//     params,
//   };
// };

// export const addRUpdateCategoryReset = () => {
//   return {
//     type: types.ADD_PRODUCT_CAT_RESET,
//   };
// };

// //Get User categories actions
// export const deleteCategory = (params) => {
//   return {
//     type: types.DELETE_PRODUCT_CAT_REQUEST,
//     params,
//   };
// };

// export const deleteCategoryReset = () => {
//   return {
//     type: types.DELETE_PRODUCT_CAT_RESET,
//   };
// };
