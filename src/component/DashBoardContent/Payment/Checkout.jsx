import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';


const Checkout = () => {
  const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const handleSubmit = async(e)=>{
        e.preventDefault()
      if(!stripe || !elements){
        return
      }
      const card = elements.getElement(CardElement);
      if(card === null){
        return
      }
      const {error,paymentMethod}= await stripe.createPaymentMethod({
        type:'card',
        card
      })
      if(error){
        console.log(error)
        setCardError(error.message)
      }
else{
  setCardError('')
    console.log('payment method', paymentMethod)
}
    }
    return (
        <>
        <form className='w-2/3' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline btn-primary btn-sm mt-2' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600'>{cardError}</p>}
      </>
    );
};

export default Checkout;