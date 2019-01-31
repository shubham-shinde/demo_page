import * as config from '../app-config';
import configs from './fetch-configs';

const Api = () => {
  return {
    get: _get,
    post: _post
  }

  function _get(path) {
    const promise = new Promise((resolve, reject) => {
      const serverPath = config.SERVER_URL + path;
      const fetchConfigs = configs('get');
      fetch(serverPath, fetchConfigs).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        return resolve(data);
      }).catch((err) => {
        return reject(err);
      });
    });
    return promise;
  }

  function _post(path, payload) {
    const promise = new Promise((resolve, reject) => {
      const serverPath = config.SERVER_URL + path;
      const fetchConfigs = configs('post', payload);
      console.log(fetchConfigs);
      fetch(serverPath, fetchConfigs).then((response) => {
        return response.json();
      }).then((data) => {
        return resolve(data);
      }).catch((err) => {
        return reject(err);
      });
    });
    return promise;
  }
}

export default Api;
