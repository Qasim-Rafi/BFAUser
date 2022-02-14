import AsyncStorage from '@react-native-community/async-storage';
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
  bruneiFoodsAwards: {
    refreshing: true,
    data: [],
  },
  recommendationDetail: {
    refreshing: false,
    data: {},
  },
  profileData: {
    refreshing: false,
    data: {},
  },
  cusineDetail: {
    loading: false,
    data: {},
  },
  bfaRecommendationDetail: {
    loading: false,
    data: [],
  },
  restaurantDishesDetail: {
    refreshing: false,
    data: {},
  },

  addBanner: {
    loading: false,
    data: {},
  },
  PromoNews: {
    loading: false,
    data: [],
  },

  bfaPartners: {
    refreshing: true,
    data: [],
  },
  PeopleChoice: {
    loading: false,
    data: [],
  },

  promoJobs: {
    refreshing: true,
    data: [],
  },

  AddOrder: {
    refreshing: true,
    data: {},
  },
  promotions: {
    refreshing: true,
    data: [],
  },
  favorite: {
    refreshing: true,
    data: [],
  },
  cartList: {
    refreshing: true,
    data: [],
  },
  whatsnew: {
    refreshing: true,
    data: [],
  },
  restaurantDetail: {
    refreshing: true,
    data: {},
  },
  favoriteRestaurant: {
    refreshing: true,
    data: [],
  },
  AddfavoriteRestaurant: {
    refreshing: true,
    data: [],
  },
  moreaboutDishDetail: {
    loading: false,
    data: [],
  },
  applyForJob: {
    loading: false,
    data: [],
  },
  moreFromRest: {
    loading: false,
    data: [],
  },
  getdishbycusineid: {
    loading: false,
    data: [],
  },
  getPaymentHistory: {
    loading: false,
    data: [],
  },
  getFoodPrefrences:{
    loading: false,
    data: [],
  }
  your_ordersList: {
    loading: false,
    data: [],
  },
};

export const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_DATA_REQUEST:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          loading: true,
        },
      };
    case types.GET_USER_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          data: action.payload,
          loading: false,
        },
      };
    case types.GET_USER_PROFILE_DATA_FAILURE:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          loading: false,
        },
      };
    case types.GET_BRUNEI_FOOD_AWARDS_REQUEST:
      return {
        ...state,
        bruneiFoodsAwards: {
          ...state.bruneiFoodsAwards,
          loading: true,
        },
      };
    case types.GET_BRUNEI_FOOD_AWARDS_SUCCESS:
      return {
        ...state,
        bruneiFoodsAwards: {
          ...state.bruneiFoodsAwards,

          data: action.payload,
          loading: false,
        },
      };
    case types.GET_BRUNEI_FOOD_AWARDS_FAILURE:
      return {
        ...state,
        bruneiFoodsAwards: {
          ...state.bruneiFoodsAwards,
          loading: false,
        },
      };
    case types.GET_CUSINE_REQUEST:
      return {
        ...state,
        cusineDetail: {
          ...state.cusineDetail,
          loading: true,
        },
      };
    case types.GET_CUSINE_SUCCESS:
      return {
        ...state,
        cusineDetail: {
          ...state.cusineDetail,
          data: action.payload,
          loading: false,
        },
      };
    case types.GET_CUSINE_FAILURE:
      return {
        ...state,
        cusineDetail: {
          ...state.cusineDetail,
          loading: false,
        },
      };
    case types.ADD_ORDER_REQUEST:
      return {
        ...state,
        AddOrder: {
          ...state.AddOrder,
          loading: true,
        },
      };

    case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        AddOrder: {
          ...state.AddOrder,
          data: action.payload,
          loading: false,
        },
      };

    case types.ADD_ORDER_FAILURE:
      return {
        ...state,
        AddOrder: {
          ...state.AddOrder,
          loading: false,
        },
      };
      case types.GET_ORDERS_REQUEST:
        return {
          ...state,
          your_ordersList: {
            ...state.your_ordersList,
            loading: true,
          },
        };
  
      case types.GET_ORDERS_SUCCESS:
        return {
          ...state,
          your_ordersList: {
            ...state.your_ordersList,
            data: action.payload,
            loading: false,
          },
        };
  
      case types.GET_ORDERS_FAILURE:
        return {
          ...state,
          your_ordersList: {
            ...state.your_ordersList,
            loading: false,
          },
        };
    case types.GET_APPLY_FOR_JOB_REQUEST:
      return {
        ...state,
        applyForJob: {
          ...state.applyForJob,
          loading: true,
        },
      };

    case types.GET_APPLY_FOR_JOB_SUCCESS:
      return {
        ...state,
        applyForJob: {
          ...state.applyForJob,
          data: action.payload,
          loading: false,
        },
      };

    case types.GET_APPLY_FOR_JOB_FAILURE:
      return {
        ...state,
        applyForJob: {
          ...state.applyForJob,
          loading: false,
        },
      };
    case types.GET_PROMOTIONS_REQUEST:
      return {
        ...state,
        promotions: {
          ...state.promotions,
          loading: true,
        },
      };

    case types.GET_PROMOTIONS_SUCCESS:
      return {
        ...state,
        promotions: {
          ...state.promotions,
          data: [...state.promotions.data, ...action.payload],
          loading: false,
        },
      };

    case types.GET_PROMOTIONS_FAILURE:
      return {
        ...state,
        promotions: {
          ...state.promotions,
          loading: false,
        },
      };
      //Payment history
      case types.GET_PAYMENT_HISTORY_REQUEST:
      return {
        ...state,
        getPaymentHistory: {
          ...state.getPaymentHistory,
          loading: true,
        },
      };

    case types.GET_PAYMENT_HISTORY_SUCCESS:
      return {
        ...state,
        getPaymentHistory: {
          ...state.getPaymentHistory,
          data: [...state.getPaymentHistory.data, ...action.payload],
          loading: false,
        },
      };

    case types.GET_PAYMENT_HISTORY_FAILURE:
      return {
        ...state,
        getPaymentHistory: {
          ...state.getPaymentHistory,
          loading: false,
        },
      };
    case types.GET_RESTAURANT_ALL_DISHES_SUCCESS:
      return {
        ...state,
        cusineDetail: {
          ...state.restaurantDishesDetail,
          data: action.payload,
        },
      };
    //Bfa Rrecommendations
    case types.GET_BFA_RECOMMENDATION_REQUEST:
      return {
        ...state,
        bfaRecommendationDetail: {
          ...state.bfaRecommendationDetail,
          loading: true,
        },
      };
    case types.GET_BFA_RECOMMENDATION_SUCCESS:
      console.log('Dataaaaaa: ', action.payload);

      return {
        ...state,
        bfaRecommendationDetail: {
          ...state.bfaRecommendationDetail,
          data: [...state.bfaRecommendationDetail.data, ...action.payload],
          loading: false,
        },
      };
    case types.GET_BFA_RECOMMENDATION_FAILURE:
      return {
        ...state,
        bfaRecommendationDetail: {
          ...state.bfaRecommendationDetail,
          loading: false,
        },
      };
      //get Food Prefrences
      case types.GET_FOOD_PREFRENCES_REQUEST:
        return {
          ...state,
          getFoodPrefrences: {
            ...state.getFoodPrefrences,
            loading: true,
          },
        };
      case types.GET_FOOD_PREFRENCES_SUCCESS:
        console.log('Dataaaaaa: ', action.payload);
  
        return {
          ...state,
          getFoodPrefrences: {
            ...state.getFoodPrefrences,
            data: [...state.getFoodPrefrences.data, ...action.payload],
            loading: false,
          },
        };
      case types.GET_FOOD_PREFRENCES_FAILURE:
        return {
          ...state,
          getFoodPrefrences: {
            ...state.getFoodPrefrences,
            loading: false,
          },
        };
    //Moore From Restraurant
    case types.MORE_FROM_RESTAURANT_REQUEST:
      return {
        ...state,
        moreFromRest: {
          ...state.moreFromRest,
          loading: true,
        },
      };
    case types.MORE_FROM_RESTAURANT_SUCCESS:
      console.log('Dataaaaaa: ', action.payload);

      return {
        ...state,
        moreFromRest: {
          ...state.moreFromRest,
          data: [...state.moreFromRest.data, ...action.payload],
          loading: false,
        },
      };
    case types.MORE_FROM_RESTAURANT_FAILURE:
      return {
        ...state,
        moreFromRest: {
          ...state.moreFromRest,
          loading: false,
        },
      };
    //people_Choice
    case types.GET_PEOPLE_CHOICE_REQUEST:
      return {
        ...state,
        PeopleChoice: {
          ...state.PeopleChoice,
          loading: true,
        },
      };
    case types.GET_PEOPLE_CHOICE_SUCCESS:
      return {
        ...state,
        PeopleChoice: {
          ...state.PeopleChoice,
          data: [...state.PeopleChoice.data, ...action.payload],

          loading: false,
        },
      };
    case types.GET_PEOPLE_CHOICE_FAILURE:
      return {
        ...state,
        PeopleChoice: {
          ...state.PeopleChoice,
          loading: false,
        },
      };

    case types.GET_ADD_BANNER_DATA_REQUEST:
      return {
        ...state,
        addBanner: {
          ...state.addBanner,
          loading: true,
        },
      };
    case types.GET_ADD_BANNER_DATA_SUCCESS:
      return {
        ...state,
        addBanner: {
          ...state.addBanner,
          data: action.payload,
          loading: false,
        },
      };
    case types.GET_ADD_BANNER_DATA_FAILURE:
      return {
        ...state,
        addBanner: {
          ...state.addBanner,
          loading: false,
        },
      };
    case types.GET_PROMO_NEWS_REQUEST:
      return {
        ...state,
        PromoNews: {
          ...state.PromoNews,
          loading: false,
        },
      };
    case types.GET_PROMO_NEWS_SUCCESS:
      return {
        ...state,
        PromoNews: {
          ...state.PromoNews,
          data: action.payload,
          loading: false,
        },
      };
    case types.GET_PROMO_NEWS_FAILURE:
      return {
        ...state,
        PromoNews: {
          ...state.PromoNews,
          loading: false,
        },
      };

    case types.GET_PROMO_JOBS_REQUEST:
      return {
        ...state,
        promoJobs: {
          ...state.promoJobs,
          loading: true,
        },
      };

    case types.GET_PROMO_JOBS_SUCCESS:
      return {
        ...state,
        promoJobs: {
          ...state.promoJobs,
          data: action.payload,
          loading: false,
        },
      };

    case types.GET_PROMO_JOBS_FAILURE:
      return {
        ...state,
        promoJobs: {
          ...state.promoJobs,
          loading: false,
        },
      };
    case types.GET_BFA_PARTNERS_SUCCESS:
      return {
        ...state,
        bfaPartners: {
          ...state.bfaPartners,
          data: action.payload,
          refreshing: false,
        },
      };

    case types.GET_BFA_PARTNERS_FAILURE:
      return {
        ...state,
        bfaPartners: {
          ...state.bfaPartners,
          refreshing: false,
        },
      };

    case types.GET_BFA_PARTNERS_REQUEST:
      return {
        ...state,
        bfaPartners: {
          ...state.bfaPartners,
          refreshing: true,
        },
      };
    //Add to Cart
    case types.ADD_TO_CART_SUCCESS:
      AsyncStorage.setItem('cartData', JSON.stringify([...state.cartList.data, action.payload]));
      return {
        ...state,
        cartList: {
          ...state.cartList,
          data: [...state.cartList.data, action.payload],
          //state.cartList.data.push(action.payload)
          refreshing: false,
        },
      };
    case types.RETRIVE_CART_SUCCESS:
      AsyncStorage.setItem('cartData', JSON.stringify(action.payload));
      return {
        ...state,
        cartList: {
          ...state.cartList,
          data: action.payload,
          refreshing: false,
        },
      };
    case types.ADD_TO_CART_FAILURE:
      return {
        ...state,
        cartList: {
          ...state.cartList,
          refreshing: false,
        },
      };

    case types.ADD_TO_CART_REQUEST:
      return {
        ...state,
        cartList: {
          ...state.cartList,
          refreshing: true,
        },
      };

    //Remove from Cart
    case types.REMOVE_FROM_CART_SUCCESS:
      AsyncStorage.setItem('cartData', JSON.stringify(state.cartList.data.filter(
        item => item.id !== action.payload.id,
      )));

      return {
        ...state,
        cartList: {
          ...state.cartList,
          data: state.cartList.data.filter(
            item => item.id !== action.payload.id,
          ),
          refreshing: false,
        },
      };

    case types.REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        cartList: {
          ...state.cartList,
          refreshing: false,
        },
      };

    case types.REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        cartList: {
          ...state.cartList,
          refreshing: true,
        },
      };
    //GET FAVORITES
    case types.GET_FAVORITE_REQUEST:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          refreshing: true,
        },
      };
    case types.GET_FAVORITE_SUCCESS:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          data: [...state.favorite.data, ...action.payload],
          refreshing: false,
        },
      };
    case types.GET_FAVORITE_FAILURE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          refreshing: false,
        },
      };
    ///////Add Favrite
    case types.ADD_FAVORITE_REQUEST:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          refreshing: true,
        },
      };
    case types.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          data: [...state.favorite.data, action.payload],
          refreshing: false,
        },
      };
    case types.ADD_FAVORITE_FAILURE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          refreshing: false,
        },
      };
    //Remove Favrite
    case types.ON_REMOVE_FAVORITE_REQUEST:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          refreshing: true,
        },
      };
    case types.ON_REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          data: state.favorite.data.filter(
            item => item.id !== action.payload.id,
          ),
          refreshing: false,
        },
      };
    case types.ON_REMOVE_FAVORITE_FAILURE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          refreshing: false,
        },
      };
    //////What's News/////
    case types.GET_WHATSNEW_REQUEST:
      return {
        ...state,
        whatsnew: {
          ...state.whatsnew,
          refreshing: true,
        },
      };
    case types.GET_WHATSNEW_SUCCESS:
      return {
        ...state,
        whatsnew: {
          ...state.whatsnew,
          data: [...state.whatsnew.data, ...action.payload],
          refreshing: false,
        },
      };
    case types.GET_WHATSNEW_FAILURE:
      return {
        ...state,
        whatsnew: {
          ...state.whatsnew,
          refreshing: false,
        },
      };
    //////GET_RESTAURENT_DETAIL_REQUEST

    case types.GET_RESTAURENT_DETAIL_REQUEST:
      return {
        ...state,
        restaurantDetail: {
          ...state.restaurantDetail,
          data:{},
          refreshing: true,
        },
      };
    case types.GET_RESTAURENT_DETAIL_SUCCESS:
      return {
        ...state,
        restaurantDetail: {
          ...state.restaurantDetail,
          data: action.payload,
          refreshing: false,
        },
      };
    case types.GET_RESTAURENT_DETAIL_FAILURE:
      return {
        ...state,
        restaurantDetail: {
          ...state.restaurantDetail,
          data:{},
          refreshing: false,
        },
      };
    //GET_ALL_FAVORITE_RESTAURANT
    case types.GET_ALL_FAVORITE_RESTAURANT_REQUEST:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          refreshing: true,
        },
      };
    case types.GET_ALL_FAVORITE_RESTAURANT_SUCCESS:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          data: action.payload,
          refreshing: false,
        },
      };
    case types.GET_ALL_FAVORITE_RESTAURANT_FAILURE:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          refreshing: false,
        },
      };
    ///////Add Favrite Restaurant
    case types.ADD_FAVORITE_RESTAURANT_REQUEST:
      return {
        ...state,
        AddfavoriteRestaurant: {
          ...state.AddfavoriteRestaurant,
          refreshing: true,
        },
      };
    case types.ADD_FAVORITE_RESTAURANT_SUCCESS:
      return {
        ...state,
        AddfavoriteRestaurant: {
          ...state.AddfavoriteRestaurant,
          data: [...state.favorite.data, action.payload],
          refreshing: false,
        },
      };
    case types.ADD_FAVORITE_RESTAURANT_FAILURE:
      return {
        ...state,
        AddfavoriteRestaurant: {
          ...state.AddfavoriteRestaurant,
          refreshing: false,
        },
      };
    // REMOVE_FAVORITE_RESTAURANT
    case types.REMOVE_FAVORITE_RESTAURANT_REQUEST:
      return {
        ...state,
        AddfavoriteRestaurant: {
          ...state.AddfavoriteRestaurant,
          refreshing: true,
        },
      };
    case types.REMOVE_FAVORITE_RESTAURANT_SUCCESS:
      return {
        ...state,
        AddfavoriteRestaurant: {
          ...state.AddfavoriteRestaurant,
          data: state.AddfavoriteRestaurant.data.filter(
            item => item.id !== action.payload,
          ),
          refreshing: false,
        },
      };
    case types.REMOVE_FAVORITE_RESTAURANT_FAILURE:
      return {
        ...state,
        AddfavoriteRestaurant: {
          ...state.AddfavoriteRestaurant,
          refreshing: false,
        },
      };
    case types.GET_MORE_ABOUT_DISHES_REQUEST:
      return {
        ...state,
        moreaboutDishDetail: {
          ...state.moreaboutDishDetail,
          loading: true,
        },
      };

    case types.GET_MORE_ABOUT_DISHES_SUCCESS:
      return {
        ...state,
        moreaboutDishDetail: {
          ...state.moreaboutDishDetail,
          data: action.payload,
          loading: false,
        },
      };

    case types.GET_MORE_ABOUT_DISHES_FAILURE:
      return {
        ...state,
        moreaboutDishDetail: {
          ...state.moreaboutDishDetail,
          loading: false,
        },
      };
      //GetDishByCusineId
      case types.GET_DISH_BY_CUSINE_ID_REQUEST:
        return {
          ...state,
          getdishbycusineid: {
            ...state.getdishbycusineid,
            refreshing: true,
          },
        };
      case types.GET_DISH_BY_CUSINE_ID_SUCCESS:
        return {
          ...state,
          getdishbycusineid: {
            ...state.getdishbycusineid,
            data: [...state.getdishbycusineid.data, ...action.payload],
            refreshing: false,
          },
        };
      case types.GET_DISH_BY_CUSINE_ID_FAILURE:
        return {
          ...state,
          getdishbycusineid: {
            ...state.getdishbycusineid,
            refreshing: false,
          },
        };
    default:
      return state;
  }

};
