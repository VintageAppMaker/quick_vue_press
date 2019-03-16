<!-- /.vuepress/components/Test.vue -->

<template>
<div id = "test">
    <h3>v-model 바인딩</h3>
    <input v-model="msg"><br>
    <p>msg => <b>"{{ msg }}"</b></p>
</div>
</template>

<script>
export default {

    data(){ 
        return{
            msg  : "message" 
        }
    }
}    
</script>

<style scoped>
    h3 {
        font-weight: normal;
        color: #27e4e4;  
    }

    input {
        font-weight: normal;
        color: #FF0000;  
    }

    #test{
        padding: 10px;
        background-color: #AA40FF
    }

</style>
