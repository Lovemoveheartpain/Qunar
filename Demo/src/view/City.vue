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
          <h4 class="h4" :id="'A'+index">{{item.key}}</h4>
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
    <div class="letterSideBar">
      <div v-for="(item, index) in cityList" :key="index">{{item.key}}</div>
    </div>
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
      ]
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
  },
  updated() {
    $(".letterDiv div").click(function() {
      let text = $(this).text();
      $(".h4").each(function() {
        if (text === $(this).text()) {
          $("html,body").animate({ scrollTop: $(this).offset().top }, 500);
        }
      });
    });
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
.letterSideBar
{
  width: 1.25rem;
  height: 18.75rem;
  background-color: pink;
  position: fixed;
  right: 0rem;
  top: 50%;
  margin-top: -9.375rem;
}
</style>