<template>
    <div class="mail">
        <div class="statbar">
            <img src="../assets/antenna.svg" width="20" height="20">
            <div class="time">
                03/12
            </div>
            <div class="battery">
                <img src="../assets/battery.png" width="20" height="20">
            </div>

        </div>
        <div class="titlebar">
            ◀ ﾒｰﾙ ▶
        </div>
        <div class="main">
            <div class="item">1 受信ﾎﾞｯｸｽ</div>
            <div class="item">2 新規作成</div>
            <div class="item">3 新着ﾒｰﾙ受信</div>
            <div class="item">4 下書き</div>
            <div class="item">5 ﾃﾞｺﾚﾒｰﾙﾃﾝﾌﾟﾚｰﾄ</div>
            <div class="item">6 送信ﾎﾞｯｸｽ</div>
            <div class="item">7 ｻｰﾊﾞｰﾒｰﾙ操作</div>
            <div class="item">8 PCﾒｰﾙ新規作成</div>
            <div class="item">9 SMS新規作成</div>
            <div class="item">10設定</div>
        </div>
        <div class="buttonbar">
            <div class="side">
                <div class="button">ﾒﾆｭｰ</div>
                <div class="button">新規追加</div>
            </div>
            <div class="center">
                <div class="button">選択</div>
            </div>
            <div class="side">
                <div class="button">送信</div>
                <div class="button">添付</div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: "Mail",
        beforeRouteEnter(to, from, next) {
            if (from.name === 'home') {
                store.dispatch('getReceivedKeitaiMessagesAction')
            }
            next()
        }
    }
</script>

<style scoped>
    .mail {
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
        justify-content: center;
        background: linear-gradient(to bottom, #44433f, #1b1d1d, #44433f);
        color: white;
    }

    /*メインの画面*/
    .main {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: #312e2b;
        color: white;
    }

    .main .item {
        display: flex;
        align-items: center;
        height: 10%;
        border-bottom: solid 1px #161411;
    }

    .main .item:hover {
        background-color: white;
        color: black;
    }

    /*ボタンバー*/
    .buttonbar {
        height: 15%;
        display: flex;
        margin-top: auto;
        background-color: #1f1a17;
        color: white;
        font-size: 14px;
        padding: 0.5em;
        text-align: center;
    }

    .buttonbar .side {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .buttonbar .side .button {
        height: 100%;
        margin: 6px;
        background: linear-gradient(to bottom, #e2dfd2, #1b1d1d, #1b1d1d);
        display: flex;
        align-items: center;
        justify-content: center;
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
        background: linear-gradient(to bottom, #e2dfd2, #1b1d1d, #1b1d1d);
        text-align: center;
        width: 100%;
    }
</style>
