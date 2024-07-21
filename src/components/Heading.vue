<template>
        <div>
        <h2>
            Igniting a Revolution in HR Inovation
        </h2>
        <p class="img">
            <img src="../assets/Images/Vector 4.png" alt="">
        </p>
       <div class="star">
        <img src="../assets/Images/star.png" alt="">
       </div>
        
    </div>
    <div class="star-l">
        <img src="../assets/Images/star (1).png" alt="">
    </div>
<v-layout>
    <v-flex>
        <div class="desc">
            <img class='light' src="../assets/Images/1531010992wink-emoji-woman-png 1.png" alt="">
            <h1>getlinked Tech <br> Hackathon <span style="color: #D434FE;">1.0</span> 
                <img src="../assets/Images/chain-9365116-7621444.png">
                <img src="../assets/Images/1f4a5.png" >
            </h1>
            <p>Participate in getlinked tech Hackathon 2023 and stand <br> a chance to win a big price </p>
        </div>
        
       <reg-button/>
       <div class="img-3">
        <img src="../assets/Images/star.png" alt="">
       </div>
       <div class="timer">
        <h1>
            00<span>H</span>   00<span>M</span>   00<span>S</span>
        </h1>
       </div>
    </v-flex>

    <v-flex class="desc-img">
        
        <img class="two" src="../assets/Images/man-wearing-smart-glasses-touching-virtual-screen 1.png" alt="">
    </v-flex>
</v-layout>
</template>

<script>
import RegButton from './RegButton.vue';
export default{
    components:{RegButton}
}
</script>

<style scoped>
*{
    color: #ffffff;
}

span{
    color: #150E28;
}
h2{
    text-align: end;  
}

.img{
    text-align: end;
}

img{
    width: 120px;
    margin-bottom: 15px;
}
.star{
    text-align: center;
}
.star img{
    width: 15px;
    position: absolute;
    margin-left: 23em;
}
.star-l img{
    width: 15px;
    margin-left: 80px;
}
.desc h1{
    font-size: 6em;
    font-weight: 900;
}
.desc img{
    width: 30px; 
}
.desc p{
font-size: 20px;
margin-bottom: 20px;

}
desc{
    display: flex;
}

.timer{
    margin-top: 25px;
}
.timer span{
    color: #ffffff;
    font-size: 7px;
}

.desc-img img{
width: 40vw;
background: url('../assets/Images/Image 1.png');
}

.light{
    position: absolute;
    margin-left: 440px;
}

.img-3 img{
    width: 15px;
    position: absolute;
    margin-left: 500px;
}


</style>