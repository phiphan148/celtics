<template>
    <div class="container ticket">
        <div class="container content-box">
            <!--<div v-for="ticket in ticketData">-->

            <!--<BuyTicketType v-bind:titleTicketType="ticket.singleTicket.title" v-bind:descriptionTicketType="ticket.singleTicket.description" v-bind:imgTicketType="ticket.singleTicket.img" v-bind:linkimgTicketType="ticket.singleTicket.link" ></BuyTicketType>-->
            <!--</div>-->
            <div class="card text-left section">
                <img class="card-img-top" src="../assets/tickettype/individual.jpg" alt="individual ticket">
                <div class="card-body">
                    <h6 class="title-txt">Individual Game Tickets</h6>
                    <p class="mb-2">Don't miss out! Purchase tickets to individual games.</p>
                    <router-link to="/buyticket" class="btn-ticket">Buy ticket</router-link>
                </div>
            </div>
            <div class="card text-left section">
                <img class="card-img-top" src="../assets/tickettype/family.jpg" alt="family ticket">
                <div class="card-body">
                    <h6 class="title-txt">Family Packs</h6>
                    <p class="mb-2">Family Packs, presented by TD Bank, include tickets, gifts for the kids and a $20 credit for concessions or merchandise.</p>
                    <a href="https://www.nba.com/celtics/tickets/family-packs" class="btn-ticket">Find a family pack</a>
                </div>
            </div>
            <div class="card text-left section">
                <img class="card-img-top" src="../assets/tickettype/group.jpg" alt="group ticket">
                <div class="card-body">
                    <h6 class="title-txt">Group Tickets</h6>
                    <p class="mb-2">Bring your group of 20 or more to TD Garden to celebrate an occasion or just enjoy a fun night out.</p>
                    <a href="https://www.myceltics.me/group-tickets" class="btn-ticket">Book Your Group Outing</a>
                </div>
            </div>
            <div class="card text-left section">
                <img class="card-img-top" src="../assets/tickettype/season-wait-list.jpg" alt="season wait list">
                <div class="card-body">
                    <h6 class="title-txt">Season Ticket Wait List</h6>
                    <p class="mb-2">Join the Boston Celtics Wait List for the opportunity to select season ticket seats when they become available.</p>
                    <a href="https://www.nba.com/celtics/tickets/wait-list" class="btn-ticket">Join Today</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BuyTicketType from "../components/BuyTicketType"
    export default {
        name: "Ticket",
        components: {BuyTicketType},
        data(){
            return{
                ticketData:[{"singleTicket":{"img":"img/individual.jpg","title":"Individual Game Tickets","description":"Don't miss out! Purchase tickets to individual games.","btn": "Buy ticket","link":"buyticket"}}]
            }
        }
    };
</script>

<style>
.content-box{
    padding-top: 20px;
}
.content-box .card-body{
    padding: 0.8rem;
}
.content-box .btn-ticket{
    border-radius: 3px;
    background: #07843b;
    color: #fff;
    font-weight: bold;
    margin-top: 3px;
    padding: 5px 12px;
}
</style>

