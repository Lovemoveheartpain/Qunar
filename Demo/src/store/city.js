export default {
    state: {
        cityList: [],
        selectCity:'安阳'
    },
    mutations: {
        addCityList(state, data) {
            state.cityList = data;
        },
        changeCity(state,name){
            state.selectCity = name
        }
    },
    actions: {
        city({ commit }, data) {
            commit('addCityList', data)
        }
    },
    modules: {

    }
}