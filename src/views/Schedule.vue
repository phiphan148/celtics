<template>
    <div class="ticket container">
        <div class="container content-box">
            <div v-for="match in matches">
                <div v-if="new Date(match.home.date.split('/')[2],match.home.date.split('/')[1]-1, match.home.date.split('/')[0]).getTime()>currentDate.getTime()" @click="getTeamAndDate(match.opponent.name, match.home.date)" class="card card-body text-left shadow p-3 mb-4 bg-white rounded">
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
                    <div class="row text-center">
                        <div class="col-5"><i class="far fa-calendar-alt"><span class="ml-1">{{match.home.date}}</span></i>
                        </div>
                        <div class="col-2"></div>
                        <div class="col-5"><i class="far fa-clock"><span class="ml-1">{{match.home.time}}</span></i>
                        </div>
                    </div>
                </div>
                <div v-if="new Date(match.home.date.split('/')[2],match.home.date.split('/')[1]-1, match.home.date.split('/')[0]).getTime()<currentDate.getTime()" @click="getTeamAndDate(match.opponent.name, match.home.date)" class="border-danger card card-body text-left shadow p-3 mb-4 bg-white rounded">
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
                    <div class="text-center">
                        <h5 class="text-danger font-weight-bold">FINISH</h5>
                    </div>
                </div>
                <div v-if="new Date(match.away.date.split('/')[2],match.away.date.split('/')[1]-1, match.away.date.split('/')[0]).getTime()>currentDate.getTime()" @click="getTeamAndDate(match.opponent.name,match.away.date)" class="card card-body text-left shadow p-3 mb-4 bg-white rounded">
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
                    <div class="row text-center">
                        <div class="col-5"><i class="far fa-calendar-alt"><span class="ml-1">{{match.away.date}}</span></i>
                        </div>
                        <div class="col-2"></div>
                        <div class="col-5"><i class="far fa-clock"><span class="ml-1">{{match.home.time}}</span></i>
                        </div>
                    </div>
                </div>
                <div v-if="new Date(match.away.date.split('/')[2],match.away.date.split('/')[1]-1, match.away.date.split('/')[0]).getTime()<currentDate.getTime()" @click="getTeamAndDate(match.opponent.name, match.away.date)" class="border-danger card card-body text-left shadow p-3 mb-4 bg-white rounded">
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
                    <div class="text-center">
                        <h5 class="text-danger font-weight-bold">FINISH</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Schedule",
        data() {
            return {
                currentDate: new Date(),
            }
        },
        components:{},
        computed: {
            matches() {
                return this.$store.state.matches.sort((a, b) => new Date(a.home.date.split('/')[2],a.home.date.split('/')[1]-1,a.home.date.split('/')[0]).getTime() - new Date(b.home.date.split('/')[2],b.home.date.split('/')[1]-1,b.home.date.split('/')[0]).getTime());
            }
        },
        created(){
        },
        methods:{
            getTeamAndDate(team, date){
                this.$store.commit('updateTeam', team);
                this.$store.commit('updateDate', date);
                this.$router.push('/gamedetails');
            },
        }
    };
</script>

<style scoped>
    .content-box .card p {
        font-size: 10px;
    }

    .ticket .card img {
        width: 70%;
    }

    .logo-card {
        height: 100%;
    }
</style>

