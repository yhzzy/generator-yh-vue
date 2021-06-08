/**
 * Created by pro on 2019/3/19.
 * name: yhzzy
 * describe: 加载公共插件
 */

import { Loading } from 'element-ui';

let loadingCount = 0;
let loading;
const startLoading = name => {
  if (name) {
    loading = Loading.service({
      lock: true,
      target: document.querySelector(name),
    });
  } else {
    loading = Loading.service({
      lock: true,
      target: document.querySelector('.main-router'),
    });
  }
};

const endLoading = () => {
  loading.close();
};

export const showLoading = name => {
  if (loadingCount === 0) {
    startLoading(name);
  }
  loadingCount += 1;
};

export const hideLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};
