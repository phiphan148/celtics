<template>
    <div class="ticket container">
        <div class="container content-box">
            <div class="text-left mb-2">
                <a  @click="$router.go(-1)"><i class="fas fa-caret-left title-txt"></i><span class="ml-1 title-txt">Go Back</span></a>
            </div>
            <MatchHome v-if="matchHome.length != 0" v-bind:matches="matchHome"></MatchHome>
            <MatchAway v-if="matchAway.length != 0" v-bind:matches="matchAway"></MatchAway>
        </div>
    </div>
</template>

<script>
    import MatchHome from "../components/MatchHome"
    import MatchAway from "../components/MatchAway"

    export default {
        name: "GameDetails",
        components: {MatchHome,MatchAway},
        data() {
            return {
                teamClick: '',
                dateClick: '',
            }
        },
        computed: {
            team() {
                return this.$store.state.team;
            },
            date() {
                return this.$store.state.date;
            },
            matchHome() {
                return this.$store.state.matches.filter(match => match.opponent.name.includes(this.teamClick) && match.home.date.includes(this.dateClick));
            },
            matchAway() {
                return this.$store.state.matches.filter(match => match.opponent.name.includes(this.teamClick) && match.away.date.includes(this.dateClick));
            }
        },
        created() {
            this.getTeam();
        },
        methods: {
            getTeam: function () {
                if (this.team !== '') {
                    localStorage.setItem("team", this.team);
                    this.teamClick = localStorage.getItem('team');
                    localStorage.setItem("date", this.date);
                    this.dateClick = localStorage.getItem('date');
                } else {
                    this.teamClick = localStorage.getItem('team');
                    this.dateClick = localStorage.getItem('date');
                }
            }
        }
    };
</script>

<style scoped>

</style>

