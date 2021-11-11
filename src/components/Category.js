import Product from "./Product"

export default function Category(props) {
    const { category, changeQuantity } = props
    return (
        <>
            <h3>{category.title}</h3>
            <ul className="list">
                {category.products.map(product => (
                    <Product product={product} changeQuantity={changeQuantity} />
                ))}
            </ul>
        </>

    )
}