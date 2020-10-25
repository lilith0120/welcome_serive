<template>
  <div id="other">
    <div id="title_bar">
      <div id="title_body">
        <img
          class="back_icon"
          src="../assets/image/back.png"
          @click="go_back"
        />
        <span id="title_label">加了血赚的组织</span>
        <img
          class="search_icon"
          src="../assets/image/search.png"
          @click="go_search"
        />
      </div>
    </div>

    <div id="main_body">
      <div
        class="item_list"
        :class="{ isTop: index == 0 ? true : false }"
        v-for="(item, index) in items"
        :key="index"
        @click="go_next(item.name)"
      >
        <span class="item_name">{{ item.name }}</span>
        <img class="next_icon" src="../assets/image/next.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Other",

  data() {
    return {
      items: [
        {
          name: "西二在线工作室",
        },
        {
          name: "校学生会 外联部",
        },
        {
          name: "校团委",
        },
        {
          name: "易班工作站",
        },
      ],
    };
  },

  //   created() {
  //       this.$axio({
  //           method: '',
  //           url: ''
  //       }).then(re => {
  //           console.log(re);
  //       })
  //   },

  methods: {
    go_back() {
      this.$router.go(-1);
    },

    go_search() {
      this.$router.push("search");
    },

    go_next(name) {
      console.log(name);
    },
  },
};
</script>

<style scoped>
#title_bar {
  border: #fff 1px solid;
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

.search_icon {
  margin-left: 145px;
  width: 18px;
  height: 18px;
}

#main_body {
  padding-top: 9px;
  min-height: 711px;
  width: 375px;
  border-radius: 0px 40px 0px 0px;
  background-color: #fff;
}

.item_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  width: 300px;
  padding: 17px 43px 17px 32px;
}

.isTop {
  background-color: rgba(244, 244, 244, 0.25);
}

.item_name {
  font-size: 16px;
}

.next_icon {
  width: 10px;
  height: 16px;
}
</style>