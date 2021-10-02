import Hashtable from '../src/chapters/chapter-5/hashtable.js';

test('Hashtable', () => {
  const priceObject = { apple: 1.3, avocado: 4.7, banana: 2.5 };
  const priceHashtable = new Hashtable(priceObject);
  expect(priceObject).toEqual(priceHashtable.items);
  expect(priceHashtable.length).toBe(3);
  expect(priceHashtable.has('banana')).toBeTruthy();
  expect(priceHashtable.get('avocado')).toBe(4.7);

  priceHashtable.set('lemon', 2);
  expect(priceHashtable.length).toBe(4);
  expect(priceHashtable.getKeys()).toEqual(['apple', 'avocado', 'banana', 'lemon']);
  expect(priceHashtable.getValues()).toEqual([1.3, 4.7, 2.5, 2]);
  expect(priceHashtable.keys).toEqual(['apple', 'avocado', 'banana', 'lemon']);
  expect(priceHashtable.values).toEqual([1.3, 4.7, 2.5, 2]);

  priceHashtable.remove('apple');
  expect(priceHashtable.length).toBe(3);

  const salesPrice = [];
  priceHashtable.each((name, value) => salesPrice.push(value / 2));
  expect(salesPrice).toEqual([2.35, 1.25, 1]);

  priceHashtable.clear();
  expect(priceHashtable.length).toBe(0);

  const newHashtable = new Hashtable();
  expect(newHashtable.length).toBe(0);
});
