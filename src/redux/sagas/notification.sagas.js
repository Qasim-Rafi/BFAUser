// import { takeLatest, put } from "redux-saga/effects";
// import types from "../actions/types";
// import Api from "../lib/api";
// import urls from "../lib/urls";

// //Save site data for user saga
// export function* getNotificationsSaga() {
//   yield takeLatest(types.GET_NOTIFICATIONS_REQUEST, getNotificationsSagaApi);
// }
// function* getNotificationsSagaApi({ params }) {
//   try {
//     const response = yield Api.get(urls.GET_NOTIFICATIONS_URL);

//     // dispatch a success action to the store with the new data object
//     yield put({ type: types.GET_NOTIFICATIONS_SUCCESS, payload: response });
//   } catch (error) {
//     yield put({ type: types.GET_NOTIFICATIONS_FAILURE, error: error });
//   }
// }
