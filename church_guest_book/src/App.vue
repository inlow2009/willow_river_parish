<template>
  <div id="app">
    
    <NewGuestForm
    v-on:guest-added="newGuestAdded"></NewGuestForm>

    <GuestMessage
    v-bind:message="message"
   v-bind:name="name"
   ></GuestMessage>

    <GuestTable 
  v-bind:guests="guests"
   v-on:guest-present="guestArrivedOrLeft"
   v-on:delete-guest="guestDeleted"></GuestTable>
    
  </div>
</template>

<script>
import NewGuestForm from './components/NewGuestForm.vue'
import GuestMessage from './components/GuestMessage.vue'
import GuestTable from './components/GuestTable.vue'

export default {
  name: 'App',
  components: {
    NewGuestForm,
    GuestMessage,
    GuestTable
  },
  data () {
    return {
      guests: [],
      message: '',
      name: ''
    }
  },
  methods: {
    newGuestAdded(guest) {
    this.guests.push(guest)
    this.guests.sort(function(s1, s2){
      return s1.name.toLowerCase() < s2.name.toLowerCase() ? -1 : 1
    })
  },
  guestArrivedOrLeft(guest) {
    this.message = guest.present ? 'Welcome to the morning service, ' : 'Thank you for your attendance, '
    this.name = guest.name
  },

guestDeleted(guest) {
  this.guests = this.guests.filter( s => s != guest)
}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
