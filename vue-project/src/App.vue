<template>
  <div class="flexContainer">
    <div class="header">
      <HeaderComponent @user-logged-in="userLoggedIn" @user-logged-out="userLoggedOut" />
    </div>
    <div class="content">
      <div>
        <NavigationComponent v-if="loggedIn" @show-home="showHome" @show-about-me="showAboutMe" />
      </div>
      <div>
        <AboutMeComponent v-if="showAboutMeComponent" :user="user" />
      </div>
      <div>
        <HomeComponent v-if="showHomeComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from "./components/HomeComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import AboutMeComponent from './components/AboutMeComponent.vue';
export default {
  data() {
    return {
      loggedIn: false,
      page: 'home',
    };
  },
  components: {
    HeaderComponent,
    HomeComponent,
    NavigationComponent,
    AboutMeComponent
  },
  computed: {
    isLoggedIn() {
      return this.loggedIn;
    },
    isHome() {
      return this.page === 'home';
    },
    isAboutme() {
      return this.page === 'about';
    },
  },
  methods: {
    home() {
      this.page = 'home';
      console.log(this.page);
    },
    aboutme() {
      this.page = 'about';
      console.log(this.page);
    },
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
      this.page = 'home';
    },
  },
};
</script>

<style>

</style>