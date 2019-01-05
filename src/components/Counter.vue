<template>
    <div>
      <button @click="increment">+</button>
      <button v-on:click="decrement">-</button>
      <p><span>{{num}}</span></p>
    </div>
</template>

<script>
    export default {
      props:["num"],
      data(){
        return{
          num:0,
        }
      },
      methods:{
        increment(){
          //子组件像父组件传数据
          this.$emit("incre");
        },
        decrement(){
          this.$emit("decre");
        },
      }
    }
</script>

<style scoped>

</style>
