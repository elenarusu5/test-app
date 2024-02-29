
import airplane from '../../assets/images/img-airplane.svg';
import helicopter from '../../assets/images/img-helicopter.svg';
import rocket from '../../assets/images/img-rocket.svg';
import ufo from '../../assets/images/img-ufo.svg';

type ProductCard = {
    type: string,
    plus: boolean,
    pro: boolean,
    ultra: boolean,
    description: string,
    style: string
}

type Cards = ProductCard[];

export const cards: Cards = [
    {
        type: helicopter,
        plus: false,
        pro: false,
        ultra: false,
        description: 'Sunny Orange',
        style: 'orange'
    },
    {
        type: airplane,
        plus: true,
        pro: false,
        ultra: false,
        description: 'Deep Blue',
        style: 'blue'
    },
    {
        type: rocket,
        plus: false,
        pro: true,
        ultra: false,
        description: 'Floral Green',
        style: 'green'
    },
    {
        type: ufo,
        plus: false,
        pro: false,
        ultra: true,
        description: 'Interstellar Grey',
        style: 'grey'
    },
];