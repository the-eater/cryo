<template>
  <div>
    <div ref="view"></div>
  </div>
</template>

<script>
import { Network } from "vis";
import Workflow from "../api/Workflow";

export default {
  name: "FlowView",
  props: {
    workflow: Workflow
  },
  mounted: function() {
    this.$data.network = new Network(
      this.$refs.view,
      {
        nodes: this.$props.workflow.nodes,
        edges: this.$props.workflow.edges
      },
      {
        edges: {
          color: {
            color: "#000000"
          },
          arrows: {
            to: {
              enabled: true,
              scaleFactor: 0.5
            }
          }
        },
        nodes: {
          shape: "box",
          shapeProperties: {
            borderRadius: 0
          },
          label: "oy"
        }
      }
    );
  }
};
</script>

<style scoped>
</style>
