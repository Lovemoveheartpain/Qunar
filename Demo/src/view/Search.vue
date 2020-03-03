<template>
  <div class="searchDiv">
    <SearchHeader @handle="show" />
    <component :is="init" :val="val" :keyword="keyword"></component>
  </div>
</template>

<script>
import SearchHeader from "../components/SearchHeader";
import SearchingVue from "../components/Searching.vue";
import SearchHistoryVue from "../components/SearchHistory.vue";
export default {
  components: {
    SearchHeader,
    SearchingVue,
    SearchHistoryVue
  },
  data() {
    return {
      init: SearchHistoryVue,
      isFocus: true,
      val: [],
      keyword: ""
    };
  },
  methods: {
    show(value) {
      if (value) {
        this.init = SearchingVue;
        this.keyword = value;
        let url =
          "https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web";
        this.$http
          .jsonp(url, {
            params: {
              wd: value
            },
            jsonp: "cb" //jsonp默认是callback,百度缩写成了cb，所以需要指定下                     }
          })
          .then(res => {
            if (res.data.g) {
              this.val = res.data.g.map(x => x["q"]);
            } else {
              this.val = [];
            }
          });
      } else {
        this.init = SearchHistoryVue;
      }
    }
  }
};
</script>

<style scoped>
.searchDiv {
  background-color: #f5f5f5;
}
</style>