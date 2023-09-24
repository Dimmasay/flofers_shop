import Image1 from './image/flowers/1.webp'
import Image2 from './image/flowers/2.webp'
import Image3 from './image/flowers/3.webp'
import Image4 from './image/flowers/4.webp'
import Image5 from './image/flowers/5.webp'
import Image6 from './image/flowers/6.webp'
import Image7 from './image/flowers/7.webp'
import Image8 from './image/flowers/8.webp'
import Image9 from './image/flowers/9.webp'
import Image10 from './image/flowers/10.webp'
import Image11 from './image/flowers/11.webp'
import Image12 from './image/flowers/12.webp'
import Image13 from './image/flowers/13.webp'
import Image14 from './image/flowers/14.webp'
import Image15 from './image/flowers/15.webp'
import Image16 from './image/flowers/16.webp'
import Image17 from './image/flowers/17.webp'
import Image18 from './image/flowers/18.webp'
import Image19 from './image/flowers/19.webp'
import Image20 from './image/flowers/20.webp'

type FlowerSortType = {
    color: string,
    id: number
}

type FlowerType = {
    image: string
    name: string,
    sort: FlowerSortType[]
}


export const flowers: FlowerType[] = [
    {name: 'Хризантема', image: Image1, sort: [{id: 101, color:'#CA3353'}, {id: 102, color:'#FD8784'}, {id: 103, color: '#FDB85E'}]},
    {name: 'Калина', image: Image2,  sort: [{id: 111, color:'#F77E39'}]},
    {name: 'Блакитна квітка', image: Image3,  sort: [{id: 121, color:'#F77E39'}]},
    {name: 'Бузок', image: Image4,  sort: [{id: 131, color:'#CA3353'}, {id: 132, color:'#FD8784'}, {id: 133, color: '#FDB85E'}]},
    {name: 'Рожева квітка', image: Image5,  sort: [{id: 141, color:'#3382CA'}, {id: 142, color:'#E4E911'}, {id: 143, color: '#FF9292'}]},
    {name: 'Піон', image: Image6,  sort: [{id: 151, color: '#F77E39'}]},
    {name: 'Нарцис', image: Image7,  sort: [{id: 161, color:'#CA3353'}, {id: 162, color:'#FD8784'}, {id: 163, color: '#FDB85E'}]},
    {name: 'Жовта квітка', image: Image8,  sort: [{id: 171, color: '#F77E39'}]},
    {name: 'Мак', image: Image9,  sort: [{id: 181, color: '#F77E39'}]},
    {name: 'Підсніжник', image: Image10,  sort: [{id: 191, color: '#F77E39'}]},
    {name: 'Гілочка', image: Image11,  sort: [{id: 201, color: '#F77E39'}]},
    {name: 'Хризантема', image: Image12,  sort: [{id: 211, color:'#CBCBB6'}, {id: 212, color:'#D684FD'}, {id: 213, color: '#FDF75E'}]},
    {name: 'Піон', image: Image13,  sort: [{id: 221, color:'#F2A3B4'}, {id: 222, color: '#C531AD'}]},
    {name: 'Бутони рожеві', image: Image14,  sort: [{id: 231, color: '#F77E39'}]},
    {name: 'Тюльпан', image: Image15,  sort: [{id: 241, color:'#CA3353'}, {id: 242, color:'#FD8784'}, {id: 243, color: '#FDB85E'}]},
    {name: 'Сніжок', image: Image16,  sort: [{id: 251, color: '#F77E39'}]},
    {name: 'Троянда Осирія ', image: Image17,  sort: [{id: 261, color:'#CA3353'}, {id: 262, color:'#FD8784'}, {id: 263, color: '#FDB85E'}]},
    {name: 'Лілії', image: Image18,  sort: [{id: 271, color: '#F77E39'}]},
    {name: 'Троянди (маленькі на гілці)', image: Image19,  sort: [{id: 281, color:'#CA3353'}, {id: 282, color:'#FD8784'}, {id: 283, color: '#FDB85E'}]},
    {name: 'Троянда Баккара', image: Image20,  sort: [{id: 281, color:'#CA3353'}, {id: 282, color:'#FD8784'}, {id: 283, color: '#FDB85E'}]},
]
