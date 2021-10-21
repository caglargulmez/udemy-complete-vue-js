const app = Vue.createApp({

    data () {
        // return an data object
        return {
            firstName: 'Caglar',
            lastName: 'Gulmez',
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }

}).mount('#app')


// setTimeout( () => {
//    vm.firstName = 'CAKO'
// }, 2000);