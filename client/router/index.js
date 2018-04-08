import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// We import the app view here to make sure that it is the first imported
// component and the CSS is loaded first
import AppView from '../views/app.vue';
import HotelsView from '../views/hotels.vue';

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HotelsView }
    ]
});
