<template>
  <div id="details">
    <div id="title_bar">
      <div id="title_body">
        <img
          class="back_icon"
          src="../assets/image/back.png"
          @click="go_back"
        />

        <img class="share_icon" src="../assets/image/share.png" />
      </div>

      <div id="logo" :class="{ no_logo: logo == '' }">
        <img class="logo_image" :src="logo" />
      </div>

      <div id="title_detail">
        <div id="title_name">{{ name }}</div>
        <div id="title_level">{{ level }}</div>
      </div>
    </div>

    <div id="main_body">
      <div class="group" :class="{ no_group: group_num == '' }">
        <img class="group_icon" src="../assets/image/group_num.png" />
        <span id="group_label">纳新群号:</span>
        <span id="group_num" @click="go_num()">{{ group_num }}</span>
      </div>

      <div class="link" :class="{ no_link: link == '' }">
        <img class="link_icon" src="../assets/image/link.png" />
        <span id="link_label">报名链接:</span>
        <span id="link_num" @click="go_link()">{{ link }}</span>
      </div>

      <div class="star" :class="{ no_star: star_level == 0 }">
        <img class="star_icon" src="../assets/image/star_level.png" />
        <span id="star_label">组织星级:</span>
        <span v-for="i in star_level" :key="i">
          <img class="star_level_icon" src="../assets/image/star.png" />
        </span>
      </div>

      <div class="member" :class="{ no_member: members.length == 0 }">
        <img class="member_icon" src="../assets/image/member.png" />
        <span id="member_label">主要成员:</span>
        <span id="member_num" @click="go_member()">点击查看</span>
      </div>

      <div class="introduct">
        <div id="introduct_front">
          <img class="introduct_icon" src="../assets/image/introduct.png" />
          <span id="introduct_label">部门介绍</span>
        </div>

        <div id="introduct_end">{{ introduction }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",

  data() {
    return {
      id: 3,
      accountId: 100018,
      level: "校级社团",
      star_level: 0,
      group_num: "",
      link: "",
      logo: "",
      name: "KPLAY酷玩街舞协会",
      introduction:
        "      KPLAY酷玩街舞协会创建于2005年，拥有五个部门与五个舞种，主要发展街舞文化，与校外的街舞爱好者进行沟通交流。是校内各大小舞台的常客，为大家提供了一个舞蹈交流的平台。我们协会现主打Breaking、Popping、Jazz、Hiphop以及Locking，每周周一到周五都有各个舞种的课程！在众多的舞蹈风格中，总有一个适合你、打动你。相信对生活充满热情的你们肯定会喜欢！",
      members: [],
    };
  },

  // created() {
  //   this.$axios({
  //     method: "",
  //     url: "",
  //   }).then((re) => {
  //     console.log(re);
  //     let file = re.introductionDoc.file[0];
  //     let reader = new FileReader();
  //     reader.readAsText(file);
  //     reader.onload = (e) => {
  //       this.introduction = e.target.result;
  //     };
  //   });
  // },

  methods: {
    go_back() {
      this.$router.go(-1);
    },

    go_num() {
      console.log(this.group_num);
    },

    go_link() {
      window.location.href = this.link;
    },

    go_member() {
      this.$router.push(`/member/${this.id}/${this.name}`);
    },
  },
};
</script>

<style scoped>
#details {
  background-color: #f8f8f8;
}

#title_bar {
  border: #f8f8f8 1px solid;
  box-sizing: border-box;
  width: 375px;
}

#title_body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 324px;
  height: 20px;
  margin-left: 25px;
  margin-top: 26px;
}

.back_icon {
  width: 10px;
  height: 19px;
}

.share_icon {
  width: 18px;
  height: 18px;
}

#logo {
  margin: 11px 155px 0 156px;
}

.logo_image {
  width: 64px;
  height: 64px;
}

#title_detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#title_name {
  margin-top: 12px;
  font-size: 16px;
}

#title_level {
  margin: 12px 0 20px 0;
  color: #1089ff;
  font-size: 12px;
}

#main_body {
  border: 1px #fff solid;
  box-sizing: border-box;
  background-color: #fff;
  width: 375px;
  min-height: 570px;
  border-radius: 40px 40px 0 0;
}

.group,
.link,
.star,
.member {
  display: flex;
  align-items: center;
  margin-left: 29px;
  padding: 16px 0;
  border-bottom: 1px #f8f8f8 solid;
}

.introduct {
  margin-left: 29px;
  padding: 16px 0;
}

.group_icon,
.link_icon,
.star_icon,
.member_icon,
.introduct_icon {
  width: 20px;
  height: 20px;
}

#group_label,
#link_label,
#star_label,
#member_label,
#introduct_label {
  margin-left: 23px;
  margin-right: 22px;
  font-size: 16px;
}

#group_num,
#link_num,
#member_num {
  font-size: 16px;
  color: #1089ff;
  text-decoration: underline;
}

.star_level_icon {
  margin-right: 15px;
  width: 15px;
  height: 15px;
}

#introduct_front {
  display: flex;
  align-items: center;
}

#introduct_end {
  width: 315px;
  margin-top: 16px;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 20px;
  font-size: 14px;
  color: #9a9a9a;
}

.no_logo,
.no_group,
.no_link,
.no_star,
.no_member {
  display: none;
}
</style>