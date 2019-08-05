import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        user: {}
    },
    mutations: {
        setLogin: function (state, user) {
            state.isLogin=true;
            state.user = user;
        }
    },
    actions: {

    },
    getters: {
        isLogin: state => state.isLogin
    }
})
