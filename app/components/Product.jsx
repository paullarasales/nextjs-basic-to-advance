import ProductButton from "./ProductButton"

export default function Product({ id, title, price, noButton = false }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{price}</p>
            {
                !noButton && <Product id={id} />
            }
        </div>
    )
}