import axios from 'axios';

import { apiUrl } from '../config.json';

export default ({
  path, method = 'GET', data = {},
}: any) => {
  const options = {
    url: `${apiUrl}${path}`,
    method,
    data,
  };

  return axios(options);
};
