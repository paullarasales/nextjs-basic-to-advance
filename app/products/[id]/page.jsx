import Product from "@/app/components/Product";

export async function generateStaticParams() {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=8&skip=5&select=title,price');
        const data = await res.json();

        return data.products.map((product) => ({
            id: product.id.toString(),
        }));
    } catch (error) {
        console.error("Something went wrong: ", error);
    }
}

async function getProduct(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = res.json();
    return data;
}

export default async function ProductPage({ params }) {
    const product = await getProduct(params.id);
    console.log(product)
    return (
        <Product noButton title={product.title} price={product.price} />
    )
}