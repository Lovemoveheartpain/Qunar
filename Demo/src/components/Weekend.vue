<template>
  <div class="weekendListDiv">
    <h3>
      <span class="iconfont" style="color:red">&#xe6a0;</span>
      周末去哪儿
    </h3>
    <div class="weekendItem" v-for="(item,index) in weekendList" :key="index">
      <img :src="item.imgUrl" alt />
      <h3>{{item.title}}</h3>
      <p>{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  computed: {
    weekendList() {
      return this.$store.state.init.weekendList;
    }
  },
  updated() {
    $(".weekendItem").each(function() {
      let a = $(this);
      let top1 = a[0].offsetTop;
      let bottom1 = a[0].offsetHeight + top1;
      let height = window.screen.height;
      let top2 = height / 2 - 120;
      let bottom2 = height / 2 + 120;
      $(document).scroll(function() {
        let scroll = $(this).scrollTop();
        let long = $(this).height();
        if (top1 - scroll >= top2 && bottom1 - scroll <= bottom2) {
          a[0].style.color = "red";
          a[0].style.fontSize = "16px";
        } else {
          a[0].style.color = "black";
          a[0].style.fontSize = "12px";
        }
      });
    });
  }
};
</script>

<style scoped>
.weekendListDiv {
  width: 100%;
}
.weekendItem {
  width: 100%;
  margin-bottom: 10px;
}
.weekendItem > img {
  width: 100%;
}
.weekendItem > p {
  margin: 10px 0px;
  padding-left: 10px;
}
h3 {
  margin: 15px 0px;
  padding-left: 10px;
}
.weekendItem > h3 {
  padding-left: 10px;
  margin: 10px 0px 0px;
}
</style>