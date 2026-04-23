import ShopClient from './ShopClient';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

async function getProducts() {
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

  const url = 'http://localhost:8082/wp-json/wc/v3/products';
  const requestData = { url, method: 'GET' };
  const headers = oauth.toHeader(oauth.authorize(requestData));

  const response = await fetch(url, {
    headers: { ...headers, 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

export default async function Shop() {
  const products = await getProducts();
  return <ShopClient products={products} />;
}