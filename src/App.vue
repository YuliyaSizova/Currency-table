<template>
  <div id="app">
    <img alt="Vue logo" style="height: 30px" src="./assets/logo.png">
    <CurrencyTable />
  </div>
</template>

<script>
import CurrencyTable from './components/CurrencyTable.vue'

export default {
  name: 'Currency table',
  components: {
    CurrencyTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
