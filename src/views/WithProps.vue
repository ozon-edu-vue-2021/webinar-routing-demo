<template>
  <div class="home">
    <h1>Страница которая принимает props из роутера!</h1>
    <h2>Посмотрим включен ли sidebar: {{ $props.sidebar }}</h2>
  </div>
</template>

<script>
export default {
  name: "WithProps",
  props: {
    sidebar: Boolean,
  },
};
</script>
