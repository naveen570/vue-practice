<script setup>
import { useRoute } from "vue-router";

const router = useRoute();
console.log(router.params.id);
const currentJobId = router.params.id;
</script>
<template>
  <div>{{ currentJobId }}</div>
</template>
