<template>
  <v-layout class="container">
    <v-flex>
        <div>
            <img class='one' src="../assets/Images/star.png" alt="">
            <h3>Rules and <br>
          <span>  Guidelines</span>
            </h3>
            <p> our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world.Thats all we are about!  </p>
            <img class="two" src="../assets/Images/star (1).png" alt="">
        </div>
    </v-flex>

    <v-flex>
        <img class='big-img' src="../assets/Images/7450159 1.png" alt="">
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  justify-content: space-between;
  color: #ffffff;
}

h3{
font-weight: 600;
font-size: 25px;
width: 420px;
margin-left: 70px;
margin-top: 70px;
}

p{
margin-left: 70px;
  color: #ffffff;
  width: 420px;
  line-height: 1.8em;
}

.big-img{
  width: 270px;
 margin: 70px;
}

.one{
  position: absolute;
  margin-left: 280px;
  width: 20px;
  animation: blink 1s linear infinite;
}

.two{
  position: absolute;
  margin-left: 500px;
  margin-bottom: 20px;
  width: 40px;
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