import React from 'react';

export default function Product(props) {

    const { product, changeQuantity } = props
    const { imgUrl, name, description, quantity, price } = product

    function selectItem() {
        if (quantity === 0) {
            changeQuantity(product, 1)
        }
    }

    return (
        <>
            <li className={quantity > 0 ? 'option selected' : 'option'} onClick={selectItem}>
                <img src={imgUrl} />
                <h4>{name}</h4>
                <p className='description'>{description}</p>
                <p className='price'>R$ {price.toFixed(2)}
                    <div className='quantity'>
                        <button className='remove' onClick={() => changeQuantity(product, quantity - 1)}>-</button>
                        <span>{quantity}</span>
                        <button className='add' onClick={() => changeQuantity(product, quantity + 1)}>+</button>
                    </div>
                </p>


            </li>
        </>
    )
}