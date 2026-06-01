import ROUTES from "@/route";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

function LeftSidebar() {
  return (
    <div className="w-1/5 px-5 py-2">
      <ul className="space-y-6">
        <li className="px-3 py-3 bg-[var(--main)] rounded-xl">
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li className="px-3 py-3 bg-[var(--main)] rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Tags
          </Link>
        </li>
        <li className="px-3 py-3 bg-[var(--main)] rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Questions
          </Link>
        </li>
        <li className="px-3 py-3 bg-[var(--main)] rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Products
          </Link>
        </li>
        <li className="px-3 py-3 bg-[var(--main)] rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Cars
          </Link>
        </li>

        <li className="px-3 py-3 bg-red-500 rounded-xl">
          <Link
            href={ROUTES.QUESTIONS}
            className="flex items-center gap-2 text-md font-medium"
          >
            <FaHome /> Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
