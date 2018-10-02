<template>
    <div id="footerId" class="row footer fixed-bottom">
        <div class="menu row justify-content-center">
            <div class="col-7">
                <router-link to="/">Home</router-link>
                <div class="footer-menu-left menuClose">
                    <p @click="footerexpand">
                        <router-link to="/players">Players</router-link>
                    </p>
                    <p @click="footerexpand">
                        <router-link to="/schedule">Game Schedule</router-link>
                    </p>
                    <p @click="footerexpand">
                        <router-link to="/ticket">Book Ticket</router-link>
                    </p>
                    <p @click="footerexpand">
                        <router-link to="/location">Location</router-link>
                    </p>
                </div>
            </div>
            <div class="col-5">
                <div v-if="logIn">
                    <router-link to="/login"><p>Login</p></router-link>
                </div>
                <p v-on:click="logout" v-else>Logout</p>
                <p @click="footerexpand" v-on:click="gotoChat" id="chatPage" class="menuClose">Chat</p>
            </div>
        </div>
        <div class="col-3 col-md-1">
            <img @click="footerexpand" alt="Celtics logo" class="fixed-bottom footer-img" src="../assets/logo.png">
        </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      logIn: true,
      isOpen: false,
      isClose: true,
      provider: ""
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    footerexpand() {
      if (this.isOpen === false) {
        document.querySelector(".footer-img").classList.remove("imgClose");
        document.getElementById("footerId").classList += " footerOpen";
        document.querySelector(".footer-img").classList += " imgOpen";
        document.querySelector(".footer-menu-left").classList += " menuOpen";
        document.getElementById("chatPage").classList += " menuOpen";
        this.isOpen = true;
      } else {
        document.querySelector(".footer-menu-left").classList += " menuClose";
        document.getElementById("footerId").classList += " footerClose";
        document.querySelector(".footer-img").classList += " imgClose";
        document.getElementById("footerId").classList.remove("footerOpen");
        document.querySelector(".footer-img").classList.remove("imgOpen");
        document
          .querySelector(".footer-menu-left")
          .classList.remove("menuOpen");
        document.getElementById("chatPage").classList.remove("menuOpen");
        this.isOpen = false;
      }
    },
    checkLogin() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.logIn = false;
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(result => {
          this.$router.push("/");
          return (this.logIn = true);
        })
        .catch(function(error) {
          let errorCode = error.code;
          let errorMessage = error.message;
          alert(errorMessage);
        });
    },
    gotoChat() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.$router.push("/chat");
        } else {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style>
@media only screen and (min-width: 500px) {
  .footer img {
    width: 8% !important;
    left: 45% !important;
  }
}

@media only screen and (min-width: 768px) {
  .footer {
    min-height: 5% !important;
  }

  .footer .menu {
    padding-top: 3px !important;
  }

  .footer img {
    width: 6% !important;
    left: 45% !important;
  }
}

.footer {
  background: #07843b;
  height: 7%;
  border: white;
}

.footer img {
  width: 18%;
  left: 42%;
}

.footer .menu {
  width: 100%;
  padding-top: 8px;
  color: #eeeded;
  font-weight: bold;
}

.footer a:hover {
  color: #f7eb01;
}

.footer p:hover {
  color: #f7eb01;
}

.footer a,
p {
  font-size: 14px;
  line-height: 23px;
  cursor: pointer;
}

.footerOpen {
  transition: 0.3s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  height: 25%;
}

.footerClose {
  transition: 0.3s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  min-height: 7%;
}

.imgOpen {
  bottom: 75%;
  transition: 0.3s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
}

.imgClose {
  transition: 0.3s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  bottom: 0%;
}

.menuClose {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.5s linear;
}

.menuOpen {
  visibility: visible;
  opacity: 1;
}
</style>