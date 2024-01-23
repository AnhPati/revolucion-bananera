export const BasketProduct = ({ product }) => {
    return (
        <div>
            <div className="basket-product_img">
                <div className="img-container">
                    <img src={product.imageSource} alt={product.title} />
                </div>
            </div>
            <div className="basket-product_infos">
                <h5>{product.title}</h5>
                <p>{product.price}</p>
            </div>
            <div className="basket-product_quantity">
                x{product.quantity}
            </div>
        </div>
    )
}