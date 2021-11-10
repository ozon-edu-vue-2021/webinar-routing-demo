<template>
  <div>
    Вложенная страница с параметрами из url:
    <p>id: {{ id }}</p>
    <div>
      <router-view :prop-to-child="parseInt(id)" />
      <router-view v-if="isUser" name="user" />
      <router-view v-else name="guest" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    isUser: {
      type: String,
    },
  },
};
</script>
