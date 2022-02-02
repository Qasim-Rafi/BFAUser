
import types from "./types";


//Login Action
export const loginUser = (data) => {
  return {
    type: types.LOGIN_USER_REQUEST,
    data: data,
  };
};
//Profile Data
export const getProfileData = (data) => {
  return {
    type: types.GET_USER_PROFILE_DATA_REQUEST,
    data: data,
  };
};
export const moreFromRestaurant = (index, limit) => {
  return {
    type: types.MORE_FROM_RESTAURANT_REQUEST,
    data: {
      index: index,
      limit: limit
    }
  };
};
//APPLY FOR JOB

export const applyForJob = (data, navigation) => {
  return {
    type: types.GET_APPLY_FOR_JOB_REQUEST,
    data: data,
    navigation: navigation
  };
};
//Register actions


export const registerUser = (data, navigation) => {
  return {
    type: types.REGISTER_USER_REQUEST,
    data: data,
    navigation: navigation
  };
};
export const verifyUser = (code, navigation) => {
  return {
    type: types.VERIFY_USER_REQUEST,
    data: code,
    navigation: navigation
  };
};
//people choice
export const getPeopleChoice = (index, limit) => {
  return {
    type: types.GET_PEOPLE_CHOICE_REQUEST,
    data: {
      index: index,
      limit: limit
    }
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

export const getPromotions = (index, limit) => {
  return {
    type: types.GET_PROMOTIONS_REQUEST,
    data: {
      index: index,
      limit: limit
    }
  };
};
//Brunei Food Awards


export const getBruneiFoodRewards = (index, limit) => {
  return {
    type: types.GET_BRUNEI_FOOD_AWARDS_REQUEST,
    data: {
      index: index,
      limit: limit
    }
  };
};

//Get  Cusine

export const getUserCusine = (index, limit) => {
  return {
    type: types.GET_CUSINE_REQUEST,
    data: {
      index: index,
      limit: limit
    }
  };
};
//Get Recommendations
export const getBfaRecommendations = (index, limit) => {
  return {
    type: types.GET_BFA_RECOMMENDATION_REQUEST,
    data: {
      index: index,
      limit: limit
    }
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
export const getPromoJobsData = (index, limit) => {
  return {
    type: types.GET_PROMO_JOBS_REQUEST,
    data: {
      index: index,
      limit: limit
    }
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
export const getmoreaboutDish = (id) => {
  return {
    type: types.GET_MORE_ABOUT_DISHES_REQUEST,
    id: id
  };
};

export const registerUserReset = () => {
  return {
    type: types.REGISTER_USER_RESET,
  };
};
//Favrite Actions
export const getFavorite = (index, limit) => {
  // console.log('okokokokoko',data)
  return {
    type: types.GET_FAVORITE_REQUEST,
    data: {
      index: index,
      limit: limit
    }
  };
};

export const addFavorite = (data) => {
  // console.log('okokokokoko',data)
  return {
    type: types.ADD_FAVORITE_REQUEST,
    data
  };
};
export const onRemoveFavorite = (data) => {
  return {
    type: types.ON_REMOVE_FAVORITE_REQUEST,
    data
  };
};

//Cart actions
export const addCart = (data) => {
  return {
    type: types.ADD_TO_CART_REQUEST,
    data,
  };
};
export const retriveCart = (data) => {
  return {
    type: types.RETRIVE_CART_REQUEST,
    data,
  };
};
export const removeCart = (data) => {
  return {
    type: types.REMOVE_FROM_CART_REQUEST,
    data,
  };
};
//What's new
export const getwhatsNew = (index, limit) => {
  return {
    type: types.GET_WHATSNEW_REQUEST,
    data: {
      index: index,
      limit: limit
    }
  };
};
export const getRestaurentDeatil = (data) => {
  return {
    type: types.GET_RESTAURENT_DETAIL_REQUEST,
    data,
  };
};
//GET_ALL_FAVORITE_RESTAURANT 
export const getFavorateRestaurent = (data) => {
  console.log('resssssssss', data)
  return {
    type: types.GET_ALL_FAVORITE_RESTAURANT_REQUEST,
    data
  };
};
//Add_FAVORITE_RESTAURANT 
export const addFavoriteRestaurant = (data) => {
  // console.log('okokokokoko',data)
  return {
    type: types.ADD_FAVORITE_RESTAURANT_REQUEST,
    data
  };
};
//REMOVE_FAVORITE_RESTAURANT
export const RemoveFavoriteRestaurant = (data) => {
  return {
    type: types.REMOVE_FAVORITE_RESTAURANT_REQUEST,
    data
  };
};
//GetDishByCusineId
export const GetDishByCusineId = (data) => {
  return {
    type: types.GET_DISH_BY_CUSINE_ID_REQUEST,
    data
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
