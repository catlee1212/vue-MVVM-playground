

<template>
  <div class="wrapper">
    {{ $store.state.title }}
    <li v-for="(word, idx) in words" :key="idx">{{ word }}</li>
    <input v-model="inputValue" @keypress.enter="save" />
    <p>Total Words : {{ totalWords }}</p>
  </div>
</template>

<script >
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const inputValue = ref("");
    const store = useStore();
    const words = computed(() => store.state.words);
    const totalWords = computed(() => store.getters.totalWords);

    function save() {
      // store.commit("SAVE_WORDS", inputValue.value);
      store.dispatch("saveWord", inputValue.value);
    }

    return {
      words: words,
      inputValue: inputValue,
      totalWords: totalWords,
      save: save,
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  align-items: center;
}
.wrapper button {
  font-size: 20px;
  background-color: #f0f;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
