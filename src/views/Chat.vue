<template>
    <div class="chat content-box">
        <div class="container">
            <div class="convo">
                <div v-for="obj in data">
                    <div v-if="obj.username.includes(currentUser)" class="mb-2 row text-left">
                        <img class="col-2 img-fluid" :src=obj.photo>
                        <div class="col align-self-center" style="margin: 0px">
                            <div class="row" style="padding: 0px">
                                <div class="col-6 txt">
                                    <div class="details">
                                        <p>{{obj.mess}}</p>
                                        <p class="time">{{obj.date}} {{obj.time}}</p>
                                    </div>
                                </div>
                                <div class="col-6"></div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="row text-right mb-2">
                        <div class="col align-self-center" style="margin: 0px">
                            <div class="row" style="padding: 0px">
                                <div class="col-6"></div>
                                <div class="col-6 txt-right">
                                    <p>{{obj.mess}}</p>
                                    <p class="time">{{obj.date}} {{obj.time}}</p>
                                </div>
                            </div>
                        </div>
                        <img class="col-2 img-fluid" :src=obj.photo>
                    </div>
                </div>
            </div>
            <div class="inputs mt-4">
                <input v-model="inputTxt" id="textInput" type="text"
                       onfocus="this.placeholder = ''" placeholder="Type here ...">
                <button v-on:click="writeNewPost" id="create-post" class="button is-primary">Send</button>
            </div>
        </div>
        <div class="pre-footer">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        components: {},
        data() {
            return {
                currentUser: '',
                obj: {},
                inputTxt: '',
                data: {}
            }
        },
        created() {
            this.getPosts();
        },
        methods: {
            pad(s) {
                return (s < 10) ? '0' + s : s;
            },
            writeNewPost() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                
                    } else {
                        alert('Please sign in to send the message')
                    }
                });
                var user = firebase.auth().currentUser;
                this.currentUser = user.displayName;
                var currentDate = new Date();
                var date = [this.pad(currentDate.getDate()), this.pad(currentDate.getMonth() + 1), currentDate.getFullYear()].join('/');
                var time = [this.pad(currentDate.getHours()), this.pad(currentDate.getMinutes() + 1), currentDate.getSeconds()].join(':');
                if (this.inputTxt != '') {
                    var newKeyPost = database.ref().child('posts').push().key;
                    firebase.database().ref(`posts/${newKeyPost}`).set({
                        username: this.currentUser,
                        photo: user.photoURL,
                        mess: this.inputTxt,
                        date: date,
                        time: time
                    });
                }
                this.inputTxt = '';
            },
            getData(received) {
                this.data = received.val();
                this.currentUser = firebase.auth().currentUser.displayName;
            },
            getPosts() {
                var messages = database.ref().child('posts');
                messages.on('value', this.getData);
            },
        }
    };
</script>

<style scoped>
    .convo {
        min-height: 80vh;
    }

    .convo img {
        width: 50%;
        height: 50%;
        border-radius: 50%;
    }

    .convo .txt {
        position: relative;
        background: #fff;
        border-radius: .8em;
        word-wrap: break-word;
    }

    .convo .txt:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 11px solid transparent;
        border-right-color: #fff;
        border-left: 0;
        border-top: 0;
        margin-top: -5.5px;
        margin-left: -11px;
    }

    .inputs button {
        background: #08843B;
        border-radius: 3px;
        padding: 5px;
        color: white;
        font-weight: bold;
        margin-left: -1px;
        box-sizing: border-box;
        width: 15%;
        outline: none;
    }

    .inputs input {
        width: 85%;
        border-radius: 3px 0px 3px 0px;
        border: none;
        padding: 5px;
        outline: none;
    }

    .time {
        color: #08843B;
        font-size: 9px;
    }

    .convo .txt-right {
        position: relative;
        background: #fff;
        border-radius: .8em;
        word-wrap: break-word;
    }

    .convo .txt-right:after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 11px solid transparent;
        border-left-color: #fff;
        border-right: 0;
        border-top: 0;
        margin-top: -5.5px;
        margin-right: -11px;
    }

</style>

