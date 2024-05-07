import writeData from './io';

it('should execute the writeFile method', async () => {
  const testData = 'test data';
  const testFileName = 'test.txt';

  const result = await writeData(testData, testFileName);
  expect(result).toBeUndefined();
});