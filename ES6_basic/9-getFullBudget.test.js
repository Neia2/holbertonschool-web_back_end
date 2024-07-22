import getFullBudgetObject from './9-getFullBudget.js';

test('getFullBudgetObject', () => {
  const fullBudget = getFullBudgetObject(20, 50, 10);
  expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
  expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
});
