import React from 'react';

export default function Product(props) {
    
    const { product, changeQuantity} = props

    function selectItem() {
        if(product.quantity === 0){
            changeQuantity(product, 1)
        }
    }

    return (
        <>
            <li className={product.quantity > 0 ? 'option selected' : 'option'} onClick={selectItem}>
                <img src={product.imgUrl} />
                <h4>{product.name}</h4>
                <p className='description'>{product.description}</p>
                <p className='price'>R$ {product.price.toFixed(2)}
                    <div className='quantity'>
                        <button className='remove' >-</button>
                        <span>{product.quantity}</span>
                        <button className='add' >+</button>
                    </div>
                </p>


            </li>
        </>
    )
}