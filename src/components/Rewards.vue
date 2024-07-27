<template>
    <v-layout class="container">
        <v-flex class="flex-left">
            <img class="four" src="../assets/Images/star pu.png" alt="">
            <img class="bigImg" src="../assets/Images/9486889 1.png">
        </v-flex>

        <v-flex class="flex-img">
            <div class="text-content">
                <h3>Prizes and <br> <span>Rewards</span></h3>
                <p>Higlight of the prizes or rewards for winners and for participants</p>
                <img class="one" src="../assets/Images/star.png" >
                <img class="two" src="../assets/Images/star (1).png" >
                <img class="three" src="../assets/Images/star (1).png" >
                <img class="silver" src="../assets/Images/silver_medal 1.png">
                <img class="gold" src="../assets/Images/gold_medal 1.png">
                <img class="bronze" src="../assets/Images/bronze_medal 1.png">
            </div>
            <div class="box-container">
                <div class="box">
             
             <div class="text">
                 <p>2nd <br>Runner</p>
             <p>#300,000</p>
             </div>
             
         </div>
         
         <div class="diff">
          
          <div class="text">
              <p>1st <br>Runner</p>
          <p>#400,000</p>
          </div>
          
      </div>
      <div class="box">
          
          <div class="text">
              <p>3rd <br>Runner</p>
          <p>#150,000</p>
          </div>
          
      </div>
            </div>

          
        </v-flex>

    </v-layout>
</template>
<style scoped>
.one{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 550px;
    margin-top: 60px;

}

.two{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 380px;
    margin-top: 330px;
}
.three{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
}

.four{
    animation: blink 1s linear infinite;
    width: 20px; 
    position: absolute;
    margin-left: 300px;
}
.silver{
position: absolute;
margin-left: 100px;
    width: 110px;
    margin-top: 80px;
    z-index: 1;
}
.text-content{
    color: #fff;
}
.text-content h3{
    font-size: 43px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.text-content p{
    font-size: 20 px;
    margin-bottom: 20px;
}
.bronze{
    position: absolute;
    margin-left: 440px;
    width: 90px;
    margin-top: 90px;
    z-index: 1;
}

.gold{
    position: absolute;
    margin-left: 235px;
    width: 170px;
    margin-top: 45px;
    z-index: 1;
}

.flex-left{
    background: url('../assets/Images/Purple-Lens-Flare-PNG.png');
    background-size: cover;
}
.bigImg{
    width: 500px;
    margin: 70px;
}
.diff{
    border: 1px solid #903aff;
    color: #fff;
    width: 20vh;
    height: 30vh;
    border-radius: 10px;
    margin: 20px;
    margin-top: 90px;
}

.diff .text{
    font-weight: bold;
    text-align: center;
 padding-top: 6em;
}
.box{
    border: 1px solid #D434FE;
    color: #fff;
    width: 20vh;
    height: 30vh;
    border-radius: 10px;
    margin: 20px;
    margin-top: 90px;
}
.box .text{
    font-weight: bold;
    text-align: center;
 padding-top: 6em;
}

.box-container{
    display: flex;
    margin: 70px;
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
            text-align: center;
        }

        .bigImg{
    width: 300px;
    margin: 5px;
}
.bronze{
    position: absolute;
    margin-left: 50px;
    width: 100px;
}

.gold{
    position: absolute;
    margin-left: -60px;
    margin-bottom: 20px;
    width: 125px;
}

.silver{
position: absolute;
margin-left: -150px;
width: 100px;
}

.box{
    border: 1px solid hsl(288, 99%, 60%);
    color: #fff;
    width: 100px;
    height: 20vh;
    border-radius: 10px;
    margin-top: 90px;
    font-size: 12px;
    padding: 5px;
}
.box-container{
    margin-left: 1em;
}

.diff{
    font-size: 12px;
    padding: 5px;
} 

.diff{ 
    height: 25vh;
    width: 400px;
}
.box .text, .diff .text{
 padding-top: 2em;
}
    }
    
</style>