import Image from "next/image";
import logo from "../public/logo.jpg";
import profile from "../public/profile.jpg";
import Input from "./Input";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-5">
      <div className="flex items-center justify-center gap-4">
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="font-bold">
          Creative <span className="text-[var(--main)]">Coder</span>
        </h1>
      </div>
      <div className="w-[300px] lg:w-[600px]">
        <SearchInput />
      </div>
      <div>
        <Image
          src={profile}
          alt="Profile"
          width={45}
          height={45}
          className="rounded-full object-cover aspect-square"
        />
      </div>
    </nav>
  );
}

export default Navbar;
