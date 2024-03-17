import { createStore } from "vuex";

const store = createStore({
  // state:  is like data 
  state: {
    title: "Vuex Store",
    words: []
  },
  // getters: gets data from state
  // think of it as computed property of state
  getters: {
    totalWords(state) {
      return state.words.length;
    }
  },
  // mutations: function where we change values of states
  // can contain syncronous operations
  // commit updates mutation
  mutations: {
    SAVE_WORDS(state, inputValue) {
      state.words.push(inputValue);
    }
  },
  // actions: can contain asyncronous operations
  actions: {
    // saveWord({ commit, dispatch, state }, inputValue) {
    // OR: saveWord(context, inputValue) {
    //   context.dispatch()
    // }
    saveWord({ commit }, inputValue) {
      commit('SAVE_WORDS', inputValue);
    }
  }
});

export default store;