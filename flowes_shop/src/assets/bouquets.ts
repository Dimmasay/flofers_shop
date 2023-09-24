import Image1 from './image/bouquets/1.webp'
import Image2 from './image/bouquets/2.webp'
import Image3 from './image/bouquets/3.webp'
import Image4 from './image/bouquets/4.webp'
import Image5 from './image/bouquets/5.webp'
import Image6 from './image/bouquets/6.webp'
import Image7 from './image/bouquets/7.webp'
import Image8 from './image/bouquets/8.webp'
import Image9 from './image/bouquets/9.webp'
import Image10 from './image/bouquets/10.webp'
import Image11 from './image/bouquets/11.webp'
import Image12 from './image/bouquets/12.webp'
import Image13 from './image/bouquets/13.webp'
import Image14 from './image/bouquets/14.webp'
import Image15 from './image/bouquets/15.webp'
import Image16 from './image/bouquets/16.webp'
import Image17 from './image/bouquets/17.webp'
import Image18 from './image/bouquets/18.webp'

export type bouquetType = {
    name: string,
    id: number,
    price: number,
    image: string,
    sortList: string[]
}

export let sortNames = ['all', 'minimal', 'big', 'fest', 'toBirthday', 'toMart', 'toLove', 'toWedding']


export const bouquets: bouquetType[] = [
    {name: 'Літній', id: 1, price:  450, image: Image1, sortList: ['all', 'big', 'toBirthday', 'toLove', 'fest']},
    {name: 'Pions', id: 2, price:  500, image: Image2, sortList: ['all','minimal', 'toMart', 'toWedding']},
    {name: 'Особливий', id: 3, price:  600, image: Image3, sortList: ['all','fest', 'toBirthday', 'toMart', 'toLove', 'toWedding']},
    {name: 'Білі піони', id: 4, price:  450, image: Image4, sortList: ['all','fest', 'toMart',]},
    {name: 'Літній-2', id: 5, price:  250, image: Image5, sortList: ['all','fest', 'toBirthday', ]},
    {name: 'Сніжний', id: 6, price:  300, image: Image6, sortList: ['all','minimal', 'toBirthday', 'toLove',]},
    {name: 'Простота', id: 7, price:  450, image: Image7, sortList: ['all','big', 'toMart', 'toWedding']},
    {name: 'Яскравий', id: 8, price:  600, image: Image8, sortList: ['all','big', 'toBirthday', 'toLove', 'toWedding']},
    {name: 'Акценти', id: 9, price:  750 , image: Image9, sortList: ['all','big', 'toMart', ]},
    {name: 'Bright', id: 10, price:  400 , image: Image10, sortList: ['all','fest', 'toBirthday', 'toMart', 'toWedding']},
    {name: 'Стриманість', id: 11, price:  550 , image: Image11, sortList: ['all','minimal', 'toBirthday', ]},
    {name: 'Загадковий', id: 12, price:  800 , image: Image12, sortList: ['all','fest', 'toBirthday', ]},
    {name: 'Барви', id: 13, price:  800 , image: Image13, sortList: ['all','big', 'toMart', ]},
    {name: 'Пристрасть', id: 14, price:  600 , image: Image14, sortList: ['all','fest', 'toBirthday', 'toLove', 'toWedding']},
    {name: 'Pink', id: 15, price:  650 , image: Image15, sortList: ['all','big', 'fest', 'toMart', ]},
    {name: 'Запашний', id: 16, price:  600 , image: Image16, sortList: ['all','fest', 'toBirthday', ]},
    {name: 'Ніжність', id: 17, price:  500 , image: Image17, sortList: ['all','fest', 'toMart', 'toLove',]},
    {name: 'Пізня Осінь', id: 18, price:  450 , image: Image18, sortList: ['all','fest', 'toWedding', ]},
]

export const favoritesNames: string[] = ['Пізня Осінь', 'Ніжність', 'Барви', 'Літній','Стриманість', 'Пристрасть']