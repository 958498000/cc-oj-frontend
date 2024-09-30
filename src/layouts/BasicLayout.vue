<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"> <GlobalHeader /></a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">oj项目 bycc</a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
#basicLayout {
}
#basicLayout .header {
  box-shadow: #eee 1px 1px 5px;
  margin-bottom: 16px;
}
#basicLayout .content {
  background: linear-gradient(to right, #aaa, #fff);
  margin-bottom: 16px;
  padding: 20px;
}
#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0%;
  left: 0%;
  right: 0%;
  text-align: center;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";
export default {
  components: {
    GlobalHeader,
  },
};
</script>
