<template>
        <div class="heading">
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
<v-layout class="container">
    <v-flex>
        <div class="desc">
            <img class='light' src="../assets/Images/Creative 1.png" alt="">
            <h1>getlinked Tech Hackathon <span style="color: #D434FE;">1.0</span> 
                <div class="desc-chain"><img src="../assets/Images/chain-9365116-7621444.png">
                    <img src="../assets/Images/1f4a5.png" ></div>
            </h1>
            <p>Participate in getlinked tech Hackathon 2023 and stand a chance to win a big price </p>
        </div>
        <div class="regBtn">
            <reg-button/>

        </div>
       
       <div class="img-3">
        <img src="../assets/Images/star.png" alt="">
       </div>
       <div class="timer">
        <timeCount/>
       </div>
    </v-flex>

    <v-flex class="desc-img">
        <img class="man-img" src="../assets/Images/man-wearing-smart-glasses-touching-virtual-screen 1.png">
        <img class="two" src="../assets/Images/Image 1.png" alt="">
    </v-flex>
</v-layout>
</template>

<script>
import RegButton from './RegButton.vue';
import TimeCount from './TimeCount.vue';
export default{
    components:{RegButton, TimeCount}
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
    font-style: italic;
 
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
    animation: blink 1s linear infinite;
}
.star-l img{
    width: 15px;
    margin-left: 80px;
    animation: blink 1s linear infinite;
}
.desc h1{
    font-size: 6em;
    font-weight: 900;
    width: 50vw;
}
.desc img{
    width: 30px; 
}
.desc p{
font-size: 20px;
margin-bottom: 20px;
width: 460px;

}
desc{
    display: flex;
}

.desc-chain{
    position: absolute;
margin-top: -100px;
margin-left: 520px;
}

.timer{
    margin-top: 25px;
    font-size:25px;
}
.desc-img{
    margin-left: 3em;
    margin-bottom: 5em;
}

.man-img{
    position: absolute;
    margin-bottom: 5em;
    width: 40vw;
}
.desc-img .two{
    position: absolute;
    width: 30vw;
    animation: sun 2s linear infinite ;
}

@keyframes sun{
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(100px);
    }
}
.light{
    position: absolute;
    margin-left: 450px;
}


.img-3 img{
    width: 15px;
    position: absolute;
    margin-left: 500px;
    animation: blink 1s linear infinite;
}

@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }


    /* mediaQueries phones */
    @media only screen and (max-width: 900px){
        *{
    text-align: center;
}
h2{
    text-align: center;  
    margin-top: 20px;
    font-size: 18px;
}

.img{
    margin-right: 20px;
}
.container  {
    display: grid;
}
.desc h1{
    font-size: 30px;
    font-weight: 700;
    width: 80vw;
}

.desc p{
font-size: 18px;
width: 90vw;
margin-bottom: 20px;
margin-top: 10px;
}
.desc-img img{
    width: 70vw;
    margin-left: -7em;
}
.desc-img{
    margin-top: 5px;
    height: 20vh;
    width: 50vw;
}
.desc-chain{
    position: absolute;
margin-top: -30px;
margin-left: 260px;
}

.desc-img .two{
    width: 15em;

}

.desc-chain img{
    width: 20px;
}
    }
      /* mediaQueries tablet */

    @media only screen and (max-width: 768px){

    }

</style>