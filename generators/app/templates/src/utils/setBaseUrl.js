/* eslint import/no-mutable-exports: 0 */
let baseUrl = ''; // 这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = process.env.VUE_APP_BASE_API; // 这里是本地的请求url
    // baseUrl = "http://10.0.43.36:8080/"; // 这里是测试环境中的url
    break;
  case 'alpha': // 注意这里的名字要和步骤二中设置的环境名字对应起来
    baseUrl = ''; // 这里是测试环境中的url
    break;
  case 'production':
    baseUrl = ''; // 生产环境url
    break;
  default:
    baseUrl = '';
    break;
}

export default baseUrl;
