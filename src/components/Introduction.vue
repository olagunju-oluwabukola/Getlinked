<template>
  <v-layout class="container">
    <v-flex>
      <img class="purple-star" src="../assets/Images/star pu.png" alt="">
        <img class="bigIdea" src="../assets/Images/The big idea.png" alt="">
        <img class="arrow" src="../assets/Images/arrow.png" alt="">
    </v-flex>
    <v-flex>
      <div class="text">
        <img src="../assets/Images/star pu.png" alt="">
        <p class="header">Introduction to getlinked <br> 
          <span>tech Hackathon 1.0</span></p>
          <p> our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world.Thats all we are about!  </p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.bigIdea{
  width: 270px;
 margin: 70px;
}

.purple-star{
  position: absolute;
  margin-top: 180px;
  width: 20px;
  animation: blink 1s linear infinite;

}

.arrow{
  position: absolute;
  margin-top: 280px;
  margin-right:100px;
  width: 40px;
  width: 35px;
  animation: blink 1s linear infinite;

}
.container{
  justify-content: space-between;
}
.text{
  margin: 70px;
  color: #ffffff;
  width: 420px;
  line-height: 1.8em;
}

.header{
font-weight: 600;
font-size: 25px;
margin-bottom: 20px;
}

.text img{
  position: absolute;
  margin-left: 400px;
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