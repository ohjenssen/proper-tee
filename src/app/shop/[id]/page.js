import { notFound } from "next/navigation";
import SingleView from "../../components/SingleView/SingleView";
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

async function getProduct(id) {
  const oauth = new OAuth({
    consumer: {
        key: process.env.WOOCOMMERCE_KEY,
        secret: process.env.WOOCOMMERCE_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    },
  });

  const url = `http://localhost:8082/wp-json/wc/v3/products/${id}`;
  const requestData = { url, method: 'GET' };
  const headers = oauth.toHeader(oauth.authorize(requestData));

  const response = await fetch(url, {
    headers: { ...headers, 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return data;
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product || product.code) {
    notFound();
  }

  return <SingleView product={{
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0]?.src || '/whiteShirt.svg',
    description: product.description?.replace(/<[^>]*>/g, '') || '',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Cotton',
    care: 'Machine wash cold, hang dry',
    measurements: [
      { size: 'XS', chest: '46 mm', length: '65 mm' },
      { size: 'S', chest: '48 mm', length: '67 mm' },
      { size: 'M', chest: '50 mm', length: '69 mm' },
      { size: 'L', chest: '52 mm', length: '71 mm' },
      { size: 'XL', chest: '54 mm', length: '73 mm' },
    ],
  }} />;
}