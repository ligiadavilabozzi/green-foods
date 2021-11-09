
function App() {
  return (
    <>
      <div className='header'>
        <div className='text-header'>
        <h1>Green Food</h1>
        <p className='subtitle'>Comida saudável na mesa da sua casa</p>
        </div>
        <img src='images/logo_green.png'></img>
      </div>


      <h3>Primeiro, escolha o seu prato</h3>

      <ul className="list">

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

      </ul>

      <h3>Agora, escolha a sua bebida</h3>

      <ul className="list">

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

      </ul>

      <h3>Por fim, a desejada sobremesa</h3>

      <ul className="list">

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

      </ul>

      <div className='close-order'>
        <button className='able'>
          Fechar Pedido
        </button>
      </div>
    </>
  );
}

export default App;
