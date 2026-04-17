import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product = {} }) {
  const {
    id = "1",
    name = "Product Name",
    price = "Price",
    image = "/whiteShirt.svg",
    alt = "Product image",
  } = product;

  return (
    <Link href={`/shop/${id}`} className="block no-underline">
      <div className="max-w-[300px] cursor-pointer overflow-hidden rounded-[1.5rem] border border-[#D43F3F] bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(212,63,63,0.18)]">
        <div className="mb-4 flex h-[250px] items-center justify-center overflow-hidden rounded-[1rem] bg-white/5">
          <Image
            src={image}
            alt={alt}
            width={250}
            height={250}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <h3 className="mb-2 text-lg font-medium uppercase tracking-[0.08em] text-white">
          {name === "Product Name" ? (
            <span className="italic text-white/50">{name}</span>
          ) : (
            name
          )}
        </h3>

        <p className="text-lg font-semibold text-[#D43F3F]">
          {price === "Price" ? (
            <span className="italic text-white/50">{price}</span>
          ) : (
            `$${price}`
          )}
        </p>
      </div>
    </Link>
  );
}
