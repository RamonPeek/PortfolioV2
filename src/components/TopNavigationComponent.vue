<template>
  <div style="height: 100%">
    <div class="top_navigation" v-if="!mobile">
      <div v-for="menuItem in menuItems" :key="menuItem.index">
        <a href="#" class="top_navigation_item" v-scroll-to="menuItem.componentId">{{menuItem.text}}</a>
      </div>
    </div>
    <div class="top_navigation" v-if="mobile">
      <div v-for="menuItem in menuItems" :key="menuItem.index">
        <a href="#" class="top_navigation_item" v-scroll-to="menuItem.componentId">
          <v-icon v-text="menuItem.icon" class="navigation_icon"></v-icon>
          <p class="mobile_navigation_text_under_icon">{{menuItem.text}}</p>
        </a>
      </div>
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
    background-color: rgba(0, 0, 0, 0.6);
  }

  .top_navigation_item {
    color: white;
    padding-left: 40px;
    text-decoration: none;
    z-index: 9999;
    text-shadow: 0px 0px 3px #000;
    white-space: nowrap;
  }

  .navigation_icon {
    color: white;
    text-shadow: 0px 0px 3px #000;
  }

  @media only screen and (max-width: 900px) {
    .top_navigation {
      justify-content: space-evenly;
      padding-top: 15px;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .mobile_navigation_text_under_icon {
      font-size: 9pt;
      padding-left: 40px;
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
          text: "Home",
          icon: "mdi-home"
        },
        {
          componentId: "#ABOUT_ME",
          text: "About me",
          icon: "mdi-information"
        },
        {
          componentId: "#PROJECTS",
          text: "Projects",
          icon: "mdi-folder-star"
        },
        {
          componentId: "#SKILLS",
          text: "Skills",
          icon: "mdi-account-star"
        },
        {
          componentId: "#CONTACT",
          text: "Contact",
          icon: "mdi-card-account-phone"
        }
      ]
    }),
    methods: {

    },
    props: {
      mobile: Boolean
    }
  }
</script>
