<template>
    <footer>
        <v-layout class="container">
    <v-flex >
        <img class="one" src="../assets/Images/star pu.png" alt="">
        <img class="two" src="../assets/Images/star (1).png" alt="">
        <div class="first">
            <img class="one" src="../assets/Images/star pu.png" alt="">
            <img class="two" src="../assets/Images/star (1).png" alt="">
            <h2>get<span>linked</span></h2>
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia temporibus animi maxime nesciunt illum corrupti incidunt officiis vero mollitia maiores magni quae, quos
                 reprehenderit veritatis voluptate. Expedita velit earum libero?</p>
       <div class="privacy">
        <p>Terms of use <span></span> Privacy policy</p>
       </div>
                </div>
    </v-flex>
    <v-flex class="second">
        
        <reg-button/>
        <img class="one" src="../assets/Images/star pu.png" alt="">
        <img class="two" src="../assets/Images/star (1).png" alt="">
        <h3><span>Useful links</span></h3>
        <li> <RouterLink to="/overview">Overview</RouterLink></li>
        <li><RouterLink to="/timeline">Timeline</RouterLink></li>
       
        <li> <RouterLink to="/faqs">FAQs</RouterLink></li>
        <li>  <RouterLink to="/faqs">Register</RouterLink>
        </li>
        <li><span>Follow us</span> <img src="../assets/Images/mdi_instagram.png" alt=""><img src="../assets/Images/Vector (2).png" alt=""><img src="../assets/Images/Vector (3).png" alt=""><img src="../assets/Images/Vector (4).png" alt=""></li>
    </v-flex>
    <v-flex class="third">
        <h3><span>Contact Us</span></h3>
        
        <p> <img src="../assets/Images/Group.png">+234 567 894 67</p>
<p> <img src="../assets/Images/Vector (1).png">27 Alara Street yaba 10002 Lagos State</p>
    </v-flex>
</v-layout>
    </footer>

</template>

<style scoped>
.one{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 300px;
    margin-top: 120px;
}

.two{
    animation: blink 1s linear infinite;
    width: 20px;
    position: absolute;
    margin-left: 400px;
    margin-top: 70px;
}
.container{
    color: #ffffff;
    margin: 70px;
    line-height: 30px;
}

.first p{
width: 40vw;
}

.second{
    margin-left: 120px;
    list-style: none;
}

.third{
    margin-left: 120px;
}

li a{
    text-decoration: none;
    color: #fff;
}

li img{
    width: 15px;
    margin-left: 5px;
}
.privacy{
    margin-top: 20px;
}
.privacy span{
    color: #ffffff;
    border-left: 3px solid #D434FE;
    margin-right: 10px;
}

/* animation: blink 1s linear infinite; */
   

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

    .first p{
width: 80vw;
}

.one{

    position: absolute;
    margin-left: 100px;
    margin-top: 160px;
}

.two{
    position: absolute;
    margin-left: 100px;
    margin-top: 100px;
}
}
</style>