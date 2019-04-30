<template>
  <div>
    <div class="submit">
      <center>
        <div class="SentHeader">メッセージを送信</div>
        <div class="to">
          宛先
          <br>
          <input>
        </div>
        <div class="m_contents">
          本文
          <br>
          <textarea name="textbox" id="textbox" cols="30" rows="3"></textarea>
        </div>
        <button>送信</button>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendMessage"
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
  transform: translate(-2px, -2px) scale(1.3,1.2);
  box-shadow: 5px 5px black;
  background: url(../assets/img_main-bg.gif);
}
.submit button:active {
  color: aliceblue;
  transform: translate(2px, 2px) scale(1.3,1.2);
  box-shadow: 1px 1px black;
}
.submit button:focus {
  outline: 0px;
}
</style>
