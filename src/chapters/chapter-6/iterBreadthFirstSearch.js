const iterBreadthFirstSearch = (graph, startKey, endKey, callback) => {
  const checkItem = (queue, checked) => {
    if (queue.length === 0) return false;

    const name = queue.shift();
    if (!checked.includes(name)) {
      if (callback(name, endKey)) return true;
      return checkItem([...queue, ...graph[name]], [...checked, name]);
    }

    return checkItem(queue, checked);
  };

  return checkItem(graph[startKey], []);
};

export default iterBreadthFirstSearch;
