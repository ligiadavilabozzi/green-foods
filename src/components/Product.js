export default function Product() {
    return (
        <>
            <li class="option selected">
                <img src="images/frango.jpg" />
                <h4>Frango Feliz</h4>
                <p className='description'>Frango criado livre</p>
                <div className='details'>
                    <p className='price'>R$ 15.90</p>
                    <div className='quantity'>
                        <button className='add'>-</button>
                        <span>1</span>
                        <button className='remove'>+</button>
                    </div>
                </div>
            </li>

            <li class="option ">
                <img src="images/frango.jpg" />
                <h4>Frango Feliz</h4>
                <p className='description'>Frango criado livre</p>
                <div className='details'>
                    <p className='price'>R$ 15.90</p>
                    <div className='quantity'>
                        <button className='add'>-</button>
                        <span>1</span>
                        <button className='remove'>+</button>
                    </div>
                </div>
            </li>

            <li class="option">
                <img src="images/frango.jpg" />
                <h4>Frango Feliz</h4>
                <p className='description'>Frango criado livre</p>
                <div className='details'>
                    <p className='price'>R$ 15.90</p>
                    <div className='quantity'>
                        <button className='add'>-</button>
                        <span>1</span>
                        <button className='remove'>+</button>
                    </div>
                </div>
            </li>
        </>
    )
}