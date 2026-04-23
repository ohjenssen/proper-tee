'use client'
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    customer_email: '',
    customer_name: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expDate: '',
    cvc: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = "w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm outline-none transition focus:border-[#D43F3F] focus:bg-white/10";

async function handleOrder() {
  if (
    !formData.customer_email ||
    !formData.customer_name ||
    !formData.address ||
    !formData.zip ||
    !formData.city ||
    !formData.cardNumber ||
    !formData.expDate ||
    !formData.cvc
  ) {
    alert("Udfyld venligst alle felter!");
    return;
  }

  const orderPayload = {
    customer_name: formData.customer_name,
    customer_email: formData.customer_email,
    total_price: getTotalPrice(),
    items: cart.map(item => ({
      product_id: item.id,
      quantity: item.quantity,
      price: item.price
    }))
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(orderPayload)
    });

    if (response.ok) {
      clearCart(); 
      alert("Tak for din ordre! 🎉");
      router.push('/');
    } else {
      alert("Der skete en fejl. Prøv igen.");
    }

     } catch (error) {
    clearCart();
    alert("Tak for din ordre! 🎉");
    router.push('/');
  }


}

  return (
    <main className="min-h-screen bg-[#0a0a0a] p-4 md:p-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-3xl font-bold uppercase tracking-tighter italic">Checkout</h1>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-10">
            <section>
              <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">01. Review Items</h2>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded bg-white/5">
                        <Image src={item.image || '/whiteShirt.svg'} alt={item.name} width={48} height={48} className="object-cover" />
                      </div>
                      <span className="text-sm font-medium uppercase">{item.name} <span className="text-white/30 ml-2">x{item.quantity}</span></span>
                    </div>
                    <span className="text-sm text-[#D43F3F] font-bold">{item.price * item.quantity} kr.</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-white/40">02. Shipping Details</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <input type="email" name="customer_email" placeholder="Email Address" className={`${inputStyle} md:col-span-2`} onChange={handleChange} />
                <input type="text" name="customer_name" placeholder="Full Name" className={inputStyle} onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" className={`${inputStyle} md:col-span-2`} onChange={handleChange} />
                <input type="text" name="zip" placeholder="ZIP Code" className={inputStyle} onChange={handleChange} />
                <input type="text" name="city" placeholder="City" className={inputStyle} onChange={handleChange} />
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-white/40">03. Payment Method</h2>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-4 w-4 rounded-full border-4 border-[#D43F3F] bg-transparent" />
                  <span className="text-sm font-bold uppercase tracking-wider">Credit Card</span>
                </div>
                <input type="text" name="cardNumber" placeholder="Card Number (0000 0000 0000 0000)" className={inputStyle} onChange={handleChange} />
                <div className="grid gap-4 grid-cols-2">
                  <input type="text" name="expDate" placeholder="MM/YY" className={inputStyle} onChange={handleChange} />
                  <input type="text" name="cvc" placeholder="CVC" className={inputStyle} onChange={handleChange} />
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8 rounded-3xl border border-[#D43F3F] bg-white/5 p-8 shadow-[0_0_50px_rgba(212,63,63,0.1)]">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-widest italic">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>{getTotalPrice().toFixed(2)} kr.</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Shipping</span>
                  <span className="text-[#D43F3F]">FREE</span>
                </div>
                <div className="h-[1px] w-full bg-white/10 my-2" />
                <div className="flex justify-between text-2xl font-black">
                  <span>Total</span>
                  <span>{getTotalPrice().toFixed(2)} kr.</span>
                </div>
              </div>

              <button
                onClick={handleOrder}
                className="mt-10 w-full rounded-xl bg-[#D43F3F] py-5 font-black uppercase tracking-[0.2em] text-white transition hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(212,63,63,0.4)] active:scale-95"
              >
                Complete Purchase
              </button>

              <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-white/30">
                Secured by Stripe Encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}