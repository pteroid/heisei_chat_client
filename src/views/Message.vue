<template>
    <div>
        <div class="submit">
            <center>
                <div class="SentHeader">メッセージを送信</div>
                <div class="to">
                    宛先
                    <br>
                    <input v-model="number_or_email">
                </div>
                <div class="m_contents">
                    本文
                    <br>
                    <textarea v-model="content" name="textbox" id="textbox" cols="30" rows="3"></textarea>
                </div>
                <button @click="send">送信</button>
            </center>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SendMessage",
        data() {
            return {
                number_or_email: "",
                content: "",
            }
        },
        methods: {
            async send() {
                if (isNaN(this.number_or_email)) {
                    // 文字列
                    await axios.post('http://localhost:5042/keitai/messages/send', {
                        from_email: this.$store.state.userInfo.email,
                        to_email: this.number_or_email,
                        moji_type: 'emoji',
                        title: "平成の終わりから送信",
                        content: this.content,
                    })
                    console.log('メール送信')
                } else {
                    // 数値
                    await axios.post('http://localhost:5042/pokebel/messages/send', {
                        from_number: Number(this.$store.state.userInfo.number),
                        to_number: Number(this.number_or_email),
                        content: this.content,
                    })
                    console.log('メール送信')
                }
            }
        },

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
        }
    };
</script>
<style>
    .SentHeader {
        text-shadow: yellow 3px 3px 0px;
    }

    .submit {
        width: 40%;
        background: lightgreen;
        color: orange;
        text-shadow: yellow 1px 1px 0px;
        font-size: 40px;
        font-weight: bold;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        margin: 60px;
        padding: 30px;
    }

    .to {
        color: orange;
        font-size: 30px;
        font-weight: bold;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        margin: 30px;
    }

    .to input {
        width: 80%;
        border: inset 10px gray;
        font-weight: bold;
        font-size: 25px;
        padding: 10px;
        color: #333;
        box-shadow: 3px 3px;
        transition: 0.1s;
    }

    .to input:hover {
        transform: translate(-2px, -2px);
        outline: 0px;
        box-shadow: 5px 5px;
    }

    .to input:focus {
        transform: translate(2px, 2px);
        outline: 0px;
        box-shadow: 1px 1px;
    }

    .m_contents {
        color: orange;
        font-size: 30px;
        font-weight: bold;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: none;
        margin: 30px;
    }

    .m_contents textarea {
        width: 80%;
        border: inset 10px gray;
        font-weight: bold;
        font-size: 25px;
        padding: 10px;
        color: #333;
        box-shadow: 3px 3px;
        transition: 0.1s;
        resize: none;
    }

    .m_contents textarea:hover {
        transform: translate(-2px, -2px);
        outline: 0px;
        box-shadow: 5px 5px;
    }

    .m_contents textarea:focus {
        transform: translate(2px, 2px);
        outline: 0px;
        box-shadow: 1px 1px;
    }

    .submit button {
        width: 120px;
        border: inset 10px gray;
        font-size: 30px;
        font-weight: bold;
        color: #333;
        box-shadow: 3px 3px black;
        transition: 0.1s;
    }

    .submit button:hover {
        color: aliceblue;
        transform: translate(-2px, -2px) scale(1.3, 1.2);
        box-shadow: 5px 5px black;
        background: url(../assets/img_main-bg.gif);
    }

    .submit button:active {
        color: aliceblue;
        transform: translate(2px, 2px) scale(1.3, 1.2);
        box-shadow: 1px 1px black;
    }

    .submit button:focus {
        outline: 0px;
    }
</style>
