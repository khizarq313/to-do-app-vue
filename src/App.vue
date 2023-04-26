<template>
  <to-do-wrapper></to-do-wrapper>
</template>

<script lang="ts">
  import ToDoWrapper from './components/To-Do-Wrapper/To-Do-Wrapper.vue';

  export default {
    components: {
      "to-do-wrapper": ToDoWrapper,
    }
  }

</script>

<style>
  @import url("./styles/App.css");
</style>
