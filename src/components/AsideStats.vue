<template>
  <div class="aside statistics">
    <div class="aside-menu">
      <div>
        <p id="block">Zobraz souhrn:</p>
        <button :class="{'button-active-stat':statisticsSelected==='expenses', 'button-passive-stat':statisticsSelected==='incomes'}"
         @click="changeStatistics('expenses')">výdajů</button>
        <button :class="{'button-active-stat':statisticsSelected==='incomes', 'button-passive-stat':statisticsSelected==='expenses'}"
         @click="changeStatistics('incomes')">příjmů</button>
      </div>
    </div>
    <div class="aside-menu" id="aside-menu-inline">
      <div class="aside1">
        <p class="inline">Souhrn podle data</p>
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
    <div class="aside-menu">
      <div>
        <p id="block">Zobraz jednotlivé položky:</p>
        <button v-if="statisticsSelected==='expenses'" class="button-active" @click="selectContent('expenseHistory')">zobraz výdaje</button>
        <button v-if="statisticsSelected==='incomes'" class="button-active" @click="selectContent('incomeHistory')">zobraz příjmy</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: ['selectContent', 'filterSelected', 'filterData', 
   'changeFilter', 'statisticsSelected', 'changeStatistics'],
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
    grid-row: 1/3;
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
  .button-active-stat {
    background-color: rgb(3, 47, 68);
  }
  .button-active-stat:hover {
    cursor: auto;
  }
  .button-passive-stat:hover {
    cursor: pointer;
  }
  .statistics {
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
  }
</style>