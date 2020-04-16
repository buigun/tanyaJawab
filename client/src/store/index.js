import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        question: ""
    },
    mutations: {
        SET_QUESTIONS(state, payload) {
            state.question = payload
        }
    },
    actions: {
        getQuestion({commit}) {
            axios({
                url: `http://localhost:3000/questions`,
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