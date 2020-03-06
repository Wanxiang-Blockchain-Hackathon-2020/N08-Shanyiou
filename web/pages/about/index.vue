<template>
  <div class="about-container">
    <img class="logo" src="/images/about/logo.png" />
    <van-divider :style="{ background: '#c8c9ca', marginBottom: 0 }" />
    <h3 class="title">关于我们</h3>
    <p class="descrption">
      艾鸥科技专注于为政企提供专业区块链解决方案，自主研发了区块链底层核心技术及高性能区块链系统。一直致力于向市场推出可信区块链产品和平台，为实现各行业供需的有效对接提供服务，为打造高效、公平、稳定透明的营商环境提供动力，为推动经济高质量的发展提供支撑。
    </p>
    <h3 class="title">关于善益鸥</h3>
    <p class="descrption">
        善益鸥是艾鸥科技联合宁波、长沙政府和中企联、中软协，为推动慈善公益透明化，助力新冠肺炎疫情防控，解决慈善捐赠中运转低效、不够公开透明、物资分配不及时不合理的问题，推出的基于自主可控区块链底层技术研发的慈善信息公示平台。
      </p>
    <h3 class="title">如有合作意向，请联系我们</h3>
    <p class="descrption">公众号：艾欧科技</p>
    <p class="descrption">邮箱：gongyi@aioukeji.net</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
    init() {},
  },
  mounted() {}
};
</script>

<style lang="less">
.about-container {
  // background: url("/images/about/bg.jpg") center top -60px / contain no-repeat;
  // min-height: 200vh;
  text-align: center;
  padding: 0 40px;  
  .logo {
    height: 47px;
    margin: 0 auto;
    margin-top: 39px;
    margin-bottom: 17px;
  }  
  .title {
    text-align: left; 
    font-size: 15px;
    margin-bottom: 4px;
    margin-top: 16px;
  } 
  .descrption {
    text-align: left;
    color: #656667;
  }
}
</style>

<style lang="less">
@media screen and (max-width: 576px) {

}
</style>
