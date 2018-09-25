<template>
    <div class="container ticket">
        <div class="container content-box">
            <div class="card text-left section">
                <img class="card-img-top" :src=imgTicketType alt="ticket type">
                <div class="card-body">
                    <h6 class="title-txt">{{titleTicketType}}</h6>
                    <p class="mb-2">{{descriptionTicketType}}</p>
                    <router-link :to=linkimgTicketType class="btn-ticket">{{btnTicketType}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BuyTicketType",
        props:{
            imgTicketType: String,
            titleTicketType: String,
            descriptionTicketType: String,
            linkimgTicketType: String,
            btnTicketType: String
        },
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

