<template>
  <div class="background">
    <div class="top_navigation_container">
      <TopNavigationComponent :mobile="false"/>
    </div>
    <div class="bottom_navigation_container">
      <TopNavigationComponent :mobile="true"/>
    </div>
    <div id="site_container" class="content_container">
      <div class="home">
        <HomeComponent id="HOME"/>
      </div>
      <v-card class="about_component_container">
        <div class="about_component">
          <AboutComponent id="ABOUT_ME"/>
        </div>
      </v-card>
      <div class="projects_component_container">
        <div class="projects_component">
          <ProjectsComponent id="PROJECTS"/>
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
    z-index: 10000;
  }

  .bottom_navigation_container {
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
    display: none;
  }

  .content_container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: scroll;
    z-index: 9999;
  }

  .about_component_container {
    width: 100vw;
    padding-top: 45px; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
    padding-bottom: 45px;
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

    .projects_component_container {
      background-color: #50B3FF !important;
      width: 100vw;
      padding-top: 45px; /* Added a percentage value for top/bottom padding to keep the wrapper inside of the parent */
      padding-bottom: 45px;
      -webkit-transform: skewY(-3deg);
      -moz-transform: skewY(-3deg);
      -ms-transform: skewY(-3deg);
      -o-transform: skewY(-3deg);
      transform: skewY(-3deg);
    }

    .projects_component {
      -webkit-transform: skewY(3deg);
      -moz-transform: skewY(3deg);
      -ms-transform: skewY(3deg);
      -o-transform: skewY(3deg);
      transform: skewY(3deg);
    }

    @media only screen and (max-width: 900px) {
      .top_navigation_container {
        display: none;
      }

      .bottom_navigation_container {
        display: block;
      }
    }
</style>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import TopNavigationComponent from "@/components/TopNavigationComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  name: 'Home',
  components: {
    TopNavigationComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  },
  mounted() {
    this.$vuetify.theme.dark = false;
  }
}
</script>
