import React from 'react'
import addItemStyles from '../styles/addItem.module.css';
import AppContext from '../services/AppContext';
import { useContext } from 'react';

function AddItem({item}) {


  const  [state , setState] = useContext(AppContext);


   const  addItem = ()=>{
      item.quantity = 1;
      let tempCart = [...state.cart];
      tempCart.push(item);
      setState({...state,cart:tempCart});
  }

  const quantityDec = () =>{
      item.quantity  = item.quantity-1;
      let tempCart = [...state.cart];
      let index = tempCart.findIndex((cartItem) => cartItem.id === item.id )
      if(index > -1){
          tempCart[index].quantity = item.quantity;
      }
      setState({...state,cart:tempCart});
  }
  const quantityInr = () =>{
    item.quantity  = item.quantity+1;
    let tempCart = [...state.cart];
    let index = tempCart.findIndex((cartItem) => cartItem.id === item.id )
    if(index > -1){
        tempCart[index].quantity = item.quantity;
    }
    setState({...state,cart:tempCart});
}

  return (
    <div className={addItemStyles.addItemContainer}>
    {  item.quantity === 0 ? ( <button className={addItemStyles.addItemBtn} onClick={addItem}>Add</button>)
     :   ( <div className= {addItemStyles.addItem}>
                  <button className={addItemStyles.minusBtn} onClick={quantityDec}>-</button>
                  <div className={addItemStyles.qty}>{item.quantity}</div>
                  <button className={addItemStyles.plusBtn} onClick={quantityInr}>+</button>
    </div> )}
     
    </div>
  )
}

export default AddItem;
