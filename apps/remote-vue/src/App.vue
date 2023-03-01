<template>
  <div class="vue-container">
    <div></div>
    <div class="vue-title">
      <span>Vue version: </span>
      <span> {{ version }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { version } from 'vue';
</script>

<style lang="scss">
@use 'styles' as *;
.vue-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .vue-title {
    padding: 16px 32px;
    border: 1px solid wheat;
    color: black;
    font-weight: bold;
  }
}
</style>
