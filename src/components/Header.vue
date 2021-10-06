<template>
    <div id="nav">
        <router-link class="link" to="/">Início</router-link> 
        <router-link class="link" to="/sobre">Sobre</router-link> 
        <router-link class="link" to="/maisinformacoes"> Mais Informaçoes</router-link>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content:flex-end;
  padding: 30px;
  background-color: aqua;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.link {
  margin-right: 15px;
}
</style>