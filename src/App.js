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
        description: 'Frango Orgânico',
        price: 24.00,
        quantity: 0,
        imgUrl: 'https://s2.glbimg.com/Vb9mRSooJVqyeRMvKg6yC_jtKwg=/0x0:260x160/984x0/smart/filters:strip_icc()/g.glbimg.com/og/gs/gsat5/f/thumbs/materia/2014/04/30/Frango-orgA-nico-260_7447168007727812378.jpg'
      },
      {
        id: 2,
        name: 'Salada',
        description: 'Salada Orgânica',
        price: 15.00,
        quantity: 0,
        imgUrl: 'https://static1.conquistesuavida.com.br/articles/8/39/8/@/438--recipe_header_mobile-1.jpg'
      },
      {
        id: 3,
        name: 'Vegetais',
        description: 'Vegetais Orgânicos',
        price: 17.00,
        quantity: 0,
        imgUrl: 'https://image.freepik.com/fotos-gratis/vegetais-organicos-frescos-crus-na-mesa_23-2147953574.jpg'
      }
    ]
  },
  {
    title: 'Agora, escolha a sua bebida',
    type: 'Bebida',
    products: [
      {
        id: 4,
        name: 'Suco Laranja ',
        description: 'Suco Detox de Laranja',
        price: 14.00,
        quantity: 0,
        imgUrl: 'https://img.elo7.com.br/product/zoom/262F374/adesivo-parede-decoracao-suco-de-laranja-fruta-lanchonete-adesivo-decorativo.jpg'
      },
      {
        id: 5,
        name: 'Suco Verde',
        description: 'Suco Detox de Couve',
        price: 12.00,
        quantity: 0,
        imgUrl: 'https://www.receitasdemae.com.br/wp-content/uploads/2016/02/Suco-verde-detox-380x259.jpg'    },
      {
        id: 6,
        name: 'Suco Beterraba',
        description: 'Suco Detox de Beterraba',
        price: 13.00,
        quantity: 0,
        imgUrl: 'https://www.receitasagora.com.br/wp-content/uploads/2020/07/receita-de-suco-detox-de-beterraba.jpg'
      },
    ]
  },
  {
    title: 'Para finalizar, a sobremesa',
    type: 'Sobremesa',
    products: [
      {
        id: 7,
        name: 'Pudim',
        description: 'Pudim de Leite Condensado',
        price: 20.00,
        quantity: 0,
        imgUrl: 'https://naminhapanela.com/wp-content/uploads/2019/12/Pudim_leite_condensado-3.jpg'
      },
      {
        id: 8,
        name: 'Brigadeirão',
        description: 'Delicioso Bolo de Brigadeiro',
        price: 24.00,
        quantity: 0,
        imgUrl: 'https://img.cybercook.com.br/receitas/554/brigadeirao-4.jpeg'
      },
      {
        id: 9,
        name: 'Sorvete',
        description: 'Sorvete de creme (2 bolas)',
        price: 10.00,
        quantity: 0,
        imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-sorvete-de-creme-0.jpg'
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
