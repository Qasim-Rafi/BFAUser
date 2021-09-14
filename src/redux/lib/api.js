import urls from './urls';
import axios from 'axios';
import {store} from '../store';
class Api {
  static headers() {
    const userData = store.getState().login_User.data;
    // debugger;
    return {
      // Authorization: `Bearer ${}`,
      'Content-Type': 'multipart/form-data',
      Accept: 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  static get(route, params, sendAuthToken = false) {
    return this.xhr(route, null, 'GET', sendAuthToken);
  }

  static put(route, params, sendAuthToken = false) {
    return this.xhr(route, params, 'PUT', sendAuthToken);
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
    let options = {
      method: verb,
      body: JSON.stringify(body),
    };
    options.headers = Api.headers();
    console.log(options, 'options');
    try {
      const resp = await fetch(url, options);
      console.log(resp, 'response');
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
      throw err.response ? {...err.response.data, error} : err;
    }
  }
}
export default Api;
