import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => saving,
  (err) => err,
);