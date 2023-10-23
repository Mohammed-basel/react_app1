import React from 'react'
import Product from './Product'
export default function Products() {
    const products = [
        {id:1,title:'product one',desc:'this is product one'},
        {id:2,title:'product two',desc:'this is product two'},
        {id:3,title:'product three',desc:'this is product three'},
        {id:4,title:'product forth',desc:'this is product forth'}
    ];
  return (
    <>
        <div className='container-fluid'>
        <div className='Products row pt-5'>
    {products.map((product)=> {
    return <Product {...product} key={product.id}/>
    } )}
    </div>
        </div>
    </>
  )
}
