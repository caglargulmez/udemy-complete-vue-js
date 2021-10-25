<template>
    <button type="button" class="btn btn-warning" @click="onClickAge">Update Age Event</button>
    <br>
    <br>
    <button type="button" class="btn btn-warning" @click="ageChangeFn(3)">Update Age Callback</button>
    <hr>
    <p> The user is {{ age }} years old </p>
    <p> {{ ageDoubled }} </p>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</template>

<script>
export default {
    name: "User",
    data() {
        return {
             
        }
    },
    emits: ['age-change'],
    computed: {
        ageDoubled() {
            // grabbing the value, not change
            return this.age * 2;
        },
    },
    // props: [
    //     "age"
    // ],
    methods: {
        onClickAge() {
            // we are going to listen this event in app.vue component
            this.$emit('age-change', 3);
        },
    },
    props: {
        age: {
            // type: [Number, String] type can be both number or string
            type: Number,  // string, object, array, boolean, date
            // required: true, // in the app age prop must be bind with v-bind
            // default: 20,
            validator(value) {
                // age should be less than 130
                return value < 130;
            }
        },
        ageChangeFn: Function,
    }
    
}
</script>