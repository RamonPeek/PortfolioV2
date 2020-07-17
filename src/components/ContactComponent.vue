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
    <div class="mailto_container">
      <v-form ref="emailForm" v-model="validEmailForm">
        <v-card class="mailto_topic_container">
          <v-text-field v-model="emailTopic" label="Topic" :rules="topicRules" clearable></v-text-field>
        </v-card>
        <v-card class="mailto_message_container">
          <v-textarea v-model="emailMessage" label="Message" :rules="messageRules" auto-grow clearable no-resize maxlength="2000" counter="2000"></v-textarea>
        </v-card>
        <v-btn large v-on:click="sendEmail" class="mailto_send_button">Send</v-btn>
      </v-form>
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
    margin-bottom: 100px;

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

  .mailto_container {
    width: 50%;
    margin-left: 25%;
    margin-bottom: 110px;
  }

  .mailto_topic_container {
    width: 100%;
    height: 80px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 7px;
    margin-bottom: 20px;
  }

  .mailto_message_container {
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 7px;
    margin-bottom: 20px;
  }

  .mailto_send_button {
    width: 250px;
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
      ],
      validEmailForm: false,
      emailTopic: null,
      topicRules: [
        v => !!v || 'Topic is required',
        v => (v && v.length >= 10 && v.length <= 50) || 'Topic must be between than 10 and 50 characters',
      ],
      emailMessage: null,
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 2000) || 'The message may contain a maximum of 2000 characters.',
      ],
    }),
    methods: {
      redirectToLink(link) {
        window.location = link;
      },
      sendEmail() {
        if(this.$refs.emailForm.validate()) {
          window.open('mailto:ramonpeek@hotmail.com?subject=' + this.emailTopic + '&body=' + this.emailMessage);
        }
      },
    }
  }
</script>
