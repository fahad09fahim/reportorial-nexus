import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import useSelectCourse from "../../../Hook/useSelectedCourse";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    const [selectedCourse] = useSelectCourse();
    const total = selectedCourse.reduce((sum, course) => course.price + sum, 0);
    return (
        <div className='max-h-screen mx-auto '>
            <div className="p-20">
          
            <Elements stripe={stripePromise}> <Checkout/></Elements>
            </div>
           
        </div>
    );
};

export default Payment;