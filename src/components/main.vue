<template>
  <div id="main">
    <div id="title_bar">
      <div id="title_body">
        <div id="title_front">
          <img
            class="back_icon"
            src="../assets/image/back.png"
            @click="go_back"
          />
          <span id="title_label">{{ title }}</span>
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
        v-for="(item, index) in items"
        :key="index"
        @click="go_next(item)"
      >
        <span class="item_name">{{
          title == "部门与社团" ? item.collegeName : item.departmentName
        }}</span>
        <img class="next_icon" src="../assets/image/next.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {
      parent_id: this.$route.params.id,
      title:
        this.$route.params.name == undefined
          ? "部门与社团"
          : this.$route.params.name,
      items: [],
    };
  },

  created() {
    let url;
    if (this.$route.params.name == undefined) {
      url = "/app/college";
    } else {
      url = `/app/account/parent/${this.parent_id}`;
    }

    this.$axios({
      method: "get",
      url: url,
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
      if (this.$route.params.name == undefined) {
        this.$router.push({ path: "/search/main/0" });
      } else {
        this.$router.push({ path: `/search/next/${this.parent_id}` });
      }
    },

    go_next(item) {
      let id = item.collegeId;
      let name = item.collegeName;
      if (this.$route.params.name == undefined) {
        this.$router.push({ path: `/${id}/${name}` });
      } else {
        id = item.accountId;
        name = item.departmentName;
        this.$router.push({ path: `/details/${id}/${name}` });
      }
    },
  },
};
</script>

<style scoped>
#main {
  background-color: #f8f8f8;
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
  /* min-height: 711px; */
  width: 375px;
  border-radius: 0px 40px 0px 0px;
  background-color: #fff;
}

.item_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  width: 301px;
  margin-left: 31px;
  margin-right: 43px;
  padding: 17px 0;
}

.item_name {
  font-size: 16px;
}

.next_icon {
  width: 10px;
  height: 16px;
}
</style>