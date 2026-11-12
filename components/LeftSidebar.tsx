import { auth, signOut } from "@/auth";
import ROUTES from "@/route";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaHome } from "react-icons/fa";

async function LeftSidebar() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="w-1/5 px-5 py-2">
      <ul className="space-y-6">
        <li className="px-3 py-3 bg-(--main) rounded-xl">
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li className="px-3 py-3 bg-(--primary) rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Tags
          </Link>
        </li>
        <li className="px-3 py-3 bg-(--primary) rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Popular questions
          </Link>
        </li>
        <li className="px-3 py-3 bg-(--primary) rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Ask a new question
          </Link>
        </li>
        <li className="px-3 py-3 bg-(--primary) rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Newest questions
          </Link>
        </li>

        {!user && (
          <li className="px-3 py-3 bg-transparent border-2 border-(--main) rounded-xl">
            <Link
              href={ROUTES.LOGIN}
              className="flex items-center gap-2 text-md font-medium"
            >
              <FaHome /> Sign In
            </Link>
          </li>
        )}

        {user && (
          <li className="px-3 py-3 bg-red-500 rounded-xl">
            <form
              action={async () => {
                "use server";

                await signOut({ redirect: false });
                return redirect(ROUTES.LOGIN);
              }}
            >
              <button className="flex items-center gap-2 text-md font-medium">
                <FaHome /> Log Out
              </button>
            </form>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LeftSidebar;
