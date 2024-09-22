<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">导航栏</a-layout-header>
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
  background: red;
  margin-bottom: 16px;
}
#basicLayout .content {
  background: linear-gradient(to right, #aaa, #fff);
  margin-bottom: 16px;
}
#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: absolute;
  bottom: 0%;
  left: 0%;
  right: 0%;
  text-align: center;
}
</style>
