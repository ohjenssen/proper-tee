import { notFound } from "next/navigation";
import SingleView from "../../components/SingleView/SingleView";
import { products } from "../products";

export default function ProductPage({ params }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return <SingleView product={product} />;
}
