<template>
  <div id="home">
    <div id="title_bar">
      <div id="title_body">
        <img
          class="back_icon"
          src="../assets/image/back.png"
          @click="go_back"
        />
        <span id="title_label">新生宝典</span>
      </div>
    </div>

    <div id="main_body">
      <div class="item_list" @click="go_other()">
        <div class="item_name">
          <img class="other_icon" src="../assets/image/other.png" />
          加了血赚的组织
        </div>
        <img class="next_icon" src="../assets/image/next.png" />
      </div>

      <div class="item_list" @click="go_main()">
        <div class="item_name">
          <img class="main_icon" src="../assets/image/main.png" />
          社团与部门
        </div>
        <img class="next_icon" src="../assets/image/next.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    go_back() {
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

      if (isAndroid) {
        window.yingxin.FinishFragment("finish");
        // console.log("android");
      } else if (isIOS) {
        // window.webkit.messageHandlers.[方法名].postMessage();
        console.log("ios");
      }
    },

    go_other() {
      this.$router.push("other");
    },

    go_main() {
      this.$router.push("main");
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  background-color: #f8f8f8;
  overflow: hidden;
}

#title_bar {
  border: #f8f8f8 1px solid;
  box-sizing: border-box;
  width: 375px;
  height: 61px;
}

#title_body {
  display: flex;
  align-items: center;
  width: 325px;
  height: 25px;
  margin: 0 auto;
  margin-top: 19px;
}

.back_icon {
  width: 10px;
  height: 19px;
}

#title_label {
  margin-left: 26px;
  font-size: 18px;
}

#main_body {
  padding-top: 9px;
  height: calc(100vh - 61px);
  width: 375px;
  border-radius: 0px 40px 0px 0px;
  background-color: #fff;
  overflow: auto;
}

.item_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  padding: 17px 0;
}

.item_name {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.next_icon {
  width: 10px;
  height: 16px;
  margin-right: 43px;
}

.other_icon {
  width: 19px;
  height: 19px;
  margin-left: 30px;
  margin-right: 23px;
}

.main_icon {
  width: 17px;
  height: 17px;
  margin-left: 31px;
  margin-right: 24px;
}
</style>
