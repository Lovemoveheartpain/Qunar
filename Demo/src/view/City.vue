<template>
  <div class="city_big_div" >
    <CityHeaderVue />
    <CitySearchingVue @show="isShow" />
    <component :is="init" :val="val"></component>
  </div>
</template>

<script>
import Axios from "axios";
import CityHeaderVue from "../components/city/CityHeader.vue";
import CityAlphabetVue from "../components/city/CityAlphabet.vue";
import CitySearchingVue from "../components/city/CitySearching.vue";
import CityListVue from "../components/city/CityList.vue";

export default {
  components: {
    CityHeaderVue,
    CityAlphabetVue,
    CitySearchingVue,
    CityListVue
  },
  data() {
    return {
      init: CityAlphabetVue,
      val: ""
    };
  },
  mounted() {
    Axios.get("/a/city.json")
      .then(res => {
        this.$store.dispatch("city", res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    isShow(flag) {
      if (flag) {
        this.init = CityListVue;
        this.val = flag;
      } else {
        this.init = CityAlphabetVue;
      }
    }
  }
};
</script>

<style scoped>
.city_big_div {
  background: #f5f5f5;
}
</style>