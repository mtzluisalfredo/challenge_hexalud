import request from './request';
import requestsApp from './app';

const Api = () => {
  return {
    setToken(token: string | null) {
      request.setToken(token);
    },
    ...requestsApp,
  };
};

export default Api;
