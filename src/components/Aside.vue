<template>
  <div>
    <aside-history v-if="contentSelected==='incomeHistory' || contentSelected==='expenseHistory'"
      :contentSelected="contentSelected" :filterSelected="filterSelected"
     :filterData="filterData" :changeFilter="changeFilter"></aside-history>
    <aside-stats v-else-if="contentSelected==='statistics'"
    :selectContent="selectContent" :filterSelected="filterSelected"
     :filterData="filterData" :changeFilter="changeFilter" 
     :statisticsSelected="statisticsSelected" :changeStatistics="changeStatistics"></aside-stats>
  </div>
</template>

<script>

import AsideHistory from './AsideHistory.vue'
import AsideStats from './AsideStats.vue'

export default {
  props: ['selectContent', 'contentSelected', 'filterSelected', 'filterData',
   'changeFilter', 'statisticsSelected', 'changeStatistics'],
  components: {
    AsideHistory,
    AsideStats,
  },
  data () {
    return {
        
    }
  }
}
</script>

<style>
  
</style>