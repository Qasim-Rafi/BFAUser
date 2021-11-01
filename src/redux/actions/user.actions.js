import types from "./types";


//Login Action
export const loginUser = (data) => {
  return {
    type: types.LOGIN_USER_REQUEST,
    data:data,
  };
};

//App Actions

export const awardsRestaurant = () => {
  return {
    type: types.GET_RESTAURANT_AWARDS_REQUEST,
  };
};

//Get  Cusine

export const getUserCusine = (data) => {
  return {
    type: types.GET_CUSINE_REQUEST,
    data:data
  };
};

//Get  User

export const getUserProfile = (data) => {
  return {
    type: types.GET_USERS_BY_ID_REQUEST,
    data:data
  };
};

export const getRestaurantAllDishes = () => {
  return {
    type: types.GET_RESTAURANT_ALL_DISHES_REQUEST,
    
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
