// import { takeLatest, put, select } from "redux-saga/effects";
// import { parseCats } from "../../helpers/cat.helpers";
// import { parseHome } from "../../helpers/home.helpers";
// import types from "../actions/types";
// import Api from "../lib/api";
// import { userCategoriesSelector } from "../lib/selectors";
// import urls from "../lib/urls";

// //Get site scapped data from script saga
// export function* getSiteDataSaga() {
//   yield takeLatest(types.GET_SITE_DATA_REQUEST, getSiteDataSagaApi);
// }
// function* getSiteDataSagaApi({ params }) {
//   console.log("params::", params);
//   try {
//     const response = yield Api.post(urls.GET_SITE_DATA_URL, params);

//     // console.log("Response ::: ", response);

//     // dispatch a success action to the store with the new data object
//     yield put({ type: types.GET_SITE_DATA_SUCCESS, payload: response });
//   } catch (error) {
//     yield put({ type: types.GET_SITE_DATA_FAILURE, error: error });
//   }
// }

// //Save site data for user saga
// export function* saveSiteSaga() {
//   yield takeLatest(types.SAVE_SITE_REQUEST, saveSiteSagaApi);
// }
// function* saveSiteSagaApi({ params }) {
//   try {
//     const response = yield Api.post(urls.SAVE_SITE_URL, params);

//     // dispatch a success action to the store with the new data object
//     yield put({ type: types.SAVE_SITE_SUCCESS, payload: response });
//     yield put({ type: types.GET_SAVED_SITES_REQUEST });
//   } catch (error) {
//     yield put({ type: types.SAVE_SITE_FAILURE, error: error });
//   }
// }

// //Update site data for user saga
// export function* updateSiteSaga() {
//   yield takeLatest(types.UPDATE_SITE_REQUEST, updateSiteSagaApi);
// }
// function* updateSiteSagaApi({ params }) {
//   try {
//     const response = yield Api.post(urls.UPDATE_SITE_URL, params);

//     // dispatch a success action to the store with the new data object
//     yield put({ type: types.UPDATE_SITE_SUCCESS, payload: response });
//     yield put({ type: types.GET_SAVED_SITES_REQUEST });
//   } catch (error) {
//     yield put({ type: types.UPDATE_SITE_FAILURE, error: error });
//   }
// }

// //Delete site Sagas
// export function* deleteSiteSaga() {
//   yield takeLatest(types.DELETE_SITE_REQUEST, deleteSiteSagaApi);
// }
// function* deleteSiteSagaApi(params) {
//   let param = params.params;
//   // console.log("Param and params", params, param);

//   try {
//     const response = yield Api.delete(`${urls.DELETE_SITE_URL}?id=${param.id}`);

//     // dispatch a success action to the store with the new dog
//     yield put({ type: types.DELETE_SITE_SUCCESS, payload: response });
//     yield put({ type: types.GET_SAVED_SITES_REQUEST });
//   } catch (error) {
//     yield put({ type: types.DELETE_SITE_FAILURE, error: error });
//   }
// }

// //Get all the user saved sites saga
// export function* getSavedSitesSaga() {
//   yield takeLatest(types.GET_SAVED_SITES_REQUEST, getSavedSitesSagaApi);
// }
// function* getSavedSitesSagaApi({ params }) {
//   try {
//     const response = yield Api.get(urls.GET_SAVED_SITES_URL);

//     //Getting userCategories reducer data.
//     const userCategories = yield select(userCategoriesSelector);

//     // dispatch a success action to the store with the new data object
//     yield put({ type: types.GET_SAVED_SITES_SUCCESS, payload: response });
//     yield put({
//       type: types.CATS_WITH_PRODUCTS_SUCCESS,
//       payload: {
//         // status
//         ...response,
//         data: {
//           data: parseCats(userCategories.data, response.data.data),
//         },
//       },
//     });
//   } catch (error) {
//     yield put({ type: types.GET_SAVED_SITES_FAILURE, error: error });
//   }
// }
