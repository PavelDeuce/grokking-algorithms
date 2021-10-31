import _ from 'lodash';

const greedyAlgorithm = (statesNeeded, stations) => {
  const finalStations = [];

  while (statesNeeded.length) {
    let bestStation = null;
    let statesCovered = [];

    Object.entries(stations).forEach(([station, statesForStation]) => {
      const covered = _.intersection(statesNeeded, statesForStation);
      if (covered.length > statesCovered.length) {
        bestStation = station;
        statesCovered = covered;
      }
    });

    _.pullAll(statesNeeded, statesCovered);
    finalStations.push(bestStation);
  }

  return finalStations;
};

export default greedyAlgorithm;
