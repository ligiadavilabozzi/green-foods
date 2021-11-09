export default function CloseOrder(props) {
    const { categories } = props
    const canClosedOrder = checkSelectedCategories(categories)

    function sendWhatsapp() {
        if(!canClosedOrder) return; 
        let message = "Olá gostaria de fazer o pedido:\n";
        let total = 0;

        categories.forEach(category => {
            category.products.filter(product => product.quantity > 0).forEach(product => {
                message += `-${category.type}: ${product.name} ${product.quantity > 1 ? `(${product.quantity}x)` : ''}\n`;

                total += product.price * product.quantity;
            });

        });
        message += `Total: R$ ${total.toFixed(2)}`

        const textWhats = encodeURIComponent(message)
        window.location.href = `https://wa.me/5511986927292?text=${textWhats}`
 
    }

    return (
        <div className={'close-order'}>
            <button className={canClosedOrder ? 'able' : ''} onClick={sendWhatsapp}>
                {canClosedOrder ? 'Fechar pedido' : 'Selecione pelo menos um item de cada categoria'}
            </button>
        </div>
    )

    function checkSelectedCategories(categories) {
        const selectedCategories = categories.filter(category => {
            return category.products.find(product => product.quantity > 0)
        })
        return categories.length === selectedCategories.length;


    }

}