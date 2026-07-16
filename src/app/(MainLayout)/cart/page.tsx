import { mockCart } from "@/database/data/cart.constants";
import CartTable from "@/components/pages/cart/CartTable";
import { ArrowRight } from "lucide-react";

const CartPage = () => {
  // Calculate total discount from the mock data based on basePrice vs finalPrice
  const totalDiscount = mockCart.items.reduce(
    (acc, item) => acc + (item.basePrice - item.finalPrice) * item.quantity,
    0,
  );
  const deliveryFee = 15;
  const total = mockCart.subtotal - totalDiscount + deliveryFee;

  return (
    <div className="standard-width mt-5 lg:mt-8 mb-10 lg:mb-16">
      <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 lg:mb-6 text-black">
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
        {/* Left Side - Cart Items List */}
        <div className="w-full lg:w-[60%] xl:w-[65%]">
          <CartTable cartItems={mockCart.items} />
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-[40%] xl:w-[35%]">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white">
            <h2 className="text-xl font-bold mb-6 text-black">Order Summary</h2>

            <div className="space-y-4 text-base">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-black">
                  ${mockCart.subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>
                  Discount <span className="text-gray-400">(-20%)</span>
                </span>
                <span className="font-bold text-red-500">
                  -${totalDiscount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">
                  ${deliveryFee.toFixed(2)}
                </span>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-black">Total</span>
              <span className="text-2xl font-bold text-black">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Promo Code Input */}
            {/* <div className="flex gap-3 mb-6">
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                   
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                    </svg>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Add promo code" 
                                    className="w-full bg-[#f0f0f0] text-sm rounded-full py-3.5 pl-11 pr-4 outline-none focus:ring-2 focus:ring-gray-300 transition-all text-black placeholder-gray-400"
                                />
                            </div>
                            <button className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                Apply
                            </button>
                        </div> */}

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-4 rounded-full font-medium flex justify-center items-center gap-2 hover:bg-gray-800 transition-colors">
              Go to Checkout
              <ArrowRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
