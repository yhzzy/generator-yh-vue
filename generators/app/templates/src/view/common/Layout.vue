<template>
  <el-container>
    <el-header height="80px" class="el-header">
      <x-header ref="header"></x-header>
    </el-header>
    <el-container>
      <el-aside width="280px">
        <x-slider-bar></x-slider-bar>
      </el-aside>
      <el-main>
        <el-card class="box-card">
          <router-view class="main-router"></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import XHeader from '@/view/common/Header';
import XSliderBar from './SliderBar';

export default {
  name: 'Layout',
  components: {
    XHeader,
    XSliderBar,
  },
};
</script>
<style lang="less">
@import './src/assets/css/commonColor';

.el-container {
  height: 100%;

  .el-header {
    background: linear-gradient(to top, black, white);
    border-bottom: 1px solid @borderColor;
    box-shadow: 0 2px 5px #ccc;
  }
}
</style>
