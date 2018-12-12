<template>
  <div class="items-add"> 
    <h2 v-if="contentSelected==='addExpense'">Přidej výdaj</h2>
    <h2 v-if="contentSelected==='addIncome'">Přidej příjem</h2>
    <br>
    <div class="form" v-if="contentSelected==='addExpense'">
      <p id="item-added" v-if="contentSelected==='addExpense'">{{ message }}</p>
      <div class="form-row"><label for="date">datum: </label><input v-model="expense.date" type="date"></div>
      <div class="form-row"><label for="category">kategorie: </label><input v-model="expense.category" type="text"></div>
      <div class="form-row"><label for="expense">výdaj: </label><input v-model="expense.item" type="text"></div>
      <div class="form-row"><label for="price">cena: </label><input v-model="expense.price" v-on:keydown="activateFormButton()" v-on:keydown.enter="addItem()" type="number"></div>
      <div id="form-button"><button :disabled="!formButtonActive" :class="{'button-active':formButtonActive, 'button-passive':!formButtonActive}" v-on:click="addItem()">přidej</button></div>
    </div>
    <div class="form" v-if="contentSelected==='addIncome'">
      <p id="item-added" v-if="contentSelected==='addIncome'">{{ message }}</p>
      <div class="form-row"><label for="date">datum: </label><input v-model="income.date" type="date"></div>
      <div class="form-row"><label for="category">kategorie: </label><input v-model="income.category" type="text"></div>
      <div class="form-row"><label for="income">příjem: </label><input v-model="income.item" type="text"></div>
      <div class="form-row"><label for="price">cena: </label><input v-model="income.price" v-on:keydown="activateFormButton()" v-on:keydown.enter="addItem()" type="number"></div>
      <div id="form-button"><button :disabled="!formButtonActive" :class="{'button-active':formButtonActive, 'button-passive':!formButtonActive}" v-on:click="addItem()">přidej</button></div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['contentSelected', 'expenses', 'incomes', 'setItems', 'loading', 'state'],
  data () {
    return {
      expense: {},
      income: {},
      formButtonActive: false,
    }
  },
  methods: {
    addItem: function() {
      if (this.contentSelected==='addExpense') {
        this.expenses.push(this.expense);
        this.expense = {};
      }
      else {
        this.incomes.push(this.income);;
        this.income = {};
      }
      this.setItems();
      
      this.formButtonActive = false;
      
    },
    activateFormButton: function() {
      this.formButtonActive = true;
    }
  },
  computed: {
    message() {
      if (this.loading) {
        return 'Ukládám...'
      }
      else if (this.state === 'success') {
        return this.contentSelected === 'addExpense' ? 'výdaj uložen' : 'příjem uložen';
      }
      else {
        return this.contentSelected === 'addExpense' ? 'zadej výdaj' : 'zadej příjem';
      }
    }
  }
}
</script>

<style scoped>

 .items-add {
   text-align: center;
 }

 .form {
  margin: auto;
  text-align: center;
  background-color: rgb(3, 15, 20);
  color: rgb(201, 198, 198);
  width: 50%;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 40px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  border-radius: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 2fr 7fr;
  grid-auto-rows: minmax(30px, auto);
  grid-gap: 50px;
  text-align: right;
  padding-right: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#form-button {
  margin-left: auto;
  padding-right: 90px;
  margin-top: 10px;
}

button {
  width: 80px;
  height: 35px;
  font-size: 15px;
}

input {
  margin-right: 10px;
  border-radius: 5px;
  padding-left: 2px;
}

#item-added {
  text-align: center;
  font-size: 16px;
}
</style>
