import Image from "next/image";
import logo from "../../../public/logo.jpg";
import Button from "@/components/Button";
import Link from "next/link";
import ROUTES from "@/route";
import AuthForm from "../components/AuthForm";
import { signInWithCredentials } from "@/lib/actions/SignInWithCredentials.action";

function page() {
  return (
    <div className="flex">
      <div className="w-2/4 p-10 bg-(--primary) h-screen flex items-center justify-center">
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
              Creative <span className="text-(--main)">Coder</span> Forum
            </h1>
          </Link>
          <p className="text-lg text-gray-300 mt-6">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas, quisquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas, quisquam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas, quisquam.
          </p>
          <Link href={ROUTES.REGISTER}>
            <Button variant="outline">Create a new account ?</Button>
          </Link>
        </div>
      </div>
      <div className="w-2/4 h-screen flex items-center justify-center">
        <AuthForm type="login" submitAction={signInWithCredentials} />
      </div>
    </div>
  );
}

export default page;
