import { hotels } from 'api';

const state = {
    loading: false,
    error: false,
    data: [],
};

const mutations = {
    SET_LOADING (state) {
        state.loading = true;
        state.error = false;
        state.data = [];
    },
    SET_ERROR (state) {
        state.loading = false;
        state.error = true;
        state.data = [];
    },
    SET_HOTELS (state, hotels) {
        state.loading = false;
        state.error = false;
        state.data = hotels;
    }
};

const actions = {
    fetch (context, { name, stars }) {
        context.commit('SET_LOADING');
        hotels.list(name, stars).then(response => {
            context.commit('SET_HOTELS', response.data.data);
        }).catch(error => {
            context.commit('SET_ERROR');
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
