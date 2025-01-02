<template>
  <div id="app">
    <router-view></router-view>  <!-- 这里渲染根据路由匹配的组件 -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
</script>

<style>
/* 这里可以添加样式 */
</style>
