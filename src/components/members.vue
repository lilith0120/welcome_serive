<template>
  <div id="members">
    <div id="title_bar">
      <div id="title_body">
        <div id="title_front">
          <img
            class="back_icon"
            src="../assets/image/back.png"
            @click="go_back"
          />
          <span id="title_label">主要成员</span>
        </div>
      </div>
    </div>

    <div id="main_body">
      <div class="item_list" v-for="(member, index) in members" :key="index">
        <div class="item_front">
          <span class="item_name">{{ member.memberName }}</span>
          <span class="item_college">{{ member.college.collegeName }}</span>
        </div>
        <span class="item_position">{{ member.job }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Members",

  data() {
    return {
      members: [
        {
          name: "王大不大",
          college: "经济管理学院",
          position: "部长",
        },
        {
          name: "王八",
          college: "数学与计算机科学学院",
          position: "普通成员",
        },
      ],
    };
  },

  created() {
    this.$axios({
      method: "get",
      url: `/app/member/department/${this.$route.params.id}`,
    }).then((re) => {
      console.log(re);
      this.members = re.data;
    });
  },

  methods: {
    go_back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
#members {
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
  margin-left: 24px;
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

#main_body {
  padding-top: 9px;
  min-height: 711px;
  width: 375px;
  background-color: #fff;
}

.item_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 17px 32px 16px 32px;
  border-bottom: 1px #f8f8f8 solid;
}

.item_front {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 48px;
}

.item_name {
  font-size: 16px;
}

.item_college {
  font-size: 12px;
  color: #727272;
}

.item_position {
  font-size: 16px;
  color: #1089ff;
}
</style>