import urls from './urls';
import axios from 'axios';
import {store} from '../store';
import AsyncStorage from '@react-native-community/async-storage';

class Api {
  static headers() {
    // const userData = store.getState().login_User.data;
    // debugger;
    return {
      // Authorization: `Bearer ${accessToken}`,
      // Authorization: btoa('luqman:password'),
      // 'Authorization': 'Bearer ' + accessToken,
      // 'Content-Type': 'multipart/form-data',
      // Accept: 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  static get(route, params, sendAuthToken = true) {
    return this.xhr(route, null, 'GET', sendAuthToken);
  }

  static put(route, body,formData, sendAuthToken = true) {
    console.log(body, 'body put');

    return this.xhr(route, body, 'PUT',formData, sendAuthToken);
  }

  static post(route, body, formData, sendAuthToken = false) {
    console.log(route, 'route');
    console.log(body, 'body post');
    return this.xhr(route, body, 'POST', formData, sendAuthToken);
  }

  static delete(route, params,formData, sendAuthToken = false) {
    return this.xhr(route, params, 'DELETE',formData, sendAuthToken);
  }

  static async xhr(route, body, verb, formData, sendAuthToken) {
    const url = `${urls.HOST}${route}`;
    console.log(url);
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      `Bearer ${await AsyncStorage.getItem('@token')}`,
    );
    if(!formData){
      myHeaders.append("Content-Type", "application/json");
    }

    let options = null;
    if (body) {
      options = {
        method: verb,
        body: formData ? body : JSON.stringify(body),
        headers: myHeaders,
        redirect: 'follow',
      };
    } else {
      options = {
        method: verb,
        headers: myHeaders,
      };
    }
    console.log(options, 'options');
    try {
      const resp = await fetch(url, options);
      console.log(resp, 'API response');

      return resp.json();
    } catch (err) {
      console.log(err, 'error');
      let error = err.response
        ? err.response.data.error
          ? err.response.data.error
          : {error: err.response.data.message}
        : {
            error:
              'Unable to connect to the internet. Please retry after checking your internet connection',
          };

      err.message =
        !err.response &&
        'Unable to connect to the internet. Please retry after checking your internet connection';
      err.error = !err.response && {
        error:
          'Unable to connect to the internet. Please retry after checking your internet connection',
      };
      console.log(error, 'Error message from API.js');
      console.log(err.response, 'Err message from API.js');
      throw err.response ? {...err.response.data, error} : error;
    }
  }
}
export default Api;
