<template>
  <button>
    <router-link to="/register">Register</router-link>
  </button>
  

</template>

<script>
export default {

}
</script>

<style scoped>

button{
  background: linear-gradient(#903aff, #D434FE);
  height: 7vh;
  width: 10vw;
  outline: none;
  border: none;
  border-radius: 5px;
}

a{ color: #ffffff;
  text-decoration: none;
  text-transform: capitalize;
  background-color: linear-gradient(#903aff, #D434FE);
}
 /* mediaQueries for phone */
@media only screen and (max-width: 768px){
  button{
    height: 6.5vh;
  width: 20vw;
  }
}
</style>