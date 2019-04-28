<template>
    <div class="received_mails">
        <div class="statbar">
            <img src="../assets/antenna.svg" width="20" height="20">
            <div class="time">1:23</div>
            <div class="battery">
                <img src="../assets/battery.png" width="20" height="20">
            </div>
        </div>
        <div class="titlebar">
            <div class="left">✉️</div>
            <div class="center">受信ﾒｰﾙ</div>
            <div class="right">1/71</div>
        </div>
        <div class="main">
            <router-link tag="div" class="item" :to="{name: 'preview_mail', params:{id: message.id}}"
                         v-for="message in messages" :key="message.id">
                <div class="numbox">
                    {{message.id}}
                </div>
                <div class="message">
                    ✉️{{message.created_at.format("H:mm")}} {{message.from_user.name}}<br>
                    {{message.title}}
                </div>
            </router-link>
        </div>
        <div class="buttonbar">
            <div class="side">
                <div class="empty"></div>
                <div class="button">▲ﾍﾟｰｼﾞ</div>
            </div>
            <div class="center">
                <div class="button">選択</div>
            </div>
            <div class="side">
                <div class="button">ﾒﾆｭｰ</div>
                <div class="button">▼ﾍﾟｰｼﾞ</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReceivedMails",
        computed: {
            messages: {
                get() {
                    return this.$store.state.receivedKeitaiMessages
                }
            }
        },
    };
</script>

<style scoped>
    .received_mails {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    /*ステータスバー*/
    .statbar {
        display: flex;
        height: 5%;
        font-size: 10px;
        color: white;
        background-color: #1d1c18;
        align-items: center;
    }

    .statbar .time {
        margin-left: auto;
        font-size: 13px;
    }

    .statbar .battery {
        /*    margin-left: auto;*/
    }

    /*タイトルバー*/
    .titlebar {
        height: 5%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #3b3a45;
        border-top: solid 3px rgb(123, 122, 135);
        border-bottom: solid 3px rgb(24, 22, 32);
        color: white;
    }

    .titlebar .right {
        text-align: right;
    }

    /*メインの画面*/
    .main {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: white;
        color: black;
        padding-top: 10px;
    }

    .main .item {
        display: flex;
        align-items: center;
        height: 14%;
        border-bottom: solid 0.1px rgb(172, 172, 165);
        overflow: hidden;
        white-space: nowrap;
        /*    text-overflow: "-";*/
    }

    .main .item:hover {
        background-color: black;
        color: white;
    }

    /*ボタンバー*/
    .buttonbar {
        height: 10%;
        display: flex;
        margin-top: auto;
        background-color: rgb(23, 24, 24);
        color: white;
        font-size: 14px;
        padding: 0.5em;
        text-align: center;
    }

    .buttonbar .side {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .buttonbar .side .button {
        height: 100%;
        margin: 1px;
        background-color: #3b3a45;
        border-top: solid 1px rgb(123, 122, 135);
        border-bottom: solid 1px rgb(24, 22, 32);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .buttonbar .side .empty {
        height: 100%;
        margin: 2px;
    }

    .buttonbar .center {
        display: flex;
        align-content: center;
        align-items: center;
        min-height: 100%;
        width: 100%;
    }

    .buttonbar .center .button {
        /*    align-items: center;*/
        margin: 20px 5px;
        background-color: #3b3a45;
        border-top: solid 1px rgb(123, 122, 135);
        border-bottom: solid 1px rgb(24, 22, 32);
        text-align: center;
        width: 100%;
    }

    .main .item .numbox {
        width: 8%;
        margin: 2px;
        padding: 3px;
        border-radius: 20%;
        background-color: #ddd;
        text-align: center;
        color: black;
    }

    .main .item .message {
        flex: 1;
        overflow: hidden;
    }
</style>
