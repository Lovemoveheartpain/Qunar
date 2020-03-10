<template>
  <div>
    <DetailsBannerVue />
    <DetailsListVue />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AXios from "axios";
import DetailsListVue from "../components/details/DetailsList.vue";
import DetailsBannerVue from "../components/details/DetailsBanner.vue";
export default {
  name: "abc",
  components: {
    DetailsBannerVue,
    DetailsListVue
  },

  methods: {
    ...mapActions(["initDetailsList"]),
    initDetails() {
      AXios.get("/a/detail.json?id=" + this.$route.params.id)
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