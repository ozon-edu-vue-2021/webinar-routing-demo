<template>
  <div>
    <h1>Страница с динамическими параметрами из url</h1>
    <h2>isUser: {{ $route.params.isUser }}</h2>
    <h2>id: {{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: "Dynamic",
  props: {
    id: {
      type: String,
    },
  },
};
</script>
