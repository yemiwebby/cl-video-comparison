<template>
    <div class="container">
        <p> Video delivery comparison demo </p>

         <div v-if="loading">
            <p> Processing... </p>
          </div>

        <div class="col-md-6">

          <div class="form-group">
             <button @click="getCloudinaryVideo()"> Fetch Cloudinary Video </button>

             <button @click="clearCloudinaryVideo()"> Clear Video </button>
          </div>

          <div v-if="cloudinaryVideo">
            <div id="video" v-html="cloudinaryVideo">
            </div>
          </div>
        </div>

        <div class="col-md-6">
           <div class="form-group">
             <button @click="getOtherVideo()"> Fetch Other Video </button>

             <button @click="clearOtherVideo()"> Clear Other Video </button>
          </div>

          <div v-if="otherVideo">
            <video width="640" height="480" autoplay controls loop>
              <source :src="otherVideo" type="video/mp4">
            </video>
          </div>
        </div>
         
    </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      text: "This is it",
      cloudinaryVideo: null,
      otherVideo: false,
      loading: false
    };
  },
  methods: {
    getCloudinaryVideo() {
      this.loading = true;
      axios.get("http://localhost:3000/cloudinary/videos").then(data => {
        this.cloudinaryVideo = data.data;
        this.loading = false;
      });
    },

    clearCloudinaryVideo() {
      this.cloudinaryVideo = "";
    },

    getOtherVideo() {
      this.loading = true;
      this.otherVideo =
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
    },

    clearOtherVideo() {
      this.otherVideo = false;
    }
  }
};
</script>

<style>
video {
  width: 100%;
  height: auto;
}
</style>

