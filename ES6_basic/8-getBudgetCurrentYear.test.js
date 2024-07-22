import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

test('getBudgetForCurrentYear', () => {
  const currentYear = new Date().getFullYear();
  expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual({
    [`income-${currentYear}`]: 2100,
    [`gdp-${currentYear}`]: 5200,
    [`capita-${currentYear}`]: 1090
  });
});
