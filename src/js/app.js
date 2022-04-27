import GameSaving from './GameSaving';
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => saving,
  (err) => err,
);