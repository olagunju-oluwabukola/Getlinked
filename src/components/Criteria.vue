<template>
    <v-layout class="container">
        <v-flex>
            <img class="two" src="../assets/Images/star.png">
            <img class ='three' src="../assets/Images/star (1).png" >
            <img class="one" src="../assets/Images/star pu.png" >
            <img class="eclipse" src="../assets/Images/Ellipse 2.png" alt="">
            <img class="bigImg" src="../assets/Images/8046554 1.png" >
        </v-flex>

        <v-flex class="text">
            <h3>
                Judging Criteria <br>
                <span>key attribute</span>
            </h3>
            <div class="list">
                <p>
                <span>Inovation and Creativity:</span>
                Evaluate the uniqueness and creativity of the solution. Consider whether it adresses a real world problem in a novel way or introduces innovative features. 
            </p>
            <p> <span>Functionalty:</span>
                Asseses how well the solution works. Does it perform it intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
            </p>
            <p> <span>Impact and Relevance</span>
            Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it to the target audience? Judges would assess the potential social,economic, or environmental benefit.
                    </p>
            <p><span>Technical Complexity:</span>
            Evaluate the technical sophistication of the solution. Judges would consider the copmlexity of the code, the use of advanced advanced technologies and algorithms, and the scalability of the solutiom.
            </p> 
            <p> <span>Adherence to Hackathon Rules:</span>
                Judges will ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and other competition-specific requirements.
             </p>
            </div>
            
             <button>Read More</button>
        </v-flex>
    </v-layout>
</template>

<style scoped>
.container{
    justify-content: space-between;
    margin-top: 70px;
    color: #ffffff;
}

.bigImg{
    width: 600px;
    margin: 70px;
}
.one{
    position: absolute;
    margin-bottom: 70px;
    margin-left: 90px;
    width: 20px;
    animation: blink 1s linear infinite;
}

.two{
    position: absolute;
    margin-top: 320px;
    margin-left: 400px;
    width: 20px;
    animation: blink 1s linear infinite;
}

.three{
    position: absolute;
    margin-top: 600px;
    margin-left: 750px;
    width: 20px;
    animation: blink 1s linear infinite;
}

.eclipse{
    position: absolute;
    width: 90px;
    margin-top: 60px;
    margin-left: 170px;
    z-index: -1;
}
button{
  background: linear-gradient(#903aff, #D434FE);
  height: 5vh;
  width: 9vw;
  outline: none;
  border: none;
  border-radius: 5px;
}

.text{
    margin-bottom: 2em;
    margin: 70px;
}

.list{
    width: 500px;
    line-height: 2em;
    margin-bottom: 1em;
}

h3{
    font-weight: 600;
font-size: 25px;
margin-bottom: 20px;
}

@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }
</style>