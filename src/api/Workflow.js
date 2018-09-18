import { DataSet } from "vis";

export default class Workflow {
  constructor({
    edges = Workflow.defaultEdges(),
    nodes = Workflow.defaultNodes()
  } = {}) {
    this.edges = edges;
    this.nodes = nodes;
  }

  addEdge(from, to) {
    return this.edges.add({ from, to });
  }

  static defaultEdges() {
    return new DataSet([{ from: 1, to: 2 }]);
  }

  static defaultNodes() {
    return new DataSet([{ id: 1 }, { id: 2 }]);
  }
}
