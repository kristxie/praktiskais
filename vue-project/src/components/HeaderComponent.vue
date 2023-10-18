<template>
    <div class="header" :style="{ 'background-color': headerColor }">
         <img src="@/assets/logo (white).svg" class="logo" />
         <h1 class="siteName" :style="{ 'margin-right': marginRight }">SQUIIII</h1>
         <img v-if="isLoggedIn" :style="{ 'background-color': user.randomColor }" class="avatar" />
        <h1 v-if="isLoggedIn" class="fullName">{{ fullName }}</h1>
        <button @click="userLog" class="login_button">
            {{ loginStatus ? 'LOGOUT' : 'LOGIN' }}
        </button>
    </div>
</template>  
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: "Kristīne",
          surname: "Buša",
          code: "IT21037",
          loggedIn: false,
          randomColor: '#000000'
        },
        loginStatus: false,
        headerColor: "#FFB6C1",
        marginRight: "86%"
      };
    },
    computed: {
      fullName() {
        return this.user.name + ' ' + this.user.surname;
      },
      isLoggedIn() {
        return this.user.loggedIn;
      }
    },
    methods: {
      generateRandomColor() {
        this.user.randomColor = this.getRandomColor();
      },
      getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
      },
      userLog() {
        if (this.user.loggedIn) {
            const confirmLogout = confirm('Do you want to log out?');
            if (confirmLogout) {
            this.logout();
            }
        } else {
            const confirmLogin = confirm('Do you want to log in?');
            if (confirmLogin) {
            this.generateRandomColor();
            this.login();
            }
        }
        this.loginStatus = !this.loginStatus;
      },

      logout() {
        this.user.loggedIn = false;
        this.headerColor = "#FFB6C1";
        this.$emit('user-logged-out');
      },
      login() {
        this.user.loggedIn = true;
        this.headerColor = "#C9A9A6";
        this.$emit('user-logged-in');
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: purple;
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 60px;
    margin-left: 20px;
  }
  
  .siteName {
    font-size: 24px;
    border: none;
    border-radius: 8px;
    padding: 5px 10px;
    margin-left: 10px;
    margin-right: 86%;
  }
  
  .login_button {
    background-color: rgb(90, 0, 90);
    position: fixed;
    top: 20px;
    left: 1720px;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .fullName {
    position: fixed;
    top: 10px;
    left: 320px;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 70%;
    position: fixed;
    top: 10px;
    left: 250px;
  }
  </style>
  