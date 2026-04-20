import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/Productcard/ProductCard";
import Brands from "./components/Brands/Brands";
import SingleView from "./components/SingleView/SingleView";
import Faq from "./components/Faq/Faq";
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

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
      <section style={{ padding: '10rem 2rem', backgroundColor: '#000000' }}>
        <h2 style={{ color: 'white', fontFamily: 'var(--font-jost)', textAlign: 'center', marginBottom: '4rem', fontSize: '2rem', fontWeight: '300' }}>Trend</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto', justifyContent: 'center' }}>
          {products.slice(0, 4).map((product) => (
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
      <SingleView />
      <Faq />
      <Footer />
    </main>
  );
}