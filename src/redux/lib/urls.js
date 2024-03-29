// live hosts

export default urls = {
  HOST: 'https://egreatlearning.com/web/',
  BASE_URL: 'https://egreatlearning.com/web/',

  //Auth Urls
  LOGIN_URL: 'api/Auth/login', //Sign in
  FORGOT_PASSWORD:'api/Users/ChangePasswordCheckUserApp',  // forgot password
  CHANGE_PASSWORD:'api/Users/ChangeUserPasswordUserApp/',
  REGISTER_URL_CHECKS: 'api/Users/AddUserChecks', //Sign up
  EDIT_PROFILE: 'api/Users/EditUserForApp/', //Sign up
  VERIFICATION_CODE: 'api/Users/UpdateUserMobileVerification', // Code verification
  PACKAGES_ALL_URL: 'api/Package/GetPackageAll',
  GET_PROFILE_DATA: 'api/Users/GetUser/', //User data by id
  REGISTER_URL: 'api/Auth/Register',
  RESTAURANT_AWARDS: 'api/RestaurantAwards/GetRestaurantAwardsAll',  // Brunei food awards
  CUSINE_URL: 'api/Cusine/GetCusineAll/', //Cusine list
  //help_center
  HELP_CENTER:'api/MoreFromRestaurant/AddUserComplaints',
  // PROMOTIONS: 'api/HomeAdSlideShowAdmin/GetHomeAdSlideShowAdminAll',
  RESTAURANT_DISH_ALL: 'api/RestaurantDish/GetRestaurantDishAll/', /// bfa Recomendation
  DISH_CALORIE: 'api/RestaurantBranchesAdmin/GetRestaurantDishCalorie/', //MORE about dish detail
  MORE_RESTAURANT: 'api/MoreFromRestaurant/GetMoreFromRestaurantForApplicationAll/', //MORE from restaurant
  GET_USER: 'api/Users/GetUser/2',
  GET_BFA_PARTNERS: 'api/AdminBFAPartner/GetAdminBFAPartnerAll/24/1/40',
  GET_ADD_BANNER: 'api/HomeAdSlideShowAdmin/GetHomeAdSlideShowAdminAll',
  GET_PROMO_NEWS: 'api/PromoItemNews/GetPromoNewsAdminAllAdmin',
  GET_PROMO_JOBS: 'api/PromoJobsAdmin/GetPromoJobsAdminAllAdminForapp/', //promo jobs
  PEOPLE_CHOICE: 'api/PeopleChoice/GetPeopleChoiceAll/', ///people choice
  GET_ALL_WHATSNEW: 'api/RestaurantDish/GetdishWhatsNewAll/', //Whats new
  GET_ALL_PROMOTION: 'api/PromotionlDish/GetPromotionlDishIdAllapp/', //Promostions
  GET_ALL_FAVORITE: 'api/RestaurantDish/GetdishLikedAll/', ///Get favorite list
  // ADD_FAVORITE: 'api/RestaurantDish/UpdateRestaurantDishLiked/',
  REMOVE_fAVOURITE_DISH: 'api/RestaurantDish/UpdateRestaurantDishUnliked/', //unlike dish
  ADD_FAVORITE_DISH: 'api/RestaurantDish/UpdateRestaurantAndDishLiked/', //Favorite dish
  GET_ALL_FAVORITE_RESTAURANT:'api/RestaurantAdmin/GetRestaurantLikedAll/',
  GET_RESTAURANT_DETAIL:'api/RestaurantBranchesAdmin/GetRestaurantdetailforAppAlldata/',    //Restaurant detail
  // GET_ALL_FAVORITE_RESTAURANT: 'api/PeopleChoice/GetPeopleChoiceLikedAll/1/10',
  // ADD_RESTAURANT_FAVORITE: 'api/PeopleChoice/UpdatePeopleChoiceLiked/',
  REMOVE_FAVORITE_RESTAURANT: 'api/RestaurantDish/UpdateRestaurantDishUnliked/',
  APPLY_FOR_JOBS: 'api/JobApplications/AddJobApplication', //for apply jobs,
  GET_DISH_BY_CUSINE_ID: 'api/RestaurantDish/GetRestaurantDishByCuisinesId/',
  ADD_RESTAURANT_FAVORITE:'api/RestaurantDish/UpdateRestaurantAndDishLiked/',
  ADD_ORDER: 'api/Order/AddOrder',
  UPDATE_ORDER: 'api/Order/UpdateOrder/',
  GET_ALL_ORDERS: 'api/Order/OrderListForUserApp',
  PROMOTION_CLICK: 'api/PromotionlDish/AddPromotionlDishForRestaurantClick',
  UPDATE_QUANTITY: 'api/Order/UpdateOrderQuantityPrice',
  DELETE_DISH_FROM_CART: 'api/Order/DeleteOrderDish?orderId=',
  DELETE_ORDER_FROM_CART: 'api/Order/DeleteOrder/', //
  ORDER_CONFIRMATION: 'api/OrderPayment/PaymentCheckMethodConfirmation', //
  UPDATE_ORDER_STATUS: 'api/Order/UpdateOrderStatus/',
  GET_ORDERS_HISTORY: 'api/Order/OrderHistory',
  PROMOTION_CLICK: 'api/PromotionlDish/AddPromotionlDishForRestaurantClick',
  CHECK_ORDER: 'api/OrderBill/CheckOutOrder', //
  UPDATE_QUANTITY: 'api/Order/UpdateOrderQuantityPrice',
  DELETE_DISH_FROM_CART: 'api/Order/DeleteOrderDish?orderId=',
  DELETE_ORDER_FROM_CART: 'api/Order/DeleteOrder/', //
  //Searchbar
  SearchResult: 'api/RestaurantDish/HomeDashboardSearch?DishName=',

  GET_NEAREST_RESTAURANTS:
    'api/RestaurantBranchesAdmin/GetNearestRestaurantBranchesByLocation/',
  GET_AREA_LIST: 'api/Lookups/GetArea',
  GET_PREMISE_LIST: 'api/Lookups/Premise',
  GET_DISTANCE_LIST: 'api/Lookups/Distance',
  GET_APPLY_JOB_LIST: 'api/PeopleChoice/GetPeopleChoiceLikedAll/1/10',
  GET_ORDER_BY_ID: 'api/Order/GetOrderByIdforApp/',
  ADD_PAYMENT: 'api/Order/AddOrderPayment',
  GET_CONATACT_FROM_DISH:
    'api/RestaurantBranchesAdmin/GetRestaurantContactInfo/',
  ADD_USER_RANDOMISER: 'api/UserRandomizerSetting/AddUserRandomizerSetting',
  GET_USER_RANDOMISER_SETTING:
    'api/UserRandomizerSetting/GetUserRandomizerSettingById/',
  UPDATE_USER_RANDOMISER:
    'api/UserRandomizerSetting/UpdateUserRandomizerSetting/',
  GET_ALL_REVIEWS_LIST: 'GetAllReviews',
  GET_LOOKUP_INDUSTRY: 'api/Lookups/GetLookUpIndustry',
  GET_LOOKUP_EMP_SEC: 'api/Lookups/GetLookUpEmploymentSector',
  GET_LOOKUP_MARITAL_STATUS: 'api/Lookups/GetLookUpMarriageStatus',
  AUTO_SUGGESTIONS_ON_SEARCH: 'api/RestaurantDish/SuggestionHomeDashboard/',
  GET_TRANSACTION_HISTORY: 'api/Order/GetUserTransactionHistoryById/',
  GET_NOTIFICATIONS_ALL: 'api/NotificationPannel/GetNotificationPannelAll',  //get notification
  ADD_NOTIFICATIONS: 'api/NotificationPannel/AddNotificationPannel',     //  add notification
  SEEN_NOTIFICATIONS:'api/NotificationPannel/SeenNotificationforUser' ,  //Seen notification
  GET_BALI_COINS:'api/Order/getdataforBcoinUserApp',             //GET BALI COINS
  BALI_COIN_PAYMENT:'api/Order/Bcoinpayment/'

};
