
import Link from "next/link";

export default function Footer() {
  return (
    <div  >
      <ul className="text-center bg-indigo-400 text-xl font-bold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
          <li><Link href="/career">Careers</Link></li>
      </ul>
    </div>
  );
}
