<script setup>
import jobJsonData from "@/jobs.json";
import { ref } from "vue";
import JobListingCard from "./JobListingCard.vue";
import { RouterLink } from "vue-router";
const jobs = ref(jobJsonData);
defineProps({
  limit: {
    type: Number,
  },
  isShowMoreButtonEnabled: {
    type: Boolean,
  },
});
</script>
<template>
  <section class="px-4 py-10 bg-green-50">
    <div class="m-auto container-xl lg:container">
      <h2 class="mb-6 text-3xl font-bold text-center text-green-500">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListingCard
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          v-bind="job"
        />
      </div>
    </div>
  </section>
  <section
    class="max-w-lg px-6 m-auto my-10"
    v-if="isShowMoreButtonEnabled === true"
  >
    <RouterLink
      to="/jobs"
      class="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
