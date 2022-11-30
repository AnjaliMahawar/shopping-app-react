import React, { useEffect, useState } from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { add } from './store/cartSlice';

import { adds } from './store/ProductSlice';
import Navbar from './Navbar';

function Products() {
    const dispatch=useDispatch()
    const[Product,setProduct]=useState<any>([])

    useEffect(()=>{
      const fethProducts=async()=>{
        const res=await fetch('https://fakestoreapi.com/products')
        const data =await res.json();
        console.log(data)
        setProduct(data)
      }
      fethProducts()
    },[])

    const handalAdd=(pro:any)=>{
        dispatch(add(pro))

    }
    const handalwish=(pro:any)=>{
      dispatch(adds(pro))
    }
  return (

    <>
    <div className='productwrapper'>
       {
           Product.map((pro:any) => (
            <div className="card" key={pro.id}>
                <img src={pro.image} alt="" />
                <h4>{pro.title}</h4>
                <h5>price:-{pro.price}</h5>
                <button onClick={()=>{handalAdd(pro)}} className='btn'>Add to cart</button>
                <button onClick={()=>{handalwish(pro)}} className='btn'>Add to fav</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default Products