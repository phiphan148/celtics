<template>
    <div class="home">
        <div class="row justify-content-center">
            <div class="col-sm-8 col-12">
            <PlayersComponent></PlayersComponent>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-8 col-12">
           <GameSchedule></GameSchedule>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-8 col-12">
                <BookTicket></BookTicket>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-8 col-12">
                <GameLocation></GameLocation>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import GameSchedule from "../components/GameSchedule";
    import PlayersComponent from "../components/PlayersComponent";
    import GameLocation from "../components/GameLocation";
    import BookTicket from "../components/BookTicket";

    export default {
        name: "Home",
        components: {BookTicket, GameLocation, PlayersComponent, GameSchedule},
        methods:{
        }
    };
</script>

<style>

</style>

