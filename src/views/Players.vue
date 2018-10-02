<template>
    <div class="players container">
        <div class="row container content">
            <div class="col-12 section">
                <h5 class="title-txt">2017-18 Player statistics</h5>
            </div>
            <div class="col-12 section style-table table-responsive">
                <table class="text-center style-table">
                    <tr>
                        <th>Player</th>
                        <th>G</th>
                        <th>PTS</th>
                        <th>FG</th>
                        <th>FG%</th>
                        <th>3P%</th>
                        <th>FT%</th>
                        <th>AST</th>
                    </tr>
                    <tr v-for="player in players">
                        <td>
                            <img :src=player.photo alt="player photo">
                            <p>{{player.name}}</p>
                        </td>
                        <td>{{player.g}}</td>
                        <td>{{player.pts}}</td>
                        <td>{{player.fg}}</td>
                        <td>{{player.fg_pct}}</td>
                        <td>{{player.three_pct}}</td>
                        <td>{{player.ft_pct}}</td>
                        <td>{{player.ast}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Players",
        data(){
            return{

            }
        },
        computed:{
            players(){
                return this.$store.state.players;
            }
        }
    };
</script>

<style>
    @media only screen and (max-width: 576px) {
        .style-table {
            width: 100vh !important;
        }
    }

    .content {
        text-align: justify;
        word-break: break-word;
        padding-top: 20px;
    }

    .section {
        margin-bottom: 15px;
    }
    .style-table {
        font-size: 10px;
    }

    .players table {
        border-collapse: collapse;
    }

    .players table > tr > th, td {
        border-bottom: 1px solid #07843b;
    }

    .style-table tr:first-child {
        background: rgba(255, 253, 253, 0.8);
    }

    .players img{
        width: 30%;
        padding-top: 5px;
    }

    .players table > tr > th {
         width: 10.6%;
        color: #07843b;
        font-weight: bold;
     }

    .players table > tr > th:first-child {
        width: 25%;
    }

    .title-txt {
        color: #07843b;
        font-weight: bold;
    }
</style>
