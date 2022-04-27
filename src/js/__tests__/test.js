import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

test('Получение корректных данных', async () => {
  const receivedValue = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const response = await GameSavingLoader.load();
  expect(response).toBe(receivedValue);
});

test('Возращает ошибку', async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toBe('Error parsing data');
  }
});