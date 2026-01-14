import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-03-06",
});

export const config = {
  api: {
    bodyParser: false, // Stripe wymaga surowego body
  },
};

export default async function handler(req, res) {
  console.log("📩 Otrzymano webhook od Stripe");

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    console.log("📩 Otrzymano webhook od Stripe");

    const session = event.data.object;
    const productId = session.metadata.productId;

    // 🔹 Aktualizuj JSON lub bazę danych
    console.log(`Płatność zaksięgowana! Produkt ID: ${productId}`);

    // Tutaj możesz np. zmniejszyć ilość dostępnych produktów w bazie danych
  }

  res.status(200).json({ received: true });
}
