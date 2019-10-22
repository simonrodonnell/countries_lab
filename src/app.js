import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      allCountries: []
    },
    mounted(){
      this.fetchData();
    },
    compute: {

    },
    methods: {
      fetchData: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
      }
    }
  })
})
