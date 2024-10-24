<script setup>
import { computed, defineProps, ref } from "vue";
const props = defineProps({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  salary: {
    type: String,
  },
  company: {
    type: Object,
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    contactEmail: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
  },
});
const showFullDescription = ref(false);
const computedDescription = computed(() => {
  let description = props.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 100) + " ...";
  }
  return description;
});
</script>
<template>
  <div class="relative bg-white shadow-md rounded-xl">
    <div class="p-4">
      <div class="mb-6">
        <div class="my-2 text-gray-600">{{ type }}</div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>

      <div class="mb-5">
        {{ computedDescription }}
        <button
          @click="showFullDescription = !showFullDescription"
          class="text-green-500"
        >
          {{ showFullDescription ? "less" : "more" }}
        </button>
      </div>

      <h3 class="mb-2 text-green-500">{{ salary }}</h3>

      <div class="mb-5 border border-gray-100"></div>

      <div class="flex flex-col justify-between mb-4 lg:flex-row">
        <div class="mb-3 text-orange-700">
          <i class="text-lg pi pi-map-marker"></i>
          {{ location }}
        </div>
        <RouterLink
          :to="`/jobs/${id}`"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >Read More</RouterLink
        >
      </div>
    </div>
  </div>
</template>
