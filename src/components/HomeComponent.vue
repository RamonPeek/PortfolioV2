<template id="HOME">
  <div>
    <div class="placeholder_space"></div>
    <div class="profile_picture_container" :style="profilePictureStyle"></div>
    <p class="name_title">
      Ramon Peek
    </p>
    <p class="function_under_title">
      Software Engineer
    </p>
      <div class="download_resume">
        <a :href="resumeDownloadUrl" class="download_text" v-on:click="test" download>
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

  let baseUrl = process.env.BASE_URL;

  export default {
    name: 'HomeComponent',
    components: {
    },
    data() {
      return {
        resumeDownloadUrl: baseUrl + "downloads/resume.pdf"
      }
    },
    methods: {
      test() {
        console.log(this.resumeDownloadUrl);
      }
    },
    computed: {
      profilePictureStyle() {
        return {
          "background-image": "url('" + baseUrl + "images/profile_picture.png')",
        }
      }
    }
  }
</script>
