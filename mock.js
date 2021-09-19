import pizza1 from './photo/pizza1.JPEG'
import pizza2 from './photo/pizza2.JPEG'
import pizza3 from './photo/pizza3.JPEG'
import pizza4 from './photo/pizza4.JPEG'
import burger1 from './photo/burger1.JPEG'
import burger2 from './photo/burger2.JPEG'
import burger3 from './photo/burger3.JPEG'
import burger4 from './photo/burger4.JPEG'
import drinks1 from './photo/drinks1.JPEG'
import drinks2 from './photo/drinks2.JPEG'
import drinks3 from './photo/drinks3.JPEG'
import drinks4 from './photo/drinks4.JPEG'
export const data = [
    {
        id : 1,
        title: 'Pizza',
        lists : [
            {id : 11,title: 'Big pizza',price : 10000, src: pizza1},
            {id : 12,title: 'ckeks pizza',price : 20000, src: pizza2},
            {id : 13,title: 'Americano pizza',price : 30000, src: pizza3},
            {id : 14,title: 'Hot pizza',price : 40000, src: pizza4},
        ],
    },
    {
        id : 2,
        title: 'Burger',
        lists : [
            {id : 21,title: 'Chess Burger',price : 4000,src : burger1,},
            {id : 22,title: 'Burger',price : 5000,src : burger2,},
            {id : 23,title: 'Lavash',price : 6000,src : burger3,},
            {id : 23,title: 'Donar',price : 7000,src : burger4,},
        ],
    },
    {
        id : 3,
        title: 'Drinks',
        lists : [
            {id : 31,title: 'drinks',price : 1000, src: drinks1,},
            {id : 32,title: 'flash',price : 3000, src: drinks2,},
            {id : 33,title: 'Cola',price : 4000, src: drinks3,},
            {id : 34,title: 'Pepsi',price : 5000, src: drinks4,},
        ],
    }
]