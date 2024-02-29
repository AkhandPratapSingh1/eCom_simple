import { useState } from "react";
import React from "react";
import productDetails from "../ProductDetails";
import CardView from "./CardView";

const ProductPage= ({handlefun}) =>{
    return(
        <div className="pro_page">
        <section>
            {
                productDetails.map((product_details) =>
                (
                    <CardView product_details={product_details} key={product_details.id} handlefun={handlefun}    />
                ))
                
            }
        </section>
        </div>
    )
}
export default ProductPage