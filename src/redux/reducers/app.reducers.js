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
  recommendationDetail: {
    refreshing: false,
    data: {},
  },
  cusineDetail:{
    refreshing: false,
    data: {},
  },
  bfaRecommendationDetail:{
    refreshing: false,
    data: {},
  },
  restaurantDishesDetail:{
    refreshing: false,
    data: {},
  },
  userProfile:{
    loading: false,
    data: {},
  },
  addBanner:{
    loading: false,
    data: {},
  },
  PromoNews:{
    loading: false,
    data: {},
  },

  bfaPartners:{
    refreshing: true,
    data: {},
  },

  promoJobs:{
    refreshing: true,
    data: {},
  },

  AddOrder:{
    refreshing: true,
    data: {},
  },
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
      case types.ADD_ORDER_REQUEST:
      return {
        ...state,
        AddOrder:{
          ...state.AddOrder,
          loading:true
        }
      };
      
      case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        AddOrder:{
          ...state.AddOrder,
          data:action.payload,
          loading:false
        }
      };
      
      case types.ADD_ORDER_FAILURE:
      return {
        ...state,
        AddOrder:{
          ...state.AddOrder,
          loading:false
        }
      };
      case types.GET_RESTAURANT_ALL_DISHES_SUCCESS:
      return {
        ...state,
        cusineDetail:{
          ...state.restaurantDishesDetail,
          data:action.payload
        }
      };
      case types.GET_USERS_BY_ID_SUCCESS:
      return {
        ...state,
        userProfile:{
          ...state.userProfile,
          data:action.payload,
          loading:false
          
        }
      };
      case types.GET_BFA_RECOMMENDATION_REQUEST:
      return {
        ...state,
        bfaRecommendationDetail:{
          ...state.bfaRecommendationDetail,
          loading:false
          
        }
      };
      case types.GET_BFA_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        bfaRecommendationDetail:{
          ...state.bfaRecommendationDetail,
          data:action.payload,
          loading:false
          
        }
      };
      case types.GET_BFA_RECOMMENDATION_FAILURE:
      return {
        ...state,
        bfaRecommendationDetail:{
          ...state.bfaRecommendationDetail,
          loading:false
          
        }
      };
      
      case types.GET_USERS_BY_ID_FAILURE:
      return {
        ...state,
        userProfile:{
          ...state.userProfile,
          loading:false
        }
      };
      case types.GET_BFA_RECOMMENDATION_REQUEST:
        return {
          ...state,
          recommendationDetail:{
            ...state.recommendationDetail,
            loading:true,
          }
        };
        case types.GET_BFA_RECOMMENDATION_SUCCESS:
          return {
            ...state,
            recommendationDetail:{
              ...state.recommendationDetail,
              data:action.payload,
              loading:false
            }
          };
          case types.GET_BFA_RECOMMENDATION_FAILURE:
          return {
            ...state,
            recommendationDetail:{
              ...state.recommendationDetail,
              loading:false
            }
          };
      case types.GET_USERS_BY_ID_REQUEST:
      return {
        ...state,
        userProfile:{
          ...state.userProfile,
          loading:true,
        }
      };
      case types.GET_ADD_BANNER_DATA_REQUEST:
      return {
        ...state,
        addBanner:{
          ...state.addBanner,
          loading:true,
        }
      };
      case types.GET_ADD_BANNER_DATA_SUCCESS:
      return {
        ...state,
        addBanner:{
          ...state.addBanner,
          data:action.payload,
          loading:false,
        }
      };
      case types.GET_ADD_BANNER_DATA_FAILURE:
      return {
        ...state,
        addBanner:{
          ...state.addBanner,
          loading:false,
        }
      };
      case types.GET_PROMO_NEWS_REQUEST:
      return {
        ...state,
        PromoNews:{
          ...state.PromoNews,
          loading:false,
        }
      };
      case types.GET_PROMO_NEWS_SUCCESS:
      return {
        ...state,
        PromoNews:{
          ...state.PromoNews,
          data:action.payload,
          loading:false,
        }
      };
      case types.GET_PROMO_NEWS_FAILURE:
      return {
        ...state,
        PromoNews:{
          ...state.PromoNews,
          loading:false,
        }
      };

      case types.GET_PROMO_JOBS_REQUEST:
      return {
        ...state,
        promoJobs:{
          ...state.promoJobs,
          loading:true,
        }
      };

      case types.GET_PROMO_JOBS_SUCCESS:
      return {
        ...state,
        promoJobs:{
          ...state.promoJobs,
          data:action.payload,
          loading:false,
        }
      };

      case types.GET_PROMO_JOBS_FAILURE:
      return {
        ...state,
        promoJobs:{
          ...state.promoJobs,
          loading:false,
        }
      };
      case types.GET_BFA_PARTNERS_SUCCESS:
      return {
        ...state,
        bfaPartners:{
          ...state.bfaPartners,
          data:action.payload,
          refreshing:false
          
        }
      };

      case types.GET_BFA_PARTNERS_FAILURE:
      return {
        ...state,
        bfaPartners:{
          ...state.bfaPartners,
          refreshing:false
        }
      };

      case types.GET_BFA_PARTNERS_REQUEST:
      return {
        ...state,
        bfaPartners:{
          ...state.bfaPartners,
          refreshing:true
        }
      };
      

    default:
      return state;
  }
};
