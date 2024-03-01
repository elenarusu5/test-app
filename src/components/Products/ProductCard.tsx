import classnames from 'classnames'
import { AIRPLANE, BLUE, GREEN, ORANGE, ROCKET, UFO } from '../../constants/constants'

type ProductCardProps = {
    card: {
        type: string,
        img: string,
        style: string
    }
    isMobile?: boolean
    isTablet?: boolean
}

const ProductCard = (props: ProductCardProps) => {
    const { card, isMobile } = props

    const cardName = (type: string) => {
        switch (type) {
            case AIRPLANE: return 'Plus'
                break
            case ROCKET: return 'Pro'
                break
            case UFO: return 'Ultra'
                break
            default: return ''
                break
        }
    }

    const cardDescription = (style: string) => {
        switch (style) {
            case ORANGE: return 'Sunny Orange'
                break
            case GREEN: return 'Floral Green'
                break
            case BLUE: return 'Deep Blue'
                break
            default: return 'Interstellar Grey'
                break
        }
    }

    return (
        <div className={classnames('card',
            {
                'card__mobile': isMobile,
                'card--orange': card.style === 'orange',
                'card--blue': card.style === 'blue',
                'card--green': card.style === 'green',
                'card--grey': card.style === 'grey',
            })}>
            <img src={card.img} alt="image" />
            <p className="name">{`myProduct ${cardName(card.type)}`}</p>
            <p className='description'>{cardDescription(card.style)}</p>
        </div>
    )
}

export default ProductCard