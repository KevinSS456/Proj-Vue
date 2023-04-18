<template>
    <div>
    <h1>Olá Vue</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    </div>
    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />

</template>

<script>
 import MultiplosEventos from "./MultiplosEventos.vue"
 import Reutilizacao from "./Reutilizacao.vue";    
 
 export default{    
        name : "App",
        data(){
            return {
                nome: "Kevin",
                profissao: "Desempregado"
            }
        },
        components:{
            MultiplosEventos,
            Reutilizacao
        }
    }
</script>