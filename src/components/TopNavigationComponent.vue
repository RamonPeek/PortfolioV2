<template>
  <div class="top_navigation">
    <div v-for="menuItem in menuItems" :key="menuItem.index">
      <p class="top_navigation_item">
        {{menuItem.text}}
      </p>
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
  }
</style>

<script>
  export default {
    name: 'TopNavigationComponent',

    data: () => ({
      menuItems: [
        {
          text: "Home"
        },
        {
          text: "About me"
        },
        {
          text: "Projects"
        },
        {
          text: "Skills"
        },
        {
          text: "Contact"
        }
      ]
    }),
  }
</script>
