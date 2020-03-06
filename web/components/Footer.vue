<template>
  <div class="footer-container">
    <div class="content">
      <Row type="flex" justify="space-between">
        <Col>
          <p class="title">
            <nuxt-link to="/about">关于我们</nuxt-link>
          </p>
          <p class="title">
            <nuxt-link to="/joinus">加入我们</nuxt-link>
          </p>
        </Col>
        <Col>
          <p class="title">联系我们</p>
          <p class="info">商务合作</p>
          <p class="info">
            <a href="mailto:bd@aioukeji.net">bd@aioukeji.net</a>
          </p>
          <p class="info">技术支持</p>
          <p class="info">
            <a href="mailto:support@aioukeji.net">support@aioukeji.net</a>
          </p>
        </Col>
        <Col>
          <p class="title">微信公众号</p>
          <img src="/images/qrcode.jpg" class="wechat-qrcode" />
        </Col>
      </Row>
      <p class="copyright">© 2017 aioukeji.net 版权所有 <a @click="moveTo">京ICP备 19056179号-1</a> </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moveTo() {
      window.open('http://beian.miit.gov.cn');
    }
  }
};
</script>

<style lang="less">
.footer-container {
  background: #000;
  padding-top: 25px;
  padding-bottom: 35px;

  .title,
  .title a {
    font-size: 18px;
    color: #ffffff;
    line-height: 40px;
    font-weight: 500;
  }

  .info {
    font-size: 14px;
    color: #cccccc;
    margin-top: 20px;
    a {
      color: #cccccc;
    }
  }

  .wechat-qrcode {
    width: 110px;
    height: 110px;
    margin-top: 10px;
  }

  .copyright {
    text-align: center;
    margin-top: 60px;
    color: #cccccc;
    a {
      color: #cccccc;
      &:hover {
        color: #2d8cf0
      }
    }
  }
}
</style>

<style lang="less">
@media screen and (max-width: 568px) {
  .footer-container {
    .title,
    .title a {
      font-size: 16px;
    }

    .ivu-row-flex {
      flex-direction: column;
      text-align: center;
    }
    .copyright {
      margin-top: 35px;
    }
  }
}
</style>

