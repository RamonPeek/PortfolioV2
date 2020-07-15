<template>
  <div class="background">
    <div class="top_navigation_container">
      <TopNavigationComponent/>
    </div>
    <div id="site_container" class="content_container">
      <div class="home">
        <HomeComponent id="HOME"/>
      </div>
      <div class="about_component_container">
        <div class="about_component">
          <AboutComponent id="ABOUT_ME"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .background {
      background-image: url("/images/background.jpg");
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }

  .top_navigation_container {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
  }

  .content_container {
    position: fixed;
    width: 100%;
    height: calc(100% - 50px);
    top: 50px;
    left: 0;
    overflow-y: scroll;
  }

  .about_component_container {
    background-color: white !important;
    width: 100vw;
    padding-top: 45px; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
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
import TopNavigationComponent from "@/components/TopNavigationComponent.vue";

export default {
  name: 'Home',
  components: {
    TopNavigationComponent,
    HomeComponent,
    AboutComponent
  }
}
</script>
