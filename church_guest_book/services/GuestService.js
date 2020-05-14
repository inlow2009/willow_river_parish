import axios from 'axios'

const base_url = '/api/guests'
export default {

    getAllGuests() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    addGuest(guest) {
        return axios.post(base_url, student).then(response => {
            return response.data
        })
    },

    updateGuests(guest) {
        return axios.patch(`${base_url}/${guest.id}`, guest).then(response => {
            return response.data
        })
    },

    deleteGuest(id) {
        return axios.delete(`${base_url}/${id}`).then(response => {
            return response.data
        })
    }
}