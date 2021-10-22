let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message);
  },
  created() {
    console.log('created() function called!', this.message);
  },
  beforeMount() {
    console.log('beforeMount() function called!', this.$el);
    // el is available when vue instance is mounted
  },
  mounted() {
    console.log('mounted() function called!', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called!', this.$el);
  },
  updated() {
    console.log('updated() function called!', this.$el);
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!', this.$el);
  },
  unmounted() {
    console.log('unmounted() function called!', this.$el);
  },
  


}) // .mount('#app')

vm.mount('#app')
// setTimeout( () => {
//     vm.mount('#app')
// }, 3000 );


/*

*** All lifecycles is a function

                  Lifecycle Hooks
                +----------------+                                                               
                |                |                                                               
                | Vue.createApp()|                                                               
                |     .mount()   |                                                               
                |                |                                                               
                +----------------+                                                               
                         |                 +--------------+                                      
                         ------------------+ beforeCreate |                                      
                +--------+-------+         +--------------+                                      
                |                |                                                               
                | Initialize data|                                                               
                | and methods    |                                                               
                |                |                                                               
                +--------|-------+                                                               
                         |                 +--------------+                                      
                         ------------------+   created    |                                      
                +--------+-------+         +--------------+                                      
                |                |                                                               
                |    Instance    |                                                               
                |    created     |                                                               
                |                |                                                               
                +--------|-------+                                                               
                         |                                                                       
                         |                                                                       
                +--------+-------+                                                               
                |                |                                                               
                |   Compile      |                                                               
                |   Template     |                                                               
                | (el Property)  |                                                               
                +--------|-------+                                                               
                         |                 +--------------+                                      
                         ------------------+  beforeMount |                                      
                +--------+-------+         +--------------+                                      
                |   Replace el   |                                                               
                | property with  |                                         +--------------+      
                |   compiled     |                -------------------------+vm.unmount()  |      
                |   template.    |                |                        +-------|------+      
                +--------|-------+                |                                |             
                         |                        |                                |             
                         |                        |                        +-------+------+      
                +--------+-------+----------------+                        |Vue instance  |      
                |                |                                         |Destroyed     |      
                |    MOUNTED     |                    +--------------+     +--------------+      
         +-------                ------------+--------+   updated    |                           
         |      |                |           |        +--------------+                           
         |      +----------------+           |                                                   
         |                                   |                                                   
         |                                   |                                                   
         |                                   |                                                   
         |                                   |                                                   
+--------|-------+                  +----------------+                                           
|                |                  |                |                                           
|    Data        |                  | Apply changes  |                                           
|    Changes     ----------|--------+ to the         |                                           
|                |         |        | template       |                                           
+----------------+         |        +----------------+                                           
                           |                                                                     
                           |                                                                     
                           |                                                                     
                   +-------+------+                                                              
                   | beforeUpdate |                                                              
                   +--------------+                                                                              
*/






