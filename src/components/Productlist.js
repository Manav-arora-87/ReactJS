import React from "react";
import Product from './Product.js'

export default function Productlist(props) {

  return(
    props.productlist.length > 0 ?
    props.productlist.map((product,i) => {
    return <Product product={product} key={i} removeitem={props.removeitem} incrementqty={props.incrementqty} decrementqty={props.decrementqty} index={i}/>
  })
   : (<h1>No Products Exists in the Cart</h1>)
  )
  
}
