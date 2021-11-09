import ReactDom from "react-dom";
import React from "react";

import Category from "./components/Category";
import CloseOrder from "./components/CloseOrder";
import Header from "./components/Header";


const initialCategories = [
  {
    title: 'Primeiro, escolha o seu prato',
    type: 'Prato',
    products: [
      {
        id: 1,
        name: 'Frango',
        description: 'Frango Feliz',
        price: 14.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
      {
        id: 2,
        name: 'Carne',
        description: 'Boi Feliz',
        price: 24.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
      {
        id: 3,
        name: 'Peixe',
        description: 'Peixe Feliz',
        price: 20.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      }
    ]
  },
  {
    title: 'Agora, escolha a sua bebida',
    type: 'Bebida',
    products: [
      {
        id: 4,
        name: 'Frango',
        description: 'Frango Feliz',
        price: 14.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
      {
        id: 5,
        name: 'Carne',
        description: 'Boi Feliz',
        price: 24.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
      {
        id: 6,
        name: 'Peixe',
        description: 'Peixe Feliz',
        price: 20.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
    ]
  },
  {
    title: 'Para finalizar, a sobremesa',
    type: 'Sobremesa',
    products: [
      {
        id: 7,
        name: 'Frango',
        description: 'Frango Feliz',
        price: 14.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
      {
        id: 8,
        name: 'Carne',
        description: 'Boi Feliz',
        price: 24.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
      {
        id: 9,
        name: 'Peixe',
        description: 'Peixe Feliz',
        price: 20.00,
        quantity: 0,
        imgUrl: 'images/frango.jpg'
      },
    ]
  }
]

function App() {
  const [categories, setCategories] = React.useState(initialCategories); 

  function changeQuantity(product, newQuantity){
    product.quantity = newQuantity; 
    setCategories([...categories]) 
    
  }

  return (
    <>
      <Header />
      {categories.map(category => (
        <Category category={category} changeQuantity={changeQuantity} />
      ))}

      <CloseOrder categories={categories} />
    </>
  );
}

export default App;
