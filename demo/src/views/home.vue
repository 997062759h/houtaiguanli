<template>
  <div>
    <div class="slide">
      <leftMenu></leftMenu>
    </div>
    <div class="content">
      <Index></Index>
    </div>
  </div>
</template>

<script>
import leftMenu from "../components/leftMenu";
import Index from "./index";
export default {
  components: { leftMenu, Index }
};
</script>

<style scopedd>
.slide{
    float: left;
    height: 100vh;
    background: rgb(84, 92, 100);
    /* width: 15%; */
}
.content{
    float: left;
}
</style>