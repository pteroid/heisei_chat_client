import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import dayjs from 'dayjs'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            number: "",
            email: "",
            username: ""
        },
        receivedKeitaiMessages: [
            {
                id: 1,
                from_user: {
                    id: 1,
                    email: "hoge@ezweb.ne.jp",
                    name: "ソフトバンク"
                },
                title: "タイトル",
                content: "本文",
                created_at: dayjs("2019-04-27T22:06:25.930712")
            },
            {
                id: 2,
                from_user: {
                    id: 3,
                    email: "information@i.softban.jp",
                    name: "ソフトバンク"
                },
                title: "【お客さま限定】10,000円割引クーポンプレゼント",
                content: "ガラケーをご利用中のお客さま限定で、機種変更に使えるクーポンをプレゼント🎁\n\n【特別クーポン】\n機種代金が税込10,000円割引！\n\n有効期限：5月31日(金)まで\n\n対象機種など詳細はこちらをご確認ください。\nhttp://u.softbank.jp/CsR7dVt\n（アクセスには通信料がかかります）\n\nさらに【スマホスタート割】でガラケーから対象のスマホにすると機種代金が税込10,800円割引になります。※\n\n令和を新しいスマホで迎えよう!\nゴールデンウィークはソフトバンク取扱店へぜひお越しください\n\n\n※ 通話基本プランの2年契約／2年契約（フリープラン）またはハートフレンド割引に加入すること。学割放題との併用はできません。\n",
                created_at: dayjs("2019-04-27T22:06:25.936063")
            }
        ],
        editingMail: {
            to: "",
            sub: "",
            body: ""
        }
    },
    mutations: {
        setReceivedKeitaiMessages(state, payload) {
            for (let i in payload) {
                payload[i].created_at = dayjs(payload[i].created_at)
            }
            state.receivedKeitaiMessages = payload
        },
        setUserInfoProp(state, payload) {
            state.userInfo[payload.prop_name] = payload.value
        },
        setEditingMailProp(state, payload) {
            state.editingMail[payload.prop_name] = payload.value
        }


    },
    actions: {
        async fetchReceivedKeitaiMessagesAction(context) {
            const res = await axios.post('http://localhost:5042/keitai/messages/received', {
                email: 'fuga@docomo.ne.jp'
            })
            context.commit('setReceivedKeitaiMessages', res.data)
        }
    }
})
