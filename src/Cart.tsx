import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css';
import { remove } from './store/cartSlice';

import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Cart() {
  const navigate=useNavigate()
    const products=useSelector((state:any)=>state.cart)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("products.......",products)
    const dispatch=useDispatch()

    const handaleRemove=(id:number)=>{
        dispatch(remove(id))

    }
       var sum = 0;
       for (let i=0; i < products.length ; i++) {
            sum = sum + products[i].price;
         }
      
    
const moveAdd=()=>{
  navigate('/address')
  console.log("navigate")
}
  return (
    <div>
       
      <div className='productwrapper'>
      {
          products.map((pro:any,indx:number) => (
            <div className="cardCart" key={indx}>
                <img src={pro.image} alt="" />
                <h4>{pro.title}</h4>
                <h5>Price:-{pro.price}</h5>
                <button className='btn' onClick={()=>{handaleRemove(pro.id)}}>Remove</button>
            </div>
        ))}

      </div>
      <h1 className='totalAmmount'>Total Ammount :{sum}</h1>
      <Button className='BuY_NOW' onClick={moveAdd} variant="contained">Buy Now!</Button>
    </div>
   
  )
}

export default Cart