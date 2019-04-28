<template>
    <div class="keitai">
        <div style="background-color:#222; border-radius:1em; padding:14px; width:250px">
            <div class="display">
                <router-view/>
            </div>
        </div>

        <div style="background-color:#222; border-radius:1em; padding:14px;width:250px">
        </div>

        <div style="background-color:#222; border-radius:1em; padding:14px;width:250px">
            <div style="color:#fff; background-color:#333; margin:5px; padding:5px; padding-left:15px; padding-right:15px;height:400px; border-radius:1em;display:flex; flex-direction: column">
                <div class="mainkey">
                    <div class="side">
                        <div class="button">
                            📖
                        </div>
                        <div class="button">
                            ✉️
                        </div>
                    </div>
                    <div class="center">

                    </div>
                    <div class="side">
                        <div class="button">
                            アプ
                        </div>
                        <div class="button">
                            ✉️
                        </div>
                    </div>
                </div>

                <div class="tenkey">
                    <div class="row">
                        <div class="col">1あ</div>
                        <div class="col">2か</div>
                        <div class="col">3さ</div>
                    </div>
                    <div class="row">
                        <div class="col">4た</div>
                        <div class="col">5な</div>
                        <div class="col">6は</div>
                    </div>
                    <div class="row">
                        <div class="col">7ま</div>
                        <div class="col">8や</div>
                        <div class="col">9ら</div>
                    </div>
                    <div class="row">
                        <div class="col">*</div>
                        <div class="col">0わ</div>
                        <div class="col">#</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Keitai"
    }
</script>

<style scoped>
    .display {
        margin: 5px;
        width: 240px;
        height: 427px;
    }


    .mainkey {
        display: flex;
    }

    .mainkey .center {
        width: 60%;
    }

    .mainkey .side {
        display: flex;
        flex-direction: column;
        width: 20%;
    }


    .tenkey {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 70%;
    }

    .tenkey .row {
        display: flex;
        width: 100%;
        height: 33%;
    }

    .tenkey .row .col {
        width: 33%;
        text-align: center;
        line-height: 100px;
    }
</style>
