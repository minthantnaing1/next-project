import Image from "next/image";
import logo from "../public/logo.jpg";
import profile from "../public/profile.jpg";
import SearchInput from "./SearchInput";
import { auth } from "@/auth";

async function Navbar() {
  const session = await auth();
  const user = session?.user;
  return (
    <nav className="flex justify-between px-10 py-5">
      <div className="flex items-center justify-center gap-4">
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
        <h1 className="font-bold">
          Creative <span className="text-(--main)">Coder</span>
        </h1>
      </div>
      <div className="w-[300px] lg:w-[550px]">
        <SearchInput />
      </div>
      <div>
        {user && (
          <Image
            src={user?.image ?? profile}
            alt="Profile"
            width={45}
            height={45}
            className="rounded-full object-cover aspect-square"
            priority
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
