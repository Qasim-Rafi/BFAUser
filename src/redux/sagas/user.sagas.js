import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest, put, select } from 'redux-saga/effects';
import { routeName } from '../../constants/routeName';
// import { parseCats } from "../../helpers/cat.helpers";
import types from '../actions/types';
import Api from '../lib/api';
import urls from '../lib/urls';
import axios from 'axios';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import { StackActions } from '@react-navigation/native';

//Register user saga
export function* loginUserSaga() {
  console.log('saga function Works');
  yield takeLatest(types.LOGIN_USER_REQUEST, loginUserApi);
}
function* loginUserApi(data, response) {
  console.log(data, 'action in saga');
  // alert("response: ", response.success);
  let { params, navigation } = data.data;
  try {
    const response = yield Api.post(urls.LOGIN_URL, params);
    console.log(response, 'response');
    // alert("response: ", response);

    // dispatch a success action to the store with the new dog
    if (response && response.data != null) {
      yield AsyncStorage.setItem('@token', response.data.token);
      yield AsyncStorage.setItem('@userId', response.data.loggedInUserId);
      yield put({ type: types.LOGIN_USER_SUCCESS, payload: response });
      navigation.dispatch(StackActions.replace('Home'));
    } else {
      yield put({ type: types.LOGIN_USER_FAILURE, payload: response });
      // showMessage({
      //   message: "Error",
      //   description: "Invalid Username or Password",
      //   type: "danger",
      //   icon: { icon: "auto", position: "left" },
      // });
    }
  } catch (error) {
    yield put({ type: types.LOGIN_USER_FAILURE, error: error });
    console.log(error, 'error saga catch');

    // showMessage({
    //   message: "Error",
    //   description: "Check Your Internet Connection",
    //   type: "danger",
    //   icon: { icon: "auto", position: "left" },
    // });
    yield put({ type: types.LOGIN_USER_FAILURE, error: error });
  }
}
//People Choice
export function* getPeopleChoiceSaga() {
  yield takeLatest(types.GET_PEOPLE_CHOICE_REQUEST, getPeopleChoiceSagaApi);
}
function* getPeopleChoiceSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  console.log("paramsssssssssss: ", data)
  const url = urls.PEOPLE_CHOICE + index + '/' + limit;
  console.log("People Url: ", url)
  try {
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.GET_PEOPLE_CHOICE_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({ type: types.GET_PEOPLE_CHOICE_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_PEOPLE_CHOICE_FAILURE, error: error });
  }
}
// //Register user saga
// export function* registerGuestUserSaga() {
//   yield takeLatest(types.REGISTER_GUEST_REQUEST, registerGuestUserSagaApi);
// }
// function* registerGuestUserSagaApi(params) {
//   let param = params.params;

//   try {
//     const response = yield Api.post(urls.REGISTER_GUEST_URL, param);

//     // dispatch a success action to the store with the new dog
//     yield put({ type: types.REGISTER_GUEST_SUCCESS, payload: response });
//     yield put({ type: types.GET_NOTIFICATIONS_REQUEST });
//     yield put({ type: types.GET_SAVED_SITES_REQUEST });
//     yield put({ type: types.GET_USER_CATS_REQUEST });
//   } catch (error) {
//     yield put({ type: types.REGISTER_GUEST_FAILURE, error: error });
//   }
// }
//Add Order
export function* addOrderSaga() {
  console.log('saga function Works');
  yield takeLatest(types.ADD_ORDER_REQUEST, addOrderApi);
}
function* addOrderApi(data) {
  console.log(data, 'action in saga');
  let { params, navigation } = data.data;
  try {
    const response = yield Api.post(urls.ADD_ORDERS, params);
    console.log(response, 'response');
    // dispatch a success action to the store with the new dog
    if (response && response.data != null) {
      yield AsyncStorage.setItem('@token', response.data.token);
      yield AsyncStorage.setItem('@userId', response.data.loggedInUserId);
      yield put({ type: types.ADD_ORDER_SUCCESS, payload: response.data });
      // navigation.dispatch(
      //   StackActions.replace('Home')
      // )
    } else {
      yield put({ type: types.ADD_ORDER_FAILURE, error: error });
    }
  } catch (error) {
    yield put({ type: types.ADD_ORDER_FAILURE, error: error });
  }
}

//Get user Awards saga
export function* getBruneiFoodsAwardsSaga() {
  yield takeLatest(types.GET_BRUNEI_FOOD_AWARDS_REQUEST, getFoodsAwardsSagaApi);
}
function* getFoodsAwardsSagaApi(data) {
  try {
    const response = yield Api.get(urls.RESTAURANT_AWARDS);
    if (response && response.data != null) {
      yield put({
        type: types.GET_BRUNEI_FOOD_AWARDS_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({ type: types.GET_BRUNEI_FOOD_AWARDS_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_BRUNEI_FOOD_AWARDS_FAILURE, error: error });
  }
}
// Get Cusine Saga
export function* getCusineSaga() {
  yield takeLatest(types.GET_CUSINE_REQUEST, getCusineSagaApi);
}
function* getCusineSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  console.log("paramsssssssssss: ", data)

  try {
    const url = urls.CUSINE_URL + index + '/' + limit;
    console.log("Cuisines Url: ", url)
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({ type: types.GET_CUSINE_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.GET_CUSINE_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_CUSINE_FAILURE, error: error });
  }
}


//PROMOTIONS
export function* getpromotionsSaga() {
  yield takeLatest(types.GET_PROMOTIONS_REQUEST, getPromotionsSagaApi);
}
function* getPromotionsSagaApi(data) {
  try {
    const response = yield Api.get(urls.PROMOTIONS);
    if (response && response.data != null) {
      yield put({ type: types.GET_PROMOTIONS_SUCCESS, payload: response.data });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({ type: types.GET_PROMOTIONS_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_PROMOTIONS_FAILURE, error: error });
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

  console.log("paramsssssssssss: ", data)
  const url = urls.RESTAURANT_DISH_ALL + index + '/' + limit;
  console.log("People Url: ", url)
  try {
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({
        type: types.GET_BFA_RECOMMENDATION_SUCCESS,
        payload: response.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({ type: types.GET_BFA_RECOMMENDATION_FAILURE, payload:[]});
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_BFA_RECOMMENDATION_SUCCESS,  payload:[] });
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
      yield put({ type: types.GET_ADD_BANNER_DATA_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_ADD_BANNER_DATA_FAILURE, error: error });
  }
}

// get Promo News
export function* getPromoJobsSaga() {
  yield takeLatest(types.GET_PROMO_JOBS_REQUEST, getJobsNewsSagaApi);
}
function* getJobsNewsSagaApi(data) {
  const limit = data.data.limit;
  const index = data.data.index;

  console.log("paramsssssssssss: ", data)
  const url = urls.GET_PROMO_JOBS + index + '/' + limit;
  console.log("People Url: ", url)
  try {
    const response = yield Api.get(url);
    if (response && response.data != null) {
      yield put({ type: types.GET_PROMO_JOBS_SUCCESS, payload: response.data });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({ type: types.GET_PROMO_JOBS_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_PROMO_JOBS_FAILURE, error: error });
  }
}

// get promo Jobs
export function* getPromoNewsSaga() {
  yield takeLatest(types.GET_PROMO_NEWS_REQUEST, getPromoNewsSagaApi);
}
function* getPromoNewsSagaApi(data) {
  try {
    const response = yield Api.get(urls.GET_PROMO_NEWS);
    if (response && response.data != null) {
      yield put({ type: types.GET_PROMO_NEWS_SUCCESS, payload: response.data });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({ type: types.GET_PROMO_NEWS_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_PROMO_NEWS_FAILURE, error: error });
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
      yield put({ type: types.GET_BFA_PARTNERS_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.GET_BFA_PARTNERS_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_BFA_PARTNERS_FAILURE, error: error });
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
      yield put({ type: types.GET_USERS_BY_ID_SUCCESS, payload: response.data });
    } else {
      yield put({ type: types.GET_USERS_BY_ID_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_USERS_BY_ID_FAILURE, error: error });
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
      yield put({ type: types.GET_RESTAURANT_ALL_DISHES_FAILURE, error: error });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.GET_RESTAURANT_ALL_DISHES_FAILURE, error: error });
  }
}
export function* addfavouriteSaga() {
  yield takeLatest(
    types.ADD_FAVORITE_REQUEST,
    addfavouritSagaApi,
  );
}
function* addfavouritSagaApi(data) {
  console.log('param',data)

  try {
   // const response = yield Api.get(urls.RESTAURANT_DISH_ALL);
    if (data) {
      yield put({
        type: types.ADD_FAVORITE_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({ type: types.ADD_FAVORITE_FAILURE, error: 'error' });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.ADD_FAVORITE_FAILURE, error: 'error' });
  }
}
export function* onRemoveFavoriteSaga() {
  yield takeLatest(
    types.ON_REMOVE_FAVORITE_REQUEST,
    onRemoveFavoriteSagaApi
  );
}
function* onRemoveFavoriteSagaApi(data) {
  console.log('param',data)

  try {
   // const response = yield Api.get(urls.RESTAURANT_DISH_ALL);
    if (data) {
      yield put({
        type: types.ON_REMOVE_FAVORITE_SUCCESS,
        payload: data.data,
      });
      // navigation.navigate(routeName.Categories,{data:response.data});
    } else {
      yield put({ type: types.ON_REMOVE_FAVORITE_FAILURE, error: 'error' });
    }

    // dispatch a success action to the store with the new data object
  } catch (error) {
    yield put({ type: types.ON_REMOVE_FAVORITE_FAILURE, error: 'error' });
  }
}


// //Add product category
// export function* addRUpdateCategorySaga() {
//   yield takeLatest(types.ADD_PRODUCT_CAT_REQUEST, addRUpdateCategorySagaApi);
// }
// function* addRUpdateCategorySagaApi(params) {
//   let param = params.params;

//   try {
//     const response = yield Api.post(urls.ADD_PRODUCT_CAT_URL, param);

//     // dispatch a success action to the store with the new dog
//     yield put({ type: types.ADD_PRODUCT_CAT_SUCCESS, payload: response });
//     yield put({ type: types.GET_USER_CATS_REQUEST });
//   } catch (error) {
//     yield put({ type: types.ADD_PRODUCT_CAT_FAILURE, error: error });
//   }
// }

// //Delete user category
// export function* deleteCategorySaga() {
//   yield takeLatest(types.DELETE_PRODUCT_CAT_REQUEST, deleteCategorySagaApi);
// }
// function* deleteCategorySagaApi(params) {
//   let param = params.params;
//   // console.log("Param and params", params, param);

//   try {
//     const response = yield Api.delete(
//       `${urls.DELETE_PRODUCT_CAT_URL}?id=${param.id}`
//     );

//     // dispatch a success action to the store with the new dog
//     yield put({ type: types.DELETE_PRODUCT_CAT_SUCCESS, payload: response });
//     yield put({ type: types.GET_USER_CATS_REQUEST });
//   } catch (error) {
//     yield put({ type: types.DELETE_PRODUCT_CAT_FAILURE, error: error });
//   }
// }
