<template>
    <v-layout>
        <v-flex>
            <div>
      <div class="text-subtitle-2 mb-2">Default</div>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></v-expansion-panel>
      </v-expansion-panels>
  
      <div class="text-subtitle-2 mt-4 mb-2">Accordion</div>
  
      <v-expansion-panels variant="accordion">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>

        </v-flex>
    </v-layout>
    
  </template>