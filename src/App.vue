<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

}

</script>


<template>
  <div class="fluid-container">

    <AppHeader></AppHeader>

    <AppMain></AppMain>

    <AppFooter></AppFooter>

  </div>
</template>


<style lang="scss" scoped>

  div.fluid-container {
    display: flex;
    flex-direction: column;
  }

</style>
