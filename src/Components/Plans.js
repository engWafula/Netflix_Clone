import React, { useState,useEffect } from 'react'
import  '../Styles/Plans.css'
import db from  '../firebase'
import { useSelector } from 'react-redux'
import {selectUser } from '../features/counter/userSlice';
import {loadStripe} from '@stripe/stripe-js';
function Plans() {
    const [products,setProducts]=useState([])
    const [Subscription, setSubscription]=useState()
    const user =useSelector(selectUser)
    useEffect(() => {
     db.collection('products').where('active','==',true)
     .get().then(querySnapshot=>{
         const products={}
         querySnapshot.forEach(async productDoc=> {
             products[productDoc.id]=productDoc.data()
             const priceSnap= await  productDoc.ref.collection('prices').get()
             priceSnap.docs.forEach(price=>{ 
                   products[productDoc.id].prices={
                       priceId:price.id,
                       priceData:price.data()
                   }

             })
         });
         setProducts(products)
     })
    }, [])
    const   loadCheckOut= async (priceId)=>{
                   const docRef= await db.collection('customers')
                   .doc(user.uid).collection('checkout_sessions')
                   .add({
                       price:priceId,
                       success_url:window.location.origin,
                       cancel_url:window.location.origin
                   })
                   docRef.onSnapshot(async (snap)=>{
                    const { error, sessionId } = snap.data()
                    if (error) {
                        // Show an error to your customer and 
                        // inspect your Cloud Function logs in the Firebase console.
                        alert(`An error occured: ${error.message}`);
                      }
                      if (sessionId) {
                        // We have a session, let's redirect to Checkout
                        // Init Stripe
                        const stripe = await loadStripe('pk_test_51J3a4jLZ88cq7BMrTbUH06Z0sobPyMfEac8SzuvMAhjvC8LSiOLkY100rI5gzdXr1NIrNpOyqpUtsWu6QRCseCO700u9Gu6umj');
                        stripe.redirectToCheckout({ sessionId });
                      }
                   })
    }
    useEffect(
        ()=>{
             db.collection('customers')
             .doc(user.uid)
             .collection('subscriptions').get()
             .then(querySnapshot=>{
                 querySnapshot.forEach(
                     async  subscription =>{
                         setSubscription({
                                      role:subscription.data().role,
                                      current_period_end:subscription.data().current_period_end.seconds,
                                      current_period_start:subscription.data().current_period_start.seconds
                         })
                     }
                 )
             })
        },[user.uid]
    )
    
    return (
       
        <div className='plans'>
            <br/>
            {Subscription &&
             <p>Renewal Date:{new Date(Subscription?.current_period_end*1000).toLocaleDateString()}</p>
            }
           
        {Object.entries(products).map(([productId,productData])=>{
            //TODO:we add logic to check if user subscription is active
            const currentPackage=productData.name?.toLowerCase()
            .includes(Subscription?.role);
            return (
              <div key={productId} className={`${currentPackage && 'plans_content--disable'} plans_content`}> 
                <div className='plans_info'>  
                <h5>{productData.name} </h5>
                <h6>{productData.description}</h6>
              </div>  
              <button 
              className=''
              onClick={()=>  !currentPackage && loadCheckOut(productData.prices.priceId)}>
                  {currentPackage?'Current Package':'Subscribe'}</button>
              </div>
            )
        })}
        </div>
    )
}

export default Plans
