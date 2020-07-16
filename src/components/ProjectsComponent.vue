<template>
  <div class="projects">
    <p class="component_title">Projects</p>
    <p class="component_under_title">Click on the tiles to expand</p>
    <v-card v-for="project in projects" :key="project.index" class="project_container">
      <img :src="project.thumbnail" class="project_thumbnail">
      <div class="project_content">
        <p class="project_title">{{project.title}}</p>
        <p class="project_state">{{project.state}}</p>
      </div>
      <div class="project_links_container">
        <v-btn tile color="primary" class="project_link_button">
          <v-icon left>mdi-earth</v-icon>
        </v-btn>
        <v-btn tile color="secondary" class="project_link_button">
          <v-icon left>mdi-github</v-icon>
        </v-btn>
      </div>
    </v-card>
    <div class="toggle_project_display_container">
      <a href="#" class="show_all_text">
        Show all
      </a>
    </div>
  </div>
</template>

<style scoped>
  .projects {
    width: 100%;
    height: 100%;
  }

  .component_title {
    font-size: 25pt;
    font-weight: bold;
    color: white;
  }

  .component_under_title {
    font-size: 10pt;
    color: white;
    margin-top: -20px;
    margin-bottom: 50px;
  }

  .project_container {
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
  }

  .project_thumbnail {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }

  .project_content {
    width: calc(100% - 86px);
  }

  .project_links_container {
    width: 150px;
    margin-top: 10px;
  }

  .project_title {
    font-size: 16pt;
    font-weight: bold;
    text-align: left;
  }

  .project_state {
    font-size: 10pt;
    text-align: left;
    margin-top: -17px;
    margin-bottom: 0px !important;
  }

  .project_link_button {
    width: 37px;
    padding-left: 27px !important;
    min-width: unset !important;
    margin-left: 10px;
  }

  .toggle_project_display_container {
    width: 60%;
    margin-left: 20%;
    margin-bottom: 80px;
    text-align: right;
    color: white;
    margin-top: -10px;
    padding-right: 5px;
  }

  .show_all_text {
    color: white;
    text-decoration: none;
  }

  @media only screen and (min-width: 601px) and (max-width: 1200px) {
    .project_container {
      width: 80%;
      margin-left: 10%;
    }

    .project_content {
      width: calc(100% - 86px);
    }
  }

  @media only screen and (max-width: 600px) {
    .project_container {
      width: 90%;
      margin-left: 5%;
    }

    .project_content {
      width: calc(100% - 86px);
    }
  }

</style>

<script>

  export default {
    name: 'ProjectsComponent',
    components: {
    },
    data: () => ({
      projects: [
        {
          title: "PSV Swimming Prototype",
          thumbnail: "https://i.imgur.com/lPGPlml.png",
          state: "Finished"
        },
        {
          title: "Smart Light (Strijp S)",
          thumbnail: "https://i.imgur.com/BD3uZyO.png",
          state: "Implemented in OpenSource"
        },
        {
          title: "Digital Excellence",
          thumbnail: "https://i.imgur.com/JNcBOQY.png",
          state: "Released beta"
        },
        {
          title: "TamaCoachee",
          thumbnail: "https://i.imgur.com/44GTOeD.png",
          state: "Finished"
        }
      ]
    }),
  }
</script>
