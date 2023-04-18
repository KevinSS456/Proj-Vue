<template>
    <h2>Meu Formulario:</h2>
    <form action="" @submit="enviarFormulario($event)">
        <div>
            <input type="text" v-model="name">
        </div>
        <div>
            <input type="text" v-model="email">
        </div>
        
        <div>
            <Submit />
        </div>
        <p>Conteudo</p>
        <p>Conteudo</p>
        <p>Conteudo</p>
    </form>
</template>
<script>

import Submit from './form/Submit.vue';
  
export default {
        name: 'Form_Sim',
        data(){
            return{
                name: '',
                email: ''
            }
        },
        components: {
            
            Submit
        },
        methods:{
            enviarFormulario(e){

                e.preventDefault();
                
                const nome = this.name;
                const mail = this.email;

                console.log("O nome é "+ nome);
                console.log("O email é "+ mail);
            

                // Ajax


                // Inserir no banco os dados
            }
        }
    }
</script>
<style scoped>
    p{
        margin: 50px;
    }
</style>