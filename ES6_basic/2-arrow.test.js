import getNeighborhoodsList from './2-arrow.js';

test('getNeighborhoodsList', () => {
  const neighborhoodsList = new getNeighborhoodsList();
  const res = neighborhoodsList.addNeighborhood('Noe Valley');
  expect(res).toEqual(['SOMA', 'Union Square', 'Noe Valley']);
});
