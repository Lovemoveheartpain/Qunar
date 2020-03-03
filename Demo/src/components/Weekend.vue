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
<<<<<<< HEAD
          a[0].style.fontSize = "1rem";
        } else {
          a[0].style.color = "black";
          a[0].style.fontSize = "0.75rem";
=======
          a[0].style.fontSize = "16px";
        } else {
          a[0].style.color = "black";
          a[0].style.fontSize = "12px";
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
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
<<<<<<< HEAD
  margin-bottom: 0.625rem;
=======
  margin-bottom: 10px;
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
}
.weekendItem > img {
  width: 100%;
}
.weekendItem > p {
<<<<<<< HEAD
  margin: 0.625rem 0rem;
  padding-left: 0.625rem;
}
h3 {
  margin: 0.9375rem 0rem;
  padding-left: 0.625rem;
}
.weekendItem > h3 {
  padding-left: 0.625rem;
  margin: 0.625rem 0rem 0rem;
=======
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
>>>>>>> 8104ffbdaa6daa3c2238ca1c85038be7c84f77ef
}
</style>