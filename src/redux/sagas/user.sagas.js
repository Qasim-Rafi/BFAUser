import AsyncStorage from '@react-native-community/async-storage';
import {takeLatest, put, select} from 'redux-saga/effects';
import {routeName} from '../../constants/routeName';
// import { parseCats } from "../../helpers/cat.helpers";
import types from '../actions/types';
import Api from '../lib/api';
import urls from '../lib/urls';
import axios from 'axios';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import {StackActions} from '@react-navigation/native';

//Register user saga
export function* loginUserSaga() {
  console.log('saga function Works');
  yield takeLatest(types.LOGIN_USER_REQUEST, loginUserApi);
}
function* loginUserApi(data, response) {
  console.log(data, 'action in saga');
  // alert("response: ", response.success);
  let {params, navigation} = data.data;
  try {
    const response = yield Api.post(urls.LOGIN_URL, params);
    console.log(response, 'response');
    // alert("response: ", response);

    // dispatch a success action to the store with the new dog
    if (response && response.data != null) {
      yield AsyncStorage.setItem('@token', response.data.token);
      yield AsyncStorage.setItem('@userId', response.data.loggedInUserId);
      yield put({type: types.LOGIN_USER_SUCCESS, payload: response});
      navigation.dispatch(StackActions.replace('Home'));
    } else {
      yield put({type: types.LOGIN_USER_FAILURE, payload: response});
      // showMessage({
      //   message: "Error",
      //   description: "Invalid Username or Password",
      //   type: "danger",
      //   icon: { icon: "auto", position: "left" },
      // });
    }
  } catch (error) {
    yield put({type: types.LOGIN_USER_FAILURE, error: error});
    console.log(error, 'error saga catch');

    // showMessage({
    //   message: "Error",
    //   description: "Check Your Internet Connection",
    //   type: "danger",
    //   icon: { icon: "auto", position: "left" },
    // });
    yield put({type: types.LOGIN_USER_FAILURE, error: error});
  }
}
//REGISTERATION
export function* registerUserSaga() {
  console.log('saga function Works');
  yield takeLatest(types.REGISTER_USER_REQUEST, registerUserApi);
}
function* registerUserApi(data, response) {
  console.log(data, 'action in saga');
  // alert("response: ", response.success);
  let body = data.data;
  let navigation = data.navigation;
  try {
    const response = yield Api.post(urls.REGISTER_URL, body);
    console.log(response, 'responsefasfsdf');
    // alert("response: ", response);

    // dispatch a success action to the store with the new dog
    if (response && response.success == true) {
      // yield AsyncStorage.setItem('@token', response.data.token);
      // yield AsyncStorage.setItem('@userId', response.data.loggedInUserId);
      yield put({type: types.REGISTER_USER_SUCCESS, payload: response});
      navigation.navigate(routeName.VERIFICATION_CODE);
    } else {
      yield put({type: types.REGISTER_USER_FAILURE, payload: response});
      // showMessage({
      //   message: "Error",
      //   description: "Invalid Username or Password",
      //   type: "danger",
      //   icon: { icon: "auto", position: "left" },
      // });
    }
  } catch (error) {
    yield put({type: types.REGISTER_USER_FAILURE, error: error});
    console.log(error, 'error saga catch');

    // showMessage({
    //   message: "Error",
    //   description: "Check Your Internet Connection",
    //   type: "danger",
    //   icon: { icon: "auto", position: "left" },
    // });
  }
}
//Applyfor Job
export function* applyJobSaga() {
  console.log('saga function Works');
  yield takeLatest(types.GET_APPLY_FOR_JOB_REQUEST, applyJobApi);
}
function* applyJobApi(data, response) {
  console.log(data, 'action in saga');
  // alert("response: ", response.success);
  let body = data.data;
  let navigation = data.navigation;
  let formData = true;
  console.log('bodyyyyyyy:', body);
  try {
    const response = yield Api.post(urls.APPLY_FOR_JOBS, body, formData);
    console.log(response, 'responsefasfsdf');
    if (response && response.success == true) {
      yield put({type: types.GET_APPLY_FOR_JOB_SUCCESS, payload: response});
      console.log('reponsessssss:', response);
      showMessage({
        message: 'Succes',
        description: 'Submit successfully',
        type: 'success',
        icon: {icon: 'auto', position: 'left'},
      });
      navigation.goBack();
    } else {
      yield put({type: types.GET_APPLY_FOR_JOB_FAILURE, payload: response});
    }
  } catch (error) {
    yield put({type: types.REGISTER_USER_FAILURE, error: error});
    console.log(error, 'error saga catch');
  }
}
//Verification
export function* verifyUserSaga() {
  console.log('saga function Works');
  yield takeLatest(types.VERIFY_USER_REQUEST, verifyUserApi);
}
function* verifyUserApi(data, response) {
  console.log(data, 'action in saga');
  // alert("response: ", response.success);
  let body = {code: 0};
  let navigation = data.navigation;
  try {
    const response = yield Api.put(urls.VERIFICATION_CODE, body);
    console.log('resssssssss', response);
    if (response && response.success == true) {
      navigation.navigate(routeName.LOGIN);
    } else {
    }
  } catch (error) {}
}
//GET_USER PROFILE DATA
export function* getProfileDataSaga() {
  yield takeLatest(types.GET_USER_PROFILE_DATA_REQUEST, getProfileDataSagaApi);
}
function* getProfileDataSagaApi(data) {
  try {
    const profileId = yield AsyncStorage.getItem('@userId');
    console.log('profile iddddddddd:', profileId);
    const response = yield Api.get(urls.GET_PROFILE_DATA + profileId);
    if (response && response.data != null) {
      yield put({
        type: types.GET_USER_PROFILE_DATA_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({type: types.GET_USER_PROFILE_DATA_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_USER_PROFILE_DATA_FAILURE, error: error});
  }
}
//People Choice
export function* getPeopleChoiceSaga() {
  yield takeLatest(types.GET_PEOPLE_CHOICE_REQUEST, getPeopleChoiceSagaApi);
}
function* getPeopleChoiceSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;
  try {
    const url = urls.PEOPLE_CHOICE + index + '/' + limit;
    console.log('People Choiceeeeeeeeeeeeeeee: ', url);
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.GET_PEOPLE_CHOICE_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({type: types.GET_PEOPLE_CHOICE_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_PEOPLE_CHOICE_FAILURE, error: error});
  }
}
//GET PAYMENT HISTORY
export function* getPaymentHistorySaga() {
  yield takeLatest(types.GET_PAYMENT_HISTORY_REQUEST, getPaymentHistorySagaApi);
}
function* getPaymentHistorySagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;
  try {
    const url = urls.PEOPLE_CHOICE + index + '/' + limit;
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.GET_PAYMENT_HISTORY_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({type: types.GET_PAYMENT_HISTORY_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_PAYMENT_HISTORY_FAILURE, error: error});
  }
}
// //Add Order
// export function* addOrderSaga() {
//   console.log('saga function Works');
//   yield takeLatest(types.ADD_ORDER_REQUEST, addOrderApi);
// }
// function* addOrderApi(data) {
//   console.log(data, 'action in saga');
//   let {params, navigation} = data.data;
//   try {
//     const response = yield Api.post(urls.ADD_ORDER, params);
//     console.log(response, 'response');
//     // dispatch a success action to the store with the new dog
//     if (response && response.data != null) {
//       yield AsyncStorage.setItem('@token', response.data.token);
//       yield AsyncStorage.setItem('@userId', response.data.loggedInUserId);
//       yield put({type: types.ADD_ORDER_SUCCESS, payload: response.data});
//       // navigation.dispatch(
//       //   StackActions.replace('Home')
//       // )
//     } else {
//       yield put({type: types.ADD_ORDER_FAILURE, error: error});
//     }
//   } catch (error) {
//     yield put({type: types.ADD_ORDER_FAILURE, error: error});
//   }
// }

//Get user Awards saga
export function* getBruneiFoodsAwardsSaga() {
  yield takeLatest(types.GET_BRUNEI_FOOD_AWARDS_REQUEST, getFoodsAwardsSagaApi);
}
function* getFoodsAwardsSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;
  try {
    const url = urls.RESTAURANT_AWARDS + index + '/' + limit;
    console.log('Cuisines Url: ', url);
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.GET_BRUNEI_FOOD_AWARDS_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_BRUNEI_FOOD_AWARDS_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_BRUNEI_FOOD_AWARDS_FAILURE, error: error});
  }
}
// Get Cusine Saga
export function* getCusineSaga() {
  yield takeLatest(types.GET_CUSINE_REQUEST, getCusineSagaApi);
}
function* getCusineSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  console.log('paramsssssssssss: ', data);

  try {
    const url = urls.CUSINE_URL + index + '/' + limit;
    console.log('Cuisines Url: ', url);
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({type: types.GET_CUSINE_SUCCESS, payload: response.data});
    } else {
      yield put({type: types.GET_CUSINE_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_CUSINE_FAILURE, error: error});
  }
}
//FOOD PREFRENCES
export function* getFoodPrefrencesSaga() {
  yield takeLatest(types.GET_FOOD_PREFRENCES_REQUEST, getFoodPrefrencesSagaApi);
}
function* getFoodPrefrencesSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  try {
    const url = urls.CUSINE_URL + index + '/' + limit;
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.GET_FOOD_PREFRENCES_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({type: types.GET_FOOD_PREFRENCES_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_FOOD_PREFRENCES_FAILURE, error: error});
  }
}

//PROMOTIONS
export function* getpromotionsSaga() {
  yield takeLatest(types.GET_PROMOTIONS_REQUEST, getPromotionsSagaApi);
}
function* getPromotionsSagaApi(data) {
  const index = data.data.index;
  const limit = data.data.limit;

  try {
    const url = urls.GET_ALL_PROMOTION + index + '/' + limit;
    console.log('urlsssssss', url);

    console.log('Cuisines Url: ', url);
    const response = yield Api.get(url);
    console.log('responseeeeeeeeeeeeeee', response);
    if (response && response.data != null) {
      yield put({type: types.GET_PROMOTIONS_SUCCESS, payload: response.data});
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_PROMOTIONS_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_PROMOTIONS_FAILURE, payload: []});
  }
}
//Get Bfa Recommendations
export function* getBfaRecommendationSaga() {
  yield takeLatest(
    types.GET_BFA_RECOMMENDATION_REQUEST,
    getBfaRecommendationSagaApi,
  );
}
function* getBfaRecommendationSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  console.log('paramsssssssssss: ', data);
  const url = urls.RESTAURANT_DISH_ALL + index + '/' + limit;
  console.log('People Url: ', url);
  try {
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.GET_BFA_RECOMMENDATION_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_BFA_RECOMMENDATION_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_BFA_RECOMMENDATION_FAILURE, error: error});
  }
}

//Get Add Banner Data
export function* getAddBannerSaga() {
  yield takeLatest(types.GET_ADD_BANNER_DATA_REQUEST, getAddBannerSagaApi);
}
function* getAddBannerSagaApi(data) {
  try {
    const response = yield Api.get(urls.GET_ADD_BANNER);
    if (response && response.data != null) {
      yield put({
        type: types.GET_ADD_BANNER_DATA_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_ADD_BANNER_DATA_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_ADD_BANNER_DATA_FAILURE, error: error});
  }
}

// get Promo News
export function* getPromoJobsSaga() {
  yield takeLatest(types.GET_PROMO_JOBS_REQUEST, getJobsNewsSagaApi);
}
function* getJobsNewsSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  console.log('paramsssssssssss: ', data);
  const url = urls.GET_PROMO_JOBS + index + '/' + limit;
  console.log('People Url: ', url);
  try {
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({type: types.GET_PROMO_JOBS_SUCCESS, payload: response.data});
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_PROMO_JOBS_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_PROMO_JOBS_FAILURE, error: error});
  }
}

// get promo Jobs
export function* getPromoNewsSaga() {
  yield takeLatest(types.GET_PROMO_NEWS_REQUEST, getPromoNewsSagaApi);
}
function* getPromoNewsSagaApi(data) {
  try {
    const response = yield Api.get(urls.GET_PROMO_NEWS);
    console.log(response, 'yyyy');
    if (response && response.data != null) {
      yield put({type: types.GET_PROMO_NEWS_SUCCESS, payload: response.data});
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_PROMO_NEWS_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_PROMO_NEWS_FAILURE, error: error});
  }
}

// Get BFA PARTNERS Saga
export function* getBfaParntersSaga() {
  yield takeLatest(types.GET_BFA_PARTNERS_REQUEST, getBfaPartnersSagaApi);
}
function* getBfaPartnersSagaApi(data) {
  const params = data.data;

  try {
    const url = urls.GET_BFA_PARTNERS + params;

    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({type: types.GET_BFA_PARTNERS_SUCCESS, payload: response.data});
    } else {
      yield put({type: types.GET_BFA_PARTNERS_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_BFA_PARTNERS_FAILURE, error: error});
  }
}

// Get User Saga
export function* getUserSaga() {
  yield takeLatest(types.GET_USERS_BY_ID_REQUEST, getUserSagaApi);
}
function* getUserSagaApi() {
  try {
    const response = yield Api.get(urls.GET_USER);
    if (response && response.data != null) {
      yield put({type: types.GET_USERS_BY_ID_SUCCESS, payload: response.data});
    } else {
      yield put({type: types.GET_USERS_BY_ID_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_USERS_BY_ID_FAILURE, error: error});
  }
}

// Get RestaurantAllDishes Saga
export function* getRestaurantDishesSaga() {
  yield takeLatest(
    types.GET_RESTAURANT_ALL_DISHES_REQUEST,
    getRestaurantDishesSagaApi,
  );
}
function* getRestaurantDishesSagaApi() {
  try {
    const response = yield Api.get(urls.RESTAURANT_DISH_ALL);
    if (response && response.data != null) {
      yield put({
        type: types.GET_RESTAURANT_ALL_DISHES_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_RESTAURANT_ALL_DISHES_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_RESTAURANT_ALL_DISHES_FAILURE, error: error});
  }
}
//More from Restaurant
export function* moreFromRestSaga() {
  yield takeLatest(types.MORE_FROM_RESTAURANT_REQUEST, moreFromRestSagaApi);
}
function* moreFromRestSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  console.log('paramsssssssssss: ', data);
  const url = urls.RESTAURANT_DISH_ALL + index + '/' + limit;
  console.log('People Url: ', url);
  try {
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.MORE_FROM_RESTAURANT_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.MORE_FROM_RESTAURANT_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.MORE_FROM_RESTAURANT_FAILURE, error: error});
  }
}
///FAVORITES
export function* getFavoritesSaga() {
  yield takeLatest(types.GET_FAVORITE_REQUEST, getFavoritesSagaApi);
}
function* getFavoritesSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;
  try {
    const response = yield Api.get(urls.GET_ALL_FAVORITE + index + '/' + limit);
    console.log('fav resssss', response);

    if (response && response.data != null) {
      yield put({
        type: types.GET_FAVORITE_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_FAVORITE_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_FAVORITE_FAILURE, payload: []});
  }
}

export function* addfavouriteSaga() {
  yield takeLatest(types.ADD_FAVORITE_REQUEST, addfavouritSagaApi);
}
function* addfavouritSagaApi(data) {
  const dishId = data.data.id;
  const resId = data.data.restaurantBranchId;

  console.log('parammmmmmmmmm', data);
  var body = {
    id: data.data.id,
    userLiked: true,
  };

  try {
    const response = yield Api.put(
      urls.ADD_FAVORITE_DISH + dishId + '/' + resId,
    );
    console.log('resposssssssss', response);
    if (response && response.success == true) {
      yield put({
        type: types.ADD_FAVORITE_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.ADD_FAVORITE_FAILURE, payload: {}});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.ADD_FAVORITE_FAILURE, error: {}});
  }
}
//REMOVE FAVOURATE
export function* onRemoveFavoriteSaga() {
  yield takeLatest(types.ON_REMOVE_FAVORITE_REQUEST, onRemoveFavoriteSagaApi);
}
function* onRemoveFavoriteSagaApi(data) {
  const dishId = data.data.id;
  const resId = data.data.restaurantBranchId;
  console.log('removeeeeeeeee:', data);
  var body = {
    id: data.data.id,
    userLiked: false,
  };

  try {
    const url = urls.REMOVE_fAVOURITE_DISH + dishId + '/' + resId;
    const response = yield Api.put(url);
    console.log('resssssssss', response);
    if (response && response.success == true) {
      yield put({
        type: types.ON_REMOVE_FAVORITE_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.ON_REMOVE_FAVORITE_FAILURE, error: 'error'});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.ON_REMOVE_FAVORITE_FAILURE, error: 'error'});
  }
}

///Cart Actions
export function* addToCartSaga() {
  yield takeLatest(types.ADD_TO_CART_REQUEST, addcartSagaApi);
}
function* addcartSagaApi(data) {
  try {
    // const response = yield Api.get(urls.RESTAURANT_DISH_ALL);
    if (data) {
      yield put({
        type: types.ADD_TO_CART_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.ADD_TO_CART_FAILURE, error: 'error'});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.ADD_TO_CART_FAILURE, error: 'error'});
  }
}
export function* retriveCartSaga() {
  yield takeLatest(types.RETRIVE_CART_REQUEST, retrivecartSagaApi);
}
function* retrivecartSagaApi(data) {
  try {
    // const response = yield Api.get(urls.RESTAURANT_DISH_ALL);
    if (data) {
      yield put({
        type: types.RETRIVE_CART_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.ADD_TO_CART_FAILURE, error: 'error'});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.ADD_TO_CART_FAILURE, error: 'error'});
  }
}
export function* RemoveCARTSaga() {
  yield takeLatest(types.REMOVE_FROM_CART_REQUEST, removecartSagaApi);
}
function* removecartSagaApi(data) {
  console.log('param', data);

  try {
    // const response = yield Api.get(urls.RESTAURANT_DISH_ALL);
    if (data) {
      yield put({
        type: types.REMOVE_FROM_CART_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.REMOVE_FROM_CART_FAILURE, error: 'error'});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.REMOVE_FROM_CART_FAILURE, error: 'error'});
  }
}
//Get what's New Data
export function* getWhatsNewSaga() {
  yield takeLatest(types.GET_WHATSNEW_REQUEST, getWhatsNewSagaApi);
}
function* getWhatsNewSagaApi(data) {
  const index = data.data.index;
  const limit = data.data.limit;
  console.log('whatssssNewww:', data);
  try {
    const url = urls.GET_ALL_WHATSNEW + index + '/' + limit;

    const response = yield Api.get(url);

    if (response && response.data != null) {
      yield put({
        type: types.GET_WHATSNEW_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_WHATSNEW_FAILURE, error: error});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_WHATSNEW_FAILURE, error: error});
  }
}

//Get Restaurent Detail Data
export function* getRestaurantDetailSaga() {
  yield takeLatest(
    types.GET_RESTAURENT_DETAIL_REQUEST,
    getRestaurantDetailSagaApi,
  );
}
function* getRestaurantDetailSagaApi(data) {
  console.log(data, 'iddddddddddd');
  try {
    const response = yield Api.get(urls.GET_RESTAURANT_DETAIL + data.data);
    if (response && response.data != null) {
      yield put({
        type: types.GET_RESTAURENT_DETAIL_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_RESTAURENT_DETAIL_FAILURE, payload: {}});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_RESTAURENT_DETAIL_FAILURE, payload: {}});
  }
}
//GET_ALL_FAVORITE_RESTAURANT
export function* getfavoriteRestaurantSaga() {
  yield takeLatest(
    types.GET_ALL_FAVORITE_RESTAURANT_REQUEST,
    getfavoriteRestaurantSagaApi,
  );
}
function* getfavoriteRestaurantSagaApi() {
  try {
    const response = yield Api.get(urls.GET_ALL_FAVORITE_RESTAURANT);
    console.log(response, 'heeeeeeeeee');
    if (response && response.success == true) {
      yield put({
        type: types.GET_ALL_FAVORITE_RESTAURANT_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_ALL_FAVORITE_RESTAURANT_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_ALL_FAVORITE_RESTAURANT_FAILURE, payload: []});
  }
}
//Add favourate_Restaurant
export function* addReataurantfavouriteSaga() {
  yield takeLatest(
    types.ADD_FAVORITE_RESTAURANT_REQUEST,
    addReataurantfavouriteSagaApi,
  );
}
function* addReataurantfavouriteSagaApi(data) {
  const id = data.data;
  console.log('parammmmmmmmmm', data);
  var body = {
    id: 0,
    userLiked: true,
  };

  try {
    const response = yield Api.put(urls.ADD_RESTAURANT_FAVORITE + 26, body);
    console.log('resposssssssss', response);
    if (response && response.success == true) {
      yield put({
        type: types.ADD_FAVORITE_RESTAURANT_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.ADD_FAVORITE_RESTAURANT_FAILURE, payload: {}});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.ADD_FAVORITE_RESTAURANT_FAILURE, error: {}});
  }
}
//REMOVE FAVOURATE_RESTAURANT
export function* RemoveFavoriteRestaurantSaga() {
  yield takeLatest(
    types.REMOVE_FAVORITE_RESTAURANT_REQUEST,
    RemoveFavoriteRestaurantSagaApi,
  );
}
function* RemoveFavoriteRestaurantSagaApi(data) {
  const id = data.id;
  console.log('removeeeeeeeee:', data);
  var body = {
    id: data.id,
    userLiked: false,
  };

  try {
    const response = yield Api.put(urls.REMOVE_FAVORITE_RESTAURANT, body);
    if (data) {
      yield put({
        type: types.REMOVE_FAVORITE_RESTAURANT_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({
        type: types.REMOVE_FAVORITE_RESTAURANT_FAILURE,
        error: 'error',
      });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.REMOVE_FAVORITE_RESTAURANT_FAILURE, error: 'error'});
  }
}
export function* moreaboutDishSaga() {
  yield takeLatest(types.GET_MORE_ABOUT_DISHES_REQUEST, moreaboutDishSagaApi);
}
function* moreaboutDishSagaApi(data) {
  const id = data.id;
  // console.log('moreabouttttt:', data);

  try {
    const response = yield Api.get(urls.DISH_CALORIE + id);
    console.log('resss', response);
    if (response && response.success == true) {
      yield put({
        type: types.GET_MORE_ABOUT_DISHES_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: types.GET_MORE_ABOUT_DISHES_FAILURE,
        payload: [],
      });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_MORE_ABOUT_DISHES_FAILURE, error: error});
    console.log('error saga', error);
  }
}
//GetDishByCusineId
export function* getdishbycusineidDataSaga() {
  yield takeLatest(
    types.GET_DISH_BY_CUSINE_ID_REQUEST,
    getdishbycusineidSagaApi,
  );
}
function* getdishbycusineidSagaApi(data) {
  console.log('cousin by id', data);
  const id = data.data.id;
  const index = data.data.index;
  const limit = data.data.limit;

  try {
    const response = yield Api.get(
      urls.GET_DISH_BY_CUSINE_ID + id + '/' + index + '/' + limit,
    );
    console.log(response, 'heeeeeeeeee');
    if (response && response.success == true) {
      yield put({
        type: types.GET_DISH_BY_CUSINE_ID_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({type: types.GET_DISH_BY_CUSINE_ID_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_DISH_BY_CUSINE_ID_FAILURE, payload: []});
  }
}
// add order
export function* addOrderSaga() {
  yield takeLatest(types.ADD_ORDER_REQUEST, addOrderSagaApi);
}
function* addOrderSagaApi(data) {
  console.log('add order', data);
  var navigation = data.navigation;
  var response = null;
  try {
    if (data.data.ActionMode == 1) {
      response = yield Api.post(urls.ADD_ORDER, data.data, false);
      // console.log(response, 'post cart resssssss');
    } else {
      response = yield Api.put(
        urls.UPDATE_ORDER + data.data.id,
        data.data,
        false,
      );
    }
    console.log(response, 'put cart resssssss');

    if (response && response.success == true) {
      navigation.navigate(routeName.LANDING_SCREEN);

      // yield takeLatest(types.GET_ORDERS_REQUEST, getordersSagaApi);

      // yield put({
      //   type: types.CHECKOUT_ORDER_FAILURE,
      //   payload: response.data,
      // });
      try {
        const response = yield Api.get(urls.GET_ALL_ORDERS);
        if (response && response.success == true) {
          yield put({
            type: types.GET_ORDERS_SUCCESS,
            payload: response.data,
          });
        } else {
          yield put({type: types.GET_ORDERS_FAILURE, payload: []});
        }

        // dispatch a success action to the store with the new data object
      } catch (error) {
        yield put({type: types.GET_ORDERS_FAILURE, payload: []});
      }
    } else {
      // yield put({type: types.CHECKOUT_ORDER_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    // yield put({type: types.CHECKOUT_ORDER_FAILURE, payload: []});
  }
}
// checkout order
export function* checkOrderSaga() {
  yield takeLatest(types.CHECKOUT_ORDER_REQUEST, checkOrderSagaApi);
}
function* checkOrderSagaApi(data) {
  console.log('checkout order', data);
  var navigation = data.navigation;
  try {
   const response = yield Api.post(urls.CHECK_ORDER, data.data, false);
    console.log(response, 'check out ordr');

    if (response && response.success == true) {
      navigation.navigate(routeName.TRANSACTION_CONFIRMATION);

      // yield takeLatest(types.GET_ORDERS_REQUEST, getordersSagaApi);

      // yield put({
      //   type: types.CHECKOUT_ORDER_FAILURE,
      //   payload: response.data,
      // });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    // yield put({type: types.CHECKOUT_ORDER_FAILURE, payload: []});
  }
}
export function* getordersDataSaga() {
  yield takeLatest(types.GET_ORDERS_REQUEST, getordersSagaApi);
}
function* getordersSagaApi(data) {
  try {
    const response = yield Api.get(urls.GET_ALL_ORDERS);
    console.log(response, 'heeeeeeeeee');
    if (response && response.success == true) {
      yield put({
        type: types.GET_ORDERS_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({type: types.GET_ORDERS_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({type: types.GET_ORDERS_FAILURE, payload: []});
  }
}

export function* promotionClickDataSaga() {
  yield takeLatest(types.PROMOTION_CLICK_REQUEST, promotionClickSagaApi);
}
function* promotionClickSagaApi(data) {
  try {
    const response = yield Api.post(urls.PROMOTION_CLICK, data.data, false);
    console.log(response, 'PROMOTOI CLICK');
    if (response && response.success == true) {
      // yield put({
      //   type: types.GET_ORDERS_SUCCESS,
      //   payload: response.data,
      // });
    } else {
      // yield put({type: types.GET_ORDERS_FAILURE, payload: []});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    // yield put({type: types.GET_ORDERS_FAILURE, payload: []});
  }
}
