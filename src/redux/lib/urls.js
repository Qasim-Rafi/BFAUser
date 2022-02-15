// live hosts

export default urls = {
  HOST: 'https://egreatlearning.com/web/',
  BASE_URL: 'https://egreatlearning.com/web/',

  //Auth Urls
  LOGIN_URL: 'api/Auth/login',  //Sign in
  REGISTER_URL: 'api/Users/AddUser',     //Sign up
  VERIFICATION_CODE: 'api/Users/UpdateUserMobileVerification', // Code verification
  PACKAGES_ALL_URL: 'api/Package/GetPackageAll',
  GET_PROFILE_DATA: 'api/Users/GetUser/',   //User data by id
  REGISTER_URL: 'api/Auth/Register',
  RESTAURANT_AWARDS: 'api/RestaurantAwards/GetRestaurantAwardsAll',
  CUSINE_URL: 'api/Cusine/GetCusineAll/',        //Cusine list
  // PROMOTIONS: 'api/HomeAdSlideShowAdmin/GetHomeAdSlideShowAdminAll',
  RESTAURANT_DISH_ALL: 'api/RestaurantDish/GetRestaurantDishAll/',          /// bfa Recomendation
  DISH_CALORIE: 'api/RestaurantBranchesAdmin/GetRestaurantDishCalorie/26',    //MORE about dish detail
  DISH_CALORIE: 'api/RestaurantBranchesAdmin/GetRestaurantDishCalorie/',    //MORE about dish detail
  GET_USER: 'api/Users/GetUser/2',
  GET_BFA_PARTNERS: 'api/AdminBFAPartner/GetAdminBFAPartnerAll/18/1/40',
  GET_ADD_BANNER: 'api/HomeAdSlideShowAdmin/GetHomeAdSlideShowAdminAll',
  GET_PROMO_NEWS: 'api/PromoItemNews/GetPromoNewsAdminAllAdmin',
  GET_PROMO_JOBS: 'api/PromoJobsAdmin/GetPromoJobsAdminAllAdminForapp/',
  ADD_ORDERS: 'api/Order/AddOrder',
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
  GET_ALL_ORDERS:'api/Order/OrderListForUserApp',



};
