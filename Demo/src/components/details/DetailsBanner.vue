<template>
  <div>
    <div class="details-header">
      <div class="details-header-left">
        <div @click="fan" class="iconfont">&#xe618;</div>
      </div>
      <div class="details-header-middle">{{detailsList.sightName}}</div>
    </div>
    <div class="bannerDiv">
      <div class="backDiv">
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
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
      this.$router.push("/");
    },
    toSightImgs() {
      this.$router.push(`/getSightImgs/${this.detailsList.sightName}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/varibles.styl';

.details-header {
  width: 100%;
  display: flex;
  line-height: 2.6875rem;
  background: $bgColor;
  color: #fff;
  position: fixed;
  top: 0px;
  display: none;

  .details-header-left {
    width: 2rem;
    float: left;
    z-index: 99;

    .back-icon {
      text-align: center;
      font-size: 1.25rem;
    }
  }

  .details-header-middle {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0px;
  }
}

.bannerDiv {
  width: 100%;
  position: relative;

  .backDiv {
    width: 2.1875rem;
    height: 2.1875rem;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    line-height: 2.1875rem;
    border-radius: 50%;
    color: white;
    position: absolute;
    top: 0.3125rem;
    left: 0.3125rem;
    z-index: 99;
  }

  .bannerImgDiv {
    width: 100%;
    height: 200px;
    position: relative;

    img {
      width: 100%;
      height: 12.5rem;
    }

    .bannerStratum {
      width: 100%;
      height: 3.75rem;
      position: absolute;
      bottom: 0rem;

      .sizeIcon {
        font-size: 0.75rem;
        font-weight: 900;
        color: white;
      }

      .sightImgNumDiv {
        margin: 0.4375rem 1.875rem;
      }

      .sightNameDiv {
        color: white;
        font-size: 1.125rem;
        margin-left: 0.625rem;
      }
    }
  }
}
</style>