<template>
  <div id="app">
    <FlowView :workflow="workflow"/>
  </div>
</template>

<script>
import FlowView from "./components/FlowView";
import Workflow from "./api/Workflow";

export default {
  name: "app",
  data: () => ({
    workflow: new Workflow()
  }),
  components: {
    FlowView
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
