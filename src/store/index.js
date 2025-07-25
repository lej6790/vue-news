import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

const store = createStore({
    state() {
        return {
            news: [],
            jobs: [],
            ask: [],
            user: {},
            item: {},
            list: [],
        };
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedNews(state) {
            return state.news;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions
});

export default store;