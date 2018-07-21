<template>
    <div class="container">
        <p> Video delivery comparison demo </p>

         <div v-if="loading">
            <p> Processing... </p>
          </div>

        <div class="col-md-6">
          <div>
            <video controls autoplay>
              <source src="https://res.cloudinary.com/sealuse-creatives/video/upload/w_350,h_350,c_fit/q_70/br_300k/e_volume:50/bunny.mp4" type="video/mp4">
            </video>
          </div>
        </div>

        <div class="col-md-6">
          <div>
            <video controls autoplay>
              <source src="https://res.cloudinary.com/sealuse-creatives/video/upload/bunny.mp4" type="video/mp4">
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
      optimized: null,
      nonOptimized: null,
      loading: false
    };
  },
  methods: {
    getOptimizedVideo() {
      this.loading = true;
      this.optimized =
        "https://res.cloudinary.com/sealuse-creatives/video/upload/v1531916416/bunny.mp4";
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

