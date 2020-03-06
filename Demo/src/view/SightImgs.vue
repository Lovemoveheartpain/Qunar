<template>
  <div class="detailsGallary">
    <div v-show="!isShow" class="gallary_header">
      <div class="gallary_header_left" @click="toBack">
        <div class="iconfont icon_class">&#xe618;</div>
      </div>
      <div class="gallary_header_middle">景区图片</div>
    </div>
    <div v-show="!isShow" class="gallary_container">
      <div class v-for="(item, index) in gallaryImgs" :key="index" @click="modal(index)">
        <img :src="item" alt />
      </div>
    </div>
    <div v-show="isShow" class="modalDiv">模态框</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AXios from "axios";

export default {
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    ...mapState({
      detailsList: state => state.details.detailsList
    }),
    gallaryImgs() {
      if (this.detailsList.length != 0) {
        return this.detailsList.gallaryImgs;
      }
    }
  },
  methods: {
    ...mapActions(["initDetailsList"]),
    toBack() {
      this.$router.go(-1);
    },
    initDetails() {
      AXios.get("/a/detail.json")
        .then(res => {
          this.initDetailsList(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    modal(index) {
      this.isShow = true;
    }
  },
  mounted() {
    this.initDetails();
  }
};
</script>

<style lang="stylus" scoped>
.detailsGallary {
  width: 100%;

  .gallary_header {
    width: 100%;
    height: 2.6875rem;
    background-color: white;
    position: fixed;

    .gallary_header_left {
      width: 10%;
      height: 2.6875rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 99;

      .icon_class {
        font-size: 1.5rem;
      }
    }

    .gallary_header_middle {
      width: 100%;
      line-height: 2.6875rem;
      text-align: center;
      font-size: 1rem;
      position: absolute;
      top: 0rem;
    }
  }

  .gallary_container {
    width: 98%;
    padding: 3.125rem 1%;
    display: inline-flex;
    background-color: #f5f5f5;
    flex-wrap: wrap;

    div {
      width: 48%;
      height: 120px;
      margin: 0.1875rem;

      img {
        width: 100%;
        height: 120px;
      }
    }
  }

  .modalDiv {
    width: 100%;
    height: 41.6875rem;
    background: gray;
  }
}
</style>