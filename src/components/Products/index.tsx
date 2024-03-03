import { cards } from "./cards"

import ProductCard from "./ProductCard"

import './card.scss'

type ProductsProps = {
    isMobile?: boolean
    isTablet?: boolean
}

const Products = (props: ProductsProps) => {
    const { isMobile, isTablet } = props

    return (
        <div className="section-left">
            {cards?.map((item, index) => {
                return (
                    <ProductCard
                        key={index}
                        card={item}
                        isMobile={isMobile}
                        isTablet={isTablet}
                    />
                )
            })}
        </div>
    )
}

export default Products