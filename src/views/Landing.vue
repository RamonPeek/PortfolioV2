<template>
  <div>
    <div class="home">
      <HomeComponent/>
    </div>
    <div class="about_component_container">
      <div class="about_component">
        <AboutComponent/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home {

  }

  .about_component_container {
    background-color: white !important;
    width: 100vw;
    padding: 5% 20px; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
    -webkit-transform: skewY(-3deg);
    -moz-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
    -o-transform: skewY(-3deg);
    transform: skewY(-3deg);
    margin-top: -50px;
  }

  .about_component {
    -webkit-transform: skewY(3deg);
    -moz-transform: skewY(3deg);
    -ms-transform: skewY(3deg);
    -o-transform: skewY(3deg);
    transform: skewY(3deg);
  }
</style>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent,
    AboutComponent
  }
}
</script>
