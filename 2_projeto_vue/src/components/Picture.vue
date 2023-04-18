<template>
    <img :src="avatar" :alt="descricao">
    <mudarimg @mudar-imagem="trocarImagem"/>
</template>]
<script>
import Mudarimg from './Mudarimg.vue'
    export default {
  components: { Mudarimg },
        name: 'Picture_Sim',
        data(){
            return{
            avatar: "/img/avatar.png",
            descricao: "Kevin Batist"
            }
        }
    ,
    methods:{
        trocarImagem(){
            if(this.avatar == "/img/avatar.png"){
            this.avatar = "/img/avatar2.png"
            }
            else{
            this.avatar ="/img/avatar.png"
            }
        }
    }}
</script>