
import { AIRPLANE, HELICOPTER, ROCKET, UFO } from '../../constants/constants';

import airplane from '../../assets/images/img-airplane.svg';
import helicopter from '../../assets/images/img-helicopter.svg';
import rocket from '../../assets/images/img-rocket.svg';
import ufo from '../../assets/images/img-ufo.svg';

type ProductCard = {
    type: string,
    img: string,
    style: string
}

type Cards = ProductCard[];

export const cards: Cards = [
    {
        type: HELICOPTER,
        img: helicopter,
        style: 'orange'
    },
    {
        type: AIRPLANE,
        img: airplane,
        style: 'blue'
    },
    {
        type: ROCKET,
        img: rocket,
        style: 'green'
    },
    {
        type: UFO,
        img: ufo,
        style: 'grey'
    },
    {
        type: HELICOPTER,
        img: helicopter,
        style: 'green'
    },
    {
        type: ROCKET,
        img: rocket,
        style: 'blue'
    },
    {
        type: HELICOPTER,
        img: helicopter,
        style: 'blue'
    },
    {
        type: ROCKET,
        img: rocket,
        style: 'orange'
    },
    {
        type: AIRPLANE,
        img: airplane,
        style: 'green'
    },
];