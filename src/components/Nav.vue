<template>
  <div class="navbar navbar-expand-sm">
    <button class="navbar-toggler bg-dark" data-toggle="collapse" data-target="#collapse_target">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapse_target">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" :class="{'link-active': contentSelected === 'addExpense'}" @click="selectContent('addExpense')" href="#" id="nav-cv">Přidej výdaj</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'link-active': contentSelected === 'addIncome'}" @click="selectContent('addIncome')" href="#" id="nav-projects">Přidej příjem</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'link-active': contentSelected === 'expenseHistory'}" @click="selectContent('expenseHistory')" href="#" id="nav-contact">Historie výdajů</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'link-active': contentSelected === 'incomeHistory'}" @click="selectContent('incomeHistory')" href="#" id="nav-contact">Historie příjmů</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'link-active': contentSelected === 'statistics'}" @click="selectContent('statistics')" href="#" id="nav-contact">Statistiky</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: ['selectContent', 'contentSelected'],
  data () {
    return {
    }
  },
}
</script>

<style scoped>
li {
    text-decoration: none;
    margin-right: 15px;
    margin-left: 15px;
}

.navbar {
  background-color: rgb(2, 30, 43);
}

a {
  color: rgb(153, 153, 153);
}

a:hover {
  color: rgb(212, 211, 211);
}

.link-active {
  color: rgb(212, 211, 211);
}

</style>
