<template>
  <div id="second_main">
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
      <div id="title_tag">
        <div id="box1" :class="{ box_show: !isDepartment }">
          <div id="box2"></div>
        </div>
        <div
          id="department"
          class="tags"
          :class="{ tag: isDepartment, tag_p1: !isDepartment }"
          @click="go_department"
        >
          部门
        </div>
        <div id="box3" :class="{ box_none: !isDepartment }">
          <div id="box4"></div>
        </div>
        <div id="box5" :class="{ box_none: isDepartment }">
          <div id="box6"></div>
        </div>
        <div
          class="tags"
          :class="{ tag: !isDepartment, tag_p2: isDepartment }"
          @click="go_league"
        >
          社团
        </div>
        <div id="box7" :class="{ box_show: isDepartment }">
          <div id="box8"></div>
        </div>
      </div>

      <div id="main_content">
        <template v-if="isDepartment">
          <div
            class="item_list"
            v-for="(department, index) in departments"
            :key="index"
            @click="go_next(department)"
          >
            <span class="item_name">{{ department.parentName }}</span>
            <img class="next_icon" src="../assets/image/next.png" />
          </div>
        </template>

        <template v-else>
          <div
            class="item_list"
            v-for="(league, index) in leagues"
            :key="index"
            @click="go_next(league)"
          >
            <span class="item_name">{{ league.departmentName }}</span>
            <img class="next_icon" src="../assets/image/next.png" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Second_main",

  data() {
    return {
      college_id: this.$route.params.id,
      title: this.$route.params.name,
      isDepartment: true,
      departments: [],
      leagues: [],
    };
  },

  created() {
    let league_url;
    if (this.title == "校级") {
      league_url = `/app/account?mark=2&collegeId=${this.college_id}`;
    } else {
      league_url = `/app/account?mark=0&collegeId=${this.college_id}`;
    }

    // 获取部门
    this.$axios({
      method: "get",
      url: `/app/parent/college/${this.college_id}`,
    }).then((re) => {
      // console.log(re);
      this.departments = re.data;
    });

    // 获取社团
    this.$axios({
      method: "get",
      url: league_url,
    }).then((re) => {
      // console.log(re);
      this.leagues = re.data;
    });
  },

  methods: {
    go_back() {
      this.$router.go(-1);
    },

    go_search() {
      if (this.isDepartment) {
        this.$router.push(`/search/second/${this.college_id}`);
      } else {
        this.$router.push(`/search/league/${this.college_id}`);
      }

      let mark;
      if (this.title == "校级" && !this.isDepartment) {
        mark = 2;
      } else if (this.title != "校级" && !this.isDepartment) {
        mark = 0;
      }

      localStorage.setItem("mark", mark);
    },

    go_next(item) {
      if (this.isDepartment) {
        let id = item.parentId;
        let name = item.parentName;
        this.$router.push(`/next/${id}/${name}`);
      } else {
        let id = item.accountId;
        let name = item.departmentName;
        this.$router.push({ path: `/details/${id}/${name}` });
      }
    },

    go_department() {
      this.isDepartment = true;
    },

    go_league() {
      this.isDepartment = false;
    },
  },
};
</script>

<style scoped>
#second_main {
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
  width: 375px;
  background-color: #fff;
}

#title_tag {
  display: flex;
  height: 35px;
  width: 375px;
  background-color: #f8f8f8;
}

.tags {
  font-size: 15px;
  color: #1089ff;
  height: 35px;
  padding: 7px 0;
}

.tag {
  padding-left: 22px;
  padding-right: 22px;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
}

.tag_p1 {
  padding-left: 22px;
  padding-right: 7px;
}

.tag_p2 {
  padding-left: 7px;
  padding-right: 22px;
}

#box1 {
  margin-left: 9px;
}

#box2,
#box6 {
  border-radius: 0 0 15px 0;
  background-color: #f8f8f8;
  width: 15px;
  height: 15px;
}

#box1,
#box3,
#box5,
#box7 {
  margin-top: 20px;
  width: 15px;
  height: 15px;
  background-color: #fff;
}

#box4,
#box8 {
  border-radius: 0 0 0 15px;
  background-color: #f8f8f8;
  width: 15px;
  height: 15px;
}

.box_show {
  visibility: hidden;
}

.box_none {
  display: none;
}

#main_content {
  padding-top: 9px;
  width: 375px;
  height: calc(100vh - 96px);
  overflow: auto;
}

.item_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  width: 300px;
  margin-left: 32px;
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