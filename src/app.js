import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      allCountries: [],
      searchCountry: "",
      selectedCountry: null,
      favouriteCountries: [],
      addCountry: ""
    },
    mounted(){
      this.fetchData();
    },
    computed: {
      globalPopulation: function() {
        return this.allCountries.reduce((runningTotal, country) => runningTotal + country.population, 0)
      }
    },
    methods: {
      fetchData: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
      },
      displayCountry: function(){
        const selectedCountryArray = this.allCountries.filter((country) => {
          return this.searchCountry.toLowerCase() === country.name.toLowerCase()
        })
        this.selectedCountry = selectedCountryArray[0]
        return this.selectedCountry
      },
      addToFavouriteCountry: function(){
        const selectedCountryArray = this.allCountries.filter((country) => {
          return this.addCountry.toLowerCase() === country.name.toLowerCase()
        })
        const selectedCountry = selectedCountryArray[0]
        this.favouriteCountries.push(selectedCountry)
      }
    }
  })
})
