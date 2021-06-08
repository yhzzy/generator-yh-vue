import axios from 'axios';
import { Message } from 'element-ui';
import baseUrl from './setBaseUrl';
// import store from '../store';
// import { getToken, removeToken } from './auth';
import { showLoading, hideLoading } from './loading';
import router from '../router';

const instance = axios.create({
  timeout: 6000,
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  config => {
    if (config.baseUrl) {
      // eslint-disable-next-line no-param-reassign
      config.baseURL = config.baseUrl;
    }
    // if (store.getters.token) {
    //   config.headers.Authorization = `jwt ${getToken()}`;
    // }
    if (config.loading) {
      showLoading(config.loading);
    } else {
      showLoading();
    }
    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  res => {
    hideLoading();
    if (res.status === 700) {
      Message.error('token失效！');
    }
    if (res.data.code === 700) {
      Message.error('token失效！');
    }
    if (res.config.baseUrl === '/markdown') {
      return res;
    }
    if (res.data && res.data.errorcode !== 0) {
      return Message.error(res.data.data);
    }
    return res;
  },
  err => {
    hideLoading();
    if (err.response && err.response.status === 401) {
      Message.error('权限异常，默认跳转到首页！请重新登录！');
      // removeToken();
      // store.commit('SET_NAME', '');
      // store.commit('SET_STATUS', 0);
      router.push('/exOne');
    } else {
      Message.error('请求超时！');
    }
    return err;
  }
);

export default instance;
