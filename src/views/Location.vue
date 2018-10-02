<template>
    <div class="ticket container">
        <div class="container content-box">
            <form class="searchbox input-group mb-3">
                <input v-model="search" type="search" name="search" class="searchbox-input" required>
                <span class="searchbox-icon"><button class="btn-style btn" type="button"><span
                        class="search-txt">Search city</span>
                <i class="fa fa-search ml-2"></i></button></span>
            </form>
            <p v-if="matches.length == 0">Sorry, we don't have any result</p>
            <div style="clear: both"></div>
            <div v-for="match in matches">
                <div class="card card-body text-left section">
                    <p class="font-weight-bold title-txt">{{match.opponent.name}}</p>
                    <p class="font-weight-bold">{{match.away.location}}</p>
                    <!--<div v-on:click="showMap(match)">-->
                        <!--<p>Show map</p>-->
                        <!--<iframe v-if="show" class="map-frame mt-2" :src=map frameborder="0" allowfullscreen></iframe>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Location",
        data() {
            return {
                show: false,
                search: '',
            }
        },
        computed: {
            matches() {
                return this.$store.state.matches.filter(match => match.opponent.name.toLowerCase().includes(this.search.toLowerCase()) || match.away.location.toLowerCase().includes(this.search.toLowerCase()));
            }
        },
        methods:{
            showMap(match){
                if(this.show == false){
                    this.show = true;
                    this.map = match.away.map;
                } else {
                    this.show = false;
                }
            },
            searchExpand() {
                $(document).ready(function () {
                    let submitIcon = $('.searchbox-icon');
                    let inputBox = $('.searchbox-input');
                    let searchBox = $('.searchbox');
                    let isOpen = false;
                    submitIcon.click(function () {
                        if (isOpen == false) {
                            searchBox.addClass('searchbox-open');
                            inputBox.focus();
                            isOpen = true;
                        } else {
                            searchBox.removeClass('searchbox-open');
                            inputBox.focusout();
                            isOpen = false;
                        }
                    });
                })
            },
        },
        mounted(){
            this.searchExpand();
        }
    };
</script>

<style scoped>
    .btn-style {
        min-width: 100px;
        background: #fff;
    }

    .search-bar {
        width: 100%;
        margin-bottom: 40px;
    }

    .searchbox {
        min-width: 127px;
        width: 0%;
        height: 38px;
        overflow: hidden;
        -webkit-transition: width 0.3s;
        -moz-transition: width 0.3s;
        -ms-transition: width 0.3s;
        -o-transition: width 0.3s;
        transition: width 0.3s;
        float: right;
    }

    .searchbox-input {
        top: 0;
        right: 0;
        border: 0;
        outline: 0;
        width: 100%;
        margin: 0;
        padding: 0px 55px 0px 20px;
        font-size: 20px;
        border-radius: 3px;
    }

    .searchbox-icon,
    .searchbox-submit {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
        text-align: center;
        cursor: pointer;
    }

    .search-txt {
        text-align: left;
    }

    .searchbox-open {
        width: 100%;
    }
</style>

