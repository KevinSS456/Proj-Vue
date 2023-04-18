<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Não estou Trabalhando</p>
        <p>Utilizo as Segunites linguagens para backend:</p>
        <ul>
            <li  v-for="(tec,index) in backend_tec" :key="index">{{  tec }}</li>
        </ul>
        <p>Utilizo para front</p>
        <ul>
            <li v-for="tec in front_tec" :key="tec.id">
            {{ tec.language }}
            </li>
        </ul>
        <div>
            <button @click="showEmail">{{ texto_botao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portifolio <a v-bind:href="Meu_link" target="_blank">basta clicar aqui</a></p>
        <Picture></Picture>
    </div>
</template>

<script>
import Picture from './Picture.vue';

export default {
    name: 'Info_sim',
    props:{
        email: String,
        esta_trabalhando: Boolean
    },
    data(){
        return{
            mostrar_email: false,
            Meu_link: 'https://google.com',
            texto_botao: 'Mostrar e-mail',
            backend_tec: ['JavaScript','Pyhon','PHP'],
            front_tec: [
                {id:1, language: 'HTML'},
                {id:2, language: 'CSS'},
                {id:3, language: 'Vue'}
            ]
        }
    },
    components:{
        Picture
    },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.texto_botao = "Mostrar email"
            }
            else{
                this.texto_botao = "Ocultar email"
            }
        }
    }
}
</script>
<style>
.paragrafo-pai{
    color: red;
}
</style>