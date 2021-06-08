import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'hash',
  routes: [
    /* eslint import/no-dynamic-require: 0, global-require: 0 */
    {
      path: '/',
      component: resolve => require(['../view/common/LayOut.vue'], resolve),
      meta: { title: '头部尾部布局' },
      redirect: '/exOne',
      children: [
        {
          path: '/exOne',
          name: 'exOne',
          component: resolve => require(['../view/exOne/exOne.vue'], resolve),
          meta: { title: '列表1', active: '/exOne' },
        },
        {
          path: '/exTwo',
          name: 'exTwo',
          component: resolve => require(['../view/exTwo/exTwo.vue'], resolve),
          meta: { title: '列表2', active: '/exTwo' },
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
