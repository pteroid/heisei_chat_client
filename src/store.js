import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        receivedKeitaiMessages: []
    },
    mutations: {
        getReceivedKeitaiMessages(state, payload) {
            state.receivedKeitaiMessages = payload
        }
    },
    actions: {
        async getReceivedKeitaiMessagesAction(context) {
            // console.log("hoge")
            const res = await axios.post('http://localhost:5042/keitai/messages/received', {
                email: 'fuga@docomo.ne.jp'
            })
            context.commit('getReceivedKeitaiMessages', res.data)
        }
    }
})
