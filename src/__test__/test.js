import Character from '../character';
import displaySpecial from '../displaySpecial';

const character = new Character('Vasya', 'Archer');

test('Should return values of special with description, writen in array', () => {
  expect(displaySpecial(character.special[0])).toEqual([8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон']);
});

test('Should return values of special without description, writen in array', () => {
  expect(displaySpecial(character.special[1])).toEqual([9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно']);
});
