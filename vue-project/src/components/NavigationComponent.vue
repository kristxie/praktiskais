<template>
    <div class="navigation">
      <div class="navigation">
        <button class="button" @click="showHome" :class="{ active: isHomeActive }">HOME</button>
        <button class="button" @click="showAboutMe" :class="{ active: isAboutMeActive }">ABOUT ME</button>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      activePage: "home"
    };
  },
  methods: {
    home() {
      if (this.activePage !== "home") {
        this.activePage = "home";
        this.$emit("home");
      }
    },
    aboutme() {
      if (this.activePage !== "about") {
        this.activePage = "about";
        this.$emit("about");
      }
    },
  },
};
</script>
<style>
</style>