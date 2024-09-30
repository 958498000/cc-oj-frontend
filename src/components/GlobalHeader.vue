<template>
  <div>
    <a-row id="globalHeader" align="center" :wrap="false">
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="@\assets\logo.png" />
              <div class="title">ccoj</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in routes" :key="item.path">{{
            item.name
          }}</a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
        <div>
          {{ store.state.user?.loginUser?.userName ?? "未登录" }}
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute, routeLocationKey } from "vue-router";
import { routes } from "../router/routes";
import { ref } from "vue";
import { useStore } from "vuex";
const router = useRouter();
const route = useRoute();

//默认主页
const selectedKeys = ref(["/"]);
//路由跳转后更新选中菜单
router.afterEach((to, from, each) => {
  selectedKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
const store = useStore();
console.log();
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "西西",
    role: "admin",
  });
}, 3000);
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}
.logo {
  height: 48px;
}
.title {
  color: #444;
  margin-left: 10px;
  font-weight: 700;
}
</style>
