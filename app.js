const app = Vue.createApp({

    data () {
        // return an data object
        return {
            firstName: 'Furkan',
            middleName: '',
            lastName: 'Gulmez',
            url: 'https://google.com',
            raw_url: '<p> <a href="https://google.com" target="_blank">Google</a></p> ',
            age: 25,

        }
    },
    methods: {
        incrementAge() {
            this.age++;
        },
        decrementAge() {
            this.age--;
        },
        updateLastName(msg, event) {
            // if we add event modifier to html file
            // the line below is become meaningless
            // event.preventDefault();
            //console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        }
    },
    // we will use this to avoid refreshing all components 
    // when one is changed
    // computed: saves performance and execution times
    computed: {
        fullName() {
            console.log('fullName() computed property was called')
            
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },
    watch: {
        age(newVal, oldVal) {
            // asyncronous tasks 
            setTimeout( () => {
                this.age = 30;
            }, 3000 ) ; 
        }
    }

}).mount('#app')


// setTimeout( () => {
//    vm.firstName = 'CAKO'
// }, 2000);