<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <span slot="title" style="color:white;">城市选择</span>
    </van-nav-bar>
    <div class="realm van-nav-bar">
      <div
        v-for="(item,index) in realm"
        :key="index"
        @click="onChange(index)"
        :class="{addColor:item.flag}"
      >{{item.text}}</div>
    </div>
    <div class="cityContainer">
      <h4>热门城市</h4>
      <div class="hotCityDiv rep">
        <div
          v-for="(item, index) in hotCityList"
          :key="index"
          @click="changeCity(item.name)"
        >{{item.name}}</div>
      </div>
      <h4>字母排序</h4>
      <div class="letterDiv rep">
        <!-- <div v-for="(item, index) in cityList" :key="index"><a :href="'#A'+index">{{item.key}}</a></div> -->
        <div v-for="(item, index) in cityList" :key="index">{{item.key}}</div>
      </div>
      <div class="particular">
        <div v-for="(item, index) in cityList" :key="index">
          <h4 class="h4" ref="h4" :id="'A'+index">{{item.key}}</h4>
          <div class="rep">
            <div
              class="gridDiv"
              v-for="(item, index) in item.city"
              :key="index"
              @click="changeCity(item.name)"
            >{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="letterSideBar" :class="{show:isShow}">
      <div
        v-for="(item, index) in cityList"
        ref="letter"
        @click="click(index)"
        :key="index"
      >{{item.key}}</div>
    </div>
    <button class="btn" @click="top" :class="{show2:isShow2}">回到顶部</button>
  </div>
</template>

<script>
import Axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      realm: [
        {
          text: "境内",
          flag: true
        },
        {
          text: "境外·港澳台",
          flag: false
        }
      ],
      isShow: false,
      isShow2: false
    };
  },
  computed: {
    hotCityList() {
      return this.$store.state.city.cityList.hotCities;
    },
    cityList() {
      let cityList = [];
      let data = this.$store.state.city.cityList.cities;
      for (const key in data) {
        let obj = {
          key: key,
          city: data[key]
        };
        cityList.push(obj);
      }
      return cityList;
    }
  },
  methods: {
    top() {
      $("html,body").animate({ scrollTop: 0 }, 500);
    },
    onClickLeft() {
      this.$router.push("/");
    },
    onChange(index) {
      this.realm.forEach(element => {
        element.flag = false;
      });
      this.realm[index].flag = true;
    },
    changeCity(name) {
      this.$store.commit("changeCity", name);
      this.$router.push("/");
    },
    location(ele) {
      $(ele).click(function() {
        let text = $(this).text();
        $(".h4").each(function() {
          if (text === $(this).text()) {
            $("html,body").animate({ scrollTop: $(this).offset().top }, 500);
          }
        });
      });
    },
    click(index) {
      this.$refs.letter.forEach(element => {
        element.style.color = "";
      });
      this.$refs.letter[index].style.color = "aqua";
    },
    scroll() {
      let i = this;
      $(document).scroll(function() {
        let scroll = $(this).scrollTop();
        if (scroll > $(".particular")[0].offsetTop - 1) {
          i.isShow = true;
          i.isShow2 = true;
        } else {
          i.isShow = false;
          i.isShow2 = false;
        }
        let num = 0;
        let arr = i.$refs.h4;
        let array = [];
        arr.forEach((element, index) => {
          if (scroll - element.offsetTop >= 0) {
            array.push(index);
          }
        });
        i.$refs.letter.forEach(element => {
          element.style.color = "";
        });
        let bin = i.$refs.letter[array[array.length - 1]];
        if (bin) {
          bin.style.color = "aqua";
        }
      });
    }
  },
  mounted() {
    Axios.get("/a/city.json")
      .then(res => {
        this.$store.dispatch("city", res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.scroll();
  },
  updated() {
    this.location(".letterDiv div");
    this.location(".letterSideBar div");
  }
};
</script>

<style scoped>
.van-nav-bar {
  background-color: rgb(0, 188, 212);
  height: 2.375rem;
  color: white;
  display: flex;
  align-items: center;
}
.van-icon {
  color: white;
}
.realm {
  justify-content: center;
}
.realm > div {
  width: 35%;
  height: 1.25rem;
  border: 0.0625rem solid white;
  line-height: 1.25rem;
  font-size: 0.875rem;
}
.addColor {
  color: rgb(0, 188, 212);
  background-color: white;
}
.cityContainer {
  background: #f5f5f5;
}
h4 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.625rem;
}
.rep {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  text-align: center;
}
.rep > div {
  line-height: 1.875rem;
  background-color: white;
}
.hotCityDiv > div {
  width: 32.5%;
  border: 0.0625rem solid lightgray;
}
.letterDiv > div {
  width: 16%;
  border: 0.0625rem solid lightgray;
}
.particular .gridDiv {
  width: 24%;
  border: 0.0625rem solid lightgray;
}
.letterSideBar {
  width: 1.25rem;
  height: 31.25rem;
  background-color: rgba(200, 200, 200, 0.4);
  position: fixed;
  right: 0rem;
  top: 50%;
  margin-top: -15.625rem;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  opacity: 0;
}
.letterSideBar > div {
  width: 100%;
  height: 1.125rem;
  /* background-color: red; */
  text-align: center;
  line-height: 1.125rem;
}
.show {
  opacity: 1;
  transition: all 1.5s;
}
.btn {
  position: fixed;
  right: 0rem;
  bottom: 1.875rem;
  width: 1.875rem;
  height: 1.25rem;
  opacity: 0;
}
.show2 {
  opacity: 1;
  transition: all 1.5s;
}
</style>