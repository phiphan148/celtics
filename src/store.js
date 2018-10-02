import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        matches: [],
        players: [],
        team: '',
        date: '',
        photoURL: ''
    },
    mutations: {
        getMatches(state, matches) {
            this.state.matches = matches;
        },
        getPlayers(state, players) {
            this.state.players = players;
        },
        updateTeam(state, team){
            this.state.team = team;
        },
        updateDate(state, date){
            this.state.date = date;
        },
        updatePhotoUrl(state, photoURL){
            this.state.photoURL = photoURL
        }
    },
    actions: {}
});
