<script setup lang="ts"></script>

<template>
  <a-layout id="userLayout" style="min-height: 100vh">
    <a-layout-header class="header">
      <a-space>
        <img src="../assets/logo.png" class="logo" />
        <div>OJ Star</div>
      </a-space>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer"> OJ Star by Ryan</a-layout-footer>
  </a-layout>
</template>

<style scoped>
#userLayout {
  text-align: center;
}

#userLayout .logo {
  height: 32px;
  margin-right: 16px;
}

#userLayout .header {
  margin-top: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  background: antiquewhite;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
