import reader from '../reader';

describe('Reader', () => {
    it('should read file and return correct ArrayBuffer', async () => {
    const expectedData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const result = await reader();

    const actualData = String.fromCharCode.apply(null, new Uint16Array(result));

    expect(actualData).toBe(expectedData);
    });
});