import axios from "axios";
// set the timeout & headers
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;cahrset=UTF-8';

/**
 * get http request
 * @param {String} url
 * @param {Object} params
 */
export const getHttp = (url: string, params?: { [key: string]: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
/**
* post http request
* @param {String} url
* @param {Object} params
*/
export const postHttp = (url: string, params?: { [key: string]: string }, contentType?: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: {
          "Content-Type": contentType ? contentType : "application/json",
        },
      })
      .then(res => {
        if (res.data.code == 0) {
          resolve(res);
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}