import Product from "./Product";

export default function Category() {
    return (
        <>
            <h3>Primeiro, escolha o seu prato</h3>
            <ul className="list">
                <Product />
            </ul>

            <h3>Agora, escolha a sua bebida</h3>

            <ul className="list">
                <Product />
            </ul>

            <h3>Por fim, a desejada sobremesa</h3>

            <ul className="list">
                <Product />
            </ul>
        </>
    )
}