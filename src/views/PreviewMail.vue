<template>
    <div class="preview_mail">
        <div class="statbar">
            <img src="../assets/antenna.svg" width="20" height="20">
            <div class="time">2:13</div>
            <div class="battery">
                <img src="../assets/battery.png" width="20" height="20">
            </div>

        </div>
        <div class="titlebar">
            <div class="left">✉️</div>
            <div class="center">受信ﾒｰﾙ</div>
            <div class="right">1/424</div>
        </div>
        <div class="main">
            <div class="mailinfo">
                <div class="row date">
                    <div class="iconrow">
                        <div class="icon">🕒</div>
                    </div>
                    <div class="content">{{message.created_at.format("YYYY/MM/DD HH:mm")}}</div>
                </div>
                <div class="row from">
                    <div class="iconrow">
                        <div class="icon">From</div>
                    </div>
                    <div class="content">{{this.message.from_user.email}}</div>
                </div>
                <div class="row sub">
                    <div class="iconrow">
                        <div class="icon">Sub</div>
                    </div>
                    <div class="content sub-content">{{this.message.title}}</div>
                </div>
                <div class="row attachment">
                    <div class="iconrow">
                        <div class="icon">📎</div>
                    </div>
                    <div class="content">添付ﾌｧｲﾙなし</div>
                </div>
            </div>
            <div class="mailcontent">
                <div class="text_or_emoji" v-for="d in message.content_dict" :key="d.id">
                    <div class="text" v-if="d.hasOwnProperty('text')">{{d.text}}</div>
                    <img class="emoji" v-else :src="'/imode_emoji_data/' + d.emoji">
                </div>
            </div>
        </div>
        <div class="buttonbar">
            <div class="side">
                <div class="button">返信</div>
                <div class="button">▲ﾍﾟｰｼﾞ</div>
            </div>
            <div class="center">
                <div class="empty"></div>
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
        name: "PreviewMail",
        props: ['id'],
        data() {
            return {
                items: [
                    {
                        id: 1,
                        emoji: "/imode_emoji_data/iモード.png"
                        // text: ""
                    },
                    {
                        id: 2,
                        text: "テキストあああ\nああああああ\nあああああ"
                    },
                    {
                        id: 3,
                        emoji: "/imode_emoji_data/iモード.png"
                        // text: ""
                    },
                    {
                        id: 4,
                        text: "テキスト"
                    }
                ]
            }
        },
        computed: {
            message: {
                get() {
                    return this.$store.state.receivedKeitaiMessages
                        .find(msg => msg.id === Number(this.id))
                }
            },
        },

    }
</script>

<style scoped>
    .preview_mail {
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
        /* margin-left: auto;*/
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
        /*padding-top: 10px;*/
    }

    .main .mailinfo {
        height: 40%;
        display: flex;
        flex-direction: column;
        border-bottom: solid 2px #a7a9a4;

    }

    .main .mailinfo .row {
        display: flex;
    }

    .main .mailinfo .row .iconrow {
        width: 20%;
        text-align: center;
        display: flex;
        align-content: center;
        align-items: center;
    }

    .main .mailinfo .row .iconrow .icon {
        margin: 1px 5px;
        font-size: 12px;
        text-shadow: 1px 1px 0 #FFF, -1px -1px 0 #FFF,
        -1px 1px 0 #FFF, 1px -1px 0 #FFF,
        0 1px 0 #FFF, 0 -1px 0 #FFF,
        -1px 0 0 #FFF, 1px 0 0 #FFF;
        /*background-color: #3b3a45;*/
        background: linear-gradient(to right, #d8bfaa, #b5a492, #7d6455);
        border-radius: 0.3em;
        /*text-align: center;*/
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .main .mailinfo .row .content {
        flex: 1;
        overflow: hidden;
    }

    .sub-content {
        height: 3em;
        line-height: 1rem;
    }

    .main .mailcontent {
        overflow: auto;
        flex: 1;
        white-space: pre-wrap;
    }

    .main .mailcontent .text_or_emoji {
        display: inline;
        /*float: left;*/
    }

    .main .mailcontent .text_or_emoji .text {
        display: inline;
        /*float:left;*/
    }

    .main .mailcontent .text_or_emoji .emoji {
        display: inline;
        width: 1rem;
        height: 1rem;
    }


    /*
    .main .item {
    display: flex;
    align-items: center;
    height: 14%;
    border-bottom: solid 0.1px rgb(172, 172, 165);
    overflow: hidden;
    white-space: nowrap;
    }
    */

    /*
    .main .item:hover {
    background-color: black;
    color: white;
    }
    */

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
        /* align-items: center;*/
        margin: 20px 5px;
        background-color: #3b3a45;
        border-top: solid 1px rgb(123, 122, 135);
        border-bottom: solid 1px rgb(24, 22, 32);
        text-align: center;
        width: 100%;
    }

</style>
