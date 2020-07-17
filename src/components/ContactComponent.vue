<template>
  <div class="contact">
    <p class="component_title">Contact</p>
    <div class="social_media_container">
      <div class="social_media_item" v-for="media in socialMedia" :key="media.index" v-on:click="redirectToLink(media.link)">
        <div class="social_media_item_border_red">
          <div class="social_media_item_inner">
            <v-icon v-text="media.icon" class="social_media_icon"></v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .component_title {
    font-size: 25pt;
    font-weight: bold;
    color: white;
  }

  .social_media_container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 25px;

  }

  .social_media_item {
    width: 10vw;
    max-width: 150px;
    max-height: 150px;
    height: 10vw;
    background-color: white !important;
    border-radius: 100%;
  }

  .social_media_item:hover {
    cursor: pointer;
  }

  .social_media_item_border_red {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-color: #FF5050 !important;
    margin-left: 3px;
    margin-top: 3px;
    padding-top: 3px;
    border-radius: 100%;
  }

  .social_media_item_inner {
    width: calc(100% - 6px);
    height: calc(100% - 3px);
    background-color: white !important;
    margin-left: 3px;
    border-radius: 100%;
  }

  .social_media_icon {
    font-size: calc(7vw - 15px);
    margin-top: calc(calc(calc(100% - 7vw) / 2) - 2px);
    color: #FF5050 !important;
    padding: 10px;
  }

  @media only screen and (min-width: 1450px) {

    .social_media_icon {
      font-size: 80pt;
      margin-top: 7px;
      margin-right: 0px;
      margin-left: -2px;
    }
  }

</style>

<script>

  export default {
    name: 'ContactComponent',
    components: {
    },
    data: () => ({
      socialMedia: [
        {
          icon: "mdi-github",
          link: "https://github.com/RamonPeek"
        },
        {
          icon: "mdi-reddit",
          link: "https://www.reddit.com/user/RP_99"
        },
        {
          icon: "mdi-youtube",
          link: "https://www.youtube.com/channel/UCVQDJ5TKhONO4IM1pdKQQ6g"
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/ramonpeek/"
        },
        {
          icon: "mdi-twitch",
          link: "https://www.twitch.tv/ramonpeekfifa"
        },
      ]
    }),
    methods: {
      redirectToLink(link) {
        window.location = link;
      }
    }
  }
</script>
