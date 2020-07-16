<template>
  <div class="skills">
    <p class="component_title">Skills</p>
    <div class="skills_container">
      <v-card class="skill" v-for="skill in skills" :key="skill.index">
        <div class="skill_thumbnail">
          <img :src="skill.logo" class="skill_thumbnail">
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped>

  .component_title {
    font-size: 25pt;
    font-weight: bold;
  }

  .skills_container {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .skill {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .skill_thumbnail {
    width: 120px;
    height: 120px;
  }

  @media only screen and (max-width: 900px) {
    .skills_container {
      width: 100%;
      margin-left: unset;
    }
  }

</style>

<script>

  export default {
    name: 'SkillsComponent',
    components: {
    },
    data: () => ({
      skills: [
        {
          title: "Java",
          logo: "https://i.imgur.com/SJjYhaj.png"
        },
        {
          title: "C#",
          logo: "https://i.imgur.com/Y1dMOjA.png"
        },
        {
          title: ".NET Core",
          logo: "https://i.imgur.com/zdQqlXY.png"
        },
        {
          title: "Spring Boot",
          logo: "https://i.imgur.com/32bO4dE.png"
        },
        {
          title: "Angular",
          logo: "https://i.imgur.com/pbvZWtD.png"
        },
        {
          title: "Vue",
          logo: "https://i.imgur.com/yLRmRud.png"
        },
        {
          title: "Ionic",
          logo: "https://i.imgur.com/crzAecs.png"
        },
        {
          title: "HTML5",
          logo: "https://i.imgur.com/unGFbIk.png"
        },
        {
          title: "CSS3",
          logo: "https://i.imgur.com/B1sxhRj.png"
        },
        {
          title: "Javascript",
          logo: "https://i.imgur.com/UCDMi1b.png"
        },
        {
          title: "Docker",
          logo: "https://i.imgur.com/Jl59oXw.png"
        },
        {
          title: "Kubernetes",
          logo: "https://i.imgur.com/5s4qJ9x.png"
        },
        {
          title: "Firebase",
          logo: "https://i.imgur.com/YXr1P9E.png"
        },
        {
          title: "SignalR",
          logo: "https://i.imgur.com/XFGdjow.png"
        },
        {
          title: "Git",
          logo: "https://i.imgur.com/c9obCBm.png"
        },
        {
          title: "Jenkins",
          logo: "https://i.imgur.com/OYxH6sK.png"
        },
        {
          title: "Azure DevOps",
          logo: "https://i.imgur.com/heYICkh.png"
        },
        {
          title: "ArtNet",
          logo: "https://i.imgur.com/gL6WTiF.png"
        },
        {
          title: "MySQL",
          logo: "https://i.imgur.com/Z7OkJFU.png"
        },
        {
          title: "Mongo",
          logo: "https://i.imgur.com/83JFXWr.png"
        },
        {
          title: "Python",
          logo: "https://i.imgur.com/2eD3oI2.png"
        },
        {
          title: "Visual Paradigm",
          logo: "https://i.imgur.com/WHEU6CZ.png"
        }
      ]
    }),
  }
</script>
