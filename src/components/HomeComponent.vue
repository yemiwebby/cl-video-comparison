<template>
    <div class="container">
        <p> Video delivery comparison demo </p>

         <div v-if="loading">
            <p> Processing... </p>
          </div>

        <div class="col-md-6">

          <div class="form-group">
             <button @click="getOptimizedVideo()"> Fetch Optimized Video </button>

             <button @click="clearOptimizedVideo()"> Clear Video </button>
          </div>

          <div v-if="optimized">
            <div class="video" v-html="optimized">
            </div>
          </div>
        </div>

        <div class="col-md-6">
           <div class="form-group">
             <button @click="getNonOptimizedVideo()"> Fetch Other Video </button>

             <button @click="clearNonOptimizedVideo()"> Clear Video </button>
          </div>

          <div v-if="nonOptimized">
            <div class="video" v-html="nonOptimized"></div>
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
      optimized: null,
      nonOptimized: null,
      loading: false
    };
  },
  methods: {
    getOptimizedVideo() {
      this.loading = true;
      axios.get("http://localhost:3000/cloudinary/optimized").then(data => {
        this.optimized = data.data;
        this.loading = false;
      });
    },

    clearOptimizedVideo() {
      this.optimized = "";
    },

    getNonOptimizedVideo() {
      this.loading = true;
      axios.get("http://localhost:3000/cloudinary/non-optimized").then(data => {
        this.nonOptimized = data.data;
        this.loading = false;
      });
    },

    clearNonOptimizedVideo() {
      this.nonOptimized = "";
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

