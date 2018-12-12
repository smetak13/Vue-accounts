<template>
  <div class="aside">
    <div class="aside-menu" id="aside-menu-1">
      <div class="aside2">
        <p id="block">Filtr podle kategorie</p>
        <input class="aside-input" @focus="changeFilter('category')" v-model="filterData.category" type="text" placeholder="zadej kategorii">
      </div>
      <div class="aside3">
        <button :class="{'button-active':filterSelected==='category', 'button-passive':filterSelected!=='category'}"
        :disabled="filterSelected!=='category'" @click="changeFilter('all')">reset</button>
      </div>
    </div>
    <div class="aside-menu" id="aside-menu-inline">
      <div class="aside1">
        <p class="inline">Filtr podle data</p>
      </div>
      <div class="aside2">
        <input class="aside-input" id="input-date" @focus="changeFilter('date')" v-model="filterData.dateFrom" type="date" placeholder="od data"><br>
        <input class="aside-input" id="input-date" @focus="changeFilter('date')" v-model="filterData.dateTo" type="date" placeholder="do data">
      </div>
      <div class="aside3">
        <button :class="{'button-active':filterSelected==='date', 'button-passive':filterSelected!=='date'}"
        :disabled="filterSelected!=='date'" @click="changeFilter('all')">reset</button>
      </div>
    </div>
    <div class="aside-menu" id="aside-menu-inline">
      <div class="aside1">
        <p class="inline">Filtr podle částky</p>
      </div>
      <div class="aside2">
        <input class="aside-input" @focus="changeFilter('price')" v-model="filterData.priceFrom" type="number" placeholder="minimální částka"><br>
        <input class="aside-input" @focus="changeFilter('price')" v-model="filterData.priceTo" type="number" placeholder="maximální částka">
      </div>
      <div class="aside3">
        <button :class="{'button-active':filterSelected==='price', 'button-passive':filterSelected!=='price'}"
        :disabled="filterSelected!=='price'" @click="changeFilter('all')">reset</button>
      </div>
    </div>
    <div class="aside-menu" id="aside-menu-1">
      <div class="aside2">
        <p v-if="contentSelected==='expenseHistory'" id="block">Najdi výdaj</p>
        <p v-if="contentSelected==='incomeHistory'" id="block">Najdi příjem</p>
        <input v-if="contentSelected==='expenseHistory'" class="aside-input" @focus="changeFilter('item')" v-model="filterData.item" type="text" placeholder="zadej výdaj">
        <input v-if="contentSelected==='incomeHistory'" class="aside-input" @focus="changeFilter('item')" v-model="filterData.item" type="text" placeholder="zadej příjem">
      </div>
      <div class="aside3">
        <button :class="{'button-active':filterSelected==='item',
          'button-passive':filterSelected!=='item'}"
          :disabled="filterSelected!=='item'" @click="changeFilter('all')">reset</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: ['contentSelected', 'filterSelected', 'filterData',
   'changeFilter'],
  data () {
    return {
        
    }
  }
}
</script>

<style scoped>
  .aside {
    display: grid;
    grid-template-columns: 2fr 3fr 3fr 2fr;
    min-height: 80px;
    height: auto;
    text-align: center;
    padding: 10px;
    background-color: rgb(3, 15, 20);
    color: rgb(201, 198, 198);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .aside-menu {
    margin:auto;
    text-align: left;
  }
  #aside-menu-1 {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  #aside-menu-inline {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .aside1 {
    text-align: right;
    padding-right: 20px;
  }
  .aside2 {
    text-align: left;
  }
  .aside3 {
    margin-top: auto;
    margin-bottom: auto;
    text-align: left;
    padding-left: 20px;
  }
  #input-date {
    padding: 3px;
    padding-left: 5px;
    margin-bottom: 5px;
  }  
  #block {
    padding: 0px;
    margin-bottom: 10px;
    margin-top: 2px;
    line-height: 15px;
  }
  .inline {
    display: inline;
  }
  @media (max-width: 1200px) {
    .aside {
      grid-template-columns: 2fr 3fr 3fr;
    }
  }
  @media (max-width: 1050px) {
    .aside {
      grid-template-columns: 2fr 3fr;
    }
  }
  @media (max-width: 600px) {
    .aside {
      grid-template-columns: 1fr;
    }
  }
</style>