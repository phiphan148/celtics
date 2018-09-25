<template>
    <div class="game-location">
        <div class="description-bg text-left">
            <router-link to="/location"><p class="description"><span class="font-weight-bold">Location-</span> All games will be playing in next 2 months</p></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameLocation",
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .game-location{
        background: url('../assets/game-location.jpg') center;
        background-size: 100%;
    }
</style>
