import GameSavingLoader from './GameSavingLoader';

(async () => {
    try {
        const saving = await GameSavingLoader.load();
        console.log('Загруженное сохранение:', saving);
    } catch (error) {
        console.error('Произошла ошибка при загрузке сохранения:', error);
    }
})();