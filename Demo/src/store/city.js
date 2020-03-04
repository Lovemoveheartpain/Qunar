export default {
    state: {
        cityList: [],
        selectCity: window.localStorage.getItem('city') || '安阳'
    },
    mutations: {
        addCityList(state, data) {
            state.cityList = data;
        },
        changeCity(state, name) {
            state.selectCity = name;
            window.localStorage.setItem('city', name)
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