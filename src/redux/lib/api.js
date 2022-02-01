import urls from './urls';
import axios from 'axios';
import { store } from '../store';
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

  static put(route, body, sendAuthToken = true) {
    return this.xhr(route, body, 'PUT', sendAuthToken);
  }

  static post(route, body, sendAuthToken = false) {
    console.log(route, 'route');
    console.log(body, 'body');
    return this.xhr(route, body, 'POST', sendAuthToken);
  }

  static delete(route, params, sendAuthToken = false) {
    return this.xhr(route, params, 'DELETE', sendAuthToken);
  }

  static async xhr(route, body, verb, sendAuthToken) {
    const url = `${urls.HOST}${route}`;
    console.log(url)
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      `Bearer ${await AsyncStorage.getItem('@token')}`,
    );
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2MCIsIk5hbWUiOiJzYW5peWEiLCJVc2VyVHlwZUlkIjoiMyIsIlJlc3RhdXJhbnRJZCI6IjAiLCJuYmYiOjE2NDM2MjI4NzksImV4cCI6MTY0NDA1NDg3OSwiaWF0IjoxNjQzNjIyODc5fQ.qdcRiP_X2aLV52FyCkKcgZvV4P8Ni-HOsXG1JqLWGFJiZWprLqJi2o8kERK3C52dGm9lbYnaLTELcc4OVkgDtQ");

    myHeaders.append("Content-Type", "multipart/form-data"),
      myHeaders.append(Accept, "application/json",);

    let options = null;
    if (body) {
      options = {
        method: verb,
        body: body,
        headers: myHeaders,
        redirect: 'follow',
      };
    } else {
      options = {
        method: verb,
        headers: myHeaders,
      };
    }
    // options.headers = Api.headers();

    console.log(options, 'options');
    try {
      const resp = await fetch(url, options);
      return resp.json();
    } catch (err) {
      console.log(err, 'error');
      let error = err.response
        ? err.response.data.error
          ? err.response.data.error
          : { error: err.response.data.message }
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
      throw err.response ? { ...err.response.data, error } : err;
    }
  }
}
export default Api;
