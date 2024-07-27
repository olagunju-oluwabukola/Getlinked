
<template>
  <v-card>
    <v-layout>
      <v-app-bar
        color="#150E28"
        prominent
        flat
      >
        <v-toolbar-title class="title">Get<span>linked</span></v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.lgAndUp"> 
          <v-flex>
            <nav class="nav-menu">
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/timeline">Timeline</RouterLink>
        <RouterLink to="/overview">Overview</RouterLink>
        <RouterLink to="/faqs">FAQs</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <reg-button/>
      </nav>
          </v-flex>
        </template>

        <template v-if="$vuetify.display.mdAndDown">
          <!-- <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn> -->
          <v-app-bar-nav-icon  variant="text"   color="#150E28" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'right' : undefined"
        temporary
        color="#150E28"
        class="li"
      >
        <v-list class="list"
          :items="items"
          v-for="item in items" :key="item.route" 
         
          @click="$router.push({path: item.route})"
          color="#150E28"
        >      <v-list-tile-title> {{ item.text }}</v-list-tile-title></v-list>
      </v-navigation-drawer>
<hr>
      <v-main class="v-main">
        <v-card-text>
          <router-view/>
          <hr>
          <footer-comp/>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import RegButton from './components/RegButton.vue';
import FooterComp from './components/FooterComp.vue';
  export default {
  components: { FooterComp, RegButton},
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
         
          text: 'Timeline',
          route: '/timeline'
          
        },
        {
          text: 'Overview',
          route: '/overview'
        },
        {
          text: 'FAQs',
          route: '/faqs'
        },
        {
          text: 'Contact',
          route: '/contact'
        },
        {
          text: 'Register',
          route: '/register'
        },
        
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
      

<style>
nav a {
  display: inline-block;
  padding: 0 1rem;

}

hr{
border: 1px solid #D434FE;
font-size: 3px;
}

.list{
  margin-left: 20px;
  background-color:  #150E28 ;
  color: #ffffff;
  height: 20px;
}
</style>
