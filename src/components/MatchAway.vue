<template>
    <div class="ticket container">
        <div class="content-box">
            <div v-for="match in matches" class="card card-body text-left">
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
                    <div class="col-5">
                        <p>{{match.opponent.name}}</p>
                        <h3 v-if="new Date(match.away.date.split('/')[2],match.away.date.split('/')[1]-1, match.away.date.split('/')[0]).getTime()<currentDate.getTime()"
                            class="title-txt">{{match.away.opp_scr}}</h3>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-5">
                        <p>Boston Celtics</p>
                        <h3 v-if="new Date(match.away.date.split('/')[2],match.away.date.split('/')[1]-1, match.away.date.split('/')[0]).getTime()<currentDate.getTime()"
                            class="title-txt">{{match.away.cel_scr}}</h3>
                    </div>
                </div>
                <div v-if="new Date(match.away.date.split('/')[2],match.away.date.split('/')[1]-1, match.away.date.split('/')[0]).getTime()>currentDate.getTime()">
                    <div class="row">
                        <div class="col-6">
                            <p><i class="far fa-calendar-alt"><span class="ml-1">{{match.away.date}}</span></i></p>
                            <p><i class="fas fa-ticket-alt"></i><span class="ml-1">{{match.away.ticket_price}}</span>
                            </p>
                            <p><i class="fas fa-map-marker-alt"></i><span class="ml-1">{{match.away.location}}</span>
                            </p>
                        </div>
                        <div class="col-6">
                            <p><i class="far fa-clock"><span class="ml-1">{{match.away.time}}</span></i></p>
                            <p><span class="font-weight-bold">Available tickets:</span>{{match.away.ticket_available}}
                            </p>
                            <p><i class="fas fa-shopping-cart title-txt"></i><a href="https://www.nba.com/celtics/schedule?page=individualTickets"><span class="ml-1 title-txt">Buy ticket here</span></a></p>
                        </div>
                    </div>
                    <iframe class="map-frame" :src=match.away.map frameborder="0" allowfullscreen></iframe>
                </div>
                <video ref="videoRef" src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" id="video-container" width="100%" controls></video>
                <!--<video v-if="new Date(match.away.date.split('/')[2],match.away.date.split('/')[1]-1, match.away.date.split('/')[0]).getTime()<currentDate.getTime()" class="mt-3" width="100%" controls>-->
                    <!--<source :src=match.home.video type="video/mp4">-->
                    <!--Your browser does not support HTML5 video.-->
                <!--</video>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MatchAway",
        data() {
            return {
                currentDate: new Date(),
            };
        },
        components: {},
        props: {
            matches: Array,
        },
    };
</script>

<style scoped>
    .content-box .card p {
        font-size: 10px;
    }

    .ticket .card img {
        width: 100%;
    }
    .map-frame{
        margin: 30px auto 10px;
        width: 100%;
    }
</style>

