export default {
    state: {
        detailsList: [],
    },
    mutations: {
        addDetailsInitList(state, data) {
            console.log('abcs')
            state.detailsList = data;
        }
    },
    actions: {
        initDetailsList({ commit }, data) {
            commit("addDetailsInitList", data)
        }
    },
    modules: {

    }
}