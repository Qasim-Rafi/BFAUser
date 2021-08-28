import {
  ADD_IMAGE_ITEM,
  CLEAR_IMAGE_ITEM,
  ACTIVE_TAB,
  SHOW_MODAL,
  TOGGLE_DATA,
  CATEGORY_NAME,
  RESET_CATEGORY,
} from './types';

export const addImageItem = (data) => {
  return {
    type: ADD_IMAGE_ITEM,
    payload: data,
  };
};
export const clearProduct = (data) => {
  return {
    type: CLEAR_IMAGE_ITEM,
    payload: null,
  };
};

export const activeTab = (data) => {
  return {
    type: ACTIVE_TAB,
    payload: data,
  };
};

export const showModal = (data) => {
  return {
    type: SHOW_MODAL,
    payload: data,
  };
};
export const toggleData = (data) => {
  return {
    type: TOGGLE_DATA,
    payload: data,
  };
};
export const categoryData = (data) => {
  return {
    type: CATEGORY_NAME,
    payload: data,
  };
};

export const resetCategory = () => {
  return {
    type: RESET_CATEGORY,
  };
};
