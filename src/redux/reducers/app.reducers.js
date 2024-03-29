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
    loading: false,
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
  getFoodPrefrences: {
    loading: false,
    data: [],
  },
  your_ordersList: {
    loading: false,
    data: [],
  },
  NearestRestaurants: {
    loading: false,
    data: [],
  },
  AllAreas: {
    loading: false,
    data: [],
  },
  AllPremises: {
    loading:false,
    data:[],
  },

  SearchResult: {
    loading: false,
    data: [],
  }
  ,
  orderHistory: {
    loading: false,
    data: [],
  },

  DistanceList: {
    loading: false,
    data: [],
  },
  getApplyJobList: {
    loading: false,
    data: [],
  },
  getUserRandomiserSetting: {
    loading: false,
    data: {},
  },
  getAllReviews: {
    loading: false,
    data: [],
  },
  getNotification: {
    loading: false,
    data: [],
  },
  setTheme: {
    data: true
  },
  getBaliCoins: {
    loading: false,
    data: {},
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
          data: [...state.bruneiFoodsAwards.data, ...action.payload],
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
      //NOTIFICATION
      case types.GET_NOTIFICATION_REQUEST:
        return {
          ...state,
          getNotification: {
            ...state.getNotification,
            loading: true,
          },
        };
      case types.GET_NOTIFICATION_SUCCESS:
        return {
          ...state,
          getNotification: {
            ...state.getNotification,
  
            data: action.payload,
            loading: false,
          },
        };
      case types.GET_NOTIFICATION_FAILURE:
        return {
          ...state,
          getNotification: {
            ...state.getNotification,
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

       //Get orders
    case types.GET_BALI_COINS_REQUEST:
      return {
        ...state,
        getBaliCoins: {
          ...state.getBaliCoins,
          loading: true,
        },
      };

    case types.GET_BALI_COINS_SUCCESS:

      return {
        ...state,
        getBaliCoins: {
          ...state.getBaliCoins,
          data: action.payload,
          loading: false,
        },
      };

    case types.GET_BALI_COINS_FAILURE:
      return {
        ...state,
        getBaliCoins: {
          ...state.getBaliCoins,
          data: action.payload,
          loading: false,
        },
      };
    //Get orders
    case types.GET_ORDERS_REQUEST:
      console.log("myyydataaaaaaa:", action.payload)
      return {
        ...state,
        your_ordersList: {
          ...state.your_ordersList,
          loading: true,
        },
      };

    case types.GET_ORDERS_SUCCESS:
      console.log("orderdata:", action.payload)

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
          data: action.payload,
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
    //Search Result
    case types.GET_SEARCH_REQUEST:
      return {
        ...state,
        SearchResult: {
          ...state.SearchResult,
          data: [],
          loading: true,
        },
      };

    case types.GET_SEARCH_SUCCESS:
      return {
        ...state,
        SearchResult: {
          ...state.SearchResult,
          data: action.payload,
          loading: false,
        },
      };

    case types.GET_SEARCH_FAILURE:
      return {
        ...state,
        SearchResult: {
          ...state.SearchResult,
          data: action.payload,
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
      // console.log('Dataaaaaa: ', action.payload);

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
          data: [],
          loading: true,
        },
      };
    case types.MORE_FROM_RESTAURANT_SUCCESS:
      console.log('Dataaaaaa: ', action.payload);

      return {
        ...state,
        moreFromRest: {
          ...state.moreFromRest,
          data: action.payload,
          loading: false,
        },
      };
    case types.MORE_FROM_RESTAURANT_FAILURE:
      return {
        ...state,
        moreFromRest: {
          ...state.moreFromRest,
          data: [],
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
            item => item.restaurantDishId !== action.payload.restaurantDishId,
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
          data: {},
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
          data: {},
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
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          refreshing: true,
        },
      };
    case types.ADD_FAVORITE_RESTAURANT_SUCCESS:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          data: [...state.favoriteRestaurant.data, action.payload],
          refreshing: false,
        },
      };
    case types.ADD_FAVORITE_RESTAURANT_FAILURE:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          refreshing: false,
        },
      };
    // REMOVE_FAVORITE_RESTAURANT
    case types.REMOVE_FAVORITE_RESTAURANT_REQUEST:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          refreshing: true,
        },
      };
    case types.REMOVE_FAVORITE_RESTAURANT_SUCCESS:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
          data: state.favoriteRestaurant.data.filter(
            item => item.id !== action.payload.id,
          ),
          refreshing: false,
        },
      };
    case types.REMOVE_FAVORITE_RESTAURANT_FAILURE:
      return {
        ...state,
        favoriteRestaurant: {
          ...state.favoriteRestaurant,
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
      // case types.GET_DISH_BY_CUSINE_ID_REQUEST:
      //   return {
      //     ...state,
      //     getdishbycusineid: {
      //       ...state.getdishbycusineid,
      //       refreshing: true,
      //     },
      //   };
      // case types.GET_DISH_BY_CUSINE_ID_SUCCESS:
      //   return {
      //     ...state,
      //     getdishbycusineid: {
      //       ...state.getdishbycusineid,
      //       data: [...state.getdishbycusineid.data, ...action.payload],
      //       refreshing: false,
      //     },
      //   };
      // case types.GET_DISH_BY_CUSINE_ID_FAILURE:
      //   return {
      //     ...state,
      //     getdishbycusineid: {
      //       ...state.getdishbycusineid,
      //       refreshing: false,
      //     },
      //   };
        //GetDishByCusineId
      case types.GET_NEAREST_RESTAURANT_REQUEST:
        return {
          ...state,
          NearestRestaurants: {
            ...state.NearestRestaurants,
            loading: true,
          },
        };
      case types.GET_NEAREST_RESTAURANT_SUCCESS:
        return {
          ...state,
          NearestRestaurants: {
            ...state.NearestRestaurants,
            data: action.payload,
            loading: false,
          },
        };
      case types.GET_NEAREST_RESTAURANT_FAILURE:
        return {
          ...state,
          NearestRestaurants: {
            ...state.NearestRestaurants,
            loading: false,
          },
        };
        case types.GET_AREA_ALL_REQUEST:
        return {
          ...state,
          AllAreas: {
            ...state.AllAreas,
            loading: true,
          },
        };
      case types.GET_AREA_ALL_SUCCESS:
        return {
          ...state,
          AllAreas: {
            ...state.AllAreas,
            data: action.payload,
            loading: false,
          },
        };
      case types.GET_AREA_ALL_FAILURE:
        return {
          ...state,
          AllAreas: {
            ...state.AllAreas,
            loading: false,
          },
        };
        //GetAllPremises
        case types.GET_PREMISE_ALL_REQUEST:
        return {
          ...state,
          AllPremises: {
            ...state.AllPremises,
            loading: true,
          },
        };
      case types.GET_PREMISE_ALL_SUCCESS:
        return {
          ...state,
          AllPremises: {
            ...state.AllPremises,
            data: action.payload,
            loading: false,
          },
        };
      case types.GET_PREMISE_ALL_FAILURE:
        return {
          ...state,
          AllPremises: {
            ...state.AllPremises,
            loading: false,
          },
        };
        
        case types.GET_DISTANCE_LIST_REQUEST:
        return {
          ...state,
          DistanceList: {
            ...state.DistanceList,
            loading: true,
          },
        };
      case types.GET_DISTANCE_LIST_SUCCESS:
        return {
          ...state,
          DistanceList: {
            ...state.DistanceList,
            data: action.payload,
            loading: false,
          },
        };
      case types.GET_DISTANCE_LIST_FAILURE:
        return {
          ...state,
          DistanceList: {
            ...state.DistanceList,
            loading: false,
          },
        };

    //GetDishByCusineId
    // case types.GET_DISH_BY_CUSINE_ID_REQUEST:
    //   return {
    //     ...state,
    //     getdishbycusineid: {
    //       ...state.getdishbycusineid,
    //       refreshing: true,
    //     },
    //   };
    // case types.GET_DISH_BY_CUSINE_ID_SUCCESS:
    //   return {
    //     ...state,
    //     getdishbycusineid: {
    //       ...state.getdishbycusineid,
    //       data: [...state.getdishbycusineid.data, ...action.payload],
    //       refreshing: false,
    //     },
    //   };
    // case types.GET_DISH_BY_CUSINE_ID_FAILURE:
    //   return {
    //     ...state,
    //     getdishbycusineid: {
    //       ...state.getdishbycusineid,
    //       refreshing: false,
    //     },
    //   };
    //GetNearestRestaurant
    // case types.GET_NEAREST_RESTAURANT_REQUEST:
    //   return {
    //     ...state,
    //     NearestRestaurants: {
    //       ...state.NearestRestaurants,
    //       loading: true,
    //     },
    //   };
    // case types.GET_NEAREST_RESTAURANT_SUCCESS:
    //   return {
    //     ...state,
    //     NearestRestaurants: {
    //       ...state.NearestRestaurants,
    //       data: action.payload,
    //       loading: false,
    //     },
    //   };
    // case types.GET_NEAREST_RESTAURANT_FAILURE:
    //   return {
    //     ...state,
    //     NearestRestaurants: {
    //       ...state.NearestRestaurants,
    //       loading: false,
    //     },
    //   };
    // case types.GET_AREA_ALL_REQUEST:
    //   return {
    //     ...state,
    //     AllAreas: {
    //       ...state.NearestRestaurants,
    //       loading: true,
    //     },
    //   };
    // case types.GET_AREA_ALL_SUCCESS:
    //   return {
    //     ...state,
    //     AllAreas: {
    //       ...state.NearestRestaurants,
    //       data: action.payload,
    //       loading: false,
    //     },
    //   };
    // case types.GET_AREA_ALL_FAILURE:
    //   return {
    //     ...state,
    //     AllAreas: {
    //       ...state.NearestRestaurants,
    //       loading: false,
    //     },
    //   };
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
    //orderHistory
    case types.GET_ORDERS_HISTORY_REQUEST:
      return {
        ...state,
        orderHistory: {
          ...state.orderHistory,
          loading: true,
        },
      };
    case types.GET_ORDERS_HISTORY_SUCCESS:
      const key = 'id';

      const arrayUniqueByKey = [...new Map([...action.payload, ...state.orderHistory.data].map(item =>
        [item[key], item])).values()];
      return {
        ...state,
        orderHistory: {
          ...state.orderHistory,
          data: arrayUniqueByKey,
          loading: false,
        },
      };
    case types.GET_ORDERS_HISTORY_FAILURE:
      return {
        ...state,
        orderHistory: {
          ...state.orderHistory,
          loading: false,
        },
      };
      //GetAppliedJobs
    case types.GET_APPLY_JOB_LIST_REQUEST:
      return {
        ...state,
        getApplyJobList: {
          ...state.getApplyJobList,
          loading: true,
        },
      };
    case types.GET_APPLY_JOB_LIST_SUCCESS:
      return {
        ...state,
        getApplyJobList: {
          ...state.ApplyJobList,
          data: action.payload,
          loading: false,
        },
      };
    case types.GET_APPLY_JOB_LIST_FAILURE:
      return {
        ...state,
        getApplyJobList: {
          ...state.getApplyJobList,
          loading: false,
        },
      };
      //getUserRandomiserSetting
      case types.GET_USER_RANDOMISER_SETTING_REQUEST:
        return {
          ...state,
          getUserRandomiserSetting: {
            ...state.getUserRandomiserSetting,
            loading: true,
          },
        };
      case types.GET_USER_RANDOMISER_SETTING_SUCCESS:
        return {
          ...state,
          getUserRandomiserSetting: {
            ...state.getUserRandomiserSetting,
            data: action.payload,
            success: action.success,
            loading: false,
          },
        };
      case types.GET_USER_RANDOMISER_SETTING_FAILURE:
        return {
          ...state,
          getUserRandomiserSetting: {
            ...state.getUserRandomiserSetting,
            success: action.success,
            loading: false,
          },
        };
      // GetAllReviews
    case types.GET_ALL_REVIEWS_LIST_REQUEST:
      return {
        ...state,
        getAllReviews: {
          ...state.getAllReviews,
          loading: true,
        },
      };
    case types.GET_ALL_REVIEWS_LIST_SUCCESS:
      return {
        ...state,
        getAllReviews: {
          ...state.getAllReviews,
          data: action.payload,
          loading: false,
        },
      };
    case types.GET_ALL_REVIEWS_LIST_FAILURE:
      return {
        ...state,
        getAllReviews: {
          ...state.getAllReviews,
          loading: false,
        },
      };
      case types.SET_THEME:
        return {
          ...state,
          setTheme: {
            data: typeof(action.data) === 'boolean'  ? action.data : true
          }
        }
    default:
      return state;
  }
};
