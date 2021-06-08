<template>
  <div class="header clear">
    <div class="user">
      欢迎
      <el-dropdown>
        <span class="el-dropdown-link">
          111222<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="loginOut()">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// import { removeToken } from '../../utils/auth';

export default {
  name: 'HeaderLayout',
  methods: {
    loginOut() {
      const vm = this;
      vm.$router.push('/Login');
    },
  },
};
</script>

<style rel="stylesheet/less" scoped lang="less">
.header {
  line-height: 80px;

  .user {
    float: right;
  }
}
</style>
