<script setup>
import { onMounted, ref } from "vue";

const categories = ref(["vue", "react", "svelte"]);
const newCategory = ref("aaaa");
const handleCategory = () => {
  if (newCategory.value.trim() === "") return;
  categories.value.push(newCategory.value);
  newCategory.value = "";
};
const removeCategory = (index = 0) => {
  categories.value.splice(index, 1);
};
onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  data.map((x) => categories.value.push(x.title));
});
</script>

<template>
  <h1>{{ `Hello ${categories.length}` }}</h1>
  <form @submit.prevent="handleCategory">
    <input type="text" v-model="newCategory" />
    <button type="submit">add Category</button>
  </form>
  <ul>
    <li v-for="(category, index) in categories" :key="category">
      <div class="flex items-center py-3 gap-3">
        <span>{{ category.toUpperCase() }}</span>
        <button @click="removeCategory(index)">X</button>
      </div>
    </li>
  </ul>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
