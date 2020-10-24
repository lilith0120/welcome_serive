<template>
  <div id="app">
    <transition :name="transition_name">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      transition_name: "slide-left",
    };
  },

  watch: {
    $route(to, from) {
      // 通过判断路由自定义的级别来判断是转入还是转出
      if (to.meta.level > from.meta.level || from.meta.level == undefined) {
        this.transition_name = "slide-left";
      } else {
        this.transition_name = "slide-right";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  position: relative;
}

html,
body {
  height: 100%;
  width: 100%;
  font-family: "PingFang SC";
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s;
  width: 100%;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>