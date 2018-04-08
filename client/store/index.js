import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// import modules
import hotels from './modules/hotels';

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        hotels
    }
});
