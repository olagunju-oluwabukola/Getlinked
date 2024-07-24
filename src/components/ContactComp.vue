
        <template>
           <img class="img1" src="../assets/Images/star pu.png" alt="">
           <img class="img2" src="../assets/Images/star (1).png" alt="">
           
            <v-layout class="form-layout">
              <v-flex class="f-1">
                <img class="one" src="../assets/Images/star pu.png" alt="">
        <img class="two" src="../assets/Images/star (1).png" alt="">
                <h2><span>Get in touch</span></h2>
                <p>Contact Information</p>
                <p>27 Alara Street yaba 10002 Lagos State</p>
                <p class="contact">Call us: +234 567 894 67</p>
                <p class="open">we are open from Monday to Friday 08:00am - 5:00pm</p>
               
                <div class="images">
                  <p style="font-size: 15px;"><span>share on</span></p>
                  <img src="../assets/Images/mdi_instagram.png" alt=""><img src="../assets/Images/Vector (2).png" alt=""><img src="../assets/Images/Vector (3).png" alt="">
                  <img src="../assets/Images/Vector (4).png" alt="">
                </div>
              </v-flex>
              <v-flex class="f-2">
                <img class="one" src="../assets/Images/star pu.png" alt="">
        <img class="two" src="../assets/Images/star (1).png" alt="">
        <div class="intro">
                <h3><span>Questions or need assistance? <br>Let us know about it!</span></h3>
            </div>
                <form
       @submit.prevent="submit" 
       color="#903aff">
         <v-text-field class="input"
           v-model="name.value.value"
           :counter="10"
           :error-messages="name.errorMessage.value"
           label="Name"
         ></v-text-field>
     
         <v-text-field
           v-model="email.value.value"
           :error-messages="email.errorMessage.value"
           label="E-mail"
         ></v-text-field>

         <v-textarea 
         v-model="textarea.value.value"
         :error-messages="textarea.errorMessage.value"
         label="label">

         </v-textarea>

         <v-btn
           class="me-4 btn"
           type="submit"
         >
           submit
         </v-btn>

       </form>

              </v-flex>
            </v-layout>
           

            
            
     </template>
     <script setup>
       import { ref } from 'vue'
       import { useField, useForm } from 'vee-validate'
     
       const { handleSubmit, handleReset } = useForm({
         validationSchema: {
           name (value) {
             if (value?.length >= 2) return true
     
             return 'Name needs to be at least 2 characters.'
           },
           phone (value) {
             if (value?.length > 9 && /[0-9-]+/.test(value)) return true
     
             return 'Phone number needs to be at least 9 digits.'
           },
           email (value) {
             if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
     
             return 'Must be a valid e-mail.'
           },
           textarea (value) {
             if (value) return true
     
             return 'Let us know about it.'
           },
           checkbox (value) {
             if (value === '1') return true
     
             return 'Must be checked.'
           },
         },
       })
       const name = useField('name')
       const textarea = useField('textarea')
       const email = useField('email')
    
       const submit = handleSubmit(values => {
         alert(JSON.stringify(values, null, 2))
       })
     </script>
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

.form-layout{
  justify-content: space-between;
  margin: 70px;
  background: url('../assets/Images/Purple-Lens-Flare-PNG.png');
  background-repeat: no-repeat;
}
.intro h3{
font-size: 30px;
margin-bottom: 50px;

}

.f-1 h2{
font-size: 42px;
margin-bottom: 50px;
}

.f-1 p{
  width: 160px;
  color: #ffffff;
  margin: 10px;
  letter-spacing: 1px;
  line-height: 2rem;
  font-size: 15px;
}

.f-2{
  color: #D434FE;
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
.images img{
margin: 10px;
}


@keyframes blink {
    0%, 100%{ filter: brightness(50%);
    }
    50%{
        filter: brightness(100%);
    }
    }
    </style>