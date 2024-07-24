<template>
    <v-layout>
        <v-flex class='faq'>
            <img class='one' src="../assets/Images/star pu.png" alt="">
            <div class="text">
                <h2>Frequently Asked <br> <Span>Questions</Span></h2>
                <p>We got answers to the questions that you might <br>
                    want to ask about<span style="font-weight: 700; color: #fff;"> getlinked Hackathon 1.0</span></p>
            </div>
            <div>
                <v-expansion-panels>
      <v-expansion-panel class="panel">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus" class="pannel" >
            Can I work on a project I started before the hackathon?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          yes.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel class="panel">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus" class="pannel">
            What happens if I need help during the hackathon?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Make it known.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel class="panel">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus" class="pannel">
            What happens if I don't have an idea for a project?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Do well to make some reasearch, you'll find one.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel class="panel">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus" class="pannel">
            Can I join a team or do I have to come with one?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
         Either ways.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel class="panel">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus" class="pannel">
            What happens after the hackathon ends?
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          You'll get to know.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

            </div>
        </v-flex>

        <v-flex class="imgs">
            <div>
                <img class="s2" src="../assets/Images/star pu.png" alt="">
                <img class='q1' src="../assets/Images/_.png" alt="">
                <img class="s1" src="../assets/Images/star pu.png" alt="">
                <img class="q2" src="../assets/Images/_.png" alt="">
                <img class="q3" src="../assets/Images/_.png" alt="">
                <img class='bigImg' src="../assets/Images/cwok_casual_21 1.png" alt="">
                <img class="s3" src="../assets/Images/star.png" alt="">
                
            </div>
        </v-flex>
    </v-layout>
    
      
</template>

<style scoped>
.faq{
    margin: 70px;
}
.panel{
    border: none;
    background: transparent;
    color: #fff;
    border-bottom: 1px solid #D434FE;
    margin-bottom: 20px;  
    font-size: 15px; 
}

.pannel{
    border: none;
    background: transparent;
    color: #fff;
    font-size: 15px; 
    
}

.panel:focus{
    background: transparent;
}
.faq h2{
font-size: 32px;
font-weight: 700;
line-height: 42.56px;
text-align: left;
margin-bottom: 1em;
}

.faq .text{
    color: #fff;
    margin-bottom: 2em;
}

.faq .text p{
    font-size: 15px;
}

.faq .one{
    width: 20px;
    animation: blink 1s linear infinite;
}
.imgs{
    margin: 70px;
}
.imgs .bigImg{
width: 470px;
}
.q1{
    position: absolute;
    margin-left: 140px;
    padding-bottom: 2.5em;
    width: 20px;
}
.q2{
    position: absolute;
    width: 20px;
    margin-left: 280px;
    margin-bottom: 10px;
}
.q3{
    position: absolute;
    width: 30px;
    width: 20px;
    margin-top: 3em;
    margin-left: 2em;
    
    
}

.s1{
    position: absolute;
    width: 20px;
    margin-top: 200px;
    animation: blink 1s linear infinite;
}

.s2{
    position: absolute;
    width: 20px;
    margin-left: 220px;
    margin-top: 70px;
    animation: blink 1s linear infinite;
}
.s3{
    position: absolute;
    margin-top: 420px;
    width: 20px;
    animation: blink 1s linear infinite;
}
@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }

</style>