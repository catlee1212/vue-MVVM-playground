// actions: can contain asyncronous operations
const saveWord = ({ commit }, inputValue) => {
  commit('SAVE_WORDS', inputValue);
}

export default {
  saveWord
}