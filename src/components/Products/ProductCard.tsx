import classnames from 'classnames'

const ProductCard = ({ item, isMobile }) => {
    return (
        <div className={classnames('card',
            {
                'card__mobile': isMobile,
                'card--orange': item.style === 'orange',
                'card--blue': item.style === 'blue',
                'card--green': item.style === 'green',
                'card--grey': item.style === 'grey',
            })}>
            <img src={item.type} alt="image" />
            <p className="">{`myProduct`}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default ProductCard