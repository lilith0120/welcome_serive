<template>
  <div id="other">
    <div id="title_bar">
      <div id="title_body">
        <div id="title_front">
          <img
            class="back_icon"
            src="../assets/image/back.png"
            @click="go_back"
          />
          <span id="title_label">加了血赚的组织</span>
        </div>
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
        @click="go_next(item.accountId, item.departmentName)"
      >
        <span class="item_name">{{ item.departmentName }}</span>
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
      items: [],
    };
  },

  created() {
    this.$axios({
      method: "get",
      url: "/app/account/excellent",
    }).then((re) => {
      // console.log(re);
      this.items = re.data;
    });
  },

  methods: {
    go_back() {
      this.$router.go(-1);
    },

    go_search() {
      this.$router.push("/search/other/0");
    },

    go_next(id, name) {
      this.$router.push({ path: `/details/${id}/${name}` });
    },
  },
};
</script>

<style scoped>
#other {
  height: 100vh;
  overflow: hidden;
}

#title_bar {
  border: #fff 1px solid;
  box-sizing: border-box;
  width: 375px;
  height: 61px;
}

#title_body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 325px;
  height: 25px;
  margin: 0 auto;
  margin-top: 19px;
}

#title_front {
  display: flex;
  align-items: center;
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
  width: 18px;
  height: 18px;
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