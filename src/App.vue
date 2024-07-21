
<template>
  <v-card class="">
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
          <v-app-bar-nav-icon  variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'right' : undefined"
        temporary
      >
        <v-list
          :items="items"
          v-for="item in items" :key="item.route" 
         
          @click="$router.push({path: item.route})"
        >      <v-list-tile-title> {{ item.text }}</v-list-tile-title></v-list>
      </v-navigation-drawer>
<hr>
      <v-main class="v-main">
        <v-card-text>
          <router-view>
            <Heading/>
            <hr>
            <Introduction/>
           <hr>
           <Rules/>
           <hr>
           <criteria/>
           <hr>
          </router-view>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>

import Heading from './components/Heading.vue'
import RegButton from './components/RegButton.vue';
import Introduction from './components/Introduction.vue';
import Rules from './components/Rules.vue'
import Criteria from './components/Criteria.vue'

  export default {
    components: {Heading, RegButton,Introduction, Rules, Criteria},
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
      

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

hr{
border: 1px solid #D434FE;
font-size: 3px;

}


</style>
