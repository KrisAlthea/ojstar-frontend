<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<template>
  <a-layout style="height: 400px">
    <a-layout-header>
      <GlobalHeader />
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <a-layout-footer>OJ Star</a-layout-footer>
  </a-layout>
</template>

<style scoped></style>
