<script setup>
import logo from "@/assets/img/logo.png";
import { cn } from "@/lib/utils";
import { useRoute } from "vue-router";
const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/jobs",
    name: "Jobs",
  },
  {
    path: "/add-job",
    name: "Add Job",
  },
];
const isActiveLink = (routePath) => useRoute().path === routePath;
</script>
<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div
          class="flex items-center justify-center flex-1 md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink to="/" class="flex items-center flex-shrink-0 mr-4"
            ><img class="w-auto h-10" v-bind:src="logo" alt="Vue Jobs" />
            <span class="hidden ml-2 text-2xl font-bold text-white md:block"
              >Vue Jobs</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                v-for="navLink in navLinks"
                :key="navLink.name"
                :to="navLink.path"
                :class="
                  cn('px-3 py-2 text-white rounded-md', {
                    'bg-green-900': isActiveLink(navLink.path),
                    'hover:bg-gray-900 hover:text-white': !isActiveLink(
                      navLink.path
                    ),
                  })
                "
              >
                {{ navLink.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
