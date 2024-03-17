

<template>
  <div class="wrapper">
    <div>{{ someRefToUpdate }}</div>
    <div>{{ newValue }}</div>
    <button @click="addSomething">ADD SOMETHING</button>
  </div>
</template>

<script >
import { ref, computed } from "vue";

export default {
  setup() {
    // define some reactive stuff
    let someRefToUpdate = ref([]);

    // computed properties are functions
    // computed property needs to be recalculated when someRefToUpdate changes
    let newValue = computed(function () {
      let somereturnvalue = someRefToUpdate.value.filter(
        (obj) => typeof obj === "string"
      );
      return somereturnvalue;
    });

    // replace methods
    // you need to access with .value
    function addSomething() {
      var newValueToPush = 1;
      if (
        someRefToUpdate.value.length > 0 &&
        someRefToUpdate.value.length <= 5
      ) {
        var idxToCalc = someRefToUpdate.value.length;
        newValueToPush = someRefToUpdate.value[idxToCalc - 1] + 1;
      } else if (someRefToUpdate.value.length > 5) {
        newValueToPush = "Way to much numbers";
      }
      someRefToUpdate.value.push(newValueToPush);
    }

    return {
      // return is always an object
      // setup always needs to return something
      // map refs to identifieres
      // can be same name or different
      // someRefToUpdate: someRefToUpdate
      // someOtherName: someRefToUpdate
      // keys can now be used in component template
      someRefToUpdate: someRefToUpdate,
      newValue: newValue,
      addSomething: addSomething,
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
