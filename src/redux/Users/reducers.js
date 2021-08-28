import {
  ADD_IMAGE_ITEM,
  CLEAR_IMAGE_ITEM,
  ACTIVE_TAB,
  SHOW_MODAL,
  TOGGLE_DATA,
  CATEGORY_NAME,
  RESET_CATEGORY,
} from './types';

const initialState = {
  imagesList: [],
  activeTab: 'FEED',
  Modal: false,
  toggleData: false,
  categoryName: '',
};
const userReducer = (state = initialState, action) => {
  // console.log('>>>>>>>>>', state.Modal);
  // console.log('hoooooooooooo', state.activeTab);

  const {type, payload} = action;
  switch (type) {
    case ADD_IMAGE_ITEM:
      console.log('pay;load', payload);
      console.warn('state', state.imagesList);
      let temp = [];
      temp = state.imagesList.concat(payload);
      // temp.push(payload);
      console.warn('temp', temp);
      return {
        ...state,
        imagesList: temp,
      };

    case CLEAR_IMAGE_ITEM:
      console.warn('called cleaerd');
      return {
        ...state,
        imagesList: [],
      };
    case ACTIVE_TAB:
      return {
        ...state,
        activeTab: payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        Modal: payload,
      };
    case TOGGLE_DATA:
      return {
        ...state,
        toggleData: payload,
      };
    case CATEGORY_NAME:
      return {
        ...state,
        categoryName: payload,
      };
    case RESET_CATEGORY:
      return {
        ...state,
        categoryName: [],
      };

    default:
      return state;
  }
};
export default userReducer;
