import types from './types';

//Login Action
export const loginUser = data => {
  return {
    type: types.LOGIN_USER_REQUEST,
    data: data,
  };
};
//Profile Data
export const getProfileData = data => {
  return {
    type: types.GET_USER_PROFILE_DATA_REQUEST,
    data: data,
  };
};
//Profile Data
export const getNotificationData = data => {
  return {
    type: types.GET_NOTIFICATION_REQUEST,
    data: data,
  };
};
//Search bar
export const SearchResult = (SearchText, selected) => {
  return {
    type: types.GET_SEARCH_REQUEST,
    data: {
      SearchText: SearchText,
      selected: selected
    }
  };
};
//More from rest
export const moreFromRestaurant = (id) => {
  return {
    type: types.MORE_FROM_RESTAURANT_REQUEST,
    data: id
  };
};
//GET PAYMENT HISTORY
export const GETPAYMENTHISTORY = (index, limit) => {
  return {
    type: types.GET_PAYMENT_HISTORY_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
  };
};
//APPLY FOR JOB

export const applyForJob = (data, navigation) => {
  return {
    type: types.GET_APPLY_FOR_JOB_REQUEST,
    data: data,
    navigation: navigation,
  };
};
//Register actions

export const registerUser = (data, navigation) => {
  return {
    type: types.REGISTER_USER_REQUEST,
    data: data,
    navigation: navigation,
  };
};
export const verifyUser = (code, navigation) => {
  return {
    type: types.VERIFY_USER_REQUEST,
    data: code,
    navigation: navigation,
  };
};
//people choice
export const getPeopleChoice = (index, limit) => {
  return {
    type: types.GET_PEOPLE_CHOICE_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
  };
};

//PROMOTIONS

export const getPromotions = (index, limit) => {
  return {
    type: types.GET_PROMOTIONS_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
  };
};
//Brunei Food Awards

export const getBruneiFoodRewards = (index, limit) => {
  return {
    type: types.GET_BRUNEI_FOOD_AWARDS_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
  };
};

//Get  Cusine

export const getUserCusine = (index, limit) => {
  return {
    type: types.GET_CUSINE_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
  };
};
//Get Recommendations
export const getBfaRecommendations = (index, limit) => {
  return {
    type: types.GET_BFA_RECOMMENDATION_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
  };
};
//GET FOOD PREFRENCES
export const getFoodPrefrences = (index, limit) => {
  return {
    type: types.GET_FOOD_PREFRENCES_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
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
      limit: limit,
    },
  };
};

//Get  BFA PARTNERS

export const getBfaPartners = data => {
  return {
    type: types.GET_BFA_PARTNERS_REQUEST,
    data: data,
  };
};

export const getRestaurantAllDishes = () => {
  return {
    type: types.GET_RESTAURANT_ALL_DISHES_REQUEST,
  };
};
export const getmoreaboutDish = id => {
  return {
    type: types.GET_MORE_ABOUT_DISHES_REQUEST,
    id: id,
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
      limit: limit,
    },
  };
};

export const addFavorite = data => {
  // console.log('okokokokoko',data)
  return {
    type: types.ADD_FAVORITE_REQUEST,
    data,
  };
};
export const onRemoveFavorite = data => {
  return {
    type: types.ON_REMOVE_FAVORITE_REQUEST,
    data,
  };
};

//Cart actions
export const addCart = data => {
  return {
    type: types.ADD_TO_CART_REQUEST,
    data,
  };
};
export const retriveCart = data => {
  return {
    type: types.RETRIVE_CART_REQUEST,
    data,
  };
};
export const removeCart = data => {
  return {
    type: types.REMOVE_FROM_CART_REQUEST,
    data,
  };
};
export const addOrder = (data, navigation) => {
  return {
    type: types.ADD_ORDER_REQUEST,
    data,
    navigation
  };
};
export const checkoutOrder = (data, navigation) => {
  return {
    type: types.CHECKOUT_ORDER_REQUEST,
    data,
    navigation
  };
};
//What's new
export const getwhatsNew = (index, limit) => {
  return {
    type: types.GET_WHATSNEW_REQUEST,
    data: {
      index: index,
      limit: limit,
    },
  };
};
export const getRestaurentDeatil = data => {
  return {
    type: types.GET_RESTAURENT_DETAIL_REQUEST,
    data,
  };
};
//GET_ALL_FAVORITE_RESTAURANT
export const getFavorateRestaurent = data => {
  console.log('resssssssss', data);
  return {
    type: types.GET_ALL_FAVORITE_RESTAURANT_REQUEST,
    data,
  };
};
//Add_FAVORITE_RESTAURANT
export const addFavoriteRestaurant = data => {
  // console.log('okokokokoko',data)
  return {
    type: types.ADD_FAVORITE_RESTAURANT_REQUEST,
    data,
  };
};
//REMOVE_FAVORITE_RESTAURANT
export const RemoveFavoriteRestaurant = data => {
  return {
    type: types.REMOVE_FAVORITE_RESTAURANT_REQUEST,
    data,
  };
};
//GetDishByCusineId
export const GetDishByCusineId = (index, limit, id) => {
  return {
    type: types.GET_DISH_BY_CUSINE_ID_REQUEST,
    data: {
      index: index,
      limit: limit,
      id: id,
    },
  };
};
//Get User categories actions
export const getOrders = params => {
  return {
    type: types.GET_ORDERS_REQUEST,
    params,
  };
};
export const getOrdersHistory = params => {
  return {
    type: types.GET_ORDERS_HISTORY_REQUEST,
    params,
  };
};
export const promotoinClick = data => {
  return {
    type: types.PROMOTION_CLICK_REQUEST,
    data: data,
  };
};

export const GetNearestRestaurantAction = data => {
  return {
    type: types.GET_NEAREST_RESTAURANT_REQUEST,
    data: data,
  };
};

export const GetAreaAllListAction = data => {
  return {
    type: types.GET_AREA_ALL_REQUEST,
    data: data,
  };
};

export const GetPremiseAllListAction = data => {
  return {
    type: types.GET_PREMISE_ALL_REQUEST,
    data: data,
  };
};

export const GetDistanceListAction = data => {
  return {
    type: types.GET_DISTANCE_LIST_REQUEST,
    data: data,
  };
};
export const getApplyJobList = data => {
  return {
    type: types.GET_APPLY_JOB_LIST_REQUEST,
    data: data,
  };
};
export const GetUserRandomiserSetting = data => {
  return {
    type: types.GET_USER_RANDOMISER_SETTING_REQUEST,
    data: data,
  };
};
// GetAllReviews
export const getAllReviews = data => {
  return {
    type: types.GET_ALL_REVIEWS_LIST_REQUEST,
    data: data,
  };
};

export const setTheme = data => {
  console.log('setTheme: ', data);
  return {
    type: types.SET_THEME,
    data: data,
  }
}
export const getBalicoins = data => {
  return {
    type: types.GET_BALI_COINS_REQUEST,
    data: data,
  }
}
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
