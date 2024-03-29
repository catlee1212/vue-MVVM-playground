import { createStore } from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const store = createStore({
  state: {
    title: "Vuex Store",
    words: []
  },
  actions,
  getters,
  mutations
});

export default store;