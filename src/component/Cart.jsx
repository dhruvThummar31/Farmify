import React, { useEffect, useState } from 'react'
import cartStyles from '../styles/cart.module.css'
import AppContext from '../services/AppContext'
import { useContext } from 'react'
import AddItem from './AddItem'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../services/AuthContext'


function Cart() {

    const [state,setState]  = useContext(AppContext);
    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

    const [mrp ,setMrp] = useState();
    const [discount ,setDiscount] = useState();
    const [total , setTotal] = useState();

    const navigate = useNavigate();



    useEffect(() => {
        let mrp =0;
        let disc = 0;
        let total = 0;

        for (let item of state.cart){
            mrp = mrp + item.quantity * item.price ; 
            disc = disc + item.quantity * (item.was - item.price);
            total = mrp -disc
        }
        setMrp(mrp);
        setDiscount(disc);
        setTotal(total);
    },[state.cart])
    
    const order = () => {
        if (isLoggedIn) {
          let products = [...state.products];
          for (let product of products) {
            product.quantity = 0;
          }
          setState({ products, cart: [] });
          navigate("/final");
        } else {
          navigate("/login");
        }
      };
   
 
  return (
    <div className={cartStyles.cartContainer}>
        <div className={cartStyles.heading}>Cart</div>
        <div className={cartStyles.cartWrapper}>
            <div className={cartStyles.cardDetails}>

        {state.cart.length > 0 ? <>
            {state.cart.map((item) => (
                   <div className={cartStyles.cart} key={item.id}>
                        <div className={cartStyles.cartLeft}>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className={cartStyles.cartMiddle}>
                            <div className={cartStyles.name}>{item.name}</div>
                            <div className={cartStyles.price}>
                                <div className={cartStyles.current}>₹{item.price}</div>
                                {item.was !== item.price ? (
                                    <>
                                        <div className={cartStyles.was}>₹{item.was}</div>
                                        <div className={cartStyles.discount}>₹{item.was-item.price} Off</div>
                                    </>
                                ):null}
                            </div>
                        </div>
                    <div className={cartStyles.cartRight}>
                        <AddItem item={item} />
                    </div>
                       
                   </div>
                ) )}

                <div className={cartStyles.btnContainer}>
                    <button className={cartStyles.orderBtn} onClick={order}>Place Order</button>
                </div>
        </> : ( 
            <div className={cartStyles.noItem}>Your cart is empty</div>
        )}
               
            </div>
            
            {state.cart.length > 0 ? (<>
                <div className={cartStyles.cartSummary }>
                    <div className={cartStyles.subHeading}>Summary</div>
                    <div className={cartStyles.summary}>
                       {
                            state.cart.length === 1 ? ( 
                                <div className={cartStyles.summarylabel}>MRP ({state.cart.length} item) </div>
                                 ) : (  
                                <div className={cartStyles.summarylabel}>MRP ({state.cart.length} items)</div> 
                                )  }
                        <div className={cartStyles.summarylabel}>{mrp}</div>
                    </div>
                    <div className={cartStyles.summary}>
                        <div className={cartStyles.summarylabel}>Product Discount   </div>
                        <div className={`${cartStyles.summarylabel} ${cartStyles.disc}`}> {discount}  </div>
                    </div>
                    <div className={`${cartStyles.summary} ${cartStyles.total}`}>
                        <div className={cartStyles.summarylabel}>Total Amount </div>
                        <div className={cartStyles.summarylabel}>{total}</div>
                    </div>
                </div>
            </>) : null}
            
        </div>
    </div>
  )
}

export default Cart;
