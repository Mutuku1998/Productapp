import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductList = () => {

const [products,setProducts] = useState([]);

useEffect(()=>{

async function requestData() {
    const request  = await  axios.get('http://localhost:3007/products/read')
    console.log(request.data)

    setProducts(request.data);
    return request;
}
   
  requestData()  
},[]);
  return (
    <div> 
        <h1> All products</h1>
<a href='/addproduct'><button className='btn btn-primary'>Add new product</button></a>
        <table className=' table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default ProductList