import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Checkout = ({ price, selectedCourse, refetch }) => {
  
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (price > 0) {
      fetch(
        "http://localhost:5000/create-payment-intent",

        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ price }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setClientSecret(data.clientSecret);
        });
    }
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        availableSeats: selectedCourse.map(
          (course) => course.availableSeats - 1
        ),
        price,
        date: new Date(),
        quantity: selectedCourse.length,
        courses: selectedCourse.map((course) => course.name),
        coursesId: selectedCourse.map((course) => course._id),
      };

      fetch("http://localhost:5000/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // notify here
          refetch();
        });
    }
  };
  return (
    <>
      <form className="w-full md:w-2/3" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-primary btn-sm mt-2"
          type="submit"
          disabled={!stripe || !clientSecret || processing || transactionId}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <span className="text-green-500">
          Transaction completed with transaction id:{" "}
          <span className="text-red-500">{transactionId}</span>
        </span>
      )}
    </>
  );
};

export default Checkout;
