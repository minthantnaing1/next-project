import Image from "next/image";
import logo from "../../../public/logo.jpg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthForm from "@/app/(auth)/components/AuthForm";
import ROUTES from "@/route";
import Link from "next/link";

function page() {
  return (
    <div className="flex">
      <div className="w-2/4 p-10 bg-[var(--primary)] h-screen flex items-center justify-center">
        <div className="space-y-10">
          <Link
            href={ROUTES.HOME}
            className="flex items-center justify-center gap-4"
          >
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className=""
            />
            <h1 className="text-4xl font-semibold">
              Creative <span className="text-[var(--main)]">Coder</span> Forum
            </h1>
          </Link>
          <p className="text-lg text-gray-300 mt-6">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas, quisquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas, quisquam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas, quisquam.
          </p>
          <Link href={ROUTES.LOGIN}>
            <Button variant="outline">Login account ?</Button>
          </Link>
        </div>
      </div>
      <div className="w-2/4 h-screen flex items-center justify-center">
        <div className="w-4/5 space-y-6">
          <h3 className="text-xl font-semibold text-center">
            Sign Up to Creative{" "}
            <span className="text-[var(--main)]">Coder</span> Forum
          </h3>
          <div>
            <Input label="Name" />
          </div>
          <div>
            <Input label="Username" />
          </div>
          <div>
            <Input label="Email Address" />
          </div>
          <div>
            <Input label="Password" />
          </div>

          <div>
            <Button>Register</Button>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default page;
