// Класс GameSavingLoader

import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const parsedData = await json(buffer);
      return JSON.parse(parsedData);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      throw error;
    }
  }
}