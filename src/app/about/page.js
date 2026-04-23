import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div>
      <section className="py-24 px-8 text-center bg-black border-b border-[#222] mt-210">
        <h1 className="text-white text-5xl font-light uppercase tracking-widest mb-6">
          Om Os
        </h1>
        <p className="text-[#aaa] text-lg font-light max-w-xl mx-auto leading-relaxed">
          Proper Tee er en premium streetwear brand dedikeret til kvalitet og unikhed. 
          Vi tror på at tøj skal udtrykke ens personlighed ikke følge mængden.
        </p>
      </section>
      <Faq />
      <Footer />
    </div>
  );
}