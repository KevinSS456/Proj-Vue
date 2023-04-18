<template>
    <div>
        <button @click="ativar">Click aqui!</button>
        <span v-show="ativou">Ativado</span>
    </div>
</template>
<script>

export default {
    name: 'Reutilizacao_Sim',
    data() {
        return{
            ativou: false
        }
    },
    methods:{
        ativar(){
            this.ativou = !this.ativou
        }
    }
}
</script>
<style>
 span{
    margin-left: 50px;
 }
</style>