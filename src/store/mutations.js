// mutations: function where we change values of states
// can contain syncronous operations
// commit updates mutation

const SAVE_WORDS = (state, inputValue) => {
  state.words.push(inputValue);
}

export default {
  SAVE_WORDS
};