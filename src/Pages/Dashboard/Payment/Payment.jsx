import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';


// TODO: add publishable key
const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat" />
            <Elements stripe={stripPromise}>
                <CheckoutForm />
            </Elements>

        </div>

    );
};

export default Payment;