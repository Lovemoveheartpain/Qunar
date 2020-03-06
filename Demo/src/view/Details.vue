<template>
  <div>
    <DetailsBannerVue />
  </div>
</template>

<script>
import DetailsBannerVue from "../components/details/DetailsBanner.vue";
import { mapActions } from "vuex";
import AXios from "axios";

export default {
  components: {
    DetailsBannerVue
  },

  methods: {
    ...mapActions(["initDetailsList"]),
    initDetails() {
      AXios.get("/a/detail.json")
        .then(res => {
          this.initDetailsList(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.initDetails();
  }
};
</script>

<style scoped>
</style>