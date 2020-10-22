<template id="HOME">
  <div>
    <div class="placeholder_space"></div>
    <div class="profile_picture_container" style="background-image: url('<%= BASE_URL %>images/profile_picture.png');"></div>
    <p class="name_title">
      Ramon Peek
    </p>
    <p class="function_under_title">
      Software Engineer
    </p>
      <div class="download_resume">
        <a href="<%= BASE_URL %>downloads/resume.pdf" class="download_text" download>
          <p class="download_resume_text">Download Resume</p>
        </a>
      </div>
    <div class="placeholder"></div>
  </div>
</template>

<style scoped>


  .profile_picture_container {
    width: 150px;
    height: 150px;
    margin-left: calc(50% - 75px);
    background-size: cover;
    border: 2px solid white;
  }

  .placeholder_space {
    width: 100%;
    height: 150px;
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
    margin-bottom: 50px;
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

  .download_text {
    text-decoration: none;
    color: white;
  }
</style>

<script>

  export default {
    name: 'HomeComponent',
    components: {
    },
    data: () => ({

    }),
  }
</script>
