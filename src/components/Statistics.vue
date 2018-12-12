<template>
  <div class="statistics">
    <div v-if="this.expenses.length===0 || this.incomes.length===0">
      <h2>Statistiky</h2>
      <br>
      <p class="form" id="item-added">Pro zobrazení statistik zadej minimálně jeden výdaj a jeden příjem!
        <br>Výdaje můžeš přidat v sekci
       <button class="button-active" @click="selectContent('addExpense')">Přidej výdaj</button>
        <br>Příjmy můžeš přidat v sekci 
      <button class="button-active" @click="selectContent('addIncome')">Přidej příjem</button>
       </p>
    </div>
    <div v-else-if="this.resultAllCategories.length === 0">
      <h2 v-if="statisticsSelected==='expenses'">Souhrn výdajů</h2>
      <h2 v-if="statisticsSelected==='incomes'">Souhrn příjmů</h2>
      <br>
      <p id="bold">Nebyla nalezena žádná položka</p>
    </div>
    <div v-else>
      <h2 v-if="statisticsSelected==='expenses'">Souhrn výdajů</h2>
      <h2 v-if="statisticsSelected==='incomes'">Souhrn příjmů</h2>
      <br>
      <div class="table">
        <div>
          <p class="th table1" id="top-left">kategorie</p>
          <p class="td table1" v-for="(item, index) in AllCategories" :key="index">
            {{ item }}
          </p>
          <p class="th table1" id="bottom-left">celkem</p>
        </div>
        <div>
          <p class="th table2" id="top-right" v-if="statisticsSelected==='expenses'">výdaje za kategorii</p>
          <p class="th table2" id="top-right" v-if="statisticsSelected==='incomes'">příjmy za kategorii</p>
          <p class="td table2" v-for="(item, index) in PriceByCategory" :key="index">
            {{ item }}
          </p>
          <p class="th table2" id="bottom-right">{{ PriceByAllCategories }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['selectContent', 'filterBy', 'expenses',
   'incomes', 'statisticsSelected', 'resultAllCategories'],
  data () {
    return {
    }
  },
  computed: {
    AllCategories: function() {
      return this.resultAllCategories = this.filterBy.map(x=> x.category)
        .filter((x, i, arr) => i === arr.indexOf(x))
        .sort();
    },
    PriceByCategory: function() {
      return this.filterBy.map(x=> x.category)
        .filter((x, i, arr) => i === arr.indexOf(x))
        .sort()
        .map(category => this.filterBy
        .filter(x => x.category === category)
        .map(x => Number(x.price))
        .reduce((acc, cur) => (acc + cur)));
    },
    PriceByAllCategories: function() {
      return this.filterBy.map(x => Number(x.price))
        .reduce((acc, cur) => acc + cur);
    }
  }
}
</script>

<style scoped>

.table {
width: 40%;
margin: auto;
display: grid;
grid-template-columns: 1fr 1fr;
}
.th {
  background-color: rgb(3, 15, 20);
  color: rgb(201, 198, 198);
  text-align: left;
  padding: 7px;
  font-weight: normal;
  margin: 0px;
}
.td {
  background-color:rgb(2, 30, 43);
  color: rgb(201, 198, 198);
  padding: 7px;
  margin: 0px;
}
.table1 {
  padding-left: 40%;
}
.table2 {
  padding-left: 30%;
}
#top-left {
  border-top-left-radius: 15px;
}
#top-right {
  border-top-right-radius: 15px;
  padding-left: 20%;
}
#bottom-left {
  border-bottom-left-radius: 15px;
}
#bottom-right {
  border-bottom-right-radius: 15px;
}
#item-added {
  text-align: center;
  line-height: 55px;
  font-size: 15px;
}
button {
  margin-left: 10px;
  height: 50px;
  padding: 0px 10px 0px 10px;
}
.form {
margin: auto;
text-align: center;
background-color: rgb(3, 15, 20);
color: rgb(201, 198, 198);
width: 560px;
min-height: 180px;
padding: 30px;
padding-top: 30px;
border-radius: 20px;
}
#bold {
  text-align: center;
  font-weight: bold;
  font-size: 15px;
}

</style>
