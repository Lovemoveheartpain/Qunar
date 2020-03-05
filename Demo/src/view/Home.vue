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
import SwiperVue from "../components/home/Swiper.vue";
import IconVue from "../components/home/Icon.vue";
import HotVue from "../components/home/Hot.vue";
import WeekendVue from "../components/home/Weekend.vue";
import BottomVue from "../components/home/Bottom.vue";
import HeaderVue from "../components/home/Header.vue";
import { mapState } from "vuex";
export default {
  components: {
    SwiperVue,
    IconVue,
    HeaderVue,
    HotVue,
    WeekendVue,
    BottomVue
  },
  data() {
    return {
      lastCity: ""
    };
  },
  computed: {
    city() {
      return this.$store.state.city.selectCity;
    }
  },
  methods: {
    inform() {
      Axios.get("/a/index.json/?" + this.city)
        .then(res => {
          // console.log(res.data.data);
          this.$store.dispatch("initList", res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.inform();
    console.log("mounted");
  },
  activated() {
    console.log("activated");
    console.log(this.lastCity);
    console.log(this.city);
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.inform();
    }
  }
};
</script>

<style>
.home {
  background-color: #f5f5f5;
}
</style>