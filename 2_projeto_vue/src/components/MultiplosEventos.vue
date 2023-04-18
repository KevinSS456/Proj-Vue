<template>
    <div>
        <button @click="primeiro(txt ,$event), segundo(txt2,$event), terceiro($event)">Ativar multiplos eventos</button>
        <p>{{ mult }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
        mult: "",
        txt: "Primeiro evento",
        txt2: "Segundo evento"
        }
    },
    methods:{
        primeiro(txt,e){
            this.mult = txt
            e.$event
        },
        segundo(txt,e){
            setTimeout(()=> this.mult = txt, 1000)
            e.$event
        },
        terceiro(e){
            setTimeout(()=> this.mult = "", 3500)
            e.$event
        }
    }
}
</script>
<style scoped>

    div{
        margin: 100px;
    }
</style>