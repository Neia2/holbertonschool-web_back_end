import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

test('createReportObject', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
  };

  const report = createReportObject(employees);
  expect(report.allEmployees).toEqual({
    engineering: ['Bob', 'Jane'],
    marketing: ['Sylvie']
  });
  expect(report.getNumberOfDepartments(report.allEmployees)).toBe(2);
});
