import React from "react";
import '../component/styles/product.css'
import { Analytics } from "@vercel/analytics/react"

const CardView =({product_details, handlefun}) =>{
    const {productName,productImageUrl,type_of_product,price} = product_details;
    return(
        
        <div className="cards">
            <Analytics />
            <div className="product_image">
            <img src={productImageUrl} />
            </div>
            <div className="details">
                <p>{productName}</p>
                <p>{type_of_product}</p>
                <p>₹{price}</p>
                <button onClick={() => handlefun(product_details)} >Add to cart</button>
               
            </div>
        </div>
    )
}
export default CardView;