<template>
<div>
        <div class="alter alert-danger" v-show="errors.length > 0">
        <li v-for="error in errors" v-bind:key="error">{{error}}</li>

</div>
        <div class="card add-guest m-2 p-2">
            <h2 class="card-title">Willow River Parish Guest Book</h2>
            <h5>Please sign in, thank you!</h5>
            <div class="form-group">
                <label for="name">Name</label>
                <!-- TODO v-model -->
                <input id="name" class="form-control" v-model.trim="newGuestName">
            </div>
            <div class="form-group">
                <label for="emailAddress">Email Address</label>
                <!-- TODO v-model -->
                <input id="emailAddress" class="form-control" v-model.trim="newEmailAddress">
            </div>
            <div class="form-group">
              <label for="state">State</label>
             <input id="state" class="form-control" v-model.trim="newGuestState">
            </div>

            <!-- TODO v-on:click event handler -->
            <button class="btn btn-success btn-lg" v-on:click.prevent="addGuest">Sign In</button>
        </div>

    </div>
</template>

<script>
export default {
  name: 'NewGuestForm',
  data() {
    return {
      newGuestName: '',
      newEmailAddress: '',
      newGuestState: '',
      errors: []
    }
  },
  methods: {
      addGuest() {
        this.errors = []
    
          if (this.newGuestName == ''){
                            this.errors.push('Please Enter Your Name')
                        }    
                        if (this.newEmailAddress == ''){
                            this.errors.push('Please Enter Your Email')
                        }
                        if (this.newGuestState == ''){
                          this.errors.push('Please Enter Your State')
                        }                    
                        if (this.newGuestName && this.newEmailAddress && this.newGuestState)  {
                     let guest = {  name: this.newGuestName, emailAddress: this.newEmailAddress, state: this.newGuestState, present: false}
                   this.$emit('guest-added', guest)
                    this.newGuestName = ''
                    this.newEmailAddress = ''
                    this.newGuestState = ''
        }
        }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#body{
  background-color: purple
}
 
</style>
