<template>
    <div class="login content-box row justify-content-center">
        <div class="container align-self-center">
            <div class="align-self-center col">
                <h5 class="text-left title-txt">LOG IN</h5>    
                <div class="row">
                    <div class="col-3 align-self-center text-left">
                        <p>Email:<span class="text-danger">*</span></p>
                    </div>
                    <div class="col-9 align-self-center">
                        <p><input v-model="emailLogIn" type="text"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 align-self-center text-left">
                        <p>Password:<span class="text-danger">*</span></p>
                    </div>
                    <div class="col-9 align-self-center">
                        <p><input v-model="passwordLogIn" type="password" id="pass1"></p>
                        <div class="row container mt-1">
                            <input class="col-1" type="checkbox" v-on:click="checkPass('pass1')">
                            <p class="col text-left align-self-center small-txt" style="padding:0px">Show password</p>
                        </div>
                    </div>
                </div>
                <div class="col justify-content-center">
                    <p>
                        <button v-on:click="login">Login</button>
                    </p>
                </div>
                <div class="row mt-3">
                    <img class="img-fluid col-2" src="../assets/gmail.png" alt="gmail">
                    <p class="text-left align-self-center" style="font-style: italic">You can also log in by GMail: <span class="clickHere" v-on:click="loginG">Click here</span></p>
                </div>

            </div>
            <div class="align-self-center col content-box">
                <h5 class="text-left title-txt">SIGN UP</h5>
                <div class="row">
                    <div class="col-3 align-self-center text-left">
                        <p>Name:<span class="text-danger">*</span></p>
                    </div>
                    <div class="col-9 align-self-center">
                        <p><input v-model="userName" type="text" required></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 align-self-center text-left">
                        <p>Email:<span class="text-danger">*</span></p>
                    </div>
                    <div class="col-9 align-self-center">
                        <p><input v-model="emailSignup" type="text" required></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 align-self-center text-left">
                        <p>Password:<span class="text-danger">*</span></p>
                    </div>
                    <div class="col-9 align-self-center">
                        <p><input v-model="passwordSignup" type="password" id="pass2"></p>
                        <div class="row container mt-1">
                            <input class="col-1" type="checkbox" v-on:click="checkPass('pass2')">
                            <p class="col text-left align-self-center small-txt" style="padding:0px">Show password</p>
                        </div>
                    </div>
                </div>
                <div class="col justify-content-center">
                    <p>
                        <button v-on:click="signUp">Sign Up</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="pre-footer"></div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      emailLogIn: "",
      passwordLogIn: "",
      emailSignup: "",
      passwordSignup: "",
      userName: ""
    };
  },
  methods: {
    signUp() {
      if (this.userName != "") {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.emailSignup, this.passwordSignup)
          .then(user => {
            user = firebase.auth().currentUser;
            if (user) {
              user
                .updateProfile({
                  displayName: this.userName,
                  photoURL: "https://i.imgur.com/vHZfqPP.png"
                })
                .then(function() {});
            }
            this.$router.push("/chat");
          })
          .catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
          });
      } else {
        alert("Please fill your name");
      }
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.emailLogIn, this.passwordLogIn)
        .then(user => {
          this.$router.push("/chat");
        })
        .catch(function(error) {
          let errorCode = error.code;
          let errorMessage = error.message;
          alert(errorMessage);
        });
    },
    loginG() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase
        .auth()
        .getRedirectResult()
        .then(result => {
          if (result) {
            this.$router.push("/chat");
          }
        })
        .catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage);
          });
    },
    checkPass(idInput){
        let pass = document.getElementById(idInput);
        if (pass.type === "password") {
            pass.type = "text";
            } else {
            pass.type = "password";
        }
    },
  }
};
</script>

<style scoped>
.login {
  min-height: 85vh;
}
.login .small-txt{
    font-size: 10px;
}
.login input {
  border: none;
  outer: none;
  width: 100%;
  border-radius: 3px;
  margin: 5px 0px;
}

.login input:focus {
  outline: none;
}

.login button {
  background: #08843b;
  color: white;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 12px;
}

.login button:focus {
  outline: none;
}

.clickHere {
  cursor: pointer;
  color: blue;
}

.login img {
  height: 10%;
}
</style>