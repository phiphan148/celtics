<template>
    <div class="ticket container">
        <div class="container content-box">
            <div v-for="match in matches">
                <div v-if="new Date(match.home.date.split('/')[2],match.home.date.split('/')[1]-1, match.home.date.split('/')[0]).getTime()>currentDate.getTime()" class="card card-body text-left shadow p-3 mb-4 bg-white rounded">
                    <div class="row justify-content-center text-center">
                        <div class="col-5 align-self-center">
                            <div class="logo-card"><img class="img-fluid" src="../assets/logo.png" alt="logo"></div>
                        </div>
                        <div class="col-2 align-self-center">
                            <p class="font-italic">Vs</p>
                        </div>
                        <div class="col-5 align-self-center">
                            <div class="logo-card"><img class="img-fluid" :src=match.opponent.logo alt="logo"></div>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-5"><p>Boston Celtics</p></div>
                        <div class="col-2"></div>
                        <div class="col-5"><p>{{match.opponent.name}}</p></div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p>
                                <i class="far fa-calendar-alt"><span class="ml-1">{{match.home.time}}</span><span class="ml-1">{{match.home.date}}</span></i>
                            </p>
                            <p><i class="fas fa-ticket-alt"></i><span class="ml-1">{{match.home.ticket_price}}</span></p>
                        </div>
                        <div class="col-6">
                            <p><i class="fas fa-map-marker-alt"></i><span class="ml-1">{{match.home.location}}</span></p>
                            <p><i class="title-txt fas fa-shopping-cart"></i><a href="https://www.nba.com/celtics/schedule?page=individualTickets"><span class="ml-1 title-txt">Buy ticket</span></a></p>
                        </div>
                    </div>
                </div>
                <div v-if="new Date(match.away.date.split('/')[2],match.away.date.split('/')[1]-1, match.away.date.split('/')[0]).getTime()>currentDate.getTime()" class="card card-body text-left shadow p-3 mb-4 bg-white rounded">
                    <div class="row justify-content-center text-center">
                        <div class="col-5 align-self-center">
                            <div class="logo-card"><img class="img-fluid" :src=match.opponent.logo alt="logo"></div>
                        </div>
                        <div class="col-2 align-self-center">
                            <p class="font-italic">Vs</p>
                        </div>
                        <div class="col-5 align-self-center">
                            <div class="logo-card"><img class="img-fluid" src="../assets/logo.png" alt="logo"></div>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-5"><p>{{match.opponent.name}}</p></div>
                        <div class="col-2"></div>
                        <div class="col-5"><p>Boston Celtics</p></div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p>
                                <i class="far fa-calendar-alt"><span class="ml-1">{{match.away.time}}</span><span class="ml-1">{{match.away.date}}</span></i>
                            </p>
                            <p><i class="fas fa-ticket-alt"></i><span class="ml-1">{{match.away.ticket_price}}</span></p>
                        </div>
                        <div class="col-6">
                            <p><i class="fas fa-map-marker-alt"></i><span class="ml-1">{{match.away.location}}</span></p>
                            <p><i class="title-txt fas fa-shopping-cart"></i><span class="ml-1 title-txt">Buy ticket</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BuyTicket",
        data() {
            return {
                currentDate: new Date(),
            }
        },
        computed: {
            matches() {
                return this.$store.state.matches.sort((a, b) => new Date(a.home.date.split('/')[2],a.home.date.split('/')[1]-1,a.home.date.split('/')[0]).getTime() - new Date(b.home.date.split('/')[2],b.home.date.split('/')[1]-1,b.home.date.split('/')[0]).getTime());
            }
        },
    };
</script>

<style scoped>
.logo-card img{
    width: 50%;
}
</style>

