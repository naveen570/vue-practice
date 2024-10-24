import Homeview from "@/views/Homeview.vue";
import JobDetailView from "@/views/JobDetailView.vue";
import JobsView from "@/views/JobsView.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job Details",
      component: JobDetailView,
    },
  ],
});
export default router;
