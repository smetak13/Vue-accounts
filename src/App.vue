<template>
  <div class="all">
    <app-nav :selectContent="selectContent" :contentSelected="contentSelected"></app-nav>
    <div class="content">
      <app-aside :selectContent="selectContent" :contentSelected="contentSelected" :filterSelected="filterSelected"
       :filterData="filterData" :changeFilter="changeFilter" :statisticsSelected="statisticsSelected"
        :changeStatistics="changeStatistics"></app-aside>
      <app-section :selectContent="selectContent" :contentSelected="contentSelected"
       :filterSelected="filterSelected" :filterBy="filterBy"
       :expenses="expenses" :incomes="incomes" :setItems="setItems"
        :statisticsSelected="statisticsSelected" :resultAllCategories="resultAllCategories"
        :loading="loading" :state="state"></app-section>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

import appAside from './components/Aside.vue'
import appNav from './components/Nav.vue'
import appSection from './components/Section.vue'
import appFooter from './components/Footer.vue'
import api from './api'

export default {
  components: {
    appAside,
    appNav,
    appSection,
    appFooter,
  },
  data () {
    return {
      loading: true,
      state: undefined,
      contentSelected: 'addExpense',
      filterSelected: 'all',
      statisticsSelected: 'expenses',
      resultAllCategories: [0],
      filterData: {
        priceFrom: -Infinity,
        priceTo: Infinity,
        dateFrom: '0000-00-00',
        dateTo: '9999-99-99'
      },
      filteredItems: {
        index: 0,
        filter: [],
      },
      expenses: [],
      incomes: [],
    }
  },
  methods: {
    selectContent: function(page) {
      this.contentSelected = page;
      if (this.filterSelected!=='date' || this.filteredItems.index > 1) {
        this.changeFilter('all');
      }
    },
    changeFilter: function(filter) {
      if (this.filterSelected!==filter) {
        for (let i = 0; i < this.filteredItems.filter.length; i++) {
          if (this.filteredItems.filter[i]===filter) {
            return this.changeFilter('all')
          }
        }
        this.filterSelected = filter;
        this.filteredItems.filter[this.filteredItems.index] = filter;
        this.filteredItems.index += 1;
      }
      if (filter==='all') {
        this.filteredItems.index = 0;
        this.resultAllCategories = [0];
        this.filteredItems.filter = [];
        this.filterData = {
          category: '',
          item: '',
          priceFrom: -Infinity,
          priceTo: Infinity,
          dateFrom: '0000-00-00',
          dateTo: '9999-99-99'
        };
      }
      if (this.filteredItems.index > 1) {
        if (this.contentSelected==='expenseHistory' || this.contentSelected==='statistics' && this.statisticsSelected==='expenses') {
          this.filteredItems.expenses = this.filteredItems.current;
        }
        else this.filteredItems.incomes = this.filteredItems.current;
      }
    },
    changeStatistics: function(item) {
      this.statisticsSelected = item;
      this.changeFilter('all');
    },
    catchError(error) {
      this.state = 'fail';
      console.log(error);
    },
    setItems: function() {
      // loading zvlášť
      this.loading = true;
      let key = 'incomes';
      if (this.contentSelected==='expenseHistory' || this.contentSelected==="addExpense") {
        key = 'expenses';
      }
      api.fetch(key, { method: 'PUT', body: JSON.stringify(this[key]) }).then(() => {
        this.loading = false;
        this.state = 'success';
        setTimeout(() => {
          this.state = undefined;
        }, 3000);
      }).catch(this.catchError)
    },
  },
  created: function() {
    this.loading = true;
    api.fetch('expenses').then(data => {
      if (data) this.expenses = JSON.parse(data);
      this.loading = false;
    }).catch(this.catchError);
    api.fetch('incomes').then(data => {
      if (data) this.incomes = JSON.parse(data);
      this.loading = false;
    }).catch(this.catchError);
  },
  computed: {
    filterBy: function() {
      if (this.contentSelected==='expenseHistory' || this.contentSelected==='statistics' && this.statisticsSelected==='expenses') {
        if (this.filterSelected==='date') {
          return this.filteredItems.current = this.filteredItems.expenses.filter(x => x.date >= this.filterData.dateFrom && x.date <= this.filterData.dateTo);
        }
        if (this.filterSelected==='category') {
          return this.filteredItems.current = this.filteredItems.expenses.filter(x => x.category.toLowerCase().match(this.filterData.category.toLowerCase()));
        }
        if (this.filterSelected==='price') {
          return this.filteredItems.current = this.filteredItems.expenses.filter(x => Number(x.price) >= Number(this.filterData.priceFrom) && Number(x.price) <= Number(this.filterData.priceTo));
        }
        if (this.filterSelected==='item') {
          return this.filteredItems.current = this.filteredItems.expenses.filter(x => x.item.toLowerCase().match(this.filterData.item.toLowerCase()));
        }
        if (this.filterSelected==='all') {
          return this.filteredItems.expenses = this.expenses;
        }
      }
      else {
        if (this.filterSelected==='date') {
          return this.filteredItems.current = this.filteredItems.incomes.filter(x => x.date >= this.filterData.dateFrom && x.date <= this.filterData.dateTo);
        }
        if (this.filterSelected==='category') {
          return this.filteredItems.current = this.filteredItems.incomes.filter(x => x.category.toLowerCase().match(this.filterData.category.toLowerCase()));
        }
        if (this.filterSelected==='price') {
          return this.filteredItems.current = this.filteredItems.incomes.filter(x => Number(x.price) >= Number(this.filterData.priceFrom) && Number(x.price) <= Number(this.filterData.priceTo));
        }
        if (this.filterSelected==='item') {
          return this.filteredItems.current = this.filteredItems.incomes.filter(x => x.item.toLowerCase().match(this.filterData.item.toLowerCase()));
        }
        if (this.filterSelected==='all') {
          return this.filteredItems.incomes = this.incomes;
        }
      }
    }
  }
}

</script>

<style>
  
</style>