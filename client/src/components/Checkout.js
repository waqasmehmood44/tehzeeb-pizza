import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Success from './Success';
export default function Checkout(subtotal) {
    function  tokenHandler(token ) {
            console.log(token);
    }
    
    return (
        <div>
          <StripeCheckout
          amount ={subtotal*100} 
          shippingAddress
          token ={tokenHandler}
          currency='PKR'
          stripeKey='pk_test_51K7KYRSJkIGEGEU1LX62M19BC2HmfTtc1A5rBz6BSvWS1GHCl5o6aB2vbEXGapwE9m5EyjvFQMH2BrdBd2aTIhYi00hPatOSiW'
          >
        
            <button className='btn'>Pay Now</button>

          </StripeCheckout>
          

        </div>

    )


}
 





