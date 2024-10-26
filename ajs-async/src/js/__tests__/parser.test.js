import parser from '../parser';

describe('Parser', () => {
    it('should parse ArrayBuffer to string correctly', async () => {
    const arrayBuffer = new ArrayBuffer(20);
    const uint16array = new Uint16Array(arrayBuffer);
    
    // Заполняем массив произвольными значениями
    for (let i = 0; i < uint16array.length; i++) {
      uint16array[i] = Math.floor(Math.random() * 65536);
    }

    const expectedString = String.fromCharCode.apply(null, uint16array);

    const result = await parser(uint16array.buffer);

    expect(result).toBe(expectedString);
    });
});