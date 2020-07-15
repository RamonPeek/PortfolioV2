<template>
  <div class="top_navigation">
    <div v-for="menuItem in menuItems" :key="menuItem.index">
      <a href="#" class="top_navigation_item" v-scroll-to="menuItem.componentId">{{menuItem.text}}</a>
    </div>
  </div>
</template>

<style scoped>
  .top_navigation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
    padding-right: 25px;
  }

  .top_navigation_item {
    color: white;
    padding-left: 40px;
    text-decoration: none;
  }

  @media only screen and (max-width: 900px) {
    .top_navigation {
      justify-content: space-evenly;
      padding-top: 15px;
    }
  }
</style>

<script>

  export default {
    name: 'TopNavigationComponent',

    data: () => ({
      menuItems: [
        {
          componentId: "#HOME",
          text: "Home"
        },
        {
          componentId: "#ABOUT_ME",
          text: "About me"
        },
        {
          componentId: "#PROJECTS",
          text: "Projects"
        },
        {
          componentId: "#SKILLS",
          text: "Skills"
        },
        {
          componentId: "#CONTACT",
          text: "Contact"
        }
      ]
    }),
    methods: {

    }
  }
</script>
