<template>
  <div>
    <button @click="authenticate">Авторизоваться</button>
    <button @click="logout">Выйти</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    authenticate() {
      sessionStorage.setItem("authenticated", true);
      this.$router.push("/very-secure");
    },
    logout() {
      sessionStorage.removeItem("authenticated");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  background-color: #005bff;
  color: #fff;
  border-radius: 6px;
  font-weight: bold;
}

button:not(:first-child) {
  margin-left: 8px;
}

button:hover {
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  background-color: #003ead;
}
</style>
