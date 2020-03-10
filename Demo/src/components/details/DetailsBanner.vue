<template>
  <div>
    <div v-show="!isShow" class="details-header" :style="styles">
      <div class="details-header-left">
        <div @click="fan" class="iconfont">&#xe618;</div>
      </div>
      <div class="details-header-middle">{{detailsList.sightName}}</div>
    </div>
    <div class="bannerDiv">
      <div class="backDiv" v-show="isShow">
        <span @click="fan" class="iconfont">&#xe618;</span>
      </div>
      <div class="bannerImgDiv" @click="toSightImgs">
        <img :src="detailsList.bannerImg" alt />
        <div class="bannerStratum">
          <p class="sightImgNumDiv">
            <span @click="fan" class="iconfont sizeIcon">&#xe640; {{length}}</span>
          </p>
          <p class="sightNameDiv">{{detailsList.sightName}}</p>
        </div>
      </div>
    </div>
    <div class="detailsBig">
      <DetailsListVue :list="detailsList.categoryList" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DetailsListVue from "./DetailsList.vue";

export default {
  components: {
    DetailsListVue
  },
  data() {
    return {
      isShow: true,
      styles: {
        opacity: 0
      }
    };
  },
  computed: {
    ...mapState({
      detailsList: state => state.details.detailsList
    }),
    length() {
      if (this.detailsList.length != 0) {
        return this.detailsList.gallaryImgs.length;
      }
    }
  },
  methods: {
    fan() {
      this.$router.go(-1);
    },
    toSightImgs() {
      this.$router.push(`/getSightImgs/${this.detailsList.sightName}`);
    },
    headerScroll() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top > 1) {
        let opacity = top / 160;
        opacity = this.top > 1 ? 1 : opacity;
        this.styles = { opacity };
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.headerScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.headerScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl'
.detailsBig
  width 100%
  height 900px
.details-header
  width 100%
  display flex
  line-height 2.6875rem
  background $bgColor
  color #fff
  position fixed
  z-index 99
  .details-header-left
    width 2rem
    float left
    z-index 99
    margin-left 1.25rem
  .back-icon
    text-align center
    font-size 1.25rem
  .details-header-middle
    width 100%
    text-align center
    position absolute
    top 0px
.bannerDiv
  width 100%
  position relative
  .backDiv
    width 2.1875rem
    height 2.1875rem
    background-color rgba(0, 0, 0, 0.7)
    text-align center
    line-height 2.1875rem
    border-radius 50%
    color white
    position absolute
    top 0.3125rem
    left 0.3125rem
    z-index 10
  .bannerImgDiv
    width 100%
    height 200px
    position relative
    img
      width 100%
      height 12.5rem
    .bannerStratum
      width 100%
      height 3.75rem
      position absolute
      bottom 0rem
      .sizeIcon
        font-size 0.75rem
        font-weight 900
        color white
      .sightImgNumDiv
        margin 0.4375rem 1.875rem
      .sightNameDiv
        color white
        font-size 1.125rem
        margin-left 0.625rem
</style>