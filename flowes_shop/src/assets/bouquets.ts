import Image1 from './image/bouquets/1.jpg'
import Image2 from './image/bouquets/2.jpg'
import Image3 from './image/bouquets/3.jpg'
import Image4 from './image/bouquets/4.jpg'
import Image5 from './image/bouquets/5.jpg'
import Image6 from './image/bouquets/6.jpg'
import Image7 from './image/bouquets/7.jpg'
import Image8 from './image/bouquets/8.jpg'
import Image9 from './image/bouquets/9.jpg'
import Image10 from './image/bouquets/10.jpg'
import Image11 from './image/bouquets/11.jpg'
import Image12 from './image/bouquets/12.jpg'
import Image13 from './image/bouquets/13.jpg'
import Image14 from './image/bouquets/14.jpg'
import Image15 from './image/bouquets/15.jpg'
import Image16 from './image/bouquets/16.jpg'
import Image17 from './image/bouquets/17.jpg'
import Image18 from './image/bouquets/18.jpg'

export type bouquetType = {
    name: string,
    id: number,
    price: number
    image: string
}

export const bouquets: bouquetType[] = [
    {name: 'Літній', id: 1, price:  450, image: Image1},
    {name: 'Pions', id: 2, price:  500, image: Image2},
    {name: 'Особливий', id: 3, price:  600, image: Image3},
    {name: 'Білі піони', id: 4, price:  450, image: Image4},
    {name: 'Літній-2', id: 5, price:  250, image: Image5},
    {name: 'Сніжний', id: 6, price:  300, image: Image6},
    {name: 'Простота', id: 7, price:  450, image: Image7},
    {name: 'Яскравий', id: 8, price:  600, image: Image8},
    {name: 'Акценти', id: 9, price:  750 , image: Image9},
    {name: 'Bright', id: 10, price:  400 , image: Image10},
    {name: 'Стриманість', id: 11, price:  550 , image: Image11},
    {name: 'Загадковий', id: 12, price:  800 , image: Image12},
    {name: 'Барви', id: 13, price:  800 , image: Image13},
    {name: 'Пристрасть', id: 14, price:  600 , image: Image14},
    {name: 'Pink', id: 15, price:  650 , image: Image15},
    {name: 'Запашний', id: 16, price:  600 , image: Image16},
    {name: 'Ніжність', id: 17, price:  500 , image: Image17},
    {name: 'Пізня Осінь', id: 18, price:  450 , image: Image18},
]

export const favoritesNames: string[] = ['Ніжність', 'Барви', 'Літній']