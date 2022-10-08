<template>
  <main>
    <TheWelcome :list="list" @add="add"/>
  </main>
</template>

<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import { reactive } from "vue";

 const list = reactive([
      {name:'111',value:'111'},
      {name:'222',value:'222'}
    ]) ;
    const time = reactive({
      timerId: "",
      delay: 2000
    })

     const add = () => {
       console.log('1')
      simpleThrottler(addList,time)
    }

    const addList = () => {
      console.log('2')
      const len = list.length+1;
      list.push({name:len,value:len})
    }

    const simpleThrottler = (fn,time,params) => {
      if(time.timerId) {
        alert("请勿重复点击！！！！！！！！！！")
        clearTimeout(time.timerId)
        time.timerId = ""
      }
      time.timerId = setTimeout(()=>{
        fn(params);
        time.timerId = "";
      },time.delay)
    }
</script>

// <script>
// import TheWelcome from '@/components/TheWelcome.vue';
// import { reactive } from "vue";

// export default {
//   components: {TheWelcome},
//   setup() {
//     const list = reactive([
//       {name:'111',value:'111'},
//       {name:'222',value:'222'}
//     ]) ;
//     //  const list = reactive(['3123131']) ;

//     const add = () => {
//       console.log('add');
//       const len = list.length+1;
//       list.push({name:len,value:len})
//     }
//     return {
//       list,
//       add
//     }
//   }
// }
// </script>
