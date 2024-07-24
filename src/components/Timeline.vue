<template>
    <v-containner class="container">
        <div>
        <img class='one' src="../assets/Images/star pu.png" alt="">
        <img class="two" src="../assets/Images/star (1).png" alt="">
        <img class="three" src="../assets/Images/star.png" alt="">
    </div>
 <div class="timeline">
    <h1>Timeline</h1>
    <h4>
        Here isnthe breakdown of the time we anticipate <br/>
        using for the upcoming event
    </h4>
 </div>
 <v-layout class="timeline-outline">
    <div class="text-container">
    <div class="text">
        <h3><span>Hackathon Announcement</span></h3>
        <p>The getlinked hackathon 1.0 is formally announced <br>
            to the general public and teams begin to get ready to register
        </p>
    </div>
    <div class="text">
        <h3><span>November 18, 2023</span></h3>
    </div>
    <div class="text">
        <h3><span>Teams Registeration ends</span></h3>
        <p>Interest participants are no longer allowed to <br> register</p>
    </div>
    <div class="text">
        <h3><span>November 18, 2023</span></h3>
    </div>
    <div class="text">
        <h3><span>Getlinked Hackathon 1.0 Officially Begins </span></h3>
        <p>Accepted teams can now proceed to buld their <br> ground breaking skill driven solutions</p>
    </div>
    <div class="text">
        <h3><span>November 18, 2023</span></h3>
    </div>
 </div>
 
<div class="list-left">
<div class="list-container">
    <div class="list">
<div class="line"> 
</div>
<p>1</p>
 </div>
 <div class="list">
<div class="line"> 
</div>
<p>2</p>
 </div>
 <div class="list">
<div class="line"> 
</div>
<p>3</p>
 </div>
 <div class="list">
<div class="line"> 
</div>
<p>4</p>
 </div>
 <div class="list">
<div class="line"> 
</div>
<p>5</p>
 </div>
 <div class="list">
<div class="line"> 
</div>
<p>6</p>
 </div>
 </div>
 <div class="text-left">
    <div class="text">
        <h3><span>November 18, 2023</span></h3>
    </div>
    <div class="text">
        <h3><span>Team Registration begins</span></h3>
        <p>Interested teams can now show their interest in the <br> getlinked tech hackathon 1.0 2023 by proceeding to register
        </p>
    </div>
    <div class="text">
        <h3><span>November 18, 2023</span></h3>
    </div>
    <div class="text">
        <h3><span>Announcemet of the accepted teams <br> and ideas</span></h3>
         <p>All teams whom idea has been accepted into getlinked tech <br> hackathon 1.0 2023 are formally announced</p>
    </div>

    <div class="text">
        <h3><span>November 18, 2023</span></h3>
    </div>

    <div class="text">
        <h3><span>Demo Day</span></h3>
        <p>Teams get the opportunity to pitch their projects to judges. <br>
            The winner of the hackathon will also be announced on <br>this day
        </p>
    </div>
 </div>
</div>
 </v-layout>
 
    </v-containner>
</template>

<style scoped>
.container{
    color: #fff;
}
.line{
    border-left: 3px solid #D434FE;
    height: 80px;
   margin: 10px;
}
.list p{
    background: #D434FE;
    width: 20px;
    border-radius: 50%;
    text-align: center;
}
.timeline{
    text-align: center;
}
.timeline h1{
    margin-bottom: 20px;
    font-size: 42px;
}
.list-left{
    display: flex;
}
.text-container{
    margin-top: 4em;
    margin-right: 40px;
}
.text-container .text{
    margin-bottom: 5em;
}
.text-container h3,p{
    text-align: end;
}

.text-container h3{
    line-height: 2em;
}
.text-left{
    margin-top: 7.5em;
    margin-left: 40px;
}

.text-left .text{
    margin-bottom: 5em;
}
.text-left p{
    text-align: left;
} 

.timeline-outline{
margin-left: 18em;
margin-top: 30px;
}
.one{
    position: absolute;
    margin-top: 150px;
    margin-left: 400px;
    animation: blink 1s linear infinite;
    width: 20px;
}

.two{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-top: 450px;
    margin-left: 900px;
}
.three{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-top:900px;
    margin-left: 160px;
}


@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }
</style>