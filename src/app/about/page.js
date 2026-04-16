import Image from "next/image";
import Link from "next/link";
import Newsletter from "../components/Newsletter/Newsletter";
import Faq from "../components/Faq/Faq";
import Brands from "../components/Brands/Brands";

export default function About() {
  return (
    <div>
        <h1>About</h1>
        <Link href="/">Home</Link>
        <Brands />
    </div>
  );
}
