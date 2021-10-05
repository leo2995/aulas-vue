<template>
  <div>
    <h1>{{ titulo }}</h1>
    <span>{{ subTitle }}</span>
    <Card />
    <b-button variant="success" @click="exibirMensagem" >Click Aqui</b-button>
  </div>
</template>

<script>
import Card from "../components/Card.vue"

export default {
    name:"Informacoes",
    data() {
      return {
        titulo: "Mais Informações",
        subTitle: "Leia mais"
      }
    },
    components:{ Card },
    methods:{
      exibirMensagem(){
        window.alert("Foi clicado")
      }
    }
}
</script>

<style>

</style>