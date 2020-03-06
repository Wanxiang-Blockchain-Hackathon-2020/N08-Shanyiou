<template>
  <div class="donate-detail content">
    <p class="title">捐赠详情</p>
    <div class="card" >
        <p class="name">{{ From}} </p>
        <p class="time">编号：{{Id}} &nbsp;&nbsp;&nbsp;&nbsp; 日期：{{ $moment.unix(Time).format("YYYY-MM-DD") }} </p>
        <p class="type"><span>捐赠类别：</span>资金</p>
        <p class="amount"><span>捐赠数目：</span>{{thousandMark(Amount)}}</p> 
        <p class="project"><span>捐赠项目：</span>{{Detail}}</p>
    </div>
    <p class="title">区块信息</p>
    <div class="card card-1" >
        <p class="time">上链时间: {{  $moment.unix(ChainTime).utc().format()   }} </p>
        <p class="type"><span>区块高度：</span>{{ChainHeight}}</p>
        <p class="amount"><span>存成Hash：</span>{{ChainTxid}}</p> 
    </div>
  </div>
</template>

<script>
import { thousandMark } from '@/libs/tools'

export default {
  data() {
    return {
      donatesrc: require("../../static/images/donate/donate.png"),
      ...this.$route.query
    };
  },
  methods: {
    init() {},
    thousandMark,
  },
  mounted() {}
};
</script>

<style lang="less">
.donate-detail {
//   background: url("/images/donate/bg-2.jpg") center top -60px / contain no-repeat;
//   min-height: 200vh;
  padding: 16px 10px;
  .title {
      font-size: 18px;
      margin-bottom: 6px;
  } 
  .card {
      background: #fff;
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
        word-break: break-all;
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
    .card-1 {
      background-color: #fff;
      background-image: url("/images/donate/item-bg.png");
      background-repeat: no-repeat;
      background-size: 110px;
      background-position: right 30px top 10px;
  }
}
</style>

<style lang="less">
@media screen and (max-width: 576px) {
}
</style>
