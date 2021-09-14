import types from "./types";

//Get site Data by script url actions
export const getNotifications = (params) => {
  return {
    type: types.GET_NOTIFICATIONS_REQUEST,
    params,
  };
};

export const getNotificationsReset = () => {
  return {
    type: types.GET_NOTIFICATIONS_RESET,
  };
};
// export const updateNotifcations = () => {
//   return {
//     type: types.GET_NOTIFICATIONS_RESET
//   }
// }
