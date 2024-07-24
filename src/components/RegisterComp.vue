<template>
  <v-layout>
    <v-flex>
        <img class="img1" src="../assets/Images/star pu.png" alt="">
           <img class="img2" src="../assets/Images/star (1).png" alt="">
        <img src="../assets/Images/man-wearing-smart-glasses-touching-virtual-screen 1.png" alt="">
    </v-flex>
    <v-flex>
        <div>
            <h3><span>Register</span></h3>
            <p>Be a part of this movement</p>
            <h2>CREATE YOUR ACCOUNT</h2>
        </div>
        <img class="one" src="../assets/Images/star pu.png" alt="">
        <img class="two" src="../assets/Images/star (1).png" alt="">
        <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Regular"
              model-value="John Doe"
              disabled
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Regular"
              model-value="John Doe"
              readonly
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Solo"
              model-value="John Doe"
              variant="solo"
              disabled
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Solo"
              model-value="John Doe"
              variant="solo"
              readonly
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Outlined"
              model-value="John Doe"
              variant="outlined"
              disabled
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Outlined"
              model-value="John Doe"
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="underlined"
              model-value="John Doe"
              variant="underlined"
              disabled
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="underlined"
              model-value="John Doe"
              variant="underlined"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <p style="font-style: italic;"><span>please review your registration before submitting</span></p>
    </v-form>
    </v-flex>
  </v-layout>
  </template> 

  <style scoped>
 .btn{
        margin: 20px;
        background: linear-gradient(#903aff, #D434FE);
  height: 5vh;
  width: 7vw;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #ffffff;
    }
    .one{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 300px;
    margin-top: 300px;
}

.two{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 800px;
    margin-top: 70px;
}

.img1{
  animation: blink 1s linear infinite;
  width: 20px;
  margin-top: 20px;
  
}

.img2{
  animation: blink 1s linear infinite;
  width: 20px;
    position: absolute;
    margin-left: 400px;
    margin-top: 70px;
}

@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }
    </style>
