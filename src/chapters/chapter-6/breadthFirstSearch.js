const breadthFirstSearch = (graph, startKey, endKey, callback) => {
  const queue = graph[startKey];
  const checked = [];

  while (queue.length > 0) {
    const name = queue.shift();

    if (!checked.includes(name)) {
      if (callback(name, endKey)) return true;
      queue.push(...graph[name]);
      checked.push(name);
    }
  }

  return false;
};

export default breadthFirstSearch;
