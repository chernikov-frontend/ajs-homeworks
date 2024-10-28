import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('Карта должна быть пустой при создании', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Правильное добавление элементов в карту', () => {
  const cart = new Cart();
  cart.add(new Movie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик','фэнтези','приключения'], '137 мин./02:17', 1100));
  const standart = [{id: 1012, name: 'Мстители', originName: 'The Avengers', year: 2012, counry: 'США', slogan: 'Avengers Assemble!', style: ['фантастика', 'боевик','фэнтези','приключения'], time: '137 мин./02:17', price: 1100}];
  expect(cart.items).toEqual(standart);
});

test('Сумма без скидки', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик','фэнтези','приключения'], '137 мин./02:17', 1100));
  expect(cart.sum()).toBe(4000);
});

test('Сумма со скидкой', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик','фэнтези','приключения'], '137 мин./02:17', 1100));
  expect(cart.sumWithDiscount(10)).toBe(3600);
})

test('Удаление элемента', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1012, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик','фэнтези','приключения'], '137 мин./02:17', 1100));
  cart.deleteItem(1008);

  const result = [{id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225},
                  {id: 1012, name: 'Мстители', originName: 'The Avengers', year: 2012, counry: 'США', slogan: 'Avengers Assemble!', style: ['фантастика', 'боевик','фэнтези','приключения'], time: '137 мин./02:17', price: 1100}
];
  const standart = [{id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225},
                  {id: 1012, name: 'Мстители', originName: 'The Avengers', year: 2012, counry: 'США', slogan: 'Avengers Assemble!', style: ['фантастика', 'боевик','фэнтези','приключения'], time: '137 мин./02:17', price: 1100}
];
  expect(result).toEqual(standart);
});
