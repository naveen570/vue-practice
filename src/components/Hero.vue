<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    default: "Become a Vue Dev",
    type: String,
  },
  description: {
    default: "Find the Vue job that fits your skills and needs",
    type: String,
  },
});
</script>
<template>
  <section class="py-20 mb-4 bg-green-700">
    <div
      class="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
