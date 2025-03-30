<script setup>
const config = useRuntimeConfig();
const apiUrl = `${config.public.apiBase}/example`;

const { data, error } = await useFetch(apiUrl);

if (error.value) {
  console.error("API Error:", error.value);
}

const newExample = ref({
  name: "Test Name",
  description: "Test Description"
});

const sendData = async () => {
  try {
    const response = await $fetch(apiUrl, {
      method: "POST",
      body: newExample.value
    });
    console.log("API Response:", response);
  } catch (error) {
    console.error("API Error:", error);
  }
};
</script>

<template>
  <div>
    <h1>API Response:</h1>
    <p>{{ data[0].name }}</p>
    <button @click="sendData">Send Data</button>
  </div>
</template>
