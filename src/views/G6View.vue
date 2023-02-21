<template>
  <div ref="contentRef"></div>
</template>
<script setup>
import G6 from "@antv/g6";
import { generData } from "@/utils/index";
import { onMounted } from "vue";
const contentRef = ref(null);

// const data = generData();
const data = {
  // 点集
  nodes: [
    {
      id: "node1", // String，该节点存在则必须，节点的唯一标识
      x: 100, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: "node2", // String，该节点存在则必须，节点的唯一标识
      x: 300, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
  ],
  // 边集
  edges: [
    {
      source: "node1", // String，必须，起始点 id
      target: "node2", // String，必须，目标点 id
    },
  ],
};
console.log("🚀 ~ file: G6View.vue:10 ~ data:", data);

const render = (data) => {
  const graph = new G6.Graph({
    container: contentRef.value, // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
    width: 800, // Number，必须，图的宽度
    height: 500, // Number，必须，图的高度
    layout: {
      type: "force2",
      animate: true, // 设置为 false 可关闭布局动画
      maxSpeed: 100,
      linkDistance: 50,
      clustering: true,
      nodeClusterBy: "cluster",
      clusterNodeStrength: 300,
    },
  });
  graph.data(data); // 读取 Step 2 中的数据源到图上
  graph.render(); // 渲染图

  function throttle(fn, delay = 1000) {
    let timer = null;
    return function () {
      if (timer) return;
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      });
    };
  }

  // function refreshDragedNodePosition(e) {
  //   const model = e.item.get("model");
  //   model.fx = e.x;
  //   model.fy = e.y;
  //   model.x = e.x;
  //   model.y = e.y;
  // }

  const refreshDragedNodePosition = throttle((e) => {
    console.log(222);
    const model = e.item.get("model");
    model.fx = e.x;
    model.fy = e.y;
    model.x = e.x;
    model.y = e.y;
  });

  graph.on("node:drag", function (e) {
    console.log(1111);
    refreshDragedNodePosition(e);
    graph.layout();
  });
};

onMounted(() => {
  render(data);
});
</script>
