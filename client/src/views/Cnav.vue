<template>
  <div class="nav">
    <div class="title"><img src="@/assets/logo.png"><h4>online test</h4></div>
      <span class="log">Log in</span>
  </div>
</template>

<script>
export default {
  name: 'Cnav'
}
</script>

<style>
.nav {
    z-index: 100;
    display: flex;
    height: 50px;
    line-height: 50px;
    flex-shrink: 0;
    background-color: rgb(60, 60, 60);
    user-select: none;
    color: rgb(212, 212, 212);
}
.title{
  position: relative;
  display: flex;
  padding-left: 1%;
}
img{
  max-width:38px;
  max-height: 38px;
  padding: 7px;
}
h4{
  padding: 0px 5px;
}
.log{
  position:absolute;
  right:2%;
}
</style>
