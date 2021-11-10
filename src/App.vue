<template>
  <div id="app">
    <ul id="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/with-wrap">With wrap</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link to="/with-title">With title</router-link>
      </li>
      <li>
        <router-link to="/with-props">With props</router-link>
      </li>
      <li>
        <router-link :to="`/dynamic/${id}`">Dynamic</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'nested-home' }">Nested home</router-link>
      </li>
      <li>
        <router-link to="/page">Page</router-link>
      </li>
      <li>
        <router-link to="/router-views">Router views</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/very-secure">Very secure</router-link>
      </li>
      <li>
        <router-link to="/lazy-loaded">Lazy loaded</router-link>
      </li>
      <li>
        <router-link to="/animated">Animated</router-link>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #001a34;
  max-width: 960px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #001a34;
}

#nav a.router-link-exact-active {
  color: rgb(16, 173, 68);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(16, 173, 68);
}

/* animated */
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
