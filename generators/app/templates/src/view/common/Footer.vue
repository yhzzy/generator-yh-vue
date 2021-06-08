<template>
  <div class="footer">{{ data }}<i class="c-icon-jgwablogo" /></div>
</template>

<script>
export default {
  name: 'FooterLayout',
  data() {
    return {
      data: '蜀ICP备19004897号 川公网安备 51019002002002号',
    };
  },
};
</script>

<style rel="stylesheet/less" scoped lang="less">
.footer {
  text-align: center;
  .c-icon-jgwablogo {
    margin-left: 10px;
  }
}
</style>
