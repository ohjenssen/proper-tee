'use client';

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function SingleView({ product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) {
    return null;
  }

function handleAddToCart() {
  if (!selectedSize) {
    alert('Vælg en størrelse først!');
    return;
  }
  addToCart({
    id: `${product.id}-${selectedSize}`,
    name: product.name,
    price: product.price,
    image: product.image,
    size: selectedSize,
  });
  alert(`${product.name} (${selectedSize}) er tilføjet til kurven!`);
}

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/shop"
          className="mb-8 inline-block text-sm uppercase tracking-[0.35em] text-[#D43F3F] transition hover:text-[#ff6b6b]"
        >
          ← Tilbage til shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-[#D43F3F] bg-white/5 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] md:p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-light uppercase tracking-[0.25em] text-white sm:text-5xl">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-[#D43F3F]">
                {product.price} kr.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Farver
              </h3>
              <div className="flex gap-3">
                {['#111111', '#FFFFFF', '#D43F3F', '#1a3a5c'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                      selectedColor === color
                        ? 'border-[#D43F3F] scale-110'
                        : 'border-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:p-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                  Størrelser
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-full border px-4 py-2 text-sm cursor-pointer transition ${
                        selectedSize === size
                          ? 'border-[#D43F3F] bg-[#D43F3F] text-white'
                          : 'border-white/20 bg-white/5 text-white hover:border-[#D43F3F]'
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:p-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                  Mål (mm)
                </h3>
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <table className="min-w-full border-collapse text-left text-sm text-white/80">
                    <thead className="bg-white/5 text-white/70">
                      <tr>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3">Chest</th>
                        <th className="px-4 py-3">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.measurements.map((row) => (
                        <tr key={row.size} className="border-t border-white/10">
                          <td className="px-4 py-3">{row.size}</td>
                          <td className="px-4 py-3">{row.chest}</td>
                          <td className="px-4 py-3">{row.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className="mt-2 rounded-xl bg-[#D43F3F] px-8 py-4 text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#ff6b6b]">
              Tilføj til kurv
            </button>

            <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:p-8">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Materiale
                </h4>
                <p className="text-sm leading-6 text-white/80">
                  {product.material}
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Pleje
                </h4>
                <p className="text-sm leading-6 text-white/80">
                  {product.care}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}