import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

describe('GameSavingLoader', () => {
    describe('load', () => {
        it('Успешная загрузка и парсинг данных в объект GameSaving', async () => {
        const expectedResult = {
            id: 9,
            created: 1546300800,
            userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000
            }
        };

        const result = await GameSavingLoader.load();

        expect(result).toBeInstanceOf(GameSaving);
        expect(result.id).toEqual(expectedResult.id);
        expect(result.created).toEqual(expectedResult.created);
        expect(result.userInfo).toMatchObject(expectedResult.userInfo);
        });
    });
});