import Image from "next/image";
import logo from "../../../public/logo.jpg";
import Button from "@/components/Button";
import ROUTES from "@/route";
import Link from "next/link";
import AuthForm from "../components/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/SignUpWithCredentials.action";

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
          <Link href={ROUTES.LOGIN}>
            <Button variant="outline">Login account ?</Button>
          </Link>
        </div>
      </div>
      <div className="w-2/4 h-screen flex items-center justify-center">
        <AuthForm type="register" submitAction={signUpWithCredentials} />
      </div>
    </div>
  );
}

export default page;
