<template>
    <div class="book-ticket">
        <div class="description-bg text-left">
            <router-link to="/ticket"><p class="description"><span class="font-weight-bold">Book Ticket -</span> Register here to buy the ticket season</p></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BookTicket",
    };
</script>

<style scoped>
    .book-ticket{
        background: url('../assets/book-ticket.jpg') top;
        background-size: 100%;
    }
</style>
