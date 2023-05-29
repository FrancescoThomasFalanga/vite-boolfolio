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
  <div>

    <AppHeader></AppHeader>

    <AppMain></AppMain>

    <AppFooter></AppFooter>

  </div>
</template>


<style scoped>



</style>
