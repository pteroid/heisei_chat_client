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
      <div class="item" v-for="message in messages" :key="message.id">
        <div class="numbox">
          {{message.id}}
        </div>
        <div class="message">
          ✉️{{message.created_at | timeFilter}} {{message.from_user.name}}<br>
          {{message.title}}
        </div>
      </div>
      <!--
            <div class="item">
                ①✉️16:30ソフトバンク<br>
                【お客さま限定】10,000円割引きいいいいい
            </div>
            <div class="item">
                ②✉️4/22ソフトバンク<br>
                請求確定のお知らせ
            </div>
            <div class="item">
                ③✉️4/18ソフトバンク<br>
                【お客さま限定】特別ク
            </div>
            <div class="item">
                ④✉️16:30ソフトバンク<br>
                【お客さま限定】10,000円割引
            </div>
            <div class="item">
                ⑤✉️4/22ソフトバンク<br>
                請求確定のお知らせ
            </div>
            <div class="item">
                ⑥✉️4/18ソフトバンク<br>
                【お客さま限定】特別ク
            </div>
      -->
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
  data() {
    return {
      messages: [
        {
          id: 1,
          from_user: {
            id: 1,
            email: "hoge@ezweb.ne.jp",
            name: "ソフトバンク"
          },
          title: "タイトル",
          content: "本文",
          created_at: "2019-04-27T22:06:25.930712"
        },
        {
          id: 2,
          from_user: {
            id: 3,
            email: "information@i.softban.jp",
            name: "ソフトバンク"
          },
          title: "【お客さま限定】10,000円割引クーポンプレゼント",
          content:
            "\nガラケーをご利用中のお客さま限定で、機種変更に使えるクーポンをプレゼント🎁\n\n【特別クーポン】\n機種代金が税込10,000円割引！\n\n有効期限：5月31日(金)まで\n\n対象機種など詳細はこちらをご確認ください。\nhttp://u.softbank.jp/CsR7dVt\n（アクセスには通信料がかかります）\n\nさらに【スマホスタート割】でガラケーから対象のスマホにすると機種代金が税込10,800円割引になります。※\n\n令和を新しいスマホで迎えよう!\nゴールデンウィークはソフトバンク取扱店へぜひお越しください\n\n\n※ 通話基本プランの2年契約／2年契約（フリープラン）またはハートフレンド割引に加入すること。学割放題との併用はできません。\n",
          created_at: "2019-04-27T22:06:25.936063"
        },
        {
          id: 3,
          from_user: {
            id: 3,
            email: "information@i.softban.jp",
            name: "ソフトバンク"
          },
          title: "【お客さま限定】10,000円割引",
          content:
            "\nガラケーをご利用中のお客さま限定で、機種変更に使えるクーポンをプレゼント🎁\n\n【特別クーポン】\n機種代金が税込10,000円割引！\n\n有効期限：5月31日(金)まで\n\n対象機種など詳細はこちらをご確認ください。\nhttp://u.softbank.jp/CsR7dVt\n（アクセスには通信料がかかります）\n\nさらに【スマホスタート割】でガラケーから対象のスマホにすると機種代金が税込10,800円割引になります。※\n\n令和を新しいスマホで迎えよう!\nゴールデンウィークはソフトバンク取扱店へぜひお越しください\n\n\n※ 通話基本プランの2年契約／2年契約（フリープラン）またはハートフレンド割引に加入すること。学割放題との併用はできません。\n",
          created_at: "2019-04-27T22:06:25.936063"
        }
      ]
    };
  },
  methods: {},
  filters: {
    timeFilter: function(value) {
      if (!value) return "";
      value = new Date(value);
      return value.getHours() + ":" + ("00" + value.getMinutes()).slice(-2);
    }
  }
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
