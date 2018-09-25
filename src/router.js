import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Schedule from "./views/Schedule.vue";
import Players from "./views/Players.vue";
import Location from "./views/Location.vue";
import Ticket from "./views/Ticket.vue";
import GameDetails from "./views/GameDetails.vue";
import BuyTicket from "./views/BuyTicket.vue";
import Chat from "./views/Chat.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/schedule",
            name: "schedule",
            component: Schedule
        },
        {
            path: "/players",
            name: "players",
            component: Players
        },
        {
            path: "/location",
            name: "location",
            component: Location
        },
        {
            path: "/ticket",
            name: "ticket",
            component: Ticket
        },
        {
            path: "/gamedetails",
            name: "gamedetails",
            component: GameDetails
        },
        {
            path: "/buyticket",
            name: "buyticket",
            component: BuyTicket
        },
        {
            path: "/chat",
            name: "chat",
            component: Chat,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        }
    ]
});

// Router.beforeEach ((to, from, next) => {
//     let currentUser = firebase.auth().currentUser;
//     let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//
//     if (requiresAuth && !currentUser) next('home')
//     else if(!requiresAuth && currentUser) next ('chat')
//     else next()
// })
