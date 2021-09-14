import AsyncStorage from '@react-native-community/async-storage';
import {takeLatest, put, select} from 'redux-saga/effects';
import { routeName } from '../../constants/routeName';
// import { parseCats } from "../../helpers/cat.helpers";
import types from '../actions/types';
import Api from '../lib/api';
import urls from '../lib/urls';

//Register user saga
export function* loginUserSaga() {
  console.log('saga function Works');
  yield takeLatest(types.LOGIN_USER_REQUEST, loginUserApi);
}
function* loginUserApi(data) {
  console.log(data, 'action in saga');
  let {params, navigation} = data.data;
  try {
    const response = yield Api.post(urls.LOGIN_URL, params);
    console.log(response, 'response');
    // dispatch a success action to the store with the new dog
    if (response.data != null) {
      yield AsyncStorage.setItem('@token', response.data.token);
      yield put({type: types.LOGIN_USER_SUCCESS, payload: response.data});
      navigation.navigate(routeName.LANDING_SCREEN)
    }
  } catch (error) {
    console.log('Where We post data');
    yield put({type: types.LOGIN_USER_FAILURE, error: error});
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

// //Get user categories saga
// export function* getUserCategoriesSaga() {
//   yield takeLatest(types.GET_USER_CATS_REQUEST, getUserCategoriesSagaApi);
// }
// function* getUserCategoriesSagaApi({ params }) {
//   try {
//     const response = yield Api.get(urls.GET_USER_CATS_URL);

//     //Getting savedSites reducer data.
//     const savedSites = yield select(savedSitesSelector);

//     // dispatch a success action to the store with the new data object

//     yield put({ type: types.GET_USER_CATS_SUCCESS, payload: response });
//     yield put({
//       type: types.CATS_WITH_PRODUCTS_SUCCESS,
//       payload: {
//         // status
//         ...response,
//         data: {
//           data: parseCats(response.data.data, savedSites.data),
//         },
//       },
//     });
//   } catch (error) {
//     yield put({ type: types.GET_USER_CATS_FAILURE, error: error });
//   }
// }

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
