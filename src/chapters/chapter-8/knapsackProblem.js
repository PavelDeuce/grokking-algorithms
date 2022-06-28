import _ from 'lodash';

const knapsack = (data, size) => {
  const items = _.cloneDeep(data);
  const result = [];

  let currentSize = size;
  items.sort((a, b) => a.cost > b.cost);

  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    if (item.weight <= currentSize) {
      currentSize -= item.weight;
      result.push(item.name);
    }
  }

  return result.sort();
};

export default knapsack;
