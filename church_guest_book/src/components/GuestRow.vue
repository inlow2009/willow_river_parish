<template>
     <tr class="guestrow" v-bind:class="'present' + guest.present">         
                      <td>{{guest.name}}</td>
                      <td>{{guest.emailAddress}}</td>
                      <td>{{guest.state}}</td>
                      <td><input type="checkbox" v-model="guest.present" v-on:change="checked(guest)"></td>
                      <td v-show="edit">
                          <img class="delete-icon" v-on:click="deleteguest(guest)" src="@/assets/delete.png">
                      </td>
    </tr>
    </template>

<script>
export default {
    name: 'GuestTable',
    props: {
        guest: Object,
        edit: Boolean
    },
    methods: {
        checked(guest) {
            this.$emit('guest-present', guest)
        },
        deleteguest(guest) {
                    this.$emit('delete-guest', guest)
            } 
        }
    }

</script>

<style>
.present-true {
    color: gray;
    font-style: italic;
}

.present-false {
    font-weight: bold;
}

.delete-icon {
    height: 30px;
}

</style>