<template>
    <div class="game-schedule">
        <div class="description-bg text-left">
            <router-link to="/schedule"><p class="description"><span class="font-weight-bold">Schedule - </span>For all games in pre season</p></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameSchedule",
    };
</script>

<style scoped>
    .game-schedule{
        background: url('../assets/game-schedule.jpg');
        background-size: 100%;
    }
</style>
