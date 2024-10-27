// Класс GameSavingLoader

import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(buffer => json(buffer))
      .then(stringData => {
        const parsedData = JSON.parse(stringData);
        
        // Создаем объект типа GameSaving
        const gameSaving = new GameSaving(parsedData.id, parsedData.created, parsedData.userInfo);
        
        return gameSaving;
      })
      .catch(error => {
        console.error('Ошибка загрузки данных:', error);
        throw error;
      });
  }
}


// export default class GameSavingLoader {
//   static async load() {
//     try {
//       const buffer = await read();
//       const stringData = await json(buffer);
//       const parsedData = JSON.parse(stringData);
      
//       // Создаем объект типа GameSaving
//       const gameSaving = new GameSaving(
//         parsedData.id,
//         parsedData.created,
//         parsedData.userInfo
//       );
      
//       return gameSaving;
//     } catch (error) {
//       console.error('Ошибка загрузки данных:', error);
//       throw error;
//     }
//   }
// }
