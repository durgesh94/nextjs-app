export default function ProductDetailPage(params) {
    console.log(params);
    return (
        <div style={{ margin: "20px" }}>
            <h1>Product Detail Page {params.productId}</h1>
        </div>
    )
}

