<template>
  <div class="about">
    <p class="component_title">About me</p>
    <div class="about_description_container">
      <p class="about_description">
        Hi, my name is Ramon. I am a Dutch student following the Delta-program (IT & Software Engineering) at Fontys Hogescholen, Eindhoven.
        I have been interested in IT and programming in general since I was about twelve years old. I built my first computer when I was in
        my last year of primary school and I have broadened my experience since then to the software-sector.
      </p>
    </div>
    <div class="hobbies_container">
      <v-card v-for="hobby in hobbies" :key="hobby.index" class="hobby_item_container">
        <div class="hobby_item_thumbnail_container">
          <img :src="hobby.thumbnail" style="width: 100%; height: 100%">
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
  .about {
    width: 100%;
    height: 100%;
  }

  .component_title {
    font-size: 25pt;
    font-weight: bold;
  }

  .about_description_container {
    width: 40%;
    margin-left: 30%;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 50px;
  }

  .hobbies_container {
    width: 80%;
    height: 400px;
    margin-left: 10%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .hobby_item_container {
    width: 300px;
    height: 100%;
    margin-bottom: 30px;
  }

  .hobby_item_thumbnail_container {
    width:100%;
  }

  @media only screen and (min-width: 839px) and (max-width: 1300px) {
    .about_description_container {
      width: 70%;
      margin-left: 15%;
    }
  }

  @media only screen and (max-width: 839px) {
    .about_description_container {
      width: 100%;
      margin-left: unset;
    }

    .hobbies_container {
      width: calc(100% - 60px);
      margin-left: 30px;
    }

    .hobby_item_container {
      min-width: 60%;
    }

  }

</style>

<script>

  export default {
    name: 'AboutComponent',
    components: {
    },
    data: () => ({
      hobbies: [
        {
          title: "Marvel/Avengers",
          text: "lorem ipsum",
          thumbnail: "/images/hobbies/marvel_avengers.jpg"
        },
        {
          title: "Gaming",
          text: "lorem ipsum",
          thumbnail: "/images/hobbies/games.jpg"

        },
        {
          title: "Tech",
          text: "lorem ipsum",
          thumbnail: "/images/hobbies/tech.jpg"
        }
      ]
    }),
  }
</script>
