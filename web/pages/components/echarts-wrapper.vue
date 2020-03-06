<template>
  <v-chart v-if="dataList.length" :options="data"></v-chart>
</template>

<style scoped>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  width: 100%;
  height: 100vw;
  max-height: 360px;
  /* max-width: 600px; */

  margin: 0 auto;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  background: #ffffff;
  margin-top: 10px;
  border-radius: 8px;
}
.tooltip-text {
  font-size: 10px;
}
.tooltip-text .heart {
  height: 14px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 4px;
}
</style>

<script>
import "echarts/lib/chart/map";
import "echarts/lib/component/geo";
import "echarts/map/js/china.js"; // 引入中国地图数据

export default {
  name: "echarts-wrapper",
  props: ["dataList"],
  computed: {
    data() {
      return {
          tooltip: {
            triggerOn: "click",
            formatter: function(e, t, n) {
              console.log(e);
              return `
            ${e.data. name}省
              <p class="tooltip-text"><img src="/images/home/heart.png" class="heart" />${e.data.isDonate ? '爱心捐赠' : '累计受赠数'}${e.data.value}次 </p>
            `;
            }
          },
          visualMap: {
            min: 0,
            max: 1000,
            left: 0,
            // orient: 'horizontal',
            bottom: 40,
            showLabel: !0,
            text: ["捐赠"],
            itemHeight: 10,
            itemWidth: 10,
            pieces: [
              {
                gt: 50,
                label: "≥ 50",
                color: "#2b41aa"
              },
              {
                gte: 20,
                lte: 49,
                label: "20～49",
                color: "#426fea"
              },
              {
                gte: 10,
                lt: 19,
                label: "10～19",
                color: "#769bf8"
              },
              {
                gt: 5,
                lt: 9,
                label: "5～9",
                color: "#abc2fa"
              },
              {
                gt: 0,
                lt: 4,
                label: "1～4",
                color: "#e2dbfd"
              },
              {
                value: 0,
                label: "0",
                color: "#f3f4f5"
              }
            ],
            show: !0
          },
          geo: {
            map: "china",
            roam: !1,
            scaleLimit: {
              min: 1,
              max: 2
            },
            zoom: 1.23,
            top: 40,
            label: {
              normal: {
                show: !0,
                fontSize: "8",
                color: "rgba(0,0,0,0.7)"
              }
            },
            itemStyle: {
              normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"
              },
              emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
              }
            }
          },
          series: [
            {
              name: "",
              type: "map",
              geoIndex: 0,
              data: this.dataList || []
            }
          ]
        }
    },
  }
};
</script>