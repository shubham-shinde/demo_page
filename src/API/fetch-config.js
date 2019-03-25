// import lService from '../services/ls-service';
// const ls = lService();
import * as appConfigs from '../app-config';

const fetchConfig = (method, load) => {
  const url = appConfigs.SERVER_URL;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //some new text added want to add more, need more testing
  headers.append('Accept', 'application/json');
  // headers.append('Access-Control-Allow-Origin', url);
  // const authToken = ls.get(appConfigs.TOKEN_NAME);
  // if (authToken) {
  //   headers.append(appConfigs.TOKEN_NAME, authToken);
  // }

  const config = {
    method: method,
    // credentials: 'include',
    headers: headers
  };
  if (method === 'post') {
    const payload = JSON.stringify(load);
    config.body = payload;
  }

  return Object.assign({}, config);
};

export default fetchConfig;
