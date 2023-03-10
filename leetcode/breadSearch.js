/** @format */

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

const breadthSearch = (graph, start, end) => {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const curr = queue.shift();
    if (!graph[curr]) {
      graph[curr] = [];
    }

    if (graph[curr].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[curr]];
    }
  }
};

console.log(breadthSearch(graph, 'a', 'g'));
