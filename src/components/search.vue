<template>
  <div id="search">
    <div id="title_bar">
      <div id="title_body">
        <img
          class="back_icon"
          src="../assets/image/back.png"
          @click="go_back"
        />

        <div id="key">
          <input
            ref="key_input"
            class="key_input"
            required="required"
            placeholder="请输入关键词搜索"
            v-model="key"
            @keyup="search"
          />
          <a href="javascript:;" class="clear_input">
            <img
              src="../assets/image/clear.png"
              class="clear_icon"
              @click="clear_text"
            />
          </a>
        </div>
      </div>
    </div>

    <template v-if="!isSearch">
      <div id="before_search">
        <div id="history_label">历史搜索</div>
        <div id="history_tag">
          <span
            class="tag"
            v-for="(tag, index) in tags"
            :key="index"
            @click="go_tag(tag.name)"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
    </template>

    <template v-else>
      <div id="search_result">
        <div
          class="item_list"
          v-for="(item, index) in items"
          :key="index"
          @click="go_next(item)"
        >
          <span class="item_name">{{
            path == "main"
              ? item.collegeName
              : path == "second"
              ? item.parentName
              : item.departmentName
          }}</span>
          <img class="next_icon" src="../assets/image/next.png" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      id: this.$route.params.id,
      path: this.$route.params.from,
      key: "",
      tags: [],
      items: [],
      isSearch: false,
    };
  },

  created() {
    this.tags = JSON.parse(localStorage.getItem("result"));
  },

  methods: {
    go_back() {
      this.$router.go(-1);
    },

    clear_text() {
      if (this.key != "") {
        let item = {
          name: this.key,
        };

        if (this.tags == null) {
          this.tags = [];
          this.tags.push(item);
        } else {
          this.tags.splice(0, 0, item);
        }

        if (this.tags.length >= 7) {
          this.tags.pop();
        }
      }

      this.key = "";
      this.$refs.key_input.focus();
      this.isSearch = false;
    },

    search(event) {
      if (event.keyCode == 13) {
        this.go_tag(this.key);
      }
    },

    go_tag(name) {
      this.key = name;
      this.items = [];
      this.isSearch = true;

      let url;
      let mark = localStorage.getItem("mark");
      if (this.path == "main") {
        url = `/app/college?collegeName=${this.key}`;
      } else if (this.path == "other") {
        url = `/app/account/excellent?fuzzyName=${this.key}`;
      } else if (this.path == "next") {
        url = `/app/account/parent/${this.id}?fuzzyName=${this.key}`;
      } else if (this.path == "second") {
        url = `/app/parent/college/${this.id}?fuzzyName=${this.key}`;
      } else if (this.path == "league") {
        url = `/app/account?fuzzyName=${this.key}&mark=${mark}&collegeId=${this.id}`;
      }

      let result = [];
      if (localStorage.getItem("result")) {
        result = JSON.parse(localStorage.getItem("result"));
      }

      if (result != null && result.length >= 7) {
        result.pop();
      }

      let item = {
        name: this.key,
      };
      result.splice(0, 0, item);
      localStorage.setItem("result", JSON.stringify(result));

      this.$axios({
        method: "get",
        url: url,
      }).then((re) => {
        // console.log(re);
        this.items = re.data;
      });
    },

    go_next(item) {
      let id =
        this.path == "main"
          ? item.collegeId
          : this.path == "second"
          ? item.parentId
          : item.accountId;
      let name =
        this.path == "main"
          ? item.collegeName
          : this.path == "second"
          ? item.parentName
          : item.departmentName;

      if (this.path == "main") {
        this.$router.push({ path: `/${id}/${name}` });
      } else if (this.path == "second") {
        this.$router.push(`/next/${id}/${name}`);
      } else {
        this.$router.push({ path: `/details/${id}/${name}` });
      }
    },
  },
};
</script>

<style scoped>
#search {
  background-color: #f8f8f8;
}

#title_bar {
  border: #f8f8f8 1px solid;
  box-sizing: border-box;
  width: 375px;
  height: 63px;
}

#title_body {
  display: flex;
  align-items: center;
  width: 318px;
  height: 35px;
  margin: 14px 33px 0 24px;
}

.back_icon {
  width: 10px;
  height: 19px;
}

#key {
  display: flex;
  width: 284px;
  height: 35px;
  margin-left: 24px;
  border-radius: 18px;
  background-color: #fff;
}

.key_input {
  margin-left: 25px;
  width: 218px;
  height: 35px;
  border: none;
  font-size: 14px;
}

.clear_icon {
  margin-top: 10px;
  width: 16px;
  height: 16px;
}

.clear_input {
  display: none;
}

.key_input:valid + .clear_input {
  display: block;
}

.key_input:focus {
  border: none;
  outline: none;
}

.key_input::-webkit-input-placeholder {
  color: #9e9e9e;
}

#before_search,
#search_result {
  width: 375px;
}

#before_search {
  min-height: calc(100vh - 63px);
}

#history_label {
  margin-left: 25px;
  font-size: 14px;
  color: #9e9e9e;
}

#history_tag {
  display: flex;
  flex-wrap: wrap;
  margin: 10.5px 33px 0 21px;
  width: 313px;
}

.tag {
  font-size: 14px;
  color: #9e9e9e;
  margin: 13.5px 4px;
  padding: 8px 15px;
  max-width: 100px;
  border-radius: 18px;
  background-color: #f2f2f2;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#search_result {
  padding-top: 9px;
  /* min-height: 711px; */
  background-color: #fff;
  border-radius: 0 40px 0 0;
}

.item_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  width: 301px;
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