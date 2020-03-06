import Vuex from 'vuex';
import Vue from 'vue';
import donate from './donate'
import expenditure from './expenditure'

// import VuexPersist from 'vuex-persist'
Vue.use(Vuex);
let store;
let vuexLocalStorage = null;

// if (process.browser) {
//     vuexLocalStorage = new VuexPersist({
//       key: 'sy',
//       storage: window && window.localStorage ? window.localStorage : { getItem: () => {}, setItem: () => {}, clear: () => {}}, // or window.sessionStorage, etc
//     })
// }

const initStore = () => {
    return store || (store = new Vuex.Store({
        modules: {
            expenditure,
            donate,
        },
        // plugins: process.browser ? [vuexLocalStorage.plugin] : []
    }))

}

export default initStore
