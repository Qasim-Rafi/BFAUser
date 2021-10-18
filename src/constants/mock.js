import {globalPath} from './globalPath';
import { colors } from './colorsPallet';
import React from 'react';
import AddToCart from '../screens/Home/DishDetails/AddToCart';
import AsyncStorage from '@react-native-community/async-storage';



export const advertisementBannerFakeDATA = [
  {
    restaurantName: "PappaRich",
    dishName: "Malaysian Delights",
    url: require('../assets/fake_Images/PappaRich.png'),
  },
  {
    restaurantName: "Dynasty Restaurant",
    dishName: "Chinese Restaurant",
    url: require('../assets/fake_Images/Dynasty_Restaurant.png'),
  },
  {
    restaurantName: "Tasek Brasserie",
    dishName: " ",
    url: require('../assets/fake_Images/tasek_brasserie.png'),
  },
  
  
  
  
  
];

export const cuisineSliderData = [
  require('../assets/fake_Images/cuisineAmerican.png'),
  require('../assets/fake_Images/pakistani.png'),
  require('../assets/fake_Images/Lebanese.png'),
  require('../assets/fake_Images/malaysian.png'),
  require('../assets/fake_Images/japanese.png'),
]

export const promosBannerFakeDATA = [
  require('../assets/fake_Images/promos-banner1.png'),
  require('../assets/fake_Images/promos-banner3.png'),
  require('../assets/fake_Images/Home-Add-Banner-2.png'),
];

export const CuisinesData = [
  {
    id:1,
      title : "American",
      description: "Special sushi",
      url: require('../assets/fake_Images/cuisine-American.png'),
  },
  {
    id:2,
      title : "Chinese",
      description: "Special sushi",
      url: require('../assets/fake_Images/cuisine-chinese.png'),
  },
  {
    id:3,
      title : "Indian",
      description: "Special sushi",
      url: require('../assets/fake_Images/cuisine-indian.png'),
  },
  {
    id:4,
      title : "Pakistani",
      description: "Special sushi",
      url: require('../assets/fake_Images//cuisine-Pakistani.png'),
  },
]

export const ourRecommendationFakeDATA = [
  {
    id:1,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-1.png'),
  },
  {
    id:2,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-2.png'),
  },
  {
    id:3,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-3.png'),
  },
  {
    id:4,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-4.png'),
  },
  {
    id:5,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-1.png'),
  },
  {
    id:6,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-2.png'),
  },
  {
    id:7,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-3.png'),
  },
  {
    id:8,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/Home-Recommendations-4.png'),
  },
];

export const promotionsFakeDATA = [
  {
    id:1,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-1.png'),
  },
  {
    id:2,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-2.png'),
  },
  {
    id:3,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-3.png'),
  },
  {
    id:4,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-4.png'),
  },
  {
    id:5,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-1.png'),
  },
  {
    id:6,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-2.png'),
  },
  {
    id:7,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-3.png'),
  },
  {
    id:8,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-4.png'),
  },

];
export const everyoneFavoriteFakeDATA = [
  {
    id:1,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-1.png'),
  },
  {
    id:2,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-2.png'),
  },
  {
    id:3,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-3.png'),
  },
  {
    id:4,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-4.png'),
  },
  {
    id:5,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-1.png'),
  },
  {
    id:6,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-2.png'),
  },
  {
    id:7,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-3.png'),
  },
  {
    id:8,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/promotions-4.png'),
  },

];

export const yourFavoriteFakeDATA = [
  {
    id:1,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-1.png'),
  },
  {
    id:2,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-2.png'),
  },
  {
    id:3,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-3.png'),
  },
  {
    id:4,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-4.png'),
  },
  {
    id:5,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-1.png'),
  },
  {
    id:6,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-2.png'),
  },
  {
    id:7,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-3.png'),
  },
  {
    id:8,
      title : "Kaizen sushi",
      description: "Special sushi",
      quantity: 1,
      price: '8.00',
      url: require('../assets/fake_Images/everyone-4.png'),
  },

];

export const BFAPartnerFakeData = [
  require('../assets/fake_Images/HOME_BFA_PARTNER-1.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-2.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-3.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-4.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-5.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-6.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-1.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-2.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-3.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-4.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-5.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-6.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-1.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-2.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-3.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-4.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-5.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-6.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-1.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-2.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-3.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-4.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-5.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-6.png'),

];
export const BFAPartnerLessData = [
  require('../assets/fake_Images/HOME_BFA_PARTNER-1.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-2.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-3.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-4.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-5.png'),
  require('../assets/fake_Images/HOME_BFA_PARTNER-6.png'),

];

export const exploreCategoryByName = [
  {
    title: 'A',
    data: ['Category Name ', 'Category Name', 'Category Name'],
  },
  {
    title: 'B',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'C',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'D',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'E',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'F',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'G',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'H',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'I',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'J',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'K',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'L',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'M',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'N',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'O',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'P',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'Q',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'R',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'S',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'T',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'U',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'V',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'X',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'Y',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
  {
    title: 'Z',
    data: ['Category Name', 'Category Name', 'Category Name'],
  },
];
export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Total Carbohydrates',
    data: [
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
    ],
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Total Protein',
    data: [
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Total Fibres',
    data: [
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
      {
        name: 'Saturated Fat(g)',
        value: '10',
      },
    ],
  },
];
export const FacilityData = [
  {name: 'Prayer Room'},
  {name: 'Wifi'},
  {name: 'Parking'},
];

export const FakeCaloriesData = [
  {
    colors: colors.skyblue2,
    variant: 'Protein',
    weightgeInGrams: '16.5g',
    percentage: '8%',
  },
  {
    colors: colors.yellow,
    variant: 'Fats',
    weightgeInGrams: '13.5g',
    percentage: '19%',
  },
  {
    colors: '#3CAE3C',
    variant: 'Carbs',
    weightgeInGrams: '20.5g',
    percentage: '8%',
  },
  {
    colors: colors.blue1,
    variant: 'Fibers',
    weightgeInGrams: '13.5g',
    percentage: '11%',
  },
];
export const myListingTabs = [
  {
    id: 1,
    name: 'Sort',
  },
  {
    id: 2,
    name: 'Fillter',
  },
  {
    id: 3,
    name: 'Map',
  },
];

export const FiltersDummyData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Popular Filters',
    data: [
      {
        name: 'Breakfast Included',
        value: '102',
      },
      {
        name: 'Book Without Credit Card',
        value: '10',
      },
      {
        name: 'Hotels',
        value: '10',
      },
      {
        name: 'Parking',
        value: '10',
      },
      {
        name: 'SwimmingPools',
        value: '10',
      },
    ],
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Your Budget (For One Night)',
    data: [
      {
        name: '$10-$20',
        value: '10',
      },
      {
        name: '$10-$20',
        value: '10',
      },
      {
        name: '$10-$20',
        value: '10',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Reviews (Best To Worst)',
    data: [
      {
        name: '4 Stars and higher',
        value: '102',
      },
      {
        name: '3 Stars and higher',
        value: '10',
      },
      {
        name: '2 Stars and higher',
        value: '10',
      },
    ],
  },
];
export const myPromosListingTabs = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Promotion',
  },
  {
    id: 3,
    name: 'Inbox',
  },
  {
    id: 4,
    name: 'Jobs',
  },
];

export const profileTabs = [
  {
    id: 1,
    name: 'Profile',
  },
  {
    id: 2,
    name: 'Optional',
  },
  
];

export const favouriteTabs = [
  {
    id: 1,
    name: 'Favorite Dishes',
  },
  {
    id: 2,
    name: 'Favorite Restaurants',
  },
  
];

export const RadioGroup = [
  {
    id: 1,
    name: '1',
  },
  {
    id: 2,
    name: '2',
  },
  {
    id: 3,
    name: '3',
  },
  
];
export const NewsFeeds = [
  {
    favorite:224,
    DishName:'Spaghetti marinara with freshlt imported boston lobster',
    Name:'Aligato'
  },
  {
    favorite:224,
    DishName:'Spaghetti marinara with freshlt imported boston lobster',
    Name:'Aligato',
  },
];
export const PROMOSJOBS =[
  
  {
     JobTitle:'Waiter & Waitress',
     Date:'5 sep 2021',
     Experience:'1-2 years',
     Vacancy:'5',
     Location:'Brunei Muara',
     ResturantName:'Yam Cha REsturant',
     Logo:require('../assets/fake_Images/Jobs-logo1.png'),
  
  },
  {
    JobTitle:'Deliver Boy',
     Date:'5 sep 2021',
     Experience:'1-2 years',
     Vacancy:'5',
     Location:'Brunei Muara',
     ResturantName:'Yam Cha REsturant',
     Logo:require('../assets/fake_Images/Jobs-logo2.png'),

  },
  {
    JobTitle:'Chef/Cook',
     Date:'5 sep 2021',
     Experience:'1-2 years',
     Vacancy:'5',
     Location:'Brunei Muara',
     ResturantName:'Yam Cha REsturant',
     Logo:require('../assets/fake_Images/Jobs-logo3.png'),

  },
  {
    JobTitle:'Assistant Cook',
     Date:'5 sep 2021',
     Experience:'1-2 years',
     Vacancy:'5',
     Location:'Brunei Muara',
     ResturantName:'Yam Cha REsturant',
     Logo:require('../assets/fake_Images/Jobs-logo4.png'),

  },
  {
    JobTitle:'Waiter & Waitress',
     Date:'5 sep 2021',
     Experience:'1-2 years',
     Vacancy:'5',
     Location:'Brunei Muara',
     ResturantName:'Yam Cha REsturant',
     Logo:require('../assets/fake_Images/Jobs-logo5.png'),

  },
  {
    JobTitle:'Kitchen Helper',
     Date:'5 sep 2021',
     Experience:'1-2 years',
     Vacancy:'5',
     Location:'Brunei Muara',
     ResturantName:'Yam Cha REsturant',
     Logo:require('../assets/fake_Images/Jobs-logo6.png'),

  },
];

export const MenuSectionButtons = [
  {
    id: 1,
    title: 'Appetizers',
  },
  {
    id: 2,
    title: 'Main Course',
  },
  {
    id: 3,
    title: 'Dessert',
  },
  {
    id: 4,
    title: 'Drinks',
  },
];
export const BranchDetailButtons = [
  {
    id: 1,
    title: 'Info',
    icon: require('../assets/icons/info_icon.png'),
  },
  {
    id: 2,
    title: 'Promo',
    icon: require('../assets/icons/Promo-icon.png'),
  },
  {
    id: 3,
    title: 'Menu',
    icon: require('../assets/icons/menu_icon.png'),
  },
  
  {
    id: 4,
    title: 'Branches',
    icon: require('../assets/icons/branches_icon.png'),
  },
  {
    id: 5,
    title: 'Awards',
    icon: require('../assets/icons/Awards.png'),
  },
];
export const MenuTabButtons = [
  {
    id: 1,
    title: 'Full Menu',
    icon: require('../assets/icons/info_icon.png'),
  },
  {
    id: 2,
    title: 'Favorites',
    icon: require('../assets/icons/favourites.png'),
  },
  {
    id: 3,
    title: 'Brunei Food Awards',
    icon: require('../assets/icons/Awards.png'),
  },
  
  {
    id: 4,
    title: 'Search',
    icon: require('../assets/icons/search.png'),
  },
 
];
export const FullMenuList = [
  {
    id: 1,
    title: 'Starter',
    data: [
      {
        id: 1,
        title: 'Tomato Soup ',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',
        url: require('../assets/fake_Images/menu-appetizers-1.png'),
      },
      {
        id: 2,
        title: 'Chicken Soup ',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-appetizers-2.png'),
      },
      {
        id: 3,
        title: 'Tomato Soup ',
        price: '$ 8.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-appetizers-3.png'),
      },
      {
        id: 4,
        title: 'Fish Crackers ',
        price: '$ 8.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-appetizers-4.png'),
      },
    ],
  },
  {
    id: 2,
    title: 'Main Dish 1',
    data: [
      {
        id: 1,
        title: 'Nasi Ayam Bakar Madura',
        price: '$11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-1.png'),
      },
      {
        id: 2,
        title: 'Nasi Ayam Sambal Tomat',
        price: '$ 13.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-2.png'),
      },
      {
        id: 3,
        title: 'Vegetable Rice',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-3.png'),
      },
      {
        id: 4,
        title: 'Egg Fried Rice',
        price: '$ 11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-4.png'),
      },
      {
        id: 5,
        title: 'Chicken Shashlik',
        price: '$15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-5.png'),
      },
      {
        id: 6,
        title: 'Finger Fish',
        price: '$ 25.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-6.png'),
      },
      {
        id: 7,
        title: 'Chicken Breast',
        price: '$ 15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-7.png'),
      },
      {
        id: 8,
        title: 'Chicken Chops',
        price: '$ 15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-8.png'),
      },
    ],
  },
  {
    id: 3,
    title: 'Main Dish 2',
    data: [
      {
        id: 1,
        title: 'Nasi Ayam Bakar Madura',
        price: '$11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-1.png'),
      },
      {
        id: 2,
        title: 'Nasi Ayam Sambal Tomat',
        price: '$ 13.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-2.png'),
      },
      {
        id: 3,
        title: 'Vegetable Rice',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-3.png'),
      },
      {
        id: 4,
        title: 'Egg Fried Rice',
        price: '$ 11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-4.png'),
      },
      {
        id: 5,
        title: 'Chicken Shashlik',
        price: '$15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-5.png'),
      },
      {
        id: 6,
        title: 'Finger Fish',
        price: '$ 25.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-6.png'),
      },
      {
        id: 7,
        title: 'Chicken Breast',
        price: '$ 15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-7.png'),
      },
      {
        id: 8,
        title: 'Chicken Chops',
        price: '$ 15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-8.png'),
      },
    ],
  },
  {
    id: 4,
    title: 'Dessert',
    data: [
      {
        id: 1,
        title: 'Apple Pie',
        price: '$11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-1.png'),
      },
      {
        id: 2,
        title: 'Chocolate Brownie',
        price: '$ 13.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-2.png'),
      },
      {
        id: 3,
        title: 'Chocolate Cake ',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-3.png'),
      },
      {
        id: 4,
        title: 'Ice Cream',
        price: '$ 13.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-4.png'),
      },
      {
        id: 5,
        title: 'Tutti Frutti',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-5.png'),
      },
    ],
  },
  {
    id: 5,
    title: 'Drinks',
    data: [
      {
        id: 1,
        title: 'Mint Margarita',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-1.png'),
      },
      {
        id: 2,
        title: 'Fresh Lime Soda',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-2.png'),
      },
      {
        id: 4,
        title: 'Tea',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-3.png'),
      },
      {
        id: 5,
        title: 'Cappuccino',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-4.png'),
      },
      {
        id: 6,
        title: 'Soft Drinks',
        price: '$ 2.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-5.png'),
      },
      {
        id: 7,
        title: 'Mineral water',
        price: '$ 2.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-6.png'),
      },
    ],
  },
 
];
export const BranchMenuSectionsData = [
  {
    id: 1,
    title: 'Appetizers',
    data: [
      {
        id: 1,
        title: 'Tomato Soup ',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',
        url: require('../assets/fake_Images/menu-appetizers-1.png'),
      },
      {
        id: 2,
        title: 'Chicken Soup ',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-appetizers-2.png'),
      },
      {
        id: 3,
        title: 'Tomato Soup ',
        price: '$ 8.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-appetizers-3.png'),
      },
      {
        id: 4,
        title: 'Fish Crackers ',
        price: '$ 8.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-appetizers-4.png'),
      },
    ],
  },
  {
    id: 2,
    title: 'Main Course',
    data: [
      {
        id: 1,
        title: 'Nasi Ayam Bakar Madura',
        price: '$11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-1.png'),
      },
      {
        id: 2,
        title: 'Nasi Ayam Sambal Tomat',
        price: '$ 13.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-2.png'),
      },
      {
        id: 3,
        title: 'Vegetable Rice',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-3.png'),
      },
      {
        id: 4,
        title: 'Egg Fried Rice',
        price: '$ 11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-4.png'),
      },
      {
        id: 5,
        title: 'Chicken Shashlik',
        price: '$15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-5.png'),
      },
      {
        id: 6,
        title: 'Finger Fish',
        price: '$ 25.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-6.png'),
      },
      {
        id: 7,
        title: 'Chicken Breast',
        price: '$ 15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-7.png'),
      },
      {
        id: 8,
        title: 'Chicken Chops',
        price: '$ 15.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-course-8.png'),
      },
    ],
  },
  {
    id: 3,
    title: 'Dessert',
    data: [
      {
        id: 1,
        title: 'Apple Pie',
        price: '$11.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-1.png'),
      },
      {
        id: 2,
        title: 'Chocolate Brownie',
        price: '$ 13.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-2.png'),
      },
      {
        id: 3,
        title: 'Chocolate Cake ',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-3.png'),
      },
      {
        id: 4,
        title: 'Ice Cream',
        price: '$ 13.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-4.png'),
      },
      {
        id: 5,
        title: 'Tutti Frutti',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-dessert-5.png'),
      },
    ],
  },
  {
    id: 4,
    title: 'Drinks',
    data: [
      {
        id: 1,
        title: 'Mint Margarita',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-1.png'),
      },
      {
        id: 2,
        title: 'Fresh Lime Soda',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-2.png'),
      },
      {
        id: 4,
        title: 'Tea',
        price: '$ 5.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-3.png'),
      },
      {
        id: 5,
        title: 'Cappuccino',
        price: '$ 10.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-4.png'),
      },
      {
        id: 6,
        title: 'Soft Drinks',
        price: '$ 2.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-5.png'),
      },
      {
        id: 7,
        title: 'Mineral water',
        price: '$ 2.00',
        description: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',

        url: require('../assets/fake_Images/menu-drinks-6.png'),
      },
    ],
  },
];
export const TRANSACTION_HISTORY_FAKE_DATA=[
  {
    restaurant:'Yam Cha Restaurant',
    wallet:'Visa Card',
    orderId:'12321123453',
    price:'$30.00',
    url: require('../assets/fake_Images/menu-appetizers-1.png'),
  },
  {
    restaurant:'Yam Cha Restaurant',
    wallet:'Google Card',
    orderId:'12321123453',
    price:'$30.00',
    url: require('../assets/fake_Images/menu-drinks-1.png'),
  },
  {
    restaurant:'Yam Cha Restaurant',
    wallet:'Bank Transaction',
    orderId:'12321123453',
    price:'$30.00',
    url: require('../assets/fake_Images/menu-drinks-2.png'),
  },
  {
    restaurant:'Yam Cha Restaurant',
    wallet:'Visa Card',
    orderId:'12321123453',
    price:'$30.00',
    url: require('../assets/fake_Images/menu-drinks-3.png'),
  },
]
export const RESTURANT_BANNER =[
  require('../assets/fake_Images/ResturantBanner.png'),
  require('../assets/fake_Images/ResturantBanner1.png')
]
export  const ORDER_HISTORY = [
  {
    Title:'Nasi Ayam Bakar Madura' ,
    Order_id:'AMD12345',
    Items:"3 ",
    Status :"Dispatched",
    Order_Price:'5.00',
    url: require('../assets/fake_Images/menu-drinks-6.png'),
  },{
    Title:'Nasi Ayam Bakar Madura' ,
    Order_id:'AMD12345',
    Items:"3 ",
    Status :"Dispatched",
    Order_Price:'5.00',
    url: require('../assets/fake_Images/menu-drinks-6.png'),
  },{
    Title:'Nasi Ayam Bakar Madura' ,
    Order_id:'AMD12345',
    Items:"3 ",
    Status :"Dispatched",
    Order_Price:'5.00',
    url: require('../assets/fake_Images/menu-drinks-6.png'),
  },{
    Title:'Nasi Ayam Bakar Madura' ,
    Order_id:'AMD12345',
    Items:"3 ",
    Status :"Dispatched",
    Order_Price:'5.00',
    url: require('../assets/fake_Images/menu-drinks-6.png'),
  },{
    Title:'Nasi Ayam Bakar Madura' ,
    Order_id:'AMD12345',
    Items:"3 ",
    Status :"Dispatched",
    Order_Price:'5.00',
    url: require('../assets/fake_Images/menu-drinks-6.png'),
  },{
    Title:'Nasi Ayam Bakar Madura' ,
    Order_id:'AMD12345',
    Items:"3 ",
    Status :"Dispatched",
    Order_Price:'5.00',
    url: require('../assets/fake_Images/menu-drinks-6.png'),
  },

]; 
export const COISINES_FAKE_DATA=[
  {title:'Ambuyat',id:1},
 {title:'Nasi Ktok',id:2},
 {title:'Kelupis',id:3},
 {title:'Hotels',id:4},
 {title:'Dishes',id:5},
 {title:'Restaurant',id:6},
 {title:'Pulut Panggang',id:7},
 {title:'Bamboo',id:8},
 {title:'Selurup',id:9},
 {title:'Tapai',id:10},
 {title:'Penyaran',id:11},
  {title:'Ambuyat',id:12},

]
export const ADD_TO_CART_FAKE_DATA=[
  {
    title:'Choose Soft Drink',
    option:'Required',
    data:[
      {
        name:"coke",
        price:'$0.00'
      },
      {
        name:"Sprite",
        price:'$0.00'
      },
      {
        name:"Mountain Dew",
        price:'$0.00'
      },
    ]

  },
  {
  title:'Extra Cheese',
  option:'Optional',
  data:[
    {
      name:"Cheese",
      price:'+$5.00'
    },
  ]

},
{
  title:'Add ons',
  option:'Optional',
  data:[
    {
      name:"Corn on the cob",
      price:'+$5.00'
    },
    {
      name:"Chicken Piece",
      price:'$0.00'
    },
  ]

},
];
export const AddToCartUpSize=[
  {
    id:1,
    name:"French Fries"
  },
  {
    id:2,
    name:"Hot Wings"
  },{
    id:3,
    name:"Nuggets"
  },
];
export const AwardsMenuSectionsData = [
  
      { id:1,
        title: 'Tomato Soup ',
        price: '$ 5.00',
        quantity: 1,
        des: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',
        url: require('../assets/fake_Images/menu-appetizers-1.png'),
      },
      
      { id:1,
        quantity: 1,
        title: 'Chicken Soup ',
        price: '$ 10.00',
        des: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',
        url: require('../assets/fake_Images/menu-appetizers-2.png'),
      },
      {
        id:1,
        quantity: 1,
        title: 'Tomato Soup ',
        price: '$ 8.00',
        des: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',
        url: require('../assets/fake_Images/menu-appetizers-3.png'),
      },
      {
        id:1,
        quantity: 1,
        title: 'Fish Crackers ',
        price: '$ 8.00',
        des: 'Lorem Impsum dolor sit amet, conseceutur adipis cing elit maunis',
        url: require('../assets/fake_Images/menu-appetizers-4.png'),
      },
    
  ]

  export const CARD_DATA = [
    {
      cardType: 'Visa',
      cardNo: '**********0000',
      url: require('../assets/icons/visacard-1.png'),
    },
    {
      cardType: 'Master',
      cardNo: '**********0000',
      url: require('../assets/icons/mastercard-2.png'),
    },
  ];

  export const Cart_Details = [
    // {
    //   id:1,
    //   title : "Fish Crackers",
    //   description: "lorem ipsum dolor sit amet, consectetur adipis",
    //   quantity: 1,
    //   price: '8.00',
    //   url: require('../assets/fake_Images/cart-1.png'),
    // },


    // {
    //   id:2,
    //   title : "Egg Fied Rice",
    //   description: "lorem ipsum dolor sit amet, consectetur adipis",
    //   quantity: 1,
    //   price: '10.00',
    //   url: require('../assets/fake_Images/cart-2.png'),
    // },

    // {
    //   id:3,
    //   title : "Chocolate Brownie",
    //   description: "lorem ipsum dolor sit amet, consectetur adipis",
    //   quantity: 1,
    //   price: '13.00',
    //   url: require('../assets/fake_Images/cart-3.png'),
    // },
  ];

  export const PROMOS_JOBS =[
  
    {
       JobTitle:'Waiter & Waitress',
       Date:'5 sep 2021',
       Experience:'1-2 years',
       Vacancy:'5',
       Location:'Brunei Muara',
       RestaurantName:'Yam Cha Restaurant',
       Logo:require('../assets/fake_Images/Jobs-logo1.png'),  
    },
    {
      JobTitle:'Deliver Boy',
       Date:'5 sep 2021',
       Experience:'1-2 years',
       Vacancy:'5',
       Location:'Brunei Muara',
       RestaurantName:'Yam Cha Restaurant',
       Logo:require('../assets/fake_Images/Jobs-logo2.png'),
    },
    {
      JobTitle:'Chef/Cook',
       Date:'5 sep 2021',
       Experience:'1-2 years',
       Vacancy:'5',
       Location:'Brunei Muara',
       RestaurantName:'Yam Cha Restaurant',
       Logo:require('../assets/fake_Images/Jobs-logo3.png'), 
    },
    {
      JobTitle:'Assistant Cook',
       Date:'5 sep 2021',
       Experience:'1-2 years',
       Vacancy:'5',
       Location:'Brunei Muara',
       RestaurantName:'Yam Cha Restaurant',
       Logo:require('../assets/fake_Images/Jobs-logo4.png'), 
    },
    {
      JobTitle:'Waiter & Waitress',
       Date:'5 sep 2021',
       Experience:'1-2 years',
       Vacancy:'5',
       Location:'Brunei Muara',
       RestaurantName:'Yam Cha Restaurant',
       Logo:require('../assets/fake_Images/Jobs-logo5.png'),  
    },
    {
      JobTitle:'Kitchen Helper',
       Date:'5 sep 2021',
       Experience:'1-2 years',
       Vacancy:'5',
       Location:'Brunei Muara',
       RestaurantName:'Yam Cha Restaurant',
       Logo:require('../assets/fake_Images/Jobs-logo6.png'),
    },
  ];

  export const CUISINES_DATA =[
    {title:'Arabic',id:1},
   {title:'Bruneian',id:2},
   {title:'Bangladeshi',id:3},
   {title:'Chinese',id:4},
   {title:'Filipino',id:5},
   {title:'Indian',id:6},
   {title:'Indonesian',id:7},
   {title:'Japanese',id:8},
   {title:'Korean',id:9},
   {title:'Malaysian',id:10},
   {title:'Mexican',id:11},
    {title:'Pakistani',id:12},
    {title:'Singaporean',id:13},
    {title:'Thailand',id:14},
    {title:'Vietnamese',id:15},
    {title:'Western',id:16},
  
  ];
  export const POPULER_DISHES_DATA =[
    {title:'Kaizen Sushi',id:1},
   {title:'Pizza Paratha',id:2},
   {title:'Beef Burger',id:3},
   {title:'Chicken Tikka Pizza',id:4},
   {title:'Cheese Pizza',id:5},
   {title:'Beef Karahi',id:6},
   {title:'Alfredo Pasta',id:7},
   {title:'Cappuccino',id:8},
   {title:'Egg Fried Rice',id:9},
   {title:'Cocktail Grilled Chicken',id:10},
   {title:'Chicken Biryani',id:11},
    
  
  ];
  export const OTHERS_DATA =[
    {title:'Award Winning',id:1},
   {title:'Bakery',id:2},
   {title:'Budget',id:3},
   {title:'Buffet',id:4},
   {title:'Coffee & Tea',id:5},
   {title:'dessert',id:6},
   {title:'Fast Food',id:7},
   {title:'Food Stails',id:8},
   {title:'Healthy',id:9},
   {title:'Home Based',id:10},
   {title:'New Dishes',id:11},
    {title:'New Eatery',id:12},
    {title:'Sea Food',id:12},
    {title:'Special Recommendation',id:12},
    {title:'Steambaat',id:12},
    {title:'Vegetarian',id:12},
  
  ];


  export const MY_REVIEWS_DATA = [
    {
      title:"Christine Smith",
      comment:"This recipe is very complex. it has all it takes to start off a good day.",
      date:'1 day ago',
      url:require('../assets/fake_Images/reviews-pic-1.png')
    },
    {
      title:"Habiba Nisa",
      comment:"Yes, I would like to try different restaurants each time. unfortunately, some of them aren't good.",
      date:'12 Sep 2021',
      url:require('../assets/fake_Images/reviews-pic-2.png')
    },
    {
      title:"George",
      comment:"I would definitely do this again, very tasteful.",
      date:'10 Sep 2021',
      url:require('../assets/fake_Images/reviews-pic-3.png')
    },
    {
      title:"Awang Shahrul",
      comment:"Came for lunch with my sister. We loved our Thai-style mains which were amazing with lots of flavour, very impressive for a vegetarian restaurant.",
      date:'05 Sep 2021',
      url:require('../assets/fake_Images/reviews-pic-4.png')
    },
    {
      title:"Talha Gani",
      comment:"My family and I like to try new flavors and visit different types of restaurants, so every weekend we liked to ate out. However, due to the pandemic we have been making our own food, which is great because you eat healthier and save a lot of money",
      date:'01 Sep 2021',
      url:require('../assets/fake_Images/reviews-pic-5.png')
    },
  ]

 
  