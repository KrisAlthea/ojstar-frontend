<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import accessEnum from "@/access/accessEnum";
import { onMounted } from "vue";

/**
 * 全局初始化函数, 全局单次调用
 */
const doInit = () => {
  console.log("hello, first init");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  if (to.meta?.access === accessEnum.ADMIN) {
    if (store.state.user.loginUser?.role !== "admin") {
      next({ path: "/noAuth" });
      return;
    }
  } else {
    next();
  }
});
</script>
