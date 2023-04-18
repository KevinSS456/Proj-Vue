<template>
    <h1>Meu Nome é: {{ nome }}</h1>
</template>
<script>
    export default{
        name: "LifeCycle",
        data(){
            return {
                nome: "Ainda não sei"
            }
        },
        created() {
            setTimeout(()=>{
                this.nome = "Kevin"
            },1000);
        },
        mounted() {
            setTimeout(()=>{
                this.nome = "Matheus"
            },2000);
        }
    }
</script>
