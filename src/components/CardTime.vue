<template>
  <div class="card-time">
      <h3>{{ time.titulo }}</h3>
      <img alt="Vue logo" class="image-brasao" :src="timeFoto">
      <div class="descricao"> 
        <span> {{ time.nome }}</span>
        <span>Local: {{ time.local }} </span>
        <span v-if="taRebaixado">Situação: Rebaixado</span>
        <span v-else>Situação: Ainda está vivo no campeonato</span>
        <div class="btn-group">
          <b-button v-show="!rebaixado" variant="danger" class="btn-style" @click="rebaixar">Rebaixar Time</b-button>
          <b-button v-show="rebaixado" variant="success" class="btn-style" @click="subirTime">Subir time</b-button>
        </div>
      </div>
    </div>
</template>

<script>
import logo from '@/assets/logoCampeonato.png'
export default {
    name:"CardTime",
    data(){
        return {
            timeFoto:logo,
            rebaixado: false
        }
    },
    computed:{ 
        taRebaixado(){
            if(this.rebaixado){
                return true
            }
            return false
        }
    },
    methods:{
      rebaixar(){
        this.rebaixado = true
      },
      subirTime(){
        this.rebaixado = false
      }
    },
    props:{
      time: Object
    }
}
</script>

<style scoped>
.image-brasao{
    widows: 80px;
    height: 80px;
    margin:30px
  }

.descricao{
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
}

.card-time{
  background: cornsilk;
  width: 400px;
  margin: 16px;
}
.btn-group{
  display: flex;
  flex-direction: column;
}

</style>