<template>
  <Header :esta_logado="false" />
  <Primeiro_ComponenteVue />
  <p class="paragrafo-pai">Kevin é lindo msm</p>
  <LifeCyclo />
  <Pessoa />
</template>
<script>
  import LifeCyclo from './components/LifeCyclo.vue'
  import Primeiro_ComponenteVue from './components/Primeiro_Componente.vue'
  import Pessoa from './components/Pessoa.vue'
  import Header from './components/Header.vue'

  export default{
    name: "App",
    components: {
      Header,
      Primeiro_ComponenteVue,
      LifeCyclo,
      Pessoa
    }
  }
</script>
<style>
  body{
    background-color: black;
    color: #fff;
  }
  a{
    color: green;
  }
</style>
