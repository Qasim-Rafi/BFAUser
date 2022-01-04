import types from "./types";


//Login Action
export const loginUser = (data) => {
  return {
    type: types.LOGIN_USER_REQUEST,
    data: data,
  };
};
//people choice
export const getPeopleChoice = (data) => {
  return {
    type: types.GET_PEOPLE_CHOICE_REQUEST,
    data: data,
  };
};

//Add order
export const AddOrder = (data) => {
  return {
    type: types.ADD_ORDER_REQUEST,
    data: data,
  };
};
//PROMOTIONS

export const getPromotions = (data) => {
  return {
    type: types.GET_PROMOTIONS_REQUEST,
    data: data
  };
};
//Brunei Food Awards


export const getBruneiFoodRewards = (data) => {
  return {
    type: types.GET_BRUNEI_FOOD_AWARDS_REQUEST,
    data: data,
  };
};

//Get  Cusine

export const getUserCusine = (data) => {
  return {
    type: types.GET_CUSINE_REQUEST,
    data: data
  };
};
//Get Recommendations
export const getBfaRecommendations = (data) => {
  return {
    type: types.GET_BFA_RECOMMENDATION_REQUEST,
    data: data
  };
};
//Get  User

export const getUserProfile = () => {
  return {
    type: types.GET_USERS_BY_ID_REQUEST,
  };
};

// get Add Banner Data
export const getAddBannerData = () => {
  return {
    type: types.GET_ADD_BANNER_DATA_REQUEST,
  };
};

// get Promo News
export const getPromoNewsData = () => {
  return {
    type: types.GET_PROMO_NEWS_REQUEST,
  };
};

// GET PROMO JOBS
export const getPromoJobsData = () => {
  return {
    type: types.GET_PROMO_JOBS_REQUEST,
  };
};

//Get  BFA PARTNERS

export const getBfaPartners = (data) => {
  return {
    type: types.GET_BFA_PARTNERS_REQUEST,
    data: data
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
