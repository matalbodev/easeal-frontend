import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import {
  CalendarIcon,
  FolderIcon,
  UserIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    href: "/dashboard",
    label: "Calendar",
    icon: <CalendarIcon className="mr-2 h-6 w-6" />,
  },
  {
    href: "/dashboard/meals",
    label: "Your meals",
    icon: <LightBulbIcon className="mr-2 h-6 w-6" />,
  },
  {
    href: "/dashboard/ingredients",
    label: "Ingredients",
    icon: <FolderIcon className="mr-2 h-6 w-6" />,
  },
  {
    href: "/dashboard/profile",
    label: "Your profile",
    icon: <UserIcon className="mr-2 h-6 w-6" />,
  },
];

const Navigation = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav>
      <ul>
        {links.map(({ href, label, icon }, index) => (
          <li key={index}>
            <Link
              className={`text-md flex items-center border-l-4  px-10 py-6 font-semibold transition-colors hover:bg-neutral-200 ${clsx(
                href === pathname
                  ? "border-neutral-800 bg-neutral-200 text-stone-900"
                  : "border-transparent"
              )}`}
              href={href}
            >
              <>
                {icon && icon}
                {label}
              </>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
