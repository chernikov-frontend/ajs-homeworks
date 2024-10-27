import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
    .then(saving => {
        console.log('Загруженное сохранение:', saving);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });


// (async () => {
//     try {
//         const saving = await GameSavingLoader.load();
//         console.log('Загруженное сохранение:', saving);
//     } catch (error) {
//         console.error('Произошла ошибка при загрузке сохранения:', error);
//     }
// })();