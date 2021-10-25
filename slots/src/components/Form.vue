<template>
  <form>
      <div class="help"> 
          <slot name="help"></slot>
      </div>
      <div class="fields"> 
          <slot name="fields"></slot>
      </div>
      <div class="buttons"> 
          <slot name="buttons"></slot>
      </div>
      
  </form> 

</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    props: {
        
    },
}
</script>
