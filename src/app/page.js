import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/Productcard/ProductCard";
import Brands from "./components/Brands/Brands";
import SingleView from "./components/SingleView/SingleView";
import Faq from "./components/Faq/Faq";
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import styles from './page.module.css';

async function getProducts() {
  const oauth = new OAuth({
    consumer: {
      key: 'ck_2285e4003e11378f22ee4ece6ecdc195c379050e',
      secret: 'cs_9e6fb0ffa8c620e88471125b341a979d025ced8a',
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

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Hero />
<section className="py-40 px-8 bg-black">
  <h2 className="text-white text-center mb-16 text-3xl font-light">Trend</h2>
  <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
    {products.slice(0, 3).map((product) => (
      <ProductCard
        key={product.id}
        product={{
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0]?.src || '/whiteShirt.svg',
          alt: product.name,
        }}
      />
    ))}
  </div>
</section>
<Banner />
<Brands />
<section className="py-16 px-8 bg-black flex flex-col items-center">
  <h2 className="text-white text-3xl font-light uppercase tracking-widest mb-8">Featured</h2>
  {products.slice(0, 1).map((product) => (
    <div key={product.id} className={styles.featuredProduct}>
      <ProductCard
        product={{
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0]?.src || '/whiteShirt.svg',
          alt: product.name,
        }}
      />
    </div>
  ))}
</section>
      <Faq />
      <Footer />
    </main>
  );
}