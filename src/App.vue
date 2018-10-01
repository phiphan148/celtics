<template>
  <div id="app">
    <!--<Header></Header>-->
    <router-view></router-view>
    <div class="pre-footer"></div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    export default {
        components: {Header, Footer},
        data(){
            return{
                matches: [],
                players: [],
            }
        },
        created(){
            this.getData();
        },
        methods:{
            getData: function () {
                  // fetch('https://api.myjson.com/bins/9pvbg')
                  fetch('https://api.myjson.com/bins/6nzdk')
                      .then(response => response.json())
                      .then((jsonData)=>{
                          let data = jsonData;
                          this.matches = data.matches;
                          this.players = data.players;
                          this.$store.commit('getMatches',this.matches);
                          this.players = data.players;
                          this.$store.commit('getPlayers',this.players);
                      })
            }
        }
    }
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #101010;
    background-color: #EEEDED;
    background-size: 100%;
    min-height: 100vh;
    overflow: hidden;
    line-height: 20px;
    font-size: 12px;
  }
  p{
    margin: 0px;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 3px 0px;
  }
  a{
    color: #EEEDED;
  }
  a:hover{
    text-decoration: none;
    color: #07843b;
  }
  .pre-footer{
    min-height: 34px;
  }
  select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] { font-size: 16px; }
</style>