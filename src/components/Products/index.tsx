import { cards } from "./cards"
import ProductCard from "./ProductCard"
import './card.scss'

const Products = () => {
    return (
        <div className="section-left">
            {cards?.map((item, index) => {
                return (
                    <ProductCard
                        key={index}
                        item={item}
                    />
                )
            })}
        </div>
    )
}

export default Products