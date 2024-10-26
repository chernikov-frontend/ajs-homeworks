import GameSavingLoader from '../GameSavingLoader';
import reader from '../reader'; // Импортируем для моков
import parser from '../parser'; // Импортируем для моков

jest.mock('../reader');
jest.mock('../parser');

describe('GameSavingLoader', () => {
    beforeEach(() => {
    jest.clearAllMocks();
    });

    it('should call read and json methods in the right order', async () => {
        const mockReadResult = new ArrayBuffer(50);
        const mockJsonResult = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

        reader.mockResolvedValue(mockReadResult);
        parser.mockResolvedValue(mockJsonResult);

        await GameSavingLoader.load();

        expect(reader).toHaveBeenCalledTimes(1);
        expect(parser).toHaveBeenCalledWith(mockReadResult);
    });

    it('should return a valid GameSaving object', async () => {
        const mockReadResult = new ArrayBuffer(50);
        const mockJsonResult = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

        reader.mockResolvedValue(mockReadResult);
        parser.mockResolvedValue(mockJsonResult);

        const result = await GameSavingLoader.load();

        expect(result).toEqual({
            id: 9,
            created: 1546300800,
            userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
            });
    });

    it('should handle errors gracefully', async () => {
        const errorMessage = 'Some error occurred';

        reader.mockRejectedValue(new Error(errorMessage));

        try {
        await GameSavingLoader.load();
        } catch (e) {
        expect(e.message).toBe(errorMessage);
        }
    });
});