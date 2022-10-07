<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WelcomeItemVue>
      <!-- <template #foot="{data}">
        <span>{{data.name}}</span>
      </template> -->
      <template v-slot="slotProps">
        {{slotProps.data.name}}
      </template>
      
    </WelcomeItemVue>
  </div>
</template>

<script setup>
import WelcomeItemVue from '../components/WelcomeItem.vue';
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
