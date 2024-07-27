<template>
    <v-container>
        <div class="text">
            <h3>Partners and Sponsors</h3>
        <p>Getlinked Hackathon 1.0 is honoured to have the following major
            <br> companies as its partners and sponsors.</p>
        </div>
        <img class="one" src="../assets/Images/star pu.png" alt="">
            <img class="two" src="../assets/Images/star (1).png" alt="">
        <div class="logos">
            <div class="partners">
            <img  src="../assets/Images/Liberty company logo white colour.png" alt="">
            <img  src="../assets/Images/Liberty company logo white.png" alt="">
            <img src="../assets/Images/Winwise logo White colour 1.png" alt="">
        </div>
        <div class="partner2">
            <img src="../assets/Images/wisper logo white.png" alt="">
            <img  src="../assets/Images/Paybox.png" alt="">
            <img  src="../assets/Images/Vizual Plus.png" alt="">
            
        </div>
        </div>
            
    </v-container>
</template>

<style scoped>
.text {
    text-align: center;
    color: #fff;
}

.text h3{
    font-size: 42px;
    margin-bottom: 20px;
}

.text p{
    font-size: 20px;
}
.logos{
    text-align: center;
    border: 1px solid #D434FE;
    margin-top: 40px;
}
.logos img{
    width: 90px;
   padding: 40px;
   margin: 1em;
}

.one{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 600px;
    margin-top: 120px;
}

.two{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 600px;
    margin-top: 370px;
}
@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }
    @media only screen and (max-width: 768px){
        .text p{
           width: 450px;
        }

        .logos{
    text-align: center;
    border: 1px solid hsl(288, 99%, 60%);
    margin-top: 40px;
    width: 85vw;
}
.logos img{
    width: 40px;
   padding: 20px;
   margin: 5px;
}
    }

</style>