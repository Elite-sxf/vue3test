<template>
<div>
    <div>{{msg}}</div>
    <button @click="addList">+++</button>
    <ul>
        <li v-for="(item,key) in list" :key="key">
            <span>姓名{{item.name}}</span>
            <span>年纪{{item.value}}</span>
        </li>
    </ul>
</div>
</template>

<script setup>
import {defineProps,defineEmits} from "vue";
// console.log($attrs);
const props = defineProps({
    list: {
        type: Array,
        default: ()=> []
    }
})
const msg = "setupttt";
const emits = defineEmits(['add'])
const addList = () => {
    emits('add')
}
// export default {

    // props: ['list'],
    // setup (props) {
        
    //     const msg = "setupttt";
    //     const emits = defineEmits(['add'])
    //     const addList = () => {
    //         console.log('but');
            
    //         emits('add')
    //     }
    //     return {
    //         msg,
    //         addList,
    //     }
        
    // }
    // data() {
    //     return {
    //         text: 'smsmsmsmssmsm'
    //     }
    // }
// }
</script>

<style  scoped>
    ul,li {
        list-style: none
    }
</style>

