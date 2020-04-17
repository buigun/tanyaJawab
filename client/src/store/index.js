import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        question: "",
        players: [],
        status: false,
    },
    mutations: {
        SET_QUESTIONS(state, payload) {
            state.question = payload
        },
        SET_PLAYERS(state, payload) {
            state.players = payload
        },
        SET_STATUS(state, payload) {
            state.status = payload
        }
    },
    actions: {
        getQuestion({commit}) {
            axios({
                // url: 'http://localhost:3000/questions',
                url: `https://limitless-retreat-68299.herokuapp.com/questions`,
                method: 'get',
            })
            .then(response=>{
                commit('SET_QUESTIONS', response.data.questions)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
});

export default store