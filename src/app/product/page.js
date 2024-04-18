import Link from "next/link"
import { Fragment } from "react"

export default function Product() {

    const data = [
        { id: 1, name: "IPhone 15" },
        { id: 2, name: "IPhone 14" },
        { id: 3, name: "Samsung Lite" },
        { id: 4, name: "MI 20 Pro" },
        { id: 5, name: "OnePlus Nord" },
    ]
    return (
        <div style={{ margin: "20px" }}>
            <h1>Products</h1>
            {data.map((product) => (
                <Fragment key={product.id}>
                    - <Link href={`/product/${product.id}`}>{product.name}</Link> <br />
                </Fragment>
            ))}
        </div>
    )
}

