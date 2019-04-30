<template>
    <div class="home">
        <div class="homeBack">
            <center class="homec">
                <!--
            <select v-model="toYear">
              <option v-for="year in years" :value="year.value" :key="year.id">{{year.text}}</option>
            </select>
                -->
                <!--
            <input type="radio" id="pokebell" value="Pokebell" v-model="toYear">
            <label for="pokebell">ポケベル(H0~8) </label>
            <input type="radio" id="keitai" value="Keitai" v-model="toYear">
            <label for="keitai">ガラケー(H9~19) </label>
            <input type="radio" id="smart" value="Smart" v-model="toYear">
            <label for="smart">スマートホン(H20~31) </label>
            <div >
            <div v-if="toYear=='Pokebell'">
              <input type="text" v-model="phoneNum" placeholder="電話番号" maxlength="12">
            </div>
            <div v-if="toYear=='Keitai'">
              <input type="email" v-model="address" placeholder="メールアドレス">
            </div>
            <div v-if="toYear=='Smart'">
              <input type="text" v-model="identfier" placeholder="ID" maxlength="16">
            </div>

            <div>
              <textarea name="textbox" id="textbox" cols="30" rows="10"></textarea>
            </div>
            <button>send</button>
                -->
                <table border="6" bordercolor="red" width="500">
                    <tr>
                        <td>
                            <marquee>
                                <font size="14" color="blue">
                                    <i>
                                        <b>平 成 チ ャ ッ ト</b>
                                    </i>
                                </font>
                            </marquee>
                        </td>
                    </tr>
                </table>
                <table width="480px">
                    <tr>
                        <td>
                            <marquee behavior="alternate">
                                <p class="advice">\ ゆ っ く り し て い っ て ね ！ /</p>
                            </marquee>
                        </td>
                    </tr>
                </table>
                <div class="select">
                    <div class="list">
                        <!--<router-link tag="div" class="item" :to="{name: 'preview_mail', params:{id: message.id}}"-->
                        <router-link tag="div" class="pokebell" to="/Pokebell">
                            ポケベルへの受信を
                            <br>確認
                        </router-link>
                    </div>
                    <div class="list">
                        <router-link tag="div" class="keitai" to="/keitai/mail">
                            ガラケーへの受信を
                            <br>確認
                        </router-link>
                    </div>
                    <div class="list">
                        <router-link tag="div" class="create" to="/send">
                            メッセージを
                            <br>作成
                        </router-link>
                    </div>
                </div>
            </center>
        </div>
        <div class="backAuth" v-if="!$store.state.logged"></div>
        <div class="auth" v-if="!$store.state.logged">
            <div class="auth2">
                <div class="authHeader">ログイン</div>
                <div class="authMain">
                    <p>電話番号</p>
                    <input type="text" v-model="number" placeholder="電話番号" maxlength="12">
                </div>
                <div class="authMain">
                    <p>メールアドレス</p>
                    <input type="email" v-model="e_mail" placeholder="メールアドレス">
                </div>
                <div class="authMain">
                    <p>ユーザーID</p>
                    <input type="text" v-model="username" placeholder="ID" maxlength="16">
                </div>
                <button class="submitBtn" v-on:click="authSubmit()">OK!</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "home",
        computed: {
            number: {
                get() {
                    return this.$store.state.userInfo.number;
                },
                set(value) {
                    this.$store.commit("setUserInfoProp", {
                        prop_name: "number",
                        value: value
                    });
                }
            },
            e_mail: {
                get() {
                    return this.$store.state.userInfo.email;
                },
                set(value) {
                    this.$store.commit("setUserInfoProp", {
                        prop_name: "email",
                        value: value
                    });
                }
            },
            username: {
                get() {
                    return this.$store.state.userInfo.username;
                },
                set(value) {
                    this.$store.commit("setUserInfoProp", {
                        prop_name: "username",
                        value: value
                    });
                }
            }
        },
        methods: {
            async authSubmit() {
                await axios.post("http://localhost:5042/login", {
                    number: Number(this.number),
                    email: this.e_mail,
                    username: this.username
                });
                this.$store.commit('setLoggedTrue')
            }
        }
    };
</script>

<style>
    .backAuth {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgb(0, 0, 0);
        opacity: 0.7;
        z-index: 19999;
        display: block;
    }

    .auth {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 800px;
        padding-bottom: 50px;
        transform: translate(-50%, -50%);
        background: #ccc;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 20000;
    }

    .auth2 {
        font-family: "ヒラギノ角ゴ Pro W3", "ＭＳ Ｐゴシック", sans-serif;
        margin: 10px;
        padding: 0px;
    }

    .authHeader {
        font-size: 30px;
        font-weight: bold;
        padding: 10px;
        color: blue;
        -webkit-font-smoothing: none;
        text-shadow: yellow 2px 2px 0px, yellow -2px 2px 0px, yellow 2px -2px 0px,
        yellow -2px -2px 0px;
        background: url(../assets/gifmagazine.gif);
        box-shadow: 2.5px 2.5px black;
    }

    .authMain {
        display: flex;
    }

    p {
        text-align: left;
        margin-left: 22.5px;
        width: 30%;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
    }

    input {
        margin: 10px;
        padding-left: 10px;
        margin-right: 30px;
        font-size: 15px;
        flex: 1;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        box-shadow: 2.5px 2.5px;
    }

    .submitBtn {
        float: right;
        margin-top: 15px;
        margin-right: 30px;
        font-size: 15px;
        height: 30px;
        width: 120px;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        box-shadow: 2.5px 2.5px;
    }

    .homec {
        position: absolute;
        width: 100%;
        padding-top: 13%;
    }

    .advice {
        width: 400px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: rgb(205, 43, 226);
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        text-shadow: blue 1.5px 1.5px 1px, blue -1.5px 1.5px 1px,
        blue 1.5px -1.5px 1px, blue -1.5px -1.5px 1px;
    }

    .homeBack {
        top: -1%;
        left: -1%;
        position: absolute;
        padding: 20px;
        height: 100%;
        width: 100%;
        background: url("../assets/haikei.gif");
    }

    .select {
        display: flex;
        width: 70%;
        margin-top: 60px;
    }

    .list {
        width: 33%;
    }

    .pokebell {
        margin: 10px;
        color: rgb(255, 94, 0);
        font-weight: bold;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        text-shadow: skyblue 1px 1px 0px, skyblue -1px 1px 0px, skyblue 1px -1px 0px,
        skyblue -1px -1px 0px;

        background: blue;
        padding: 18px;
        box-shadow: 2.5px 2.5px black;
    }

    .pokebell:hover {
        background: rgb(120, 120, 255);
        transform: translate(1.5px, 1.5px);
        box-shadow: 1px 1px black;
    }

    .pokebell:active {
        transform: translate(2.5px, 2.5px);
        box-shadow: 0px 0px black;
    }

    .list .keitai {
        margin: 10px;
        color: rgb(255, 94, 0);
        font-weight: bold;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        text-shadow: skyblue 1px 1px 0px, skyblue -1px 1px 0px, skyblue 1px -1px 0px,
        skyblue -1px -1px 0px;

        background: purple;
        padding: 18px;
        box-shadow: 2.5px 2.5px black;
    }

    .list .keitai:hover {
        background: plum;
        transform: translate(1.5px, 1.5px);
        box-shadow: 1px 1px black;
    }

    .list .keitai:active {
        transform: translate(2.5px, 2.5px);
        box-shadow: 0px 0px black;
    }

    .create {
        margin: 10px;
        color: orange;
        font-weight: bold;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        text-shadow: skyblue 1px 1px 0px, skyblue -1px 1px 0px, skyblue 1px -1px 0px,
        skyblue -1px -1px 0px;

        background: green;
        padding: 18px;
        box-shadow: 2.5px 2.5px black;
    }

    .create:hover {
        background: #88dd88;
        transform: translate(1.5px, 1.5px);
        box-shadow: 1px 1px black;
    }

    .create:active {
        transform: translate(2.5px, 2.5px);
        box-shadow: 0px 0px black;
    }
</style>
