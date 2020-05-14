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
   data() {
    return {
    guests: [],
    message: '',
    name: ''
  }
}, 
components: {
    NewGuestForm,
    GuestMessage,
    GuestTable
  },
mounted() {
  this.updateGuests()
},
methods: {
  newGuestAdded(guest) {
    this.$guest_api.addGuest(guest).then( guest => {
      this.updateGuests()
    }).catch(err => {
      let msg = err.response.data.join(', ')
      alert('Error adding guest.\n + msg')
    })
  },
  guestArrivedOrLeft(guest) {
   this.$guest_api.updateGuests(guest).then( () => {
     this.message = guest.present ? 'Welcome to Willow River Parish, ' : 'Thank you for coming, '
     this.name = guest.name
     this.updateGuests()
   })
  },

guestDeleted(guest) {
 this.$guest_api.deleteGuest(guest.id).then( () => {
   this.updateGuests()
 })
},
updateGuests() {
  this.$guest_api.getAllGuests().then( guests => {
    this.guests = guests
  } )
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
  background-color: purple;
}
</style>
