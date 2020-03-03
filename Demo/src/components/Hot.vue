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
<<<<<<< HEAD
  margin-top: 0.625rem;
  padding-top: 0.3125rem;
}
.betterDiv {
  width: 100%;
  height: 7.5rem;
=======
  margin-top: 10px;
  padding-top: 5px;
}
.betterDiv {
  width: 100%;
  height: 120px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
  /* background-color: pink; */
  overflow: hidden;
}
.hotDiv {
<<<<<<< HEAD
  height: 7.5rem;
  display: inline-flex;
}
.hotItem {
  width: 6.25rem;
  height: 6.25rem;
  /* border: 0.0625rem solid red; */
=======
  height: 120px;
  display: inline-flex;
}
.hotItem {
  width: 100px;
  height: 100px;
  /* border: 1px solid red; */
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
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
<<<<<<< HEAD
  font-size: 0.75rem;
=======
  font-size: 12px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
}
h3 {
<<<<<<< HEAD
  margin: 0.9375rem 0rem;
  padding-left: 0.625rem;
=======
  margin: 15px 0px;
  padding-left: 10px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
}
</style>