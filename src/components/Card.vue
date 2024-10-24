<script setup>
import { defineProps } from "vue";
defineProps({
  bg: {
    default: "bg-gray-100",
    type: String,
  },
});
</script>
<template>
  <div :class="`p-6 ${bg} rounded-lg shadow-md`">
    <slot />
  </div>
</template>
