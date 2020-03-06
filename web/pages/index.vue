<template>
  <div class="home-container content">
    <div class="banner">
      <img src="/images/home/banner.png" />
      <div class="data" v-if="summary.VisitNum">{{ thousandMark(summary.VisitNum) }} 人次已浏览</div>
    </div>
    <div class="mapBox">
      <p class="text">
        <span class="line">|</span> 善益鸥慈善信息公示平台正式上线
      </p>
    </div>

    <div class="bigNumberPannel">
      <p class="title">
        数据汇总
        <span>截至{{ $moment().format("MM-DD HH:mm") }}</span>
      </p>
      <van-skeleton
        style="background: #ffffff; padding: 20px ;"
        :row="4"
        :loading="summary.CountOfIncome == 0 "
      >
        <div class="table">
          <van-row>
            <van-col span="12">
              <p class="total">
                <span class="account">{{ (summary.TotalIncome / Math.pow(10,8)).toFixed(4) }}</span>亿元
              </p>
              <p class="type">累计捐赠金额</p>
            </van-col>
            <van-col span="12">
              <p class="total">
                <span class="account">{{ summary.TotalIncomeThings }}</span>件
              </p>
              <p class="type">累计捐赠物品</p>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="12">
              <p class="total">
                <span class="account">{{summary.CountOfIncome}}</span>次
              </p>
              <p class="type">累计捐赠次数</p>
            </van-col>
            <van-col span="12">
              <p class="total">
                <span class="account">{{summary.CountOfOutcome}}</span>次
              </p>
              <p class="type">累计发放次数</p>
            </van-col>
          </van-row>
        </div>
      </van-skeleton>

      <div class="buttons">
        <div class="button donate" @click="$router.push('/donate')">
          <img style="height: 30px; height: 30px;" :src="donatesrc" />&nbsp;善款捐赠公示&nbsp;
          <van-icon name="arrow" />
        </div>
        <div @click="$router.push('/expenditure')" class="button expenditure">
          <img style="height: 26px; height: 26px;" :src="expendituresrc" />&nbsp;善款支出公示&nbsp;
          <van-icon name="arrow" />
        </div>
      </div>
    </div>

    <div class="map-container" v-if="summary.ProvinceInfos.length">
      <p class="title">爱心地图</p>
      <div class="buttons">
        <a :class="['button', isDonateMap && 'active' ]" @click="isDonateMap = true">捐赠方</a>
        <a :class="['button', !isDonateMap && 'active' ]" @click="isDonateMap = false ">受益方</a>
      </div>
      <echarts-wrapper v-if="isDonateMap" :dataList="mapDonateData"></echarts-wrapper>
      <echarts-wrapper v-else :dataList="mapExpenditureData"></echarts-wrapper>
    </div>

    <div class="project-description">
      <p class="title">项目介绍</p>
      <div class="card">
        <div class="body">
          <img class="cover" src="/images/home/cover.png" />
          <div class="right">
            <p class="line-one">抗击疫情打好防护战</p>
            <p class="line-two">发起机构：湖北红十字基金会</p>
            <p class="line-three">筹款中</p>
          </div>
        </div>
        <p class="line-four">用于支持湖北疫情防空工作及其他与红十字相关的人道求助</p>
      </div>
    </div>

    <div class="partner">
      <p class="title">合作伙伴</p>
      <div class="card">
        <Row :gutter="16">
          <Col  span="6">
            <div class="partner-item">
              <img style="height: 16px;"   src="/images/home/logo-4.png" />
            </div>
          </Col>

          <Col  span="6">
            <div class="partner-item">
              <img style="height: 15px;"   src="/images/home/logo-5.png" />
            </div>
          </Col>

        <Col  span="6">
            <div class="partner-item">
              <img style="height: 22px;"   src="/images/home/logo-2.png" />
            </div>
          </Col>


         <Col  span="6">
            <div class="partner-item">
              <img style="height: 32px;"   src="/images/home/logo-3.png" />
            </div>
          </Col>


          <Col  span="6">
            <div class="partner-item">
              <img style="height: 20px;"   src="/images/home/logo-6.png" />
            </div>
          </Col>


          <Col span="6">
            <div class="partner-item">
              <img style="height: 16px;"   src="/images/home/logo-1.png" />
            </div>
          </Col>
  
    

        </Row>
        <div class="about">
          <span class="left">
            红十字会指定
            <br />慈善公示平台
          </span>
          <span class="middle">|</span>
          <nuxt-link class="right" to="/about">关于我们</nuxt-link>
        </div>
      </div>
    </div>
    <p class="copy-right">© 2017-2020 艾鸥科技版权所有</p>
  </div>
</template>

<script>
import echartsWrapper from "./components/echarts-wrapper";
import { mapState } from "vuex";
import { thousandMark } from "@/libs/tools";

export default {
  data() {
    return {
      donatesrc: require("../static/images/home/donate-icon.png"),
      expendituresrc: require("../static/images/home/expenditure-icon.png"),
      isDonateMap: true
    };
  },
  components: { echartsWrapper },
  computed: {
    ...mapState({
      donateList: state => state.donate.donateList,
      isLoading: state => state.donate.isLoading,
      summary: state => state.donate.summary
    }),
    mapDonateData() {
      return this.summary.ProvinceInfos.map(item => ({
        ...item,
        value: item.CountOfIncome,
        name: item.Name,
        isDonate: true
      }));
    },
    mapExpenditureData() {
      return this.summary.ProvinceInfos.map(item => ({
        ...item,
        value: item.CountOfOutcome,
        name: item.Name,
        isDonate: false
      }));
    }
  },
  methods: {
    init() {
      this.$store.dispatch("getSummary");
    },
    thousandMark
  },
  mounted() {
    this.init();
  }
};
</script> 

<style lang="less">
.home-container {
  padding: 0 12px;
  background: #f4f5f6;
  .title {
    margin-top: 15px;
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 18px;
    span {
      font-size: 12px;
      font-weight: normal;
      color: #98999a;
    }
  }
  .banner {
    position: relative;
    width: 100%;
    // height: 33.6vw;
    // padding-top: 33.5%;
    color: #fff;
    text-align: center;
    // background: url("/images/home/banner.png") center / cover no-repeat;
    background-size: cover;
    border-radius: 8px;
    img {
      width: 100%;
    }
    .data {
      position: absolute;
      top: 10px;
      right: 0;
      height: 26px;
      padding: 0 8px 0 13px;
      padding: 0 6px 0 10px;
      color: #fff;
      font-size: 12px;
      line-height: 26px;
      background-color: rgba(19, 15, 133, 0.6);
      border-top-left-radius: 13px;
      border-bottom-left-radius: 13px;
    }
  }
  .mapBox {
    color: #333;
    font-size: 15px;
    padding: 0 13px;
    position: relative;
    background: #fff;
    background: transparent;
    height: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
    border: 0.5px solid #ebebeb;
    margin: 10px 0;
    font-size: 12px;
    text-indent: 48px;
    background: #ffffff url("/images/home/announcement.png") left 20px center /
      30px no-repeat;
    .line {
      color: #98999a;
      margin-right: 8px;
    }
  }

  .bigNumberPannel {
    .table {
      width: 100%;
      padding: 0 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
      border: none;
      background: #fff url("/images/home/line.png") center / 90% no-repeat;
      text-align: center;

      .total {
        font-size: 12px;
        margin-top: 12px;
        color: #3274e5;
      }
      .type {
        margin-bottom: 10px;
        color: #666;
      }
      .account {
        font-size: 25px;
      }
    }
    .buttons {
      margin-top: 26px;
      display: flex;
      text-align: center;
      .button {
        flex: 1;
        height: 40px;
        border-radius: 20px;
        line-height: 40px;
        font-size: 16px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .donate {
        margin-right: 10px;
        background: #ffffff url("/images/home/donate.png") center / cover
          no-repeat;
      }
      .expenditure {
        background: #ffffff url("/images/home/expenditure.png") center / cover
          no-repeat;
      }
    }
  }

  .map-container {
    .buttons {
      .button {
        flex: 1;
        height: 30px;
        width: 90px;
        text-align: center;
        border-radius: 6px;
        line-height: 30px;
        font-size: 16px;
        color: #000;
        background: red;
        display: inline-block;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
        background: #ffffff;
        color: #666;
        margin-right: 10px;
      }
      .active {
        background: #3274ea;
        color: #ffffff;
      }
    }
  }

  .project-description {
    .card {
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
      background: transparent;
      padding: 20px 10px;
      background: #ffffff;
      border-radius: 8px;
      .body {
        display: flex;
        .cover {
          width: 100px;
          height: 100px;
          border-radius: 8px;
          margin-right: 20px;
        }
        .right {
          .line-one {
            margin-top: 1px;
            font-size: 16px;
          }
          .line-two {
            margin-top: 3px;
            color: #98999a;
          }
          .line-three {
            margin-top: 33px;
            font-size: 14px;
            color: #ec4c33;
            font-weight: 500;
          }
        }
      }
      .line-four {
        background: #f4f5f6;
        color: #98999a;
        text-align: center;
        margin-top: 12px;
        padding: 5px 0;
        border-radius: 4px;
      }
    }
  }

  .partner {
    .card {
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
      background: transparent;
      padding: 20px 10px;
      background: #ffffff;
      border-radius: 8px;
      .partner-item {
        height: 30px;
        background:  #f4f5f6;
        display: flex;
        justify-content: center;
        align-items: center;  
        margin-bottom: 10px;
        border-radius: 4px;
        // width: 100%;
        // height: 40%;
        // background: #f4f5f6 url(/images/home/logo-5.png) center / contain no-repeat;
        img {
          // display: none;
        }
      }

      // ul {
      //   display: flex;
      //   flex-wrap: wrap;
      //   justify-content: space-around;
      //   li {
      //     background: #f4f5f6;
      //     height: 30px;
      //     width: 75px;
      //     border-radius: 4px;
      //     margin-bottom: 10px;
      //     display: flex;
      //     justify-content: center;
      //     align-items: center;
      //     img {
      //       height: 20px;
      //     }
      //   }
      // }
    }
    .about {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      .left {
        flex: 1;
        text-align: right;
        line-height: 14px;
        color: #646566;
      }
      .middle {
        margin: 0 10px;
        color: #c8c9ca;
      }
      .right {
        flex: 1;
        text-align: left;
        color: #3d7ad1;
      }
    }
  }
  .copy-right {
    text-align: center;
    margin: 10px 0;
    color: #98999a;
  }
}
</style>

