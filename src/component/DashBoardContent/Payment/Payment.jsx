import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import useSelectCourse from "../../../Hook/useSelectedCourse";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    const [selectedCourse, refetch] = useSelectCourse();
  
    const total = selectedCourse.reduce((sum, course) => course.price + sum, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='max-h-screen mx-auto '>
            <div className="p-20">
          
            <Elements stripe={stripePromise}> <Checkout selectedCourse={selectedCourse} refetch={refetch} price={price}/></Elements>
            </div>
           
        </div>
    );
};

export default Payment;