import axios from 'axios'

const state = { 
    cards: []
};

const getters = { 
    cardsList: state => state.cards
};

const actions = { 
    async fetchUsers({commit}){
      const response = await axios.get("http://localhost:3000/cards");
      commit("setUsers", response.data)
    },
    async addUsers({commit}, user){
      const response = await axios.post("http://localhost:3000/cards", user);
      commit("addNewUser", response.data)
    },
    async deleteUser({commit}, id){
      await axios.delete(`http://localhost:3000/cards/${id}`);
      commit("removeUser", id)
    }
};

const mutations = { 
    setUsers: (state, cards) => (
        state.cards = cards
    ),
    addNewUser: (state, user) => state.cards.unshift(user),
    removeUser: (state, id) => (
        state.cards.filter(user => user.id !== id),
        state.cards.splice(user => user.id, 1)
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}