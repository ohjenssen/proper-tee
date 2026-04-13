import Image from "next/image";
import Link from "next/link";
import Newsletter from "../components/Newsletter/Newsletter";

export default function About() {
  return (
    <div>
        <h1>About</h1>
        <Link href="/">Home</Link>
        <Newsletter />
    </div>
  );
}
