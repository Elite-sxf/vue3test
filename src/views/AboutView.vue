<template>
  <div class="">
    <h1>This is an about page</h1>
    <WelcomeItemVue>
      <!-- <template #foot="{data}">
        <span>{{data.name}}</span>
      </template> -->
      <template v-slot="slotProps">
        {{slotProps.data.name}}
      </template>
      
    </WelcomeItemVue>
    <b></b>
    <h1>{{$store.state.count}}</h1>
    <button @click="addCount">+++</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import WelcomeItemVue from '../components/WelcomeItem.vue';

const store = useStore()
const addCount = ()=> {
  store.commit("increment")
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
