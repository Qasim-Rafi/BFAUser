// live hosts

export default urls = {
  HOST: 'https://egreatlearning.com/web/',
  BASE_URL: 'https://egreatlearning.com/web/',

  //Auth Urls
  LOGIN_URL: 'api/Auth/login',  //Sign in
  REGISTER_URL: 'api/Users/AddUser',     //Sign up
  EDIT_PROFILE: 'api/Users/UpdateUser/',     //Sign up
  VERIFICATION_CODE: 'api/Users/UpdateUserMobileVerification', // Code verification
  PACKAGES_ALL_URL: 'api/Package/GetPackageAll',
  GET_PROFILE_DATA: 'api/Users/GetUser/',   //User data by id
  REGISTER_URL: 'api/Auth/Register',
  RESTAURANT_AWARDS: 'api/RestaurantAwards/GetRestaurantAwardsAll',
  CUSINE_URL: 'api/Cusine/GetCusineAll/',        //Cusine list
  // PROMOTIONS: 'api/HomeAdSlideShowAdmin/GetHomeAdSlideShowAdminAll',
  RESTAURANT_DISH_ALL: 'api/RestaurantDish/GetRestaurantDishAll/',          /// bfa Recomendation
  DISH_CALORIE: 'api/RestaurantBranchesAdmin/GetRestaurantDishCalorie/',    //MORE about dish detail
  GET_USER: 'api/Users/GetUser/2',
  GET_BFA_PARTNERS: 'api/AdminBFAPartner/GetAdminBFAPartnerAll/24/1/40',
  GET_ADD_BANNER: 'api/HomeAdSlideShowAdmin/GetHomeAdSlideShowAdminAll',
  GET_PROMO_NEWS: 'api/PromoItemNews/GetPromoNewsAdminAllAdmin',
  GET_PROMO_JOBS: 'api/PromoJobsAdmin/GetPromoJobsAdminAllAdminForapp/',
  PEOPLE_CHOICE: 'api/PeopleChoice/GetPeopleChoiceAll/',     ///people choice
  GET_ALL_WHATSNEW: 'api/RestaurantDish/GetdishWhatsNewAll/',   //Whats new 
  GET_ALL_PROMOTION: 'api/PromotionlDish/GetPromotionlDishIdAllapp/',  //Promostions
  GET_ALL_FAVORITE: 'api/RestaurantDish/GetdishLikedAll/', ///Get favorite list
  // ADD_FAVORITE: 'api/RestaurantDish/UpdateRestaurantDishLiked/',
  REMOVE_fAVOURITE_DISH: 'api/RestaurantDish/UpdateDishUnliked/',  //unlike dish
  ADD_FAVORITE_DISH: 'api/RestaurantDish/UpdateRestaurantDishLiked/', //LIKE DISH
  GET_RESTAURANT_DETAIL: 'api/RestaurantBranchesAdmin/GetRestaurantdetailforAppAlldata/',
  GET_ALL_FAVORITE_RESTAURANT: 'api/PeopleChoice/GetPeopleChoiceLikedAll/1/10',
  ADD_RESTAURANT_FAVORITE: 'api/PeopleChoice/UpdatePeopleChoiceLiked/',
  REMOVE_FAVORITE_RESTAURANT: 'api/PeopleChoice/UpdatePeopleChoiceUnliked',
  APPLY_FOR_JOBS: 'api/JobApplications/AddJobApplication',//for apply jobs,
  GET_DISH_BY_CUSINE_ID: 'api/RestaurantDish/GetRestaurantDishByCuisinesId/',
  ADD_ORDER: 'api/Order/AddOrder',
  UPDATE_ORDER: 'api/Order/UpdateOrder/',
  GET_ALL_ORDERS: 'api/Order/OrderListForUserApp',
  PROMOTION_CLICK: 'api/PromotionlDish/AddPromotionlDishForRestaurantClick',
  CHECK_ORDER: 'api/OrderBill/CheckOutOrder',  //
  UPDATE_QUANTITY: 'api/Order/UpdateOrderQuantityPrice',
  DELETE_DISH_FROM_CART: 'api/Order/DeleteOrderDish?orderId=',
  DELETE_ORDER_FROM_CART: 'api/Order/DeleteOrder/',//
  ORDER_CONFIRMATION: 'api/OrderPayment/PaymentCheckMethodConfirmation',//
  UPDATE_ORDER_STATUS: 'api/Order/UpdateOrderStatus/',
  GET_ALL_ORDERS: 'api/Order/OrderListForUserApp',
  GET_ORDERS_HISTORY: 'api/Order/OrderHistory',
  PROMOTION_CLICK: 'api/PromotionlDish/AddPromotionlDishForRestaurantClick',
  CHECK_ORDER: 'api/OrderBill/CheckOutOrder',  //
  UPDATE_QUANTITY: 'api/Order/UpdateOrderQuantityPrice',
  DELETE_DISH_FROM_CART: 'api/Order/DeleteOrderDish?orderId=',
  DELETE_ORDER_FROM_CART: 'api/Order/DeleteOrder/',//
  ORDER_CONFIRMATION: 'api/OrderPayment/PaymentCheckMethodConfirmation',//
  //Searchbar
  SearchResult: 'api/RestaurantDish/HomeDashboardSearch?DishName=',
  
  GET_NEAREST_RESTAURANTS: 'api/RestaurantBranchesAdmin/GetNearestRestaurantBranchesByLocation/',
  GET_AREA_LIST: 'api/Lookups/GetArea',
  GET_PREMISE_LIST: 'api/Lookups/Premise',
  GET_DISTANCE_LIST: 'api/Lookups/Distance',
  GET_APPLY_JOB_LIST: 'api/PeopleChoice/GetPeopleChoiceLikedAll/1/10',
  GET_ORDER_BY_ID:'api/Order/GetOrderByIdforApp/',

  ADD_USER_RANDOMISER: 'api/UserRandomizerSetting/AddUserRandomizerSetting',
  GET_USER_RANDOMISER_SETTING:'api/UserRandomizerSetting/GetUserRandomizerSettingById/',
  UPDATE_USER_RANDOMISER:'api/UserRandomizerSetting/UpdateUserRandomizerSetting',




};
