export const generData = () => {
  const nodes = [];
  for (let index = 1; index <= 400; index++) {
    nodes.push({
      id: index.toString(),
      label: index.toString(),
    });
  }

  const random = () => Math.round(Math.random() * 300);

  const edges = [];
  for (let index = 1; index <= 300; index++) {
    edges.push({
      source: random(),
      target: random(),
      label: random(),
      arrows: "to",
    });
  }

  for (let index = 1; index <= 100; index++) {
    edges.push({
      source: random(),
      target: 1,
      label: random(),
      arrows: "to",
    });
  }

  return {
    nodes,
    edges,
  };
};
