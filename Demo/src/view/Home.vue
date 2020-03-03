<template>
  <div class="home">
    <HeaderVue />
    <SwiperVue />
    <IconVue />
    <HotVue />
    <WeekendVue />
    <BottomVue />
  </div>
</template>

<script>
import Axios from "axios";
import SwiperVue from "../components/Swiper.vue";
import IconVue from "../components/Icon.vue";
import HotVue from "../components/Hot.vue";
import WeekendVue from "../components/Weekend.vue";
import BottomVue from "../components/Bottom.vue";
import HeaderVue from "../components/Header.vue";

export default {
  components: {
    SwiperVue,
    IconVue,
    HeaderVue,
    HotVue,
    WeekendVue,
    BottomVue
  },
  mounted() {
    Axios.get("/a/index.json")
      .then(res => {
        // console.log(res.data.data);
        this.$store.dispatch("initList", res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.home {
  background-color: #f5f5f5;
}
</style>