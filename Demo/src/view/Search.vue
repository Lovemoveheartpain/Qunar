<template>
  <div class="searchDiv">
    <SearchHeader @handle="show" />
    <component :is="init"></component>
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
      isFocus: true
    };
  },
  methods: {
    show(value) {
      if (value) {
        this.init = SearchingVue;
      } else {
        this.init = SearchHistoryVue;
      }
    },
  }
};
</script>

<style scoped>
.searchDiv {
  background-color: #f5f5f5;
}
</style>