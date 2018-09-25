<template>
    <div class="about">
        <div class="description-bg text-left">
            <router-link to="/players"><p class="description"><span class="font-weight-bold">Players -</span> Newest players 2018/2019</p></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayersComponent",
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .about{
        background: url('../assets/about.jpg') top center;
        background-size: 100%;
    }
    .description-bg{
        background: linear-gradient(rgba(255, 255, 255, 0),#111111);
        height: 23.3vh;
    }
    .description{
       /*padding: 0px 0px 10px 10px;*/
        position: absolute;
        z-index: 1;
        bottom: 10px;
        left: 25px;
    }
</style>
