<template>
  <div class="wai">
    <h3>
      <span class="iconfont" style="color:red">&#xe6a0;</span>
      本周热门榜单
    </h3>
    <div class="betterDiv">
      <div class="hotDiv">
        <div class="hotItem" v-for="(item, index) in hotList" :key="index">
          <img :src="item.imgUrl" alt />
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Better from "better-scroll";
export default {
  computed: {
    hotList() {
      return this.$store.state.init.recommendList;
    }
  },
  mounted() {
    new Better(".betterDiv", {
      scrollX: true,
      scrollY: false
    });
  }
};
</script>

<style scoped>
.wai {
  background-color: white;
  margin-top: 0.625rem;
  padding-top: 0.3125rem;
}
.betterDiv {
  width: 100%;
  height: 7.5rem;
  /* background-color: pink; */
  overflow: hidden;
}
.hotDiv {
  height: 7.5rem;
  display: inline-flex;
}
.hotItem {
  width: 6.25rem;
  height: 6.25rem;
  /* border: 0.0625rem solid red; */
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.hotItem > img {
  width: 70%;
}
.hotItem > p {
  width: 70%;
  text-align: center;
  font-size: 0.75rem;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
}
h3 {
  margin: 0.9375rem 0rem;
  padding-left: 0.625rem;
}
</style>