<template>
    <div>
        <h2>Esta é a descriação da pessoa: {{ nome }}</h2>
        <Info :email='email' :esta_trabalhando=false />
        <Form />
    </div>
</template>

<script>
    import Info from './Info.vue'
    import Form from './Form.vue';
    
    export default {
        name: 'Pessoa_Sim',
        data() {
            return{
                nome: 'Kevin',
                email: "kevin@gmail.com"
            }
            
        },
        components:{
            Info,
            Form
        }
    }
</script>