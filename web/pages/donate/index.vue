<template>
  <div class="donate-container">
    <v-chart :options="data"></v-chart>
    <van-divider :style="{ background: '#c8c9ca', margin : 0 }" />
    <div class="item content">
      <van-image class="icon"  height="32" width="32" :src="expendituresrc" />
      <span class="type">已支出金额</span>
      <span class="amount">{{totalOutcome}}</span>
    </div>
    <div class="item content donate-item">
      <van-image class="donate-icon icon" height="32" width="32" :src="donatesrc" />
      <span class="type">剩余金额</span>
      <span class="amount">{{totalLeft}}</span> 
    </div>
    <div class="content" v-if="donateList.Total">
      <p class="title">捐赠列表</p>
      <div class="card" v-for="i in donateList.Results" :key="i.Id" @click="move(i)">
        <p class="name">{{i.From}}</p>
        <p class="time">日期：{{ $moment.unix(i.Time).format("YYYY-MM-DD") }} </p>
        <p class="type"><span>捐赠类别：</span>{{i.Category}}</p>
        <p class="amount"><span>捐赠数目：</span>{{thousandMark(i.Amount)}}</p> 
        <p class="project"><span>捐赠项目：</span>{{i.Detail  }}</p>
      </div>
      <div class="page">
          <van-icon size="20" color="#333" name="arrow-left" class="arrow" @click="changePage(page - 1)"/>
          <p>
            <span>{{ page }}</span>/{{Math.ceil(donateList.Total / 10)}}
          </p>
          <van-icon size="20" color="#333" name="arrow" class="arrow" @click="changePage(page +  1)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  width: 100%;
  height: 234px;
  margin: 0 auto;
}
</style>

<script>
import "echarts/lib/chart/pie";
import "echarts/lib/component/title";
import { mapState } from "vuex";
import { thousandMark } from '@/libs/tools'

export default {
  data() {
    return {
      donatesrc: require("../../static/images/donate/donate.png"),
      expendituresrc: require("../../static/images/donate/expenditure.png"),
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    ...mapState({
      donateList: state => state.donate.donateList,
      isLoading: state => state.donate.isLoading,
      summary: state => state.donate.summary,
      totalOutcome: state => thousandMark(state.donate.summary.TotalOutcome),
      totalLeft: state => thousandMark(state.donate.summary.TotalLeft),
      totalOutcome: state => thousandMark(state.donate.summary.TotalOutcome),
      data: state => ({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#3273e7", "#85d9f8"],
        title: {
          text: "已接受金额",
          subtext: thousandMark(state.donate.summary.TotalIncome),
          x: "center",
          y: "39%",
          textStyle: {
            fontSize: 12,
            fontWeight: "normal",
            color: ["#333"]
          },
          subtextStyle: {
            color: "#666",
            fontSize: 18,
            fontWeight: "bold"
          }
        },
        series: [
          {
            name: "详情",
            type: "pie",
            radius: ["66%", "82%"],
            center: ["50%", "49%"], //图的位置，距离左跟上的位置
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false ,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: state.donate.summary.TotalOutcome, name: "已支出金额" },
              { value: state.donate.summary.TotalLeft, name: "剩余金额" }
            ],
            itemStyle: {
              normal: {
                borderColor: "#FFFFFF",
                borderWidth: 2
              }
            }
          }
        ]
      })
    }),

  },
  methods: {
    init() {
      this.$store.dispatch("getSummary");
      this.$store.dispatch("getDonateList", { Offset: (this.page - 1) * this.pageSize , Limit: this.pageSize });
    },
    changePage(page) {
      if(page < 1 || page > (Math.ceil(this.donateList.Total / 10))) return;
      this.page = page;
      this.$store.dispatch("getDonateList", { Offset: (this.page - 1) * this.pageSize , Limit: this.pageSize });
    },
    move(data) {
      this.$router.push({path:'/donate/detail',query: data })
    },
    thousandMark,
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
.donate-container {
  // background: url("/images/donate/bg.jpg") center top -60px / contain no-repeat;
  // min-height: 200vh;
  .arrow {
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
    padding: 2px 10px;
    border-radius: 4px;
  }
  .item {
    display: flex;
    align-items: center;
    padding: 10px;
    color: #656667;
    background: #ffffff;
    .icon {
      margin-right: 10px;
      // margin: 10px;
    }
    .type {
      flex: 1;
      font-size: 14px;
    }
    .amount {
      font-size: 19px;
      font-weight: bold;
    }
  }
  .donate-item {
    padding-top: 3px;
  }
  .content {
    padding: 15px 10px;
    .title {
      font-weight: bold;  
      font-size: 18px;
      color: #333;
      margin-bottom: 6px;
    }
  }
  .card {
      background-color: #fff;
      background-image: url("/images/donate/item-bg-0.png");
      background-repeat: no-repeat;
      background-size: 110px;
      background-position: right 50px bottom 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
      padding: 14px 12px;
      margin-bottom: 14px;
      .name {
        font-size: 16px;
        color: #333;
      }
      .time {
        margin-bottom: 10px;  
        color: #cbcccd;
      }
      .type {
        margin-bottom: 4px;  
        color: #333;
      }
      .amount {
        margin-bottom: 4px;  
        color: #333;
      }
      .project {
        color: #333;
      }
      span {
        display: inline-block;
        width: 69px;
        color: #98999a;
      }
  }
  .page {
    display: flex;  
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 14px;
      span {
        color: #3274e8;
      }
    }
  }
}
</style>

<style lang="less">
@media screen and (max-width: 576px) {
}
</style>
