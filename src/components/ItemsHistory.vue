<template>
  <div class="items-history">
    <h2 v-if="contentSelected==='expenseHistory'">Historie výdajů</h2>
    <h2 v-if="contentSelected==='incomeHistory'">Historie příjmů</h2>
    <br>
    <div v-if="loading">
      <p id="item-added">Načítá se...</p>
      <img class="center" src="../assets/loading-icon.gif" alt="loading" width="90"></div>
    <div v-else-if="state==='fail'">
      <p id="item-added">Error 404 Page not found!!!</p>
      <img class="center" src="../assets/reload.jpg" width="50" alt="reload" @click="reloadPage()">
    </div>
    <div class="form" v-else-if="contentSelected==='expenseHistory' && expenses.length===0">
      <p id="item-added">Nebyly nalezeny žádné položky.<br> Výdaje můžeš přidat v sekci
       <button id="button-add" class="button-active" @click="selectContent('addExpense')">Přidej výdaj</button></p>
    </div>
    <div class="form" v-else-if="contentSelected==='incomeHistory' && incomes.length===0">
      <p id="item-added">Nebyly nalezeny žádné položky.<br> Příjmy můžeš přidat v sekci 
      <button id="button-add" class="button-active" @click="selectContent('addIncome')">Přidej příjem</button></p>
    </div>
    <div class="table" v-else>
      <table>
        <tr>
          <th>datum</th>
          <th>kategorie</th>
          <th v-if="contentSelected==='expenseHistory'">výdaj</th>
          <th v-if="contentSelected==='incomeHistory'">příjem</th>
          <th>částka</th>
          <th>smaž</th>
        </tr>
        <tr v-for="(item, index) in filterBy" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.item }}</td>
          <td>{{ item.price }}</td>
          <td><button :class="{'button-active':filterSelected==='all', 'button-passive':filterSelected!=='all'}"
           :disabled="filterSelected!=='all'" v-on:click="deleteItem(item)">X</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  props: ['selectContent', 'contentSelected', 'filterSelected', 'filterBy', 'expenses', 
  'incomes', 'setItems', 'loading', 'state'],
  data () {
    return {
      
    }
  },
  methods: {
    reloadPage() {
      window.location = 'index.html';
    },
    deleteItem: function(index) {
      this.filterBy.splice(this.filterBy.indexOf(index), 1);
      this.setItems();
    },
  }
}
</script>

<style scoped>
.table {
width: 70%;
margin: auto;
}
th:first-of-type {
  border-top-left-radius: 10px;
}
th:last-of-type {
  border-top-right-radius: 10px;
  padding: 7px;
  text-align: center;
}
tr:last-of-type td:first-of-type {
  border-bottom-left-radius: 10px;
}
tr:last-of-type td:last-of-type {
  border-bottom-right-radius: 10px;
}
td:last-of-type {
  padding: 0px;
  text-align: center;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  display: grid;
  grid-template-columns: 20% 23% 27% 17% 13%;
}
th {
  background-color: rgb(3, 15, 20);
  color: rgb(201, 198, 198);
  border: 0px;
  text-align: left;
  padding: 7px;
  padding-left: 30px;
  font-weight: normal;
}
td {
  background-color:rgb(2, 30, 43);
  color: rgb(201, 198, 198);
  border: 0px;
  padding: 7px;
  padding-left: 30px;
}
#item-added {
  text-align: center;
  font-size: 15px;
}
p {
  margin-top: 0px;
  line-height: 50px;
}
#button-add {
  margin-left: 10px;
  height: 50px;
  padding: 0px 10px 0px 10px;
}
.form {
  margin: auto;
  text-align: center;
  background-color: rgb(3, 15, 20);
  color: rgb(201, 198, 198);
  width: 450px;
  min-height: 120px;
  padding: 30px;
  border-radius: 20px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

</style>
