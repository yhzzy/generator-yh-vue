<template>
  <div class="sliderBar">
    <div class="logo">
      这里是logo
    </div>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ff7f41"
    >
      <div v-for="(item, index) in menus" :key="index">
        <el-submenu v-if="item.children" class="menu" :index="index.toString()">
          <template slot="title">
            <i class="fa" :class="item.icon" />
            <span class="menu-title">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(subItem, indexS) in item.children"
            :key="indexS"
            class="sub-menu"
            :class="{ active: subItem.path === activeMenu }"
            :index="subItem.path"
          >
            {{ subItem.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-if="!item.children"
          class="menu"
          :class="{ active: item.path === activeMenu }"
          :index="item.path"
        >
          <i class="fa" :class="item.icon" />
          <span slot="title" class="menu-title">{{ item.name }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'FooterLayout',
  data() {
    return {
      menus: [
        {
          name: '列表1',
          path: '/exOne',
        },
        {
          name: '列表2',
          path: '/exTwo',
        },
      ],
    };
  },
  computed: {
    activeMenu() {
      const { active } = this.$route.meta;
      if (active === undefined) {
        return '';
      }
      return active;
    },
  },
};
</script>

<style rel="stylesheet/less" scoped lang="less">
@import './src/assets/css/commonColor';

.sliderBar {
  height: 100%;
  background: @backGroundColor;

  .logo {
    width: 200px;
    margin: 0 auto;
    padding: 20px 0;

    img {
      width: 100%;
      vertical-align: middle;
    }
  }

  .menu {
    i {
      font-size: 16px;
      margin-right: 5px;
    }

    .menu-title {
      font-size: 16px;
    }
  }

  .active {
    background-color: rgba(67, 74, 80, 0.7) !important;
  }
}
</style>
