import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const priceId = "price_1OT3RNSAnWpdL7atPGfqsBIn";
  const publishableKey =
    "pk_test_51OT3NPSAnWpdL7atNa9Mpo7CLwCkXZbpgcM0oT2pw0eyr2bvMWlZUXh3KV9KVirtBQr16S7B5fOLjrxc76XELxG900aop6WMkM";
  const stripePromise = loadStripe(publishableKey);
  async function handleCheckout() {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:3000",
      cancelUrl: "http://localhost:3000",
      customerEmail: "customer@vimalbadoniya.com",
    });
    console.warn(error.message);
  }

  return (
    <div>
      Please click below button to checkout
      <div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Payment;
