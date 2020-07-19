<template>
  <div class="projects">
    <p class="component_title">Projects</p>
    <p class="component_under_title">Click on the tiles to expand</p>
    <v-card v-for="project in projects" :key="project.index" class="project_container">
      <img :src="project.thumbnail" class="project_thumbnail" v-on:click="project.expanded = !project.expanded">
      <div class="project_content">
        <p class="project_title" v-on:click="project.expanded = !project.expanded">{{project.title}}</p>
        <p class="project_state" v-on:click="project.expanded = !project.expanded">{{project.state}}</p>
        <p v-if="project.expanded" class="project_description" v-on:click="project.expanded = !project.expanded">
          {{project.text}}
        </p>
        <div v-if="project.expanded" class="project_media_items_container" v-on:click="project.expanded = !project.expanded">
          <div class="project_media_item" v-for="mediaItem in project.mediaItems" :key="mediaItem.index">
            <div class="project_media_item_content">
              <!-- IMAGE -->
              <img v-if="mediaItem.type === 0" :src="mediaItem.content" class="project_media_item_image_container">
              <!-- VIDEO -->
              <video v-if="mediaItem.type === 1" width="100%" height="100%" controls :src="mediaItem.content"></video>
            </div>
          </div>
        </div>
      </div>
      <div class="project_links_container">
        <v-btn tile color="primary" class="project_link_button" v-if="project.website" v-on:click="redirectToURL(project.website)">
          <v-icon left>mdi-earth</v-icon>
        </v-btn>
        <v-btn tile color="secondary" class="project_link_button" v-if="project.repository" v-on:click="redirectToURL(project.repository)">
          <v-icon left>mdi-github</v-icon>
        </v-btn>
      </div>
    </v-card>
    <div class="toggle_project_display_container">
      <!--
      <a href="#" class="show_all_text">
        Show all
      </a>
      -->
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
    cursor: pointer;
  }

  .project_thumbnail {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }

  .project_content {
    width: calc(100% - 180px);
  }

  .project_links_container {
    width: 106px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }

  .project_title {
    font-size: 16pt;
    font-weight: bold;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .project_description {
    font-size: 11pt;
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

  .project_media_items_container {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .project_media_item {
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    position:relative;
  }

  .project_media_item_content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .project_media_item_image_container {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 601px) and (max-width: 1200px) {
    .project_container {
      width: 80%;
      margin-left: 10%;
    }

    .project_title {
      font-size: 13pt;
    }

    .project_media_items_container {
      width: calc(100% + 163px);
      margin-left: -60px;
    }
  }

  @media only screen and (max-width: 600px) {
    .project_container {
      width: 90%;
      margin-left: 5%;
    }

    .project_title {
      font-size: 10pt;
    }

    .project_media_items_container {
      width: calc(100% + 163px);
      margin-left: -60px;

      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
          state: "Finished",
          text: "For the PSV Swimming app, we have worked closely with the PSV committee, swimmers of the PSV Swimming association and their coaches. It was our task to do analysis on the current app and give advise on what to do next; continue working on the app, or start from scratch for a new app. Based on the analysis we have decided to split the group in two and work on both subjects. I have documented the old structure and code of the app, and I have joined the group who will be working on the new app. We will create an app in which swimmers will be able to register for competitions, coaches can confirm these registrations, and the administration will be able to automatically import the registrations into their system and the official European Swimming Federation Database.",
          mediaItems: [
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/u7m7Oxh.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/H4vb9IJ.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/tHhSDLY.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/Ab99fDX.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/TNMSUhs.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/EIRp2pH.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/dTMi9vI.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/s3pJJx4.png"
            }
          ],
          repository: null,
          website: null,
          expanded: false
        },
        {
          title: "Digital Excellence",
          thumbnail: "https://i.imgur.com/Z9FoPCK.png",
          state: "Released beta",
          text: "DeX (Digital Excellence) is an initiative from Fontys which focuses on making projects students are working on public. This way students can interact with other people's projects and collaborate. It also keeps the projects alive after a student has graduated. DeX will make use of external sources, for example: GitLab, GitHub and HBO Kennisbank. Students will also be able to manually add projects to the platform. For now our focus lays within Fontys, but if it succeeds it could form a solution for a lot of universities.",
          mediaItems: [
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/Ermu3y6.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/R95xghC.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/IvbT8E6.png"
            },
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/9czPk6b.png"
            }
          ],
          repository: "https://github.com/orgs/DigitalExcellence/",
          website: "https://dex.software/",
          expanded: false
        },
        {
          title: "Smart Light (Strijp S)",
          thumbnail: "https://i.imgur.com/BD3uZyO.png",
          state: "Implemented in OpenSource",
          text: "Smart Light is a challenge project devised by OpenRemote. Within this challenge it is our task to create a sustainable and reliable way of communicating with streetlights in the Strijp S district. This projects acts as a proof of concept for Strijp S (and other cities worldwide) that IoT should be the next step. For the OpenRemote Manager (their IoT context broker), we have implemented a protocol which allows DMX lights to be controlled over udp. The streetlights in the Strijp S district are not controlled over Artnet however, so a future group will have to dig into this problem. Due to the corona-virus we were not able to do enough research on the physical lights themselves at Strijp, so we decided to implement and run our protocol in a DMX-specialist's office in the UK.",
          mediaItems: [
            {
              type: 0, //IMAGE
              content: "https://i.imgur.com/euTxBO3.png"
            },
            {
              type: 1, //VIDEO
              content: "https://firebasestorage.googleapis.com/v0/b/personalportfolio-2adb0.appspot.com/o/images%2Fprojects%2FzVmfkH92zGnrtq7BSeU9%2FmediaItems%2FFQQLd1tEnVai6osG15QW?alt=media&token=dc3d5d6a-9505-440e-bd7c-9fb2b3edd1b6"
            },
            {
              type: 1, //VIDEO
              content: "https://firebasestorage.googleapis.com/v0/b/personalportfolio-2adb0.appspot.com/o/images%2Fprojects%2FzVmfkH92zGnrtq7BSeU9%2FmediaItems%2Fs8T1JQUBK6QT8qNDEsb6?alt=media&token=504040eb-0146-46ea-af00-1fbaf6864091"
            },
            {
              type: 1, //VIDEO
              content: "https://firebasestorage.googleapis.com/v0/b/personalportfolio-2adb0.appspot.com/o/images%2Fprojects%2FzVmfkH92zGnrtq7BSeU9%2FmediaItems%2FBIMWXPla0pBYmpoBXY0B?alt=media&token=8cdb2282-d57d-40a3-993e-93f215bda0a4"
            },
            {
              type: 1, //VIDEO
              content: "https://firebasestorage.googleapis.com/v0/b/personalportfolio-2adb0.appspot.com/o/images%2Fprojects%2FzVmfkH92zGnrtq7BSeU9%2FmediaItems%2FmBqSpowRM0AJyZE8fzWe?alt=media&token=9450f023-a399-49a1-8c1d-830b8db5eb8a"
            }
          ],
          repository: "https://github.com/openremote/openremote",
          website: null,
          expanded: false
        },
        {
          title: "OpenUITwitchBot",
          thumbnail: "https://i.imgur.com/rjlEmbO.png",
          state: "Work in progress",
          text: "OpenUITwitchBot is an online platform meant for beginning streamers. It is a PWA (progressive web-app) which means that it is both online accessible, and downloadable to your device. The only thing streamers have to do to get started is create an account and authorize their Twitch.tv account. After this all the data will be gathered automatically via the TwitchAPI and provided webhooks. A combination of webhooks and SignalR hubs provide 'near' realtime updates when for example a new follower or bits-donation is detected. The streamer will be able to configure actions based on these triggers (such as playing a video/gif in the overlay or playing a sound). The app also provides a way to create commands which can be used in realtime. As soon as the command is created it will be usable by the chat. Commands will be triggered as soon as someone in the chat types the command, and a command can have several actions such as: play a sound, play a gif and respond in chat. All this data gathering is presented to the user in the form of a stream-overlay which updates in realtime, without the need of configuration. Customizability is possible in the way of moving certain items in the overlay. In the future this will also include the styling of the overlay.",
          mediaItems: [],
          repository: "https://github.com/RamonPeek/OpenUITwitchBot_Frontend",
          website: null,
          expanded: false
        },
        {
          title: "TamaCoachee",
          thumbnail: "https://i.imgur.com/44GTOeD.png",
          state: "Finished",
          text: "Fontys' psychology department is looking for a way of training coaches with a chatbot. For this to actually be useful, we have to create a really smart (human-like) chatbot. It will need to have knowledge of context (as far as possible), it needs to be able to detect emotions, and it will have to hold a conversation as if you were talking to a real person. We will be using PyTorch for settings up our neuralnetwork, and use pre-defined models where possible. Because the chatbot needs to be dutch, we only have a limited data set, and thus have to gather own training data to extend the learning process on the model.",
          mediaItems: [],
          repository: null,
          website: null,
          expanded: false
        }
      ]
    }),
    methods: {
      redirectToURL(url) {
        window.location = url;
      }
    }
  }
</script>
