<template>
  <div id="app">
    <div class="search-bar">
    <div class="md-layout-item" id="type-selector">
      <md-field>
        <label for="type">Select Type</label>
        <md-select v-model="type" name="type" id="type" md-dense>
          <md-option value="people">Characters</md-option>
          <md-option value="films">Movies</md-option>
          <md-option value="planets">Planets</md-option>
          <md-option value="species">Species</md-option>
          <md-option value="starships">Starships</md-option>
          <md-option value="vehicles">Vehicles</md-option>
        </md-select>
      </md-field>
    </div>
    <md-field md-inline class="md-layout-item">
      <label>Search...</label>
      <md-input v-model="search"></md-input>
    </md-field>
    </div>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from "./store";
  import { mapActions } from "vuex";
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      search: '',
      type: '',
    }
  },
  created() {
    if (search !== '') {
      () => fetch(`https://swapi.co/api/${this.type}/${this.search}`)
    .then((res) => {
      setResults(res)
    }).done()
    }
  },
  methods: {
    ...mapActions(["setSearch"]),
    submitSearch() {
      this.$store.dispatch("callSearch");
      this.search = '';
      this.type = '';
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.search-bar {
  display: flex;
}
.md-layout-item {
  padding-left: 15px;
  padding-right: 15px;
}
#type-selector {
  max-width: 200px;
  padding-right: 25px;
}
</style>
