<template>
  <div class="projects">
    <p class="component_title">Projects</p>
    <p class="component_under_title">Click on the tiles to expand</p>
    <div v-for="project in projects" :key="project.index" class="project_container">

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
  }

  .project_container {
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20px;
    height: 150px;
    background-color: white !important;
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

        },
        {

        },
        {

        },
        {

        },
        {

        }
      ]
    }),
  }
</script>
