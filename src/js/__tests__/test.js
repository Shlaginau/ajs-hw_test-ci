import getHealthStatus from '../healthStatus.js';

test.each([
  ['Маг', 51, 'healthy'],
  ['Маг', 50, 'wounded'],
  ['Маг', 15, 'wounded'], 
  ['Маг', 10, 'critical'],
])
('testing getHealthStatus function with name %s and health %i', (name, health, expected) => {
  const result = getHealthStatus(health);
  expect(result).toBe(expected);
});