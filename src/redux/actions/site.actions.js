import types from "./types";

//Get site Data by script url actions
export const getSiteData = (params) => {
  return {
    type: types.GET_SITE_DATA_REQUEST,
    params,
  };
};

export const getSiteDataReset = () => {
  return {
    type: types.GET_SITE_DATA_RESET,
  };
};

//Save site data actions
export const saveSite = (params) => {
  return {
    type: types.SAVE_SITE_REQUEST,
    params,
  };
};

export const saveSiteReset = () => {
  return {
    type: types.SAVE_SITE_RESET,
  };
};

//Update site data actions
export const updateSite = (params) => {
  return {
    type: types.UPDATE_SITE_REQUEST,
    params,
  };
};

export const updateSiteReset = () => {
  return {
    type: types.UPDATE_SITE_RESET,
  };
};

//Delete site data actions
export const deleteSite = (params) => {
  return {
    type: types.DELETE_SITE_REQUEST,
    params,
  };
};

export const deleteSiteReset = () => {
  return {
    type: types.DELETE_SITE_RESET,
  };
};

//Get saved sites actions
export const getSavedSites = (params) => {
  return {
    type: types.GET_SAVED_SITES_REQUEST,
    params,
  };
};

export const getSavedSitesReset = () => {
  return {
    type: types.GET_SAVED_SITES_RESET,
  };
};
