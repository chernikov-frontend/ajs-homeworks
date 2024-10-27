import GameSavingLoader from '../GameSavingLoader.js';
import read from '../reader.js';
import json from '../parser.js';

jest.mock('../reader.js');
jest.mock('../parser.js');

describe('GameSavingLoader с моками', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('load', () => {
        it('Обработка ошибок в функции read', async () => {
        const errorMessage = 'Mocked read error';
        read.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

        let caughtError;
        try {
            await GameSavingLoader.load();
        } catch (error) {
            caughtError = error;
        }

        expect(caughtError.message).toContain(errorMessage);
        });

        it('Обработка ошибок в функции json', async () => {
        const mockedBuffer = new ArrayBuffer(20);
        read.mockResolvedValue(mockedBuffer);

        const errorMessage = 'Mocked json error';
        json.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

        let caughtError;
        try {
            await GameSavingLoader.load();
        } catch (error) {
            caughtError = error;
        }

        expect(caughtError.message).toContain(errorMessage);
        });
    });
});