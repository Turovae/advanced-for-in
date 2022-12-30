import orderByProps from '../orderByProps';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('test orderByProps without order argument', () => {
  expect(orderByProps(obj)).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('test orderByProps with order argument ["name", "level"]', () => {
  expect(orderByProps(obj, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('test orderByProps with order argument ["name", "level", "defence", "attack", "health"]', () => {
  expect(orderByProps(obj, ['name', 'level', 'defence', 'attack', 'health'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
  ]);
});

test('test orderByProps with order argument ["name", "type"]', () => {
  expect(orderByProps(obj, ['name', 'type'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ]);
});
