"use client";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";
import GoogleSignIn from "./GoogleSignIn";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center ">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <GoogleSignIn />
      </nav>
    </header>
  );
};
export default Navbar;
