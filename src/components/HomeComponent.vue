<template>
  <div class="background">
    <div class="top_navigation_container">
      <TopNavigationComponent/>
    </div>
    <div class="profile_picture_container"></div>
    <p class="name_title">
      Ramon Peek
    </p>
    <p class="function_under_title">
      Software Engineer
    </p>
    <div class="download_resume">
      <p class="download_resume_text">Download Resume</p>
    </div>
    <div class="placeholder"></div>
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
  }

  .profile_picture_container {
    width: 150px;
    height: 150px;
    margin-left: calc(50% - 75px);
    margin-top: 170px;
    background-image: url("/images/profile_picture.png");
    background-size: cover;
    border: 2px solid white;
  }

  .name_title {
    color: white;
    margin-top: 25px;
    font-size: 25pt;
    text-shadow: 0px 0px 3px #000;
  }

  .function_under_title {
    color: white;
    margin-top: -20px;
    font-size: 12pt;
    text-shadow: 0px 0px 3px #000;
  }

  .download_resume {
    width: 190px;
    height: 50px;
    margin-top: 30px;
    margin-left: calc(50% - 95px);
    border: 1px solid white;
  }

  .download_resume_text {
    color: white;
    font-size: 12pt;
    padding-top: 13px;
    text-shadow: 0px 0px 3px #000;
  }

  .placeholder {
    width: 100%;
    min-height: 130px;
  }
</style>

<script>
  import TopNavigationComponent from './TopNavigationComponent.vue';

  export default {
    name: 'HomeComponent',
    components: {
      TopNavigationComponent
    },
    data: () => ({

    }),
  }
</script>
