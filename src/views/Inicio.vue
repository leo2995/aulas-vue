<template>
  <div class="home">
      <div v-for="time in campeonatoBR" :key="time.index" slot="margin:20px">
        <CardTime :time="time" />
      </div>
  </div>
</template>

<script>
import CardTime from "../components/CardTime.vue"
export default {
  name: 'Inicio',
  components: {
    CardTime
  },
  data(){
    return{
      campeonatoBR:[{
          nome:"Sport Recife",
          local: "Recife",
          titulo: "Time Participante"
          },
          {
          nome:"São Paulo",
          local: "São Paulo",
          titulo: "Time Participante"
          },
          {
          nome:"Santos",
          local: "São Paulo",
          titulo: "Time Participante"
          },
          {
          nome:"Atletico MG",
          local: "Belo Horizonte",
          titulo: "Time Participante"
          },
          {
          nome:"Grêmio",
          local: "Porto Alegre",
          titulo: "Time Participante"
          }
          ,] 
    }
  }
  
}
</script>

<style >
.home{
  display: flex;
  flex-wrap: wrap;
}
</style>
