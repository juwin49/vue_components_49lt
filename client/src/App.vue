<template>
  <div id="app">
    <router-view ></router-view>
    <router-view name="Ccontent"></router-view>
  </div>

</template>


<style>
 *{ margin: 0; padding: 0; }
 * {user-select: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
