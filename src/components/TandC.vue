<template>
    <v-layout class="container">
        <v-flex class="first-div">
            <div class="text">
                <img class="purple" src="../assets/Images/star pu.png" alt="">
            <img class="light" src="../assets/Images/star.png">
                <h2>Privacy Policy and <br> <span>Terms</span></h2>
                <p>Last updated on September 12, 2023</p>
                 <p>
                    Below are our privacy & policy, which outline a lot of goodies. <br/>
its our aim to always take of our participant
                 </P>

            </div>
            <div class="bordered-text">
                <img class="purple" src="../assets/Images/star pu.png" alt="">
            <img class="light" src="../assets/Images/star.png">
                <p class="first">At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.</p>
<h3><span>Licensing Policy</span></h3>
<img class="purple" src="../assets/Images/star pu.png" alt="">
            <img class="light" src="../assets/Images/star.png">
<p class="second">Here are terms of our Standard License:</p>
<li>The Standard License grants you a non-exclusive right to
    navigate and register for our event</li>
<li>You are licensed to use the item available at any free source
    sites, for your project developement</li>
    <div class="btn">
        <reg-button/>
    </div>
            </div>
            
        </v-flex>

        <v-flex class="img">
            <img class="avatar" src="../assets/Images/08 1.png" alt="">
            <img class="purple" src="../assets/Images/star pu.png" alt="">
            <img class="light" src="../assets/Images/star.png">
           
        </v-flex>
    </v-layout>
</template>
<style scoped>
.purple{
    width: 20px;
    animation: blink 1s linear infinite;
}
.img{
    margin: 70px;
}
.light{
width: 20px;
position: absolute;
margin-top: 100px;
margin-left: 350px;
animation: blink 1s linear infinite;
}
.avatar{
background: url('../assets/Images/Vector.png');
background-repeat: no-repeat;
}
.first-div{
margin: 70px;
color: #fff;
}

.text h2{
    font-size: 42px;
}

.text p{
    margin-top: 20px;
    line-height: 30px;
}

.bordered-text{
    border: 1px solid #D434FE;
    margin-top: 30px;
    background: url('../assets/Images/Purple-Lens-Flare-PNG.png');
    background-repeat: no-repeat;
}

.bordered-text p{
    width: 30vw;
    margin: 30px;
    line-height: 25px;
}

.bordered-text h3,li{
    margin: 30px;
    line-height: 30px;
}

.btn{
    text-align: center;
    margin-bottom: 20px;
}
  
@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }
    @media only screen and (max-width: 768px){

        .container{
            display: block;
        }
        .text{
            text-align: center;
        }

        .bordered-text{
            text-align: center;
        }

       .bordered-text .first {
            width: 60vh;
        }

        .bordered-text .second{
            width: 70vh;
        }

        .avatar{
            width: 270px;
            background-size: cover;
            margin-top: 70px;
        }
    }
</style>
<script>
import RegButton from './RegButton.vue';
export default{
    components:{
        RegButton
    }
}
</script>