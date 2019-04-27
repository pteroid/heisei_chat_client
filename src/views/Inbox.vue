<template>
    <div class="inbox">
        <div class="statbar">
            <img src="../assets/antenna.svg" width="20" height="20">
            <div class="time">
                3:20
            </div>
            <div class="battery">
                <img src="../assets/battery.png" width="20" height="20">
            </div>

        </div>
        <div class="titlebar">
            受信ﾎﾞｯｸｽ
        </div>
        <div class="main">
            <div class="item">①📁 受信ﾒｰﾙ</div>
            <div class="item">②📁 ﾕｰｻﾞｰﾌｫﾙﾀﾞ1</div>
            <div class="item">③📁 ﾕｰｻﾞｰﾌｫﾙﾀﾞ2</div>
            <div class="item">④📁 ﾕｰｻﾞｰﾌｫﾙﾀﾞ3</div>
            <div class="item">⑤📁 迷惑ﾒｰﾙ</div>
            <div class="item">⑥📁 緊急速報ﾒｰﾙ</div>
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
    export default {
        name: "Inbox"
    }
</script>

<style scoped>
    .inbox {
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
        background-color: #3b3a45;
        border-top: solid 3px rgb(123, 122, 135);
        border-bottom: solid 3px rgb(24, 22, 32);
        color: white;
    }

    /*メインの画面*/
    .main {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: white;
        color: black;
    }

    .main .item {
        display: flex;
        align-items: center;
        height: 8%;
        /*    border-bottom: solid 1px #161411;*/
    }

    .main .item:hover {
        background-color: black;
        color: white;
    }

    /*ボタンバー*/
    .buttonbar {
        height: 15%;
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
    }

    .buttonbar .side .button {
        height: 100%;
        margin: 6px;
        background-color: #3b3a45;
        border-top: solid 1px rgb(123, 122, 135);
        border-bottom: solid 1px rgb(24, 22, 32);
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
        background-color: #3b3a45;
        border-top: solid 1px rgb(123, 122, 135);
        border-bottom: solid 1px rgb(24, 22, 32);
        text-align: center;
        width: 100%;
    }


</style>
