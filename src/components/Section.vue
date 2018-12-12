<template>
  <div class="section">
    <items-add v-if="contentSelected==='addExpense' || contentSelected==='addIncome'" 
    :contentSelected="contentSelected"
    :expenses="expenses" :incomes="incomes" :setItems="setItems" :loading="loading" :state="state"></items-add>
    <items-history v-if="contentSelected==='expenseHistory' || contentSelected==='incomeHistory'" 
    :selectContent="selectContent" :contentSelected="contentSelected" :filterSelected="filterSelected"
     :filterBy="filterBy" :expenses="expenses" :incomes="incomes" :setItems="setItems"
      :loading="loading" :state="state"></items-history>
    <statistics v-if="contentSelected==='statistics'" :selectContent="selectContent"
     :filterBy="filterBy" :expenses="expenses" :incomes="incomes" :statisticsSelected="statisticsSelected"
      :resultAllCategories="resultAllCategories"></statistics>
  </div>
</template>

<script>
import ItemsAdd from './ItemsAdd'
import ItemsHistory from './ItemsHistory'
import Statistics from './Statistics.vue'

export default {
  props: ['selectContent', 'contentSelected', 'filterSelected', 'filterBy', 'expenses',
   'incomes', 'setItems', 'statisticsSelected', 'resultAllCategories', 'loading', 'state'],
  components: {
    ItemsAdd,
    ItemsHistory,
    Statistics
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

  
</style>
