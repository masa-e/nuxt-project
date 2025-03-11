<script setup>
const config = useRuntimeConfig();
const { data, error } = await useFetch(`${config.public.apiBase}/example`);
if (error.value) {
  console.error("API Error:", error.value);
}
</script>

<template>
  <div>
    <h1>API Response:</h1>
    <p>{{ data?.message }}</p>
  </div>
</template>
