import { store } from "../redux/store";
// store.subscribe(listener)
// function select(state) {
//   return state.state.appReducers.setTheme.data
// }
// let currentValue
// function handleChange() {
//   let previousValue = currentValue
//   currentValue = select(store.getState())

//   if (previousValue !== currentValue) {
//     console.log(
//       'Some deep nested property changed from',
//       previousValue,
//       'to',
//       currentValue
//     )
//   }
// }

// const unsubscribe = store.subscribe(handleChange)
// unsubscribe()
console.log(store,'store in colors');

function select(state) {
  return state.appReducers.setTheme.data
}
const theme = select(store.getState())
console.log(theme,'theme in colors');
// console.log(theme.data,'theme in colors');

export const colors = {
  primary: '#FFFFFF',
  secondary: '#D4D4D4',
  grey: '#A1A1A1',
  light_blue: '#AEC8C9',
  black: '#000000',
  white: '#ffffff',
  yellow:"#edc54e",
  yellow1:'#C7A02E',
  black1: '#404040',
  black2:'#303030',
  black3:'#202020',
  bgWhite:'#e2e2e2',

  grey1:'#737373',
  grey2:'#3c3625',
  grey3:'#2F2F2F',
  grey4:'#3f3f3f',
  grey5:'#595959',
  grey6:'#5d5d5d',
  skyblue2:'#40CEFB',
  green1:'#3CAE3C',
  blue1:'#214FAB',
  lightBlack:'#505050',
  lighterGrey:'#cccccc',


darkRed:'#7F0000',
  red: '#FF0000',
  red1: '#FF3B3C',
  red3: '#ff8e8e',
  red4: '#fcd8df',
  lightGrey: '#ebebeb',
  lightBlack:'#505050',
  border: '#eee',
  
  pink: '#f9c2ff',
  purple: '#5A69C6',
  skyblue1:'#5bc4ff',






  background: {
    white: '#ffffff',
    grey: '#eaeaea',
    
  },
};
