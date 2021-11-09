export default function Category(props) {
    const { category } = props
    return (
        <>
            <h3>{category.title}</h3>
            <ul className="list">
                {category.products.map(product => (
                    <li class="option selected">
                        <img src={product.imgUrl} />
                        <h4>{product.name}</h4>
                        <p className='description'>{product.description}</p>

                        <p className='price'>R$ {product.price.toFixed(2)}</p>
                        <div className='quantity'>
                            <button className='add'>-</button>
                            <span>{product.quantity}</span>
                            <button className='remove'>+</button>

                        </div>
                    </li>
                ))}
            </ul>
        </>

    )
}