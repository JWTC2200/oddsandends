export interface Productdata {
  id: number;
  name: string;
  base_price: number;
  base_image: string;
  description: string;
  category: string;
  styles: Styles[];
}

export interface Styles {
  color: string;
  image: string;
  hex_code: string;
  price: number;
  stock: boolean;
}

export interface Basketdata {
  id: number;
  name: string;
  style: Styles;
}

export interface Basketitems extends Basketdata {
  in_basket: number;
}

export const productData: Productdata[] = [
  {
    id: 1,
    name: 'Bobble Hat',
    base_price: 12.99,
    base_image: 'bobblehat_white.png',
    description: 'A lovely picture of a bobble hat.',
    category: 'hats',
    styles: [
      {
        color: 'white',
        image: 'bobblehat_white.png',
        hex_code: '#FFFFFF',
        price: 12.99,
        stock: true,
      },
      {
        color: 'red',
        image: 'bobblehat_red.png',
        hex_code: '#FF0000',
        price: 12.99,
        stock: false,
      },
      {
        color: 'blue',
        image: 'bobblehat_blue.png',
        hex_code: '#0000FF',
        price: 12.99,
        stock: false,
      },
      {
        color: 'green',
        image: 'bobblehat_green.png',
        hex_code: '#008000',
        price: 12.99,
        stock: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Striped Hat',
    base_price: 1.99,
    base_image: 'stripedhat_red.png',
    description: 'A lovely picture of a striped hat.',
    category: 'hats',
    styles: [
      {
        color: 'red',
        image: 'stripedhat_red.png',
        hex_code: '#FF0000',
        price: 1.99,
        stock: true,
      },
      {
        color: 'blue',
        image: 'stripedhat_blue.png',
        hex_code: '#0000FF',
        price: 1.99,
        stock: true,
      },
      {
        color: 'green',
        image: 'stripedhat_green.png',
        hex_code: '#008000',
        price: 2.99,
        stock: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Top Hat',
    base_price: 19.99,
    base_image: 'tophat_black.png',
    description: 'Toppest top hat.',
    category: 'hats',
    styles: [
      {
        color: 'black',
        image: 'tophat_black.png',
        hex_code: '#000000',
        price: 19.99,
        stock: true,
      },
      {
        color: 'white',
        image: 'tophat_white.png',
        hex_code: '#FFFFFF',
        price: 19.99,
        stock: false,
      },
      {
        color: 'purple',
        image: 'tophat_purple.png',
        hex_code: '#800080',
        price: 19.99,
        stock: true,
      },
      {
        color: 'rose',
        image: 'tophat_rose.png',
        hex_code: '#FF007F',
        price: 24.99,
        stock: true,
      },
    ],
  },
  {
    id: 4,
    name: 'Hat Hat',
    base_price: 89.95,
    base_image: 'hathat_white.png',
    description: 'A lovely picture of a hat on a hat.',
    category: 'hats',
    styles: [
      {
        color: 'white',
        image: 'hathat_white.png',
        hex_code: '#FFFFFF',
        price: 89.95,
        stock: true,
      },
    ],
  },
  {
    id: 5,
    name: 'Glove',
    base_price: 2.99,
    base_image: 'glove_white.png',
    description: 'Glove, just one.',
    category: 'gloves',
    styles: [
      {
        color: 'white',
        image: 'glove_white.png',
        hex_code: '#FFFFFF',
        price: 2.99,
        stock: false,
      },
    ],
  },
  {
    id: 6,
    name: 'Gloves',
    base_price: 5.98,
    base_image: 'gloves_white.png',
    description: 'Gloves more than one, two in fact.',
    category: 'gloves',
    styles: [
      {
        color: 'white',
        image: 'gloves_white.png',
        hex_code: '#FFFFFF',
        price: 5.98,
        stock: true,
      },
    ],
  },
  {
    id: 7,
    name: 'Crab claws',
    base_price: 56.0,
    base_image: 'crabclaws_orange.png',
    description: 'Pincer them!',
    category: 'gloves',
    styles: [
      {
        color: 'orange',
        image: 'crabclaws_orange.png',
        hex_code: '#FFA500',
        price: 56.0,
        stock: false,
      },
      {
        color: 'blue',
        image: 'crabclaws_blue.png',
        hex_code: '#191970',
        price: 88.0,
        stock: true,
      },
    ],
  },
  {
    id: 9,
    name: 'Plain socks',
    base_price: 2.0,
    base_image: 'plainsocks_black.png',
    description: 'Can never go wrong with these',
    category: 'socks',
    styles: [
      {
        color: 'black',
        image: 'plainsocks_black.png',
        hex_code: '#000000',
        price: 2,
        stock: true,
      },
      {
        color: 'white',
        image: 'plainsocks_white.png',
        hex_code: '#FFFFFF',
        price: 2,
        stock: true,
      },
      {
        color: 'grey',
        image: 'plainsocks_grey.png',
        hex_code: '#808080',
        price: 2,
        stock: true,
      },
    ],
  },
  {
    id: 9,
    name: 'Holed socks',
    base_price: 1.0,
    base_image: 'holedsocks_black.png',
    description: 'Let your feet breathe',
    category: 'socks',
    styles: [
      {
        color: 'black',
        image: 'holedsocks_black.png',
        hex_code: '#000000',
        price: 1,
        stock: true,
      },
      {
        color: 'white',
        image: 'holedsocks_white.png',
        hex_code: '#FFFFFF',
        price: 1,
        stock: true,
      },
      {
        color: 'grey',
        image: 'holedsocks_grey.png',
        hex_code: '#808080',
        price: 1,
        stock: true,
      },
    ],
  },
];
