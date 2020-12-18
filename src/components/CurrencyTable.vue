<template>
  <div>
  <h3>Валюта</h3>
  <grid :cols="columns"
        :server="server"
        :width="width"
        :sort="sort"
        :pagination="pagination"
        :styles="styles"
  ></grid>
  </div>
</template>

<script>
import Grid from 'gridjs-vue'

export default {
  name: 'Валюта',
  components: {
    Grid
  },
  data() {
    return {
      columns: ['Название валюты', 'Цена', 'Количество'],
      server: {
        url: 'http://phisix-api3.appspot.com/stocks.json',
        then: data => data.stock.map(currency => [currency.name, currency.volume, currency.price?.amount.toFixed(2)])
      },
      width: '500px',
      sort: true,
      pagination: { limit: 5 },
      styles: { td: {height: '50px'}},

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0;
}
</style>
