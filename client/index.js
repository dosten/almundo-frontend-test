// this needs to be imported here to ensure the polyfills are loaded first
import 'babel-polyfill';

import Vue from 'vue';

import router from './router';
import store from './store';

import App from './views/app.vue';

const app = new Vue({
    router,
    store,
    created () {
        this.$store.dispatch('hotels/fetch', { name: null, stars: [] });
    },
    render (createElement) {
        return createElement(App);
    }
});

app.$mount('#app');
