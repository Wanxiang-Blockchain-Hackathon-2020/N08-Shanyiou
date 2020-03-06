<template>
  <div class="header-container">
    <div class="content">
      <div class="logo-wrapper">
        <nuxt-link to="/">
          <img class="header-image" src="/images/logo.png" />
        </nuxt-link>
      </div>
      <van-popup
        get-container=".header-container"
        position="right"
        :style="{ height: '100%' }"
        v-model="show"
      >
        <Menu mode="vertical" @on-select="closeMenu" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-close-circle-outline" />关闭
          </MenuItem>
          <MenuItem name="1"> 
            <nuxt-link to="/">首页</nuxt-link>
          </MenuItem>
          <MenuItem name="2">
            <nuxt-link to="/#scene">解决方案</nuxt-link>
          </MenuItem>
          <MenuItem name="3">
            <nuxt-link to="/#case">合作案例</nuxt-link>
          </MenuItem>
          <MenuItem name="4">
            <nuxt-link to="/about">关于我们</nuxt-link>
          </MenuItem>
          <MenuItem name="5">
            <nuxt-link to="/joinus">加入我们</nuxt-link>
          </MenuItem>
        </Menu>
      </van-popup>

      <ul class="nav">
        <li>
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#scene">解决方案</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#case">合作案例</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">关于我们</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/joinus">加入我们</nuxt-link>
        </li>
      </ul>

      <Icon type="md-menu" class="nav-m" size="30" @click="show = true"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeMenu() {
      this.show = false;
    }
  },
  mounted() {}
};
</script>

<style lang="less">
.header-container {
  width: 100%;
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo-wrapper {
      .header-image {
        width: 170px;
        height: auto;
        margin-bottom: -2px;
      }
    }
    .nav {
      list-style: none;
      display: flex;
      li {
        height: 100%;
        height: 65px;
        line-height: 65px;
        padding: 0 20px;
        font-size: 14px;
        a {
          color: #000;
        }
      }
    }
    .nav-m {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .header-container {
    .content {
      .logo-wrapper {
        .header-image {
          width: 150px;
        }
      }
      .nav {
        display: none;
      }
      .nav-m {
        display: block;
        .bm-burger-button {
          top: 15px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>





