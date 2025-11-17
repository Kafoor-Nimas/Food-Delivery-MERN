import orderModel from "../models/OrderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//Place user order for front-end
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cardData: {} });
    //line item is essential for stripe payment
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd", //can be lkr
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, //to lkr *300
      },
      quantity: item.quantity,
    }));
    //The * 100 is there because Stripe processes amounts in the smallest currency unit (cents, not dollars).
    //for push delivery charges
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    //using this line item we create a session

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder =async (req,res)=>{

}
export { placeOrder ,verifyOrder };
