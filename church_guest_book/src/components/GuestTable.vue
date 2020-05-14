<template>
    <div>
        <div class="card guest-list m-2 p-2">
            <h4 class="card-title">Guests</h4>

<div class="edit-table-toggle form-check">
    <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
    <label for="edit-table" class="form-check-label">Edit Table?</label>
</div>

            <div id="guest-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>Present?</th>
                        <th v-show="editTable">Delete</th>
                    </tr>
                                     <GuestRow 
                                     v-for="guest in guests"
                                      v-bind:key="guest.name"
                                      v-bind:guest="guest"
                                      v-bind:edit="editTable"
                                      v-on:guest-present="guestArrivedOrLeft"
                                      v-on:delete-student="guestDeleted"
                                     ></GuestRow>
                     </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import GuestRow from '@/components/GuestRow.vue'

export default {
    name: 'GuestTable',
    components: { GuestRow },
    data() {
        return {
            editTable: false
        }
    },
    props: {
        guests: Array
    },
    methods: {
        guestArrivedOrLeft(guest) {
            //to do emit messsage to parent
            this.$emit('guest-present', guest)
        },
        guestDeleted(guest) {
            this.$emit('delte-guest', guest)
        }
    }
}
</script>

<style>
#guest-table {
    max-height: 500px;
    overflow: scroll;
}
.present-true {
    color: gray;
    font-style: italic;
}
.present-false {
    font-weight: bold;
}
</style>