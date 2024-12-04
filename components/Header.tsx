import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div  >
      <ul className="flex gap-16 bg-blue-600 text-xl p-8 pl-20">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/projects">Projects </Link></li>
      </ul>
    </div>
  );
}
