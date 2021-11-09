export default function CloseOrder(props) {
    const {categories} = props
    const canClosedOrder = checkSelectedCategories(categories)

    return (
        <div className={'close-order'}>
            <button className={canClosedOrder?'able':''}>
                {canClosedOrder? 'Fechar pedido': 'Selecione pelo menos um item de cada categoria'}
            </button>
        </div>
    )

    function checkSelectedCategories(categories){
       const selectedCategories = categories.filter(category=>{
            return category.products.find(product=>product.quantity>0)
        })
        return categories.length === selectedCategories.length;
    }
}