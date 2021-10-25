<template>
  <app-form> 
    <template v-slot:help> 
      <p> {{ help }}</p>
    </template>
    <template v-slot:fields>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="text" class="form-control" aria-describedby="usernameHelp" placeholder="Enter Username">
        <small id="usernameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password">
      </div>
    </template>
    <br>
    <template v-slot:buttons> 
      <button type="submit" class="btn btn-primary">Submit</button>
    </template>
  </app-form>

   <hr>

  <app-form>  
    <template v-slot:help> 
      <p> Contact help text.</p>
    </template>
    <template v-slot:fields>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="text" class="form-control" aria-describedby="usernameHelp" placeholder="Enter Username">
        <small id="usernameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
      </div>
    </template>
    <br>
    <template v-slot:buttons> 
      <button type="submit" class="btn btn-primary">Submit</button>
    </template>
  </app-form>      

   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous">
</template>

<script>
import AppForm from "./components/Form.vue"

export default {
  name: 'App',
  components: {
    AppForm,
  },
  data() {
    return {
      help: 'This is some help text.'
    }
  }
}
</script>


