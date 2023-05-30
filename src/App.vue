<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppFooter,
  },

}

</script>


<template>
  <div class="fluid-container">

    <AppHeader></AppHeader>

    <router-view></router-view>

    <AppFooter></AppFooter>

  </div>
</template>


<style lang="scss" scoped>

  div.fluid-container {
    display: flex;
    flex-direction: column;
  }

</style>
